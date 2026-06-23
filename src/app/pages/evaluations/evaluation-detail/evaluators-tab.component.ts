import { Component, Input, OnChanges, SimpleChanges, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  SearchboxComponent,
  TableComponent,
  NoContentPlaceholdersComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
  IColumnDefinition,
  ImgEntityType,
} from '@netexknowledge/ux-admin-components';
import { EvaluatorsService, IEvaluationEvaluator } from '../../../services/evaluators.service';
import { TargetUsersService } from '../../../services/target-users.service';
import { IEvaluation } from '../../../services/evaluations.service';
import { UserNameCellComponent } from '../components/user-name-cell.component';
import { EvaluatorCountCellComponent } from '../components/evaluator-count-cell.component';
import { EvaluatorUsersPanelComponent } from './evaluator-users-panel.component';

@Component({
  selector: 'app-evaluators-tab',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SearchboxComponent,
    TableComponent,
    NoContentPlaceholdersComponent,
    EvaluatorUsersPanelComponent,
  ],
  templateUrl: './evaluators-tab.component.html',
  styleUrl: './evaluators-tab.component.scss',
})
export class EvaluatorsTabComponent implements OnChanges {
  @Input() evaluationId = 0;
  @Input() evaluation: IEvaluation | undefined;

  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  readonly ImgEntityType = ImgEntityType;

  // Campo estable: evita el bucle de CD que causaba el getter
  evaluators: IEvaluationEvaluator[] = [];
  filteredEvaluators: IEvaluationEvaluator[] = [];

  // Setter para actualizar filteredEvaluators cuando cambia el texto de búsqueda
  private _searchValue = '';
  get searchValue(): string { return this._searchValue; }
  set searchValue(val: string) {
    this._searchValue = val;
    this._refreshFilteredEvaluators();
  }

  showUsersPanel = false;
  panelEvaluator: IEvaluationEvaluator | null = null;

  columnDefinition: IColumnDefinition[] = [
    {
      name: 'name',
      displayName: 'Name',
      visible: true,
      disableSorting: true,
      minWidth: '260px',
      columnType: 'component',
      component: {
        selector: UserNameCellComponent as Type<any>,
        inputs: (row: any) => ({
          rowData: row,
          onOpen: (evaluator: IEvaluationEvaluator) => this.openUsersPanel(evaluator),
        }),
      },
    },
    {
      name: 'evaluations',
      displayName: 'Evaluations',
      visible: true,
      disableSorting: true,
      minWidth: '160px',
      columnType: 'component',
      component: {
        selector: EvaluatorCountCellComponent as Type<any>,
        inputs: (row: any) => ({
          rowData: row,
          onOpen: (evaluator: IEvaluationEvaluator) => this.openUsersPanel(evaluator),
        }),
      },
    },
  ];

  constructor(
    private evaluatorsService: EvaluatorsService,
    private targetUsersService: TargetUsersService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['evaluationId'] || changes['evaluation']) {
      this._refreshEvaluators();
    }
  }

  get isLaunched(): boolean {
    const s = this.evaluation?.status;
    return s === 'IN PROGRESS' || s === 'CLOSED' || s === 'COMPLETED' || s === 'ENDING';
  }

  private get targetUserIds(): number[] {
    return this.targetUsersService.getTargetUsers(this.evaluationId, this.isLaunched).map(u => u.id);
  }

  private _refreshEvaluators(): void {
    this.evaluators = this.evaluatorsService.getEvaluatorsForEvaluation(this.evaluationId, this.targetUserIds);
    this._refreshFilteredEvaluators();
  }

  private _refreshFilteredEvaluators(): void {
    if (!this._searchValue) {
      this.filteredEvaluators = this.evaluators;
    } else {
      const term = this._searchValue.toLowerCase();
      this.filteredEvaluators = this.evaluators.filter(e => e.name.toLowerCase().includes(term));
    }
  }

  onRowClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const tr = target.closest('tr.mat-mdc-row');
    if (!tr) return;
    const wrapper = event.currentTarget as HTMLElement;
    const rows = Array.from(wrapper.querySelectorAll('tr.mat-mdc-row'));
    const index = rows.indexOf(tr);
    if (index < 0) return;
    const evaluator = this.filteredEvaluators[index];
    if (evaluator) this.openUsersPanel(evaluator);
  }

  openUsersPanel(evaluator: IEvaluationEvaluator): void {
    this.panelEvaluator = evaluator;
    this.showUsersPanel = true;
    // No necesita detectChanges(): el clic burbujea al div wrapper que está
    // dentro de la zona de Angular, así que la CD se dispara sola.
  }

  closeUsersPanel(): void {
    this.showUsersPanel = false;
    this.panelEvaluator = null;
  }
}

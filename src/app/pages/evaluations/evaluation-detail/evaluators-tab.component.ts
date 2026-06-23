import { ChangeDetectorRef, Component, Input, Type } from '@angular/core';
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
import { EvaluatorsService, IAvailableEvaluator, IEvaluationEvaluator } from '../../../services/evaluators.service';
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
export class EvaluatorsTabComponent {
  @Input() evaluationId = 0;
  @Input() evaluation: IEvaluation | undefined;

  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  readonly ImgEntityType = ImgEntityType;

  searchValue = '';

  // Panel de usuarios del evaluador (alojado en este mismo componente, como en target-users-tab)
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
    private cdr: ChangeDetectorRef,
  ) {}

  get isLaunched(): boolean {
    const s = this.evaluation?.status;
    return s === 'IN PROGRESS' || s === 'CLOSED' || s === 'COMPLETED' || s === 'ENDING';
  }

  get targetUserIds(): number[] {
    return this.targetUsersService.getTargetUsers(this.evaluationId, this.isLaunched).map(u => u.id);
  }

  get evaluators(): IEvaluationEvaluator[] {
    return this.evaluatorsService.getEvaluatorsForEvaluation(this.evaluationId, this.targetUserIds);
  }

  get filteredEvaluators(): IEvaluationEvaluator[] {
    if (!this.searchValue) return this.evaluators;
    const term = this.searchValue.toLowerCase();
    return this.evaluators.filter(e => e.name.toLowerCase().includes(term));
  }

  /**
   * Clic delegado a nivel de fila. El listener está en el template del tab (dentro
   * de la zona de Angular), por lo que la detección de cambios SÍ se dispara y el
   * panel se renderiza — a diferencia de los clics de las celdas dinámicas de
   * admin-table, que corren fuera de zona.
   */
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
    // Forzamos CD síncrona: con clic de ratón la detección no se vacía sola
    // (sí con tap / con DevTools abierto). detectChanges no depende de la zona.
    this.cdr.detectChanges();
  }

  closeUsersPanel(): void {
    this.showUsersPanel = false;
    this.panelEvaluator = null;
  }
}

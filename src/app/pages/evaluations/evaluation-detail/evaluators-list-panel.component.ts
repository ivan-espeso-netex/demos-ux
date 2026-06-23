import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  SearchboxComponent,
  TableComponent,
  NoContentPlaceholdersComponent,
  EButtonButtonType,
  EButtonColor,
  EButtonType,
  EIconName,
  IColumnDefinition,
  INoContentPlaceholdersMenuBtnConfig,
  ImgEntityType,
} from '@netexknowledge/ux-admin-components';
import { EvaluatorsService, IAvailableEvaluator, IEvaluator } from '../../../services/evaluators.service';
import { UserNameCellComponent } from '../components/user-name-cell.component';
import { TargetUserProgressCellComponent } from '../components/target-user-progress-cell.component';
import { EvaluatorViewCellComponent } from '../components/evaluator-view-cell.component';
import { AddEvaluatorPanelComponent } from './add-evaluator-panel.component';

@Component({
  selector: 'app-evaluators-list-panel',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SearchboxComponent, TableComponent, NoContentPlaceholdersComponent, AddEvaluatorPanelComponent],
  templateUrl: './evaluators-list-panel.component.html',
  styleUrl: './evaluators-list-panel.component.scss',
})
export class EvaluatorsListPanelComponent {
  @Input() evaluationId = 0;
  @Input() targetUserId = 0;
  @Input() field: 'superiors' | 'pairs' = 'superiors';
  @Output() closed = new EventEmitter<void>();

  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  readonly ImgEntityType = ImgEntityType;

  searchValue = '';
  showAddEvaluatorPanel = false;

  addEvaluatorEmptyConfig: INoContentPlaceholdersMenuBtnConfig = {
    id: 'add-evaluator-empty-list',
    buttonType: EButtonButtonType.MATFLATBUTTON,
    type: EButtonType.BUTTON,
    color: EButtonColor.ACCENT,
    text: 'Add evaluator',
    leftIcon: EIconName.ADD,
    rightIcon: EIconName.ADD,
    disabled: false,
    options: [],
  };

  columnDefinition: IColumnDefinition[] = [
    {
      name: 'name',
      displayName: 'Name',
      visible: true,
      disableSorting: true,
      minWidth: '200px',
      columnType: 'component',
      component: { selector: UserNameCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    { name: 'range', displayName: 'Range', visible: true, disableSorting: true, minWidth: '120px' },
    {
      name: 'evaluacion',
      displayName: 'Evaluación',
      visible: true,
      disableSorting: true,
      minWidth: '150px',
      columnType: 'component',
      component: {
        selector: TargetUserProgressCellComponent as Type<any>,
        inputs: (row: any) => ({ rowData: { progress: row.evaluacion } }),
      },
    },
    { name: 'result', displayName: 'Result', visible: true, disableSorting: true, minWidth: '140px' },
    {
      name: 'actions',
      displayName: '',
      visible: true,
      disableSorting: true,
      stickyEnd: true,
      columnType: 'component',
      component: { selector: EvaluatorViewCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
  ];

  constructor(private evaluatorsService: EvaluatorsService) {}

  get title(): string {
    return this.field === 'superiors' ? 'Superiors (75% weight)' : 'Pairs (25% weight)';
  }

  get evaluators(): IEvaluator[] {
    return this.evaluatorsService.getEvaluators(this.evaluationId, this.targetUserId, this.field);
  }

  get filteredEvaluators(): IEvaluator[] {
    if (!this.searchValue) return this.evaluators;
    const term = this.searchValue.toLowerCase();
    return this.evaluators.filter(e => e.name.toLowerCase().includes(term));
  }

  get availableForPanel(): IAvailableEvaluator[] {
    return this.evaluatorsService.getNotAddedEvaluators(this.evaluationId, this.targetUserId, this.field);
  }

  onEvaluatorsAdded(evaluators: IAvailableEvaluator[]): void {
    this.evaluatorsService.addEvaluators(this.evaluationId, this.targetUserId, this.field, evaluators);
    this.showAddEvaluatorPanel = false;
  }
}

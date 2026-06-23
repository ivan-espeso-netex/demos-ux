import { Component, OnInit, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
import { EvaluationStatusCellComponent } from './components/evaluation-status-cell.component';
import { EvaluationActionCellComponent } from './components/evaluation-action-cell.component';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { EvaluationsService } from '../../services/evaluations.service';

@Component({
  selector: 'app-evaluations-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SearchboxComponent,
    TableComponent,
    NoContentPlaceholdersComponent,
  ],
  templateUrl: './evaluations-list.component.html',
  styleUrl: './evaluations-list.component.scss',
})
export class EvaluationsListComponent implements OnInit {
  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  readonly ImgEntityType = ImgEntityType;

  emptyConfig: INoContentPlaceholdersMenuBtnConfig = {
    id: 'new-evaluation-empty',
    buttonType: EButtonButtonType.MATFLATBUTTON,
    type: EButtonType.BUTTON,
    color: EButtonColor.ACCENT,
    text: 'New evaluation',
    leftIcon: EIconName.ADD,
    rightIcon: EIconName.ADD,
    disabled: false,
    options: [],
  };

  searchValue = '';

  columnDefinition: IColumnDefinition[] = [
    { name: 'name', displayName: 'Evaluation', visible: true, disableSorting: true, minWidth: '140px' },
    { name: 'evaluationType', displayName: 'Tipo de evaluación', visible: true, disableSorting: true, minWidth: '100px' },
    { name: 'evaluator', displayName: 'Evaluator', visible: true, disableSorting: true, minWidth: '110px' },
    { name: 'startDate', displayName: 'Start date', visible: true, disableSorting: true, minWidth: '90px' },
    { name: 'endDate', displayName: 'End date', visible: true, disableSorting: true, minWidth: '90px' },
    { name: 'evaluated', displayName: 'Evaluated', visible: true, disableSorting: true, minWidth: '85px' },
    {
      name: 'status', displayName: 'Status', visible: true, disableSorting: true, minWidth: '120px',
      columnType: 'component',
      component: { selector: EvaluationStatusCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    { name: 'createdBy', displayName: 'Created by', visible: true, disableSorting: true, minWidth: '115px' },
    { name: 'modified', displayName: 'Modified', visible: true, disableSorting: true, minWidth: '100px' },
    {
      name: 'actions', displayName: '', visible: true, disableSorting: true, minWidth: '120px', stickyEnd: true,
      columnType: 'component',
      component: { selector: EvaluationActionCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
  ];

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private evaluationsService: EvaluationsService,
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.setEvaluationsList();
  }

  get rowData() {
    return this.evaluationsService.evaluations();
  }

  get filteredRows() {
    if (!this.searchValue) return this.rowData;
    const term = this.searchValue.toLowerCase();
    return this.rowData.filter(
      (r) => r.name.toLowerCase().includes(term) || r.evaluator.toLowerCase().includes(term)
    );
  }

  onNewEvaluation(): void {
    this.router.navigate(['/evaluations/new']);
  }
}

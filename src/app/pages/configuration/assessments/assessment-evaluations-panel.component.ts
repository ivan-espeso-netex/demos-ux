import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  ButtonComponent,
  TableComponent,
  NoContentPlaceholdersComponent,
  EButtonButtonType,
  EIconName,
  IColumnDefinition,
  ImgEntityType,
} from '@netexknowledge/ux-admin-components';
import { IAssessmentTemplate } from '../../../services/assessment-templates.service';
import { EvaluationsService, IEvaluation } from '../../../services/evaluations.service';
import { EvaluationStatusCellComponent } from '../../evaluations/components/evaluation-status-cell.component';
import { EvaluationLinkCellComponent } from './components/evaluation-link-cell.component';

@Component({
  selector: 'app-assessment-evaluations-panel',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TableComponent,
    NoContentPlaceholdersComponent,
  ],
  templateUrl: './assessment-evaluations-panel.component.html',
  styleUrl: './assessment-evaluations-panel.component.scss',
})
export class AssessmentEvaluationsPanelComponent implements OnInit {
  @Input() assessment: IAssessmentTemplate | null = null;
  @Output() closed = new EventEmitter<void>();

  readonly EButtonButtonType = EButtonButtonType;
  readonly EIconName = EIconName;
  readonly ImgEntityType = ImgEntityType;

  columnDefinition: IColumnDefinition[] = [];

  constructor(
    private router: Router,
    private evaluationsService: EvaluationsService,
  ) {}

  ngOnInit(): void {
    this.columnDefinition = [
      {
        name: 'name',
        displayName: 'Evaluation',
        visible: true,
        disableSorting: true,
        minWidth: '240px',
        columnType: 'component',
        component: {
          selector: EvaluationLinkCellComponent as Type<any>,
          inputs: (row: any) => ({
            rowData: row,
            onOpen: (evaluation: IEvaluation) => this.openEvaluation(evaluation),
          }),
        },
      },
      { name: 'evaluationTypeName', displayName: 'Evaluation type', visible: true, disableSorting: true, minWidth: '180px' },
      {
        name: 'status',
        displayName: 'Status',
        visible: true,
        disableSorting: true,
        minWidth: '120px',
        columnType: 'component',
        component: { selector: EvaluationStatusCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
      },
      { name: 'modified', displayName: 'Modified', visible: true, disableSorting: true, minWidth: '120px' },
    ];
  }

  get title(): string {
    if (!this.assessment) return '';
    return `${this.assessment.jobRole} - ${this.assessment.evaluationType}`;
  }

  get evaluations(): IEvaluation[] {
    if (!this.assessment) return [];
    return this.assessment.usedInEvaluationIds
      .map(id => this.evaluationsService.getById(id))
      .filter((e): e is IEvaluation => !!e);
  }

  openEvaluation(evaluation: IEvaluation): void {
    this.router.navigate(['/evaluations', evaluation.id]);
    this.closed.emit();
  }
}

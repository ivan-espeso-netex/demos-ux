import { Component, OnInit, Type } from '@angular/core';
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
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { AssessmentTemplatesService, IAssessmentTemplate } from '../../../services/assessment-templates.service';
import { AssessmentUsageCellComponent } from './components/assessment-usage-cell.component';
import { AssessmentConfigActionsCellComponent } from './components/assessment-config-actions-cell.component';
import { AssessmentEvaluationsPanelComponent } from './assessment-evaluations-panel.component';

@Component({
  selector: 'app-assessments-config',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SearchboxComponent,
    TableComponent,
    NoContentPlaceholdersComponent,
    AssessmentEvaluationsPanelComponent,
  ],
  templateUrl: './assessments-config.component.html',
  styleUrl: './assessments-config.component.scss',
})
export class AssessmentsConfigComponent implements OnInit {
  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  readonly ImgEntityType = ImgEntityType;

  searchValue = '';

  showUsagePanel = false;
  panelAssessment: IAssessmentTemplate | null = null;

  columnDefinition: IColumnDefinition[] = [
    { name: 'jobRole', displayName: 'Job role', visible: true, disableSorting: true, minWidth: '200px' },
    { name: 'evaluationType', displayName: 'Evaluation type', visible: true, disableSorting: true, minWidth: '200px' },
    { name: 'modified', displayName: 'Modified', visible: true, disableSorting: true, minWidth: '140px' },
    { name: 'creator', displayName: 'Creator', visible: true, disableSorting: true, minWidth: '160px' },
    {
      name: 'usage',
      displayName: 'Usage',
      visible: true,
      disableSorting: true,
      minWidth: '120px',
      columnType: 'component',
      component: { selector: AssessmentUsageCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    {
      name: 'actions',
      displayName: '',
      visible: true,
      disableSorting: true,
      stickyEnd: true,
      minWidth: '80px',
      columnType: 'component',
      component: {
        selector: AssessmentConfigActionsCellComponent as Type<any>,
        inputs: (row: any) => ({
          rowData: row,
          onEdit: (a: IAssessmentTemplate) => this.onEdit(a),
          onViewUsage: (a: IAssessmentTemplate) => this.openUsagePanel(a),
          onDelete: (a: IAssessmentTemplate) => this.onDelete(a),
        }),
      },
    },
  ];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private assessmentTemplatesService: AssessmentTemplatesService,
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.setAssessments();
  }

  get assessments(): IAssessmentTemplate[] {
    return this.assessmentTemplatesService.templates();
  }

  get filteredAssessments(): IAssessmentTemplate[] {
    if (!this.searchValue) return this.assessments;
    const term = this.searchValue.toLowerCase();
    return this.assessments.filter(a =>
      a.jobRole.toLowerCase().includes(term) || a.evaluationType.toLowerCase().includes(term)
    );
  }

  onNewAssessment(): void {
    // Prototipo: alta de assessment (pendiente de flujo de creación)
  }

  onEdit(_assessment: IAssessmentTemplate): void {
    // Prototipo: edición de assessment (pendiente de flujo de edición)
  }

  onDelete(assessment: IAssessmentTemplate): void {
    this.assessmentTemplatesService.delete(assessment.id);
  }

  openUsagePanel(assessment: IAssessmentTemplate): void {
    this.panelAssessment = assessment;
    this.showUsagePanel = true;
  }

  closeUsagePanel(): void {
    this.showUsagePanel = false;
    this.panelAssessment = null;
  }
}

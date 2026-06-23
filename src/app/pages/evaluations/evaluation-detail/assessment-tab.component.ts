import { Component, Input, OnChanges, SimpleChanges, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TableComponent,
  NoContentPlaceholdersComponent,
  IColumnDefinition,
  ImgEntityType,
} from '@netexknowledge/ux-admin-components';
import { AssessmentsService, IAssessmentRow } from '../../../services/assessments.service';
import { TargetUsersService } from '../../../services/target-users.service';
import { IEvaluation } from '../../../services/evaluations.service';
import { AssessmentStatusCellComponent } from '../components/assessment-status-cell.component';
import { AssessmentActionCellComponent } from '../components/assessment-action-cell.component';

@Component({
  selector: 'app-assessment-tab',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    NoContentPlaceholdersComponent,
  ],
  templateUrl: './assessment-tab.component.html',
  styleUrl: './assessment-tab.component.scss',
})
export class AssessmentTabComponent implements OnChanges {
  @Input() evaluationId = 0;
  @Input() evaluation: IEvaluation | undefined;

  readonly ImgEntityType = ImgEntityType;

  columnDefinition: IColumnDefinition[] = [
    { name: 'name',          displayName: 'Name',           visible: true, disableSorting: true, minWidth: '200px' },
    { name: 'jobRole',       displayName: 'Job role',       visible: true, disableSorting: true, minWidth: '180px' },
    { name: 'evaluatorType', displayName: 'Evaluator type', visible: true, disableSorting: true, minWidth: '160px' },
    { name: 'creator',       displayName: 'Creator',        visible: true, disableSorting: true, minWidth: '140px' },
    { name: 'modified',      displayName: 'Modified',       visible: true, disableSorting: true, minWidth: '120px' },
    {
      name: 'status',
      displayName: 'Status',
      visible: true,
      disableSorting: true,
      minWidth: '120px',
      columnType: 'component',
      component: { selector: AssessmentStatusCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    {
      name: 'actions',
      displayName: '',
      visible: true,
      disableSorting: true,
      stickyEnd: true,
      columnType: 'component',
      component: {
        selector: AssessmentActionCellComponent as Type<any>,
        inputs: (row: any) => ({
          rowData: row,
          isLaunched: this.isLaunched,
          onAction: (action: string, r: IAssessmentRow) => this.handleAction(action, r),
        }),
      },
    },
  ];

  // Campo estable: solo cambia de referencia cuando los inputs cambian o cuando
  // se ejecuta una acción. Así admin-table.ngOnChanges no se dispara en bucle.
  assessments: IAssessmentRow[] = [];

  constructor(
    private assessmentsService: AssessmentsService,
    private targetUsersService: TargetUsersService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['evaluationId'] || changes['evaluation']) {
      this._refreshAssessments();
    }
  }

  get isLaunched(): boolean {
    const s = this.evaluation?.status;
    return s === 'IN PROGRESS' || s === 'CLOSED' || s === 'COMPLETED' || s === 'ENDING';
  }

  get jobRoles(): string[] {
    return this.targetUsersService.getTargetUsers(this.evaluationId, this.isLaunched).map(u => u.jobRole);
  }

  private get evaluatorTypesPresent(): string[] {
    const users = this.targetUsersService.getTargetUsers(this.evaluationId, this.isLaunched);
    if (users.length === 0) return [];
    return this.assessmentsService.evaluatorTypesForCode(this.evaluation?.evaluationType || '180');
  }

  private _refreshAssessments(): void {
    this.assessments = this.assessmentsService.getAssessments(
      this.evaluationId,
      this.jobRoles,
      this.evaluatorTypesPresent,
    );
  }

  handleAction(action: string, row: IAssessmentRow): void {
    if (action === 'create' || action === 'import') {
      this.assessmentsService.create(this.evaluationId, row.id, 'Iván Espeso');
    } else if (action === 'quit') {
      this.assessmentsService.quit(this.evaluationId, row.id);
    }
    // Actualiza el campo con los nuevos datos. Angular detecta el cambio de
    // referencia en [rowData] y admin-table reconstruye su MatTableDataSource.
    this._refreshAssessments();
  }
}

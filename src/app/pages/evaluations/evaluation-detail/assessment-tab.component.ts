import { Component, Input, NgZone, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  TableComponent,
  NoContentPlaceholdersComponent,
  EButtonButtonType,
  EButtonColor,
  EButtonType,
  EIconName,
  IColumnDefinition,
  ImgEntityType,
  INoContentPlaceholdersMenuBtnConfig,
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
    ButtonComponent,
    TableComponent,
    NoContentPlaceholdersComponent,
  ],
  templateUrl: './assessment-tab.component.html',
  styleUrl: './assessment-tab.component.scss',
})
export class AssessmentTabComponent {
  @Input() evaluationId = 0;
  @Input() evaluation: IEvaluation | undefined;

  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  readonly ImgEntityType = ImgEntityType;

  emptyConfig: INoContentPlaceholdersMenuBtnConfig = {
    id: 'assessment-empty',
    buttonType: EButtonButtonType.MATFLATBUTTON,
    type: EButtonType.BUTTON,
    color: EButtonColor.ACCENT,
    text: 'Create all',
    leftIcon: EIconName.ADD,
    rightIcon: EIconName.ADD,
    disabled: false,
    options: [],
  };

  columnDefinition: IColumnDefinition[] = [
    { name: 'name', displayName: 'Name', visible: true, disableSorting: true, minWidth: '200px' },
    { name: 'jobRole', displayName: 'Job role', visible: true, disableSorting: true, minWidth: '180px' },
    { name: 'evaluatorType', displayName: 'Evaluator type', visible: true, disableSorting: true, minWidth: '160px' },
    { name: 'creator', displayName: 'Creator', visible: true, disableSorting: true, minWidth: '140px' },
    { name: 'modified', displayName: 'Modified', visible: true, disableSorting: true, minWidth: '120px' },
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

  constructor(
    private assessmentsService: AssessmentsService,
    private targetUsersService: TargetUsersService,
    private zone: NgZone,
  ) {}

  get isLaunched(): boolean {
    const s = this.evaluation?.status;
    return s === 'IN PROGRESS' || s === 'CLOSED' || s === 'COMPLETED' || s === 'ENDING';
  }

  get jobRoles(): string[] {
    return this.targetUsersService.getTargetUsers(this.evaluationId, this.isLaunched).map(u => u.jobRole);
  }

  get evaluatorTypesPresent(): string[] {
    const users = this.targetUsersService.getTargetUsers(this.evaluationId, this.isLaunched);
    if (users.length === 0) return [];
    return this.assessmentsService.evaluatorTypesForCode(this.evaluation?.evaluationType || '180');
  }

  get assessments(): IAssessmentRow[] {
    return this.assessmentsService.getAssessments(
      this.evaluationId,
      this.jobRoles,
      this.evaluatorTypesPresent,
    );
  }

  get hasPending(): boolean {
    return this.assessments.some(row => row.status === 'PENDING');
  }

  createAll(): void {
    // El admin-button vive en una celda dinámica de admin-table y su clic corre
    // FUERA de la zona de Angular: cdr.detectChanges no repinta la tabla de forma
    // fiable. Re-entrar en la zona dispara un tick global que rebinda [rowData].
    this.zone.run(() => {
      for (const row of this.assessments) {
        if (row.status === 'PENDING') {
          this.assessmentsService.create(this.evaluationId, row.id, 'Iván Espeso');
        }
      }
    });
  }

  handleAction(action: string, row: IAssessmentRow): void {
    // Mismo motivo que createAll: el clic llega desde una celda fuera de NgZone.
    this.zone.run(() => {
      if (action === 'create' || action === 'import') {
        this.assessmentsService.create(this.evaluationId, row.id, 'Iván Espeso');
      } else if (action === 'quit') {
        this.assessmentsService.quit(this.evaluationId, row.id);
      }
      // 'link' / 'view' son no-ops por ahora
    });
  }
}

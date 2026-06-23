import { Component, EventEmitter, Input, NgZone, OnInit, Output, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  ButtonComponent,
  SearchboxComponent,
  TableComponent,
  EButtonButtonType,
  EIconName,
  IColumnDefinition,
} from '@netexknowledge/ux-admin-components';
import { IEvaluationEvaluator } from '../../../services/evaluators.service';
import { ITargetUser, TargetUsersService } from '../../../services/target-users.service';
import { IEvaluation } from '../../../services/evaluations.service';
import { UserNameCellComponent } from '../components/user-name-cell.component';
import { DownloadReportCellComponent } from '../components/download-report-cell.component';

@Component({
  selector: 'app-evaluator-users-panel',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SearchboxComponent,
    TableComponent,
  ],
  templateUrl: './evaluator-users-panel.component.html',
  styleUrl: './evaluator-users-panel.component.scss',
})
export class EvaluatorUsersPanelComponent implements OnInit {
  @Input() evaluationId = 0;
  @Input() evaluator: IEvaluationEvaluator | null = null;
  @Input() evaluation: IEvaluation | undefined;
  @Output() closed = new EventEmitter<void>();

  readonly EButtonButtonType = EButtonButtonType;
  readonly EIconName = EIconName;

  searchValue = '';

  columnDefinition: IColumnDefinition[] = [];

  constructor(
    private targetUsersService: TargetUsersService,
    private router: Router,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    this.columnDefinition = [
      {
        name: 'name',
        displayName: 'Name',
        visible: true,
        disableSorting: true,
        minWidth: '220px',
        columnType: 'component',
        component: {
          selector: UserNameCellComponent as Type<any>,
          inputs: (row: any) => ({
            rowData: row,
            onOpen: (user: ITargetUser) => this.openDetailPanel(user),
          }),
        },
      },
      { name: 'username', displayName: 'User', visible: true, disableSorting: true, minWidth: '180px' },
      { name: 'jobRole', displayName: 'Job role', visible: true, disableSorting: true, minWidth: '200px' },
      {
        name: 'report',
        displayName: '',
        visible: true,
        disableSorting: true,
        stickyEnd: true,
        minWidth: '180px',
        columnType: 'component',
        component: {
          selector: DownloadReportCellComponent as Type<any>,
          inputs: (row: any) => ({ rowData: { ...row, evaluationStatus: row.progress } }),
        },
      },
    ];
  }

  get isLaunched(): boolean {
    const s = this.evaluation?.status;
    return s === 'IN PROGRESS' || s === 'CLOSED' || s === 'COMPLETED' || s === 'ENDING';
  }

  get assignedUsers(): ITargetUser[] {
    if (!this.evaluator) return [];
    const allUsers = this.targetUsersService.getTargetUsers(this.evaluationId, this.isLaunched);
    const ids = new Set(this.evaluator.assignedUserIds);
    return allUsers.filter(u => ids.has(u.id));
  }

  get filteredUsers(): ITargetUser[] {
    if (!this.searchValue) return this.assignedUsers;
    const term = this.searchValue.toLowerCase();
    return this.assignedUsers.filter(u =>
      u.name.toLowerCase().includes(term) ||
      u.username.toLowerCase().includes(term) ||
      u.jobRole.toLowerCase().includes(term)
    );
  }

  openDetailPanel(user: ITargetUser): void {
    // El clic llega fuera de la zona de Angular (celda de admin-table); sin NgZone.run
    // la navegación del router no actualiza la vista. Ver evaluators-tab.
    this.zone.run(() => {
      this.closed.emit();
      this.router.navigate(['/evaluations', this.evaluationId, 'users', user.id]);
    });
  }
}

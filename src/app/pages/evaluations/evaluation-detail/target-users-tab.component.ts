import { Component, Input, NgZone, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  ButtonComponent,
  SearchboxComponent,
  TableComponent,
  NoContentPlaceholdersComponent,
  SplitButtonComponent,
  ESplitButtonColor,
  ESplitButtonStatus,
  ESplitButtonMode,
  ISplitButtonOption,
  EButtonButtonType,
  EButtonColor,
  EIconName,
  IColumnDefinition,
  ImgEntityType,
  INoContentPlaceholdersSplitBtnConfig,
} from '@netexknowledge/ux-admin-components';
import { TargetUsersService, ITargetUser, IAvailableUser } from '../../../services/target-users.service';
import { EvaluatorsService, IAvailableEvaluator } from '../../../services/evaluators.service';
import { IEvaluation } from '../../../services/evaluations.service';
import { AddUsersPanelComponent } from './add-users-panel.component';
import { AddEvaluatorPanelComponent } from './add-evaluator-panel.component';
import { EvaluatorsListPanelComponent } from './evaluators-list-panel.component';
import { UserNameCellComponent } from '../components/user-name-cell.component';
import { TargetUserProgressCellComponent } from '../components/target-user-progress-cell.component';
import { TargetUserActionsCellComponent } from '../components/target-user-actions-cell.component';

@Component({
  selector: 'app-target-users-tab',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SearchboxComponent,
    TableComponent,
    NoContentPlaceholdersComponent,
    SplitButtonComponent,
    AddUsersPanelComponent,
    AddEvaluatorPanelComponent,
    EvaluatorsListPanelComponent,
  ],
  templateUrl: './target-users-tab.component.html',
  styleUrl: './target-users-tab.component.scss',
})
export class TargetUsersTabComponent {
  @Input() evaluationId = 0;
  @Input() evaluation: IEvaluation | undefined;

  readonly ESplitButtonColor = ESplitButtonColor;
  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  readonly ImgEntityType = ImgEntityType;

  showAddPanel = false;
  showEvaluatorsPanel = false;
  showAssignEvaluatorPanel = false;
  evaluatorsPanelUser: ITargetUser | null = null;
  evaluatorsPanelField: 'superiors' | 'pairs' = 'superiors';
  assignEvaluatorTargetUsers: ITargetUser[] = [];
  searchValue = '';
  selectedUsers: ITargetUser[] = [];

  addOptions: ISplitButtonOption[] = [
    { id: 'csv', text: 'Import CSV', icon: EIconName.CUSTOM_CSV },
  ];

  emptyStateConfig: INoContentPlaceholdersSplitBtnConfig = {
    id: 'add-users',
    color: ESplitButtonColor.ACCENT,
    label: 'New user',
    status: ESplitButtonStatus.ENABLED,
    mode: ESplitButtonMode.LIGHT,
    waitingStateLabel: '',
    options: [{ id: 'csv', text: 'Import CSV', icon: EIconName.CUSTOM_CSV }],
  };

  columnDefinition: IColumnDefinition[] = [
    {
      name: 'name',
      displayName: 'Name',
      visible: true,
      disableSorting: true,
      minWidth: '200px',
      columnType: 'component',
      component: {
        selector: UserNameCellComponent as Type<any>,
        inputs: (row: any) => ({
          rowData: row,
          onOpen: (user: ITargetUser) => this.openDetailPanel(user),
        }),
      },
    },
    { name: 'jobRole', displayName: 'Job role', visible: true, disableSorting: true, minWidth: '180px' },
    {
      name: 'progress',
      displayName: 'Progress',
      visible: true,
      disableSorting: true,
      minWidth: '150px',
      columnType: 'component',
      component: { selector: TargetUserProgressCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    { name: 'jobAffinity', displayName: 'Job affinity', visible: true, disableSorting: true, minWidth: '120px' },
    {
      name: 'actions',
      displayName: '',
      visible: true,
      disableSorting: true,
      stickyEnd: true,
      columnType: 'component',
      component: {
        selector: TargetUserActionsCellComponent as Type<any>,
        inputs: (row: any) => ({
          rowData: row,
          isLaunched: this.isLaunched,
          onAddEvaluator: (user: ITargetUser) => this.openAssignEvaluatorPanel([user]),
          onRemove: (user: ITargetUser) => this.targetUsersService.removeTargetUsers(this.evaluationId, [user.id]),
        }),
      },
    },
  ];

  constructor(
    private targetUsersService: TargetUsersService,
    private evaluatorsService: EvaluatorsService,
    private router: Router,
    private zone: NgZone,
  ) {}

  get isLaunched(): boolean {
    return this.evaluation?.status === 'IN PROGRESS' || this.evaluation?.status === 'CLOSED' || this.evaluation?.status === 'COMPLETED';
  }

  get targetUsers(): ITargetUser[] {
    return this.targetUsersService.getTargetUsers(this.evaluationId, this.isLaunched);
  }

  get filteredTargetUsers(): ITargetUser[] {
    if (!this.searchValue) return this.targetUsers;
    const term = this.searchValue.toLowerCase();
    return this.targetUsers.filter(
      u =>
        u.name.toLowerCase().includes(term) ||
        u.jobRole.toLowerCase().includes(term)
    );
  }

  get availableForPanel(): IAvailableUser[] {
    return this.targetUsersService.getNotAddedUsers(this.evaluationId);
  }

  get selectionMessage(): string {
    return 'item/s selected';
  }

  onSelectionChange(rows: any[]): void {
    this.selectedUsers = rows as ITargetUser[];
  }

  openAddPanel(): void {
    this.showAddPanel = true;
  }

  onUsersAdded(users: IAvailableUser[]): void {
    this.targetUsersService.addTargetUsers(this.evaluationId, users);
    this.showAddPanel = false;
  }

  openDetailPanel(user: ITargetUser): void {
    // Clic desde celda de admin-table -> fuera de la zona de Angular. NgZone.run
    // garantiza que la navegación/renderizado se ejecute con detección de cambios.
    this.zone.run(() => this.router.navigate(['/evaluations', this.evaluationId, 'users', user.id]));
  }

  openAssignEvaluatorPanel(users: ITargetUser[]): void {
    this.zone.run(() => {
      this.assignEvaluatorTargetUsers = users;
      this.showAssignEvaluatorPanel = true;
    });
  }

  onBulkAssignEvaluator(): void {
    const targets = this.selectedUsers.length > 0 ? this.selectedUsers : this.targetUsers;
    this.openAssignEvaluatorPanel(targets);
  }

  get availableForAssign(): IAvailableEvaluator[] {
    return this.evaluatorsService.getAvailableEvaluators();
  }

  onAssignEvaluatorsAdded(evaluators: IAvailableEvaluator[]): void {
    const userIds = this.assignEvaluatorTargetUsers.map(u => u.id);
    this.evaluatorsService.addEvaluatorsToMultipleUsers(this.evaluationId, userIds, 'superiors', evaluators);
    this.showAssignEvaluatorPanel = false;
  }

  openEvaluatorsPanel(user: ITargetUser, field: 'superiors' | 'pairs'): void {
    this.zone.run(() => {
      this.evaluatorsPanelUser = user;
      this.evaluatorsPanelField = field;
      this.showEvaluatorsPanel = true;
    });
  }

  onRemoveSelected(): void {
    const ids = this.selectedUsers.map(u => u.id);
    this.targetUsersService.removeTargetUsers(this.evaluationId, ids);
    this.selectedUsers = [];
  }
}

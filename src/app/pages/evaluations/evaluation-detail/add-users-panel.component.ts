import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  SearchboxComponent,
  TableComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
  IColumnDefinition,
} from '@netexknowledge/ux-admin-components';
import { IAvailableUser } from '../../../services/target-users.service';
import { UserNameCellComponent } from '../components/user-name-cell.component';
import { PanelJobRoleCellComponent } from '../components/panel-job-role-cell.component';

@Component({
  selector: 'app-add-users-panel',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SearchboxComponent, TableComponent],
  templateUrl: './add-users-panel.component.html',
  styleUrl: './add-users-panel.component.scss',
})
export class AddUsersPanelComponent {
  @Input() availableUsers: IAvailableUser[] = [];
  @Output() usersAdded = new EventEmitter<IAvailableUser[]>();
  @Output() closed = new EventEmitter<void>();

  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;

  searchValue = '';
  selectedUsers: IAvailableUser[] = [];

  columnDefinition: IColumnDefinition[] = [
    {
      name: 'name',
      displayName: 'Name',
      visible: true,
      disableSorting: true,
      minWidth: '220px',
      columnType: 'component',
      component: { selector: UserNameCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    { name: 'username', displayName: 'User', visible: true, disableSorting: true },
    {
      name: 'jobRole',
      displayName: 'Job role',
      visible: true,
      disableSorting: true,
      columnType: 'component',
      component: { selector: PanelJobRoleCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
  ];

  get filteredUsers(): IAvailableUser[] {
    if (!this.searchValue) return this.availableUsers;
    const term = this.searchValue.toLowerCase();
    return this.availableUsers.filter(
      u =>
        u.name.toLowerCase().includes(term) ||
        u.username.toLowerCase().includes(term) ||
        u.jobRole.toLowerCase().includes(term)
    );
  }

  onSelectionChange(rows: any[]): void {
    this.selectedUsers = rows as IAvailableUser[];
  }

  onAdd(): void {
    if (this.selectedUsers.length > 0) {
      this.usersAdded.emit(this.selectedUsers);
    }
  }

  onClose(): void {
    this.closed.emit();
  }
}

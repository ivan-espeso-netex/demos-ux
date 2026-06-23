import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {
  ButtonComponent,
  NoContentPlaceholdersComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
  ImgEntityType,
  INoContentPlaceholdersMenuBtnConfig,
  EButtonType,
} from '@netexknowledge/ux-admin-components';
import { IIdpAction, IdpService } from '../../../services/idp.service';
import { AddIdpActionPanelComponent } from './add-idp-action-panel.component';
import {
  DeleteIdpActionDialogComponent,
  DeleteIdpActionDialogData,
} from './delete-idp-action-dialog.component';

@Component({
  selector: 'app-idp-tab',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ButtonComponent,
    NoContentPlaceholdersComponent,
    AddIdpActionPanelComponent,
  ],
  templateUrl: './idp-tab.component.html',
  styleUrl: './idp-tab.component.scss',
})
export class IdpTabComponent implements OnInit {
  @Input() userId = 0;
  @Input() userName = '';

  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  readonly ImgEntityType = ImgEntityType;

  showAddPanel = false;
  editingAction: IIdpAction | null = null;

  addEmptyConfig: INoContentPlaceholdersMenuBtnConfig = {
    id: 'add-idp-empty',
    buttonType: EButtonButtonType.MATFLATBUTTON,
    type: EButtonType.BUTTON,
    color: EButtonColor.ACCENT,
    text: 'Add IDP action',
    leftIcon: EIconName.ADD,
    rightIcon: EIconName.ADD,
    disabled: false,
    options: [],
  };

  constructor(private idpService: IdpService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  get actions(): IIdpAction[] {
    return this.idpService.getActions(this.userId);
  }

  openAddPanel(): void {
    this.editingAction = null;
    this.showAddPanel = true;
  }

  openEditPanel(action: IIdpAction): void {
    this.editingAction = action;
    this.showAddPanel = true;
  }

  onActionSaved(data: Omit<IIdpAction, 'id'>): void {
    if (this.editingAction) {
      this.idpService.updateAction(this.userId, { ...data, id: this.editingAction.id });
    } else {
      this.idpService.addAction(this.userId, data);
    }
    this.showAddPanel = false;
    this.editingAction = null;
  }

  onDeleteAction(action: IIdpAction): void {
    const dialogRef = this.dialog.open<DeleteIdpActionDialogComponent, DeleteIdpActionDialogData, boolean>(
      DeleteIdpActionDialogComponent,
      {
        width: '480px',
        data: { actionTitle: action.title },
      }
    );
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.idpService.deleteAction(this.userId, action.id);
      }
    });
  }
}

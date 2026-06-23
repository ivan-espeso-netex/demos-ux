import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  ButtonComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
} from '@netexknowledge/ux-admin-components';

export interface DeleteIdpActionDialogData {
  actionTitle: string;
}

@Component({
  selector: 'app-delete-idp-action-dialog',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="admin-popup__container light">
      <div class="admin-popup__title">
        <h4>Delete IDP action</h4>
        <admin-button
          [buttonType]="EButtonButtonType.MATICONBUTTON"
          [color]="EButtonColor.PRIMARY"
          [leftIcon]="EIconName.CLOSE"
          (buttonClicked)="close(false)">
        </admin-button>
      </div>
      <div class="admin-popup__content">
        <div class="confirm-body">
          <div class="confirm-body__icon">🗑️</div>
          <p>Are you sure you want to delete <strong>"{{ data.actionTitle }}"</strong>?</p>
          <p class="confirm-body__hint">This action cannot be undone.</p>
        </div>
      </div>
    </div>
    <div class="admin-popup__actions light">
      <admin-button
        text="Cancel"
        [buttonType]="EButtonButtonType.MATSTROKEDBUTTON"
        (buttonClicked)="close(false)">
      </admin-button>
      <admin-button
        text="Delete"
        [buttonType]="EButtonButtonType.MATFLATBUTTON"
        [color]="EButtonColor.WARN"
        (buttonClicked)="close(true)">
      </admin-button>
    </div>
  `,
  styles: [`
    .admin-popup__container {
      padding: 16px 32px 32px;
    }

    .admin-popup__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      h4 {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.1px;
        line-height: 20px;
        color: #1a1a1a;
        margin: 0;
      }
    }

    .admin-popup__content {
      color: #5c5c5c;
      font-size: 14px;
      line-height: 20px;
    }

    .admin-popup__actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 16px 32px;
      background-color: #f4f4f4;
    }

    .confirm-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      &__icon {
        font-size: 56px;
        line-height: 1;
        margin-bottom: 16px;
        user-select: none;
      }

      p {
        margin: 0 0 8px;
        max-width: 340px;
      }

      &__hint {
        font-size: 13px;
        color: #9e9e9e;
      }
    }
  `],
})
export class DeleteIdpActionDialogComponent {
  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;

  constructor(
    private dialogRef: MatDialogRef<DeleteIdpActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteIdpActionDialogData
  ) {}

  close(confirmed: boolean): void {
    this.dialogRef.close(confirmed);
  }
}

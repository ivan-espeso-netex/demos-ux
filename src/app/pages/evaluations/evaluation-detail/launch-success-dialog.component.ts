import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  ButtonComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
} from '@netexknowledge/ux-admin-components';

export interface ILaunchSuccessData {
  startDate: string;
}

@Component({
  selector: 'app-launch-success-dialog',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="admin-popup__container light">
      <div class="admin-popup__title">
        <span></span>
        <admin-button
          [buttonType]="EButtonButtonType.MATICONBUTTON"
          [color]="EButtonColor.PRIMARY"
          [leftIcon]="EIconName.CLOSE"
          (buttonClicked)="onClose()">
        </admin-button>
      </div>
      <div class="admin-popup__content">
        <div class="success-body">
          <div class="success-body__rocket">🚀</div>
          <h4 class="success-body__title">Do it!</h4>
          <p class="success-body__subtitle">Your evaluation has been scheduled</p>
          <p class="success-body__date"><strong>Starts on {{ data.startDate }}</strong></p>
          <p class="success-body__desc">Now you can check the evaluator's progress in your evaluation homepage</p>
        </div>
      </div>
    </div>
    <div class="admin-popup__actions light">
      <admin-button
        text="OK"
        [buttonType]="EButtonButtonType.MATFLATBUTTON"
        [color]="EButtonColor.ACCENT"
        (buttonClicked)="onClose()">
      </admin-button>
    </div>
  `,
  styles: [`
    .admin-popup__container {
      padding: 16px 32px 32px;
    }

    .admin-popup__title {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 0;
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

    .success-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 8px 0 0;

      &__rocket {
        font-size: 80px;
        line-height: 1;
        margin-bottom: 16px;
        user-select: none;
      }

      &__title {
        font-size: 28px;
        font-weight: 400;
        color: #212121;
        margin: 0 0 8px;
      }

      &__subtitle {
        font-size: 16px;
        color: #616161;
        margin: 0 0 12px;
      }

      &__date {
        font-size: 15px;
        color: #212121;
        margin: 0 0 12px;
      }

      &__desc {
        font-size: 14px;
        color: #9e9e9e;
        max-width: 380px;
        line-height: 1.5;
        margin: 0;
      }
    }
  `],
})
export class LaunchSuccessDialogComponent {
  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;

  constructor(
    private dialogRef: MatDialogRef<LaunchSuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ILaunchSuccessData,
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}

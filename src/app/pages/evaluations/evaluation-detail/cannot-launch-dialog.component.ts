import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  ButtonComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
} from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-cannot-launch-dialog',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="admin-popup__container light">
      <div class="admin-popup__title">
        <h4>No es posible lanzar la evaluación</h4>
        <admin-button
          [buttonType]="EButtonButtonType.MATICONBUTTON"
          [color]="EButtonColor.PRIMARY"
          [leftIcon]="EIconName.CLOSE"
          (buttonClicked)="close()">
        </admin-button>
      </div>
      <div class="admin-popup__content">
        <div class="warning-body">
          <div class="warning-body__icon">⚠️</div>
          <p>Para poder lanzar la evaluación es necesario que todos los <strong>assessments estén en estado READY</strong>.</p>
          <p class="warning-body__hint">Ve a la pestaña <strong>Assessment</strong> y crea todos los assessments pendientes antes de lanzar.</p>
        </div>
      </div>
    </div>
    <div class="admin-popup__actions light">
      <admin-button
        text="Entendido"
        [buttonType]="EButtonButtonType.MATFLATBUTTON"
        [color]="EButtonColor.ACCENT"
        (buttonClicked)="close()">
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
        max-width: 340px;
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

    .warning-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      &__icon {
        font-size: 72px;
        line-height: 1;
        margin-bottom: 16px;
        user-select: none;
      }

      p {
        margin: 0 0 8px;
        max-width: 380px;
      }

      &__hint {
        font-size: 13px;
        color: #9e9e9e;
      }
    }
  `],
})
export class CannotLaunchDialogComponent {
  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;

  constructor(private dialogRef: MatDialogRef<CannotLaunchDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}

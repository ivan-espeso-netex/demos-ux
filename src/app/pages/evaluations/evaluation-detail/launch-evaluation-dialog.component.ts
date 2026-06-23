import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import {
  ButtonComponent,
  DatepickerComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
} from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-launch-evaluation-dialog',
  standalone: true,
  imports: [CommonModule, ButtonComponent, DatepickerComponent],
  template: `
    <div class="admin-popup__container light">
      <div class="admin-popup__title">
        <h4>Último paso para lanzar la evaluación</h4>
        <admin-button
          [buttonType]="EButtonButtonType.MATICONBUTTON"
          [color]="EButtonColor.PRIMARY"
          [leftIcon]="EIconName.CLOSE"
          (buttonClicked)="onCancel()">
        </admin-button>
      </div>
      <div class="admin-popup__content">
        <div class="launch-body">
          <div class="launch-body__rocket">🚀</div>
          <p>Si lo deseas, puedes seleccionar una fecha de fin para informar a los evaluadores de cuál será la fecha límite disponible para realizar las evaluaciones.</p>
          <div class="launch-body__date-field">
            <admin-datepicker
              id="launch-end-date"
              label="Fecha estimada de fin"
              placeholder="DD/MM/YYYY"
              (dateChange)="endDate = $event">
            </admin-datepicker>
          </div>
        </div>
      </div>
    </div>
    <div class="admin-popup__actions light">
      <admin-button
        text="Cancelar"
        [buttonType]="EButtonButtonType.MATFLATBUTTON"
        [color]="EButtonColor.PRIMARY"
        (buttonClicked)="onCancel()">
      </admin-button>
      <admin-button
        text="Lanzar"
        [buttonType]="EButtonButtonType.MATFLATBUTTON"
        [color]="EButtonColor.ACCENT"
        (buttonClicked)="onLaunch()">
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
        max-width: 380px;
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

    .launch-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      &__rocket {
        font-size: 72px;
        line-height: 1;
        margin-bottom: 16px;
        user-select: none;
      }

      p {
        margin: 0 0 24px;
        max-width: 380px;
      }

      &__date-field {
        width: 260px;
        text-align: left;
      }
    }
  `],
})
export class LaunchEvaluationDialogComponent {
  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  endDate: Date | null = null;

  constructor(private dialogRef: MatDialogRef<LaunchEvaluationDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onLaunch(): void {
    this.dialogRef.close({ endDate: this.endDate });
  }
}

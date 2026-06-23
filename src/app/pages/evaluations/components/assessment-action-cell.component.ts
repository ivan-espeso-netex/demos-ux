import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent, EButtonButtonType } from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-assessment-action-cell',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule, ButtonComponent],
  template: `
    <admin-button
      [text]="label"
      [buttonType]="EButtonButtonType.MATSTROKEDBUTTON"
      (buttonClicked)="onMainClick()">
    </admin-button>

    <ng-container *ngIf="rowData?.status === 'READY' && !isLaunched">
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="onAction && onAction('link', rowData)">
          <mat-icon>link</mat-icon>
          Vincular otro assesment
        </button>
      </mat-menu>
    </ng-container>
  `,
  styles: [`:host { display: flex; align-items: center; gap: 4px; }`],
})
export class AssessmentActionCellComponent {
  @Input() rowData: any;
  @Input() isLaunched = false;
  @Input() onAction?: (action: string, row: any) => void;
  readonly EButtonButtonType = EButtonButtonType;

  get label(): string {
    return this.rowData?.status === 'READY' ? 'View' : 'Create';
  }

  onMainClick(): void {
    const action = this.rowData?.status === 'READY' ? 'view' : 'create';
    this.onAction && this.onAction(action, this.rowData);
  }
}

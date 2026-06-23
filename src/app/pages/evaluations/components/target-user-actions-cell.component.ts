import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-target-user-actions-cell',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule],
  template: `
    <ng-container *ngIf="!isLaunched">
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="onAddEvaluator && onAddEvaluator(rowData)">
          <mat-icon>person_add</mat-icon>
          Add evaluator
        </button>
        <button mat-menu-item (click)="onRemove && onRemove(rowData)">
          <mat-icon>delete</mat-icon>
          Remove
        </button>
      </mat-menu>
    </ng-container>
  `,
})
export class TargetUserActionsCellComponent {
  @Input() rowData: any;
  @Input() isLaunched = false;
  @Input() onAddEvaluator?: (user: any) => void;
  @Input() onRemove?: (user: any) => void;
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-assessment-config-actions-cell',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule, MatTooltipModule],
  template: `
    <ng-container>
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="onEdit && onEdit(rowData)">
          <mat-icon>edit</mat-icon>
          Edit assessment
        </button>
        <button mat-menu-item (click)="onViewUsage && onViewUsage(rowData)">
          <mat-icon>visibility</mat-icon>
          View where it is used
        </button>
        <span [matTooltip]="inUse ? 'Cannot delete: this assessment is being used' : ''">
          <button mat-menu-item [disabled]="inUse" (click)="onDelete && onDelete(rowData)">
            <mat-icon>delete</mat-icon>
            Delete assessment
          </button>
        </span>
      </mat-menu>
    </ng-container>
  `,
})
export class AssessmentConfigActionsCellComponent {
  @Input() rowData: any;
  @Input() onEdit?: (row: any) => void;
  @Input() onViewUsage?: (row: any) => void;
  @Input() onDelete?: (row: any) => void;

  get inUse(): boolean {
    return (this.rowData?.usedInEvaluationIds?.length ?? 0) > 0;
  }
}

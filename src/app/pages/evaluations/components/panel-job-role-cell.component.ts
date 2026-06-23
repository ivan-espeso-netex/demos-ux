import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, EIconName, EIconColor } from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-panel-job-role-cell',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="job-role-cell" [class.job-role-cell--warn]="!rowData?.jobRole">
      <admin-icon
        *ngIf="!rowData?.jobRole"
        [icon]="EIconName.REPORT_PROBLEM"
        [color]="EIconColor.WARN">
      </admin-icon>
      <span>{{ rowData?.jobRole || 'Not assigned' }}</span>
    </div>
  `,
  styles: [`
    .job-role-cell {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .job-role-cell--warn span {
      color: #f57c00;
    }
  `],
})
export class PanelJobRoleCellComponent {
  @Input() rowData: any;

  readonly EIconName = EIconName;
  readonly EIconColor = EIconColor;
}

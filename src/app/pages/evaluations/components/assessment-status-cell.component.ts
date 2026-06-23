import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent, ELabelColor } from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-assessment-status-cell',
  standalone: true,
  imports: [CommonModule, LabelComponent],
  template: `
    <admin-label
      [text]="rowData?.status"
      [color]="rowData?.status === 'READY' ? ELabelColor.SUCCESS : ELabelColor.WARN">
    </admin-label>
  `,
})
export class AssessmentStatusCellComponent {
  @Input() rowData: any;
  readonly ELabelColor = ELabelColor;
}

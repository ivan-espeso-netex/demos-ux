import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent, ELabelColor } from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-evaluation-status-cell',
  standalone: true,
  imports: [CommonModule, LabelComponent],
  template: `
    <admin-label [text]="rowData?.status" [color]="statusColor"></admin-label>
  `,
})
export class EvaluationStatusCellComponent {
  @Input() rowData: any;

  get statusColor(): ELabelColor {
    switch (this.rowData?.status) {
      case 'IN PROGRESS': return ELabelColor.ACCENT;
      case 'ENDING': return ELabelColor.SUCCESS;
      case 'COMPLETED': return ELabelColor.PRIMARY;
      default: return ELabelColor.BLACK;
    }
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent, ELabelColor } from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-target-user-progress-cell',
  standalone: true,
  imports: [CommonModule, LabelComponent],
  template: `<admin-label [text]="rowData?.progress || 'NOT STARTED'" [color]="labelColor"></admin-label>`,
})
export class TargetUserProgressCellComponent {
  @Input() rowData: any;

  get labelColor(): ELabelColor {
    switch (this.rowData?.progress) {
      case 'IN PROGRESS': return ELabelColor.ACCENT;
      case 'COMPLETED':
      case 'FINISHED': return ELabelColor.SUCCESS;
      default: return ELabelColor.BLACK;
    }
  }
}

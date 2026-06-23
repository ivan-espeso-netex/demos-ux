import { Component, Input } from '@angular/core';
import { LabelComponent, ELabelColor } from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-assessment-cell',
  standalone: true,
  imports: [LabelComponent],
  template: `<admin-label [text]="rowData?.assessment || 'NOT CREATED'" [color]="labelColor"></admin-label>`,
})
export class AssessmentCellComponent {
  @Input() rowData: any;

  get labelColor(): ELabelColor {
    switch (this.rowData?.assessment) {
      case 'CREATED': return ELabelColor.ACCENT;
      case 'COMPLETED': return ELabelColor.SUCCESS;
      default: return ELabelColor.WARN;
    }
  }
}

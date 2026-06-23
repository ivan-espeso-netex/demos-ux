import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent, ELabelColor } from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-assessment-usage-cell',
  standalone: true,
  imports: [CommonModule, LabelComponent],
  template: `
    <admin-label
      [text]="inUse ? 'In use' : 'Not in use'"
      [color]="inUse ? ELabelColor.SUCCESS : ELabelColor.BLACK">
    </admin-label>
  `,
})
export class AssessmentUsageCellComponent {
  @Input() rowData: any;
  readonly ELabelColor = ELabelColor;

  get inUse(): boolean {
    return (this.rowData?.usedInEvaluationIds?.length ?? 0) > 0;
  }
}

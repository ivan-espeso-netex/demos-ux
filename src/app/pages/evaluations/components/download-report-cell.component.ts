import { Component, Input } from '@angular/core';
import { ButtonComponent, EButtonButtonType, EIconName } from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-download-report-cell',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <admin-button
      text="Download report"
      [buttonType]="EButtonButtonType.MATSTROKEDBUTTON"
      [leftIcon]="EIconName.DOWNLOAD"
      [disabled]="isDisabled">
    </admin-button>
  `,
})
export class DownloadReportCellComponent {
  @Input() rowData: any;

  readonly EButtonButtonType = EButtonButtonType;
  readonly EIconName = EIconName;

  get isDisabled(): boolean {
    if (!this.rowData) return true;
    const status = this.rowData.evaluacion || this.rowData.evaluationStatus;
    return status !== 'COMPLETED' && status !== 'FINISHED';
  }
}

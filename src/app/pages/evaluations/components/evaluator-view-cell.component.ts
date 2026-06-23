import { Component, Input } from '@angular/core';
import { ButtonComponent, EButtonButtonType } from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-evaluator-view-cell',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <admin-button
      text="View evaluation"
      [buttonType]="EButtonButtonType.MATSTROKEDBUTTON">
    </admin-button>
  `,
})
export class EvaluatorViewCellComponent {
  @Input() rowData: any;
  readonly EButtonButtonType = EButtonButtonType;
}

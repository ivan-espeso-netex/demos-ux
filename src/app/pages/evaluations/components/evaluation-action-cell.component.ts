import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  SplitButtonComponent,
  ESplitButtonColor,
  ISplitButtonOption,
  EIconName,
} from '@netexknowledge/ux-admin-components';
import { EvaluationsService } from '../../../services/evaluations.service';

@Component({
  selector: 'app-evaluation-action-cell',
  standalone: true,
  imports: [CommonModule, SplitButtonComponent],
  template: `
    <admin-split-button
      label="Open"
      [color]="ESplitButtonColor.PRIMARY"
      [options]="options"
      (onBtnClick)="onOpen()"
      (onDropdownClick)="onDropdownOption($event)">
    </admin-split-button>
  `,
})
export class EvaluationActionCellComponent {
  @Input() rowData: any;

  readonly ESplitButtonColor = ESplitButtonColor;

  options: ISplitButtonOption[] = [
    { id: 'edit', text: 'Edit', icon: EIconName.EDIT },
    { id: 'delete', text: 'Delete', icon: EIconName.DELETE },
  ];

  constructor(private router: Router, private evaluationsService: EvaluationsService) {}

  onOpen(): void {
    this.router.navigate(['/evaluations', this.rowData?.id]);
  }

  onDropdownOption(option: ISplitButtonOption): void {
    if (option.id === 'edit') {
      this.router.navigate(['/evaluations', this.rowData?.id, 'edit']);
    } else if (option.id === 'delete') {
      this.evaluationsService.delete(this.rowData?.id);
    }
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  SplitButtonComponent,
  ESplitButtonColor,
  ESplitButtonStatus,
  ESplitButtonMode,
  ISplitButtonOption,
  EIconName,
} from '@netexknowledge/ux-admin-components';
import { EvaluationsService, IEvaluation } from '../../../services/evaluations.service';

@Component({
  selector: 'app-evaluation-action-cell',
  standalone: true,
  imports: [CommonModule, SplitButtonComponent],
  template: `
    <admin-split-button
      label="Open"
      [color]="ESplitButtonColor.PRIMARY"
      [status]="ESplitButtonStatus.ENABLED"
      [mode]="ESplitButtonMode.LIGHT"
      [options]="options"
      (onBtnClick)="onOpen()"
      (onDropdownClick)="onDropdownOption($event)">
    </admin-split-button>
  `,
})
export class EvaluationActionCellComponent {
  readonly ESplitButtonColor = ESplitButtonColor;
  readonly ESplitButtonStatus = ESplitButtonStatus;
  readonly ESplitButtonMode = ESplitButtonMode;

  options: ISplitButtonOption[] = [];

  private _rowData: IEvaluation | undefined;

  @Input()
  set rowData(value: IEvaluation) {
    this._rowData = value;
    this.options = this._buildOptions(value);
  }
  get rowData(): IEvaluation | undefined {
    return this._rowData;
  }

  constructor(private router: Router, private evaluationsService: EvaluationsService) {}

  private _buildOptions(row: IEvaluation): ISplitButtonOption[] {
    if (row?.status === 'DRAFT') {
      return [
        { id: 'launch', text: 'Launch evaluation', icon: EIconName.SEND },
        { id: 'edit',   text: 'Edit details',       icon: EIconName.EDIT },
        { id: 'delete', text: 'Delete',              icon: EIconName.DELETE },
      ];
    }
    return [
      { id: 'edit',   text: 'Edit details', icon: EIconName.EDIT },
      { id: 'delete', text: 'Delete',       icon: EIconName.DELETE },
    ];
  }

  onOpen(): void {
    this.router.navigate(['/evaluations', this._rowData?.id]);
  }

  onDropdownOption(option: ISplitButtonOption): void {
    if (option.id === 'launch') {
      this.evaluationsService.update(this._rowData!.id, { status: 'IN PROGRESS' });
    } else if (option.id === 'edit') {
      this.router.navigate(['/evaluations', this._rowData?.id, 'edit']);
    } else if (option.id === 'delete') {
      this.evaluationsService.delete(this._rowData!.id);
    }
  }
}

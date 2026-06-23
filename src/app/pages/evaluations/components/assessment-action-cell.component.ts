import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SplitButtonComponent,
  ESplitButtonColor,
  ESplitButtonStatus,
  ESplitButtonMode,
  ISplitButtonOption,
  EIconName,
} from '@netexknowledge/ux-admin-components';

@Component({
  selector: 'app-assessment-action-cell',
  standalone: true,
  imports: [CommonModule, SplitButtonComponent],
  template: `
    <admin-split-button
      [label]="isReady ? 'View' : 'Create'"
      [color]="isReady ? ESplitButtonColor.PRIMARY : ESplitButtonColor.ACCENT"
      [status]="ESplitButtonStatus.ENABLED"
      [mode]="ESplitButtonMode.LIGHT"
      [options]="options"
      (onBtnClick)="onMain()"
      (onDropdownClick)="onOption($event)">
    </admin-split-button>
  `,
  styles: [`:host { display: flex; justify-content: flex-end; width: 100%; }`],
})
export class AssessmentActionCellComponent {
  readonly ESplitButtonColor = ESplitButtonColor;
  readonly ESplitButtonStatus = ESplitButtonStatus;
  readonly ESplitButtonMode = ESplitButtonMode;

  @Input() onAction?: (action: string, row: any) => void;

  private _rowData: any;
  private _isLaunched = false;

  // Las options se construyen UNA vez al recibir la fila/estado (no en el template):
  // admin-split-button no abre el dropdown si 'options' es un getter que cambia de
  // referencia en cada detección de cambios.
  options: ISplitButtonOption[] = [];

  @Input()
  set rowData(value: any) {
    this._rowData = value;
    this.options = this.buildOptions();
  }
  get rowData(): any {
    return this._rowData;
  }

  @Input()
  set isLaunched(value: boolean) {
    this._isLaunched = value;
    this.options = this.buildOptions();
  }
  get isLaunched(): boolean {
    return this._isLaunched;
  }

  get isReady(): boolean {
    return this._rowData?.status === 'READY';
  }

  private buildOptions(): ISplitButtonOption[] {
    // Una vez lanzada la evaluación no se permite vincular/recrear assessments.
    if (this._isLaunched) return [];
    if (this._rowData?.status === 'READY') {
      return [{ id: 'link', text: 'Link another assessment', icon: EIconName.LINK }];
    }
    return [];
  }

  onMain(): void {
    this.onAction?.(this.isReady ? 'view' : 'create', this._rowData);
  }

  onOption(option: ISplitButtonOption): void {
    this.onAction?.(option.id, this._rowData);
  }
}

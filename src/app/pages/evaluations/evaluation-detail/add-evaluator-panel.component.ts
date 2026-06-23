import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  SearchboxComponent,
  TableComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
  IColumnDefinition,
} from '@netexknowledge/ux-admin-components';
import { EvaluatorsService, IAvailableEvaluator } from '../../../services/evaluators.service';
import { UserNameCellComponent } from '../components/user-name-cell.component';

@Component({
  selector: 'app-add-evaluator-panel',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SearchboxComponent, TableComponent],
  templateUrl: './add-evaluator-panel.component.html',
  styleUrl: './add-evaluator-panel.component.scss',
})
export class AddEvaluatorPanelComponent {
  @Input() availableEvaluators: IAvailableEvaluator[] = [];
  @Output() evaluatorsAdded = new EventEmitter<IAvailableEvaluator[]>();
  @Output() closed = new EventEmitter<void>();

  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;

  searchValue = '';
  selectedEvaluators: IAvailableEvaluator[] = [];

  columnDefinition: IColumnDefinition[] = [
    {
      name: 'name',
      displayName: 'Name',
      visible: true,
      disableSorting: true,
      minWidth: '220px',
      columnType: 'component',
      component: { selector: UserNameCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    { name: 'username', displayName: 'User', visible: true, disableSorting: true },
  ];

  get filteredEvaluators(): IAvailableEvaluator[] {
    if (!this.searchValue) return this.availableEvaluators;
    const term = this.searchValue.toLowerCase();
    return this.availableEvaluators.filter(
      e => e.name.toLowerCase().includes(term) || e.username.toLowerCase().includes(term)
    );
  }

  onSelectionChange(rows: any[]): void {
    this.selectedEvaluators = rows as IAvailableEvaluator[];
  }

  onAdd(): void {
    if (this.selectedEvaluators.length > 0) {
      this.evaluatorsAdded.emit(this.selectedEvaluators);
    }
  }

  onClose(): void {
    this.closed.emit();
  }
}

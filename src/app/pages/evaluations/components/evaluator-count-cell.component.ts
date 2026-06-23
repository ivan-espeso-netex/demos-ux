import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evaluator-count-cell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="evaluator-count"
      [class.evaluator-count--clickable]="!!onOpen"
      (click)="onOpen && onOpen(rowData)">
      {{ rowData?.evaluatedCount }}/{{ rowData?.assignedCount }}
    </span>
  `,
  styles: [`
    .evaluator-count {
      font-weight: 500;
      font-size: 14px;
      color: #424242;
    }
    .evaluator-count--clickable {
      color: #3f51b5;
      cursor: pointer;
      text-decoration: underline;
    }
  `],
})
export class EvaluatorCountCellComponent {
  @Input() rowData: any;
  @Input() onOpen?: (rowData: any) => void;
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evaluation-link-cell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="evaluation-link"
      [class.evaluation-link--clickable]="!!onOpen"
      (click)="onOpen && onOpen(rowData)">
      {{ rowData?.name }}
    </span>
  `,
  styles: [`
    .evaluation-link {
      font-size: 14px;
      color: #424242;
    }
    .evaluation-link--clickable {
      color: #3f51b5;
      cursor: pointer;
    }
  `],
})
export class EvaluationLinkCellComponent {
  @Input() rowData: any;
  @Input() onOpen?: (row: any) => void;
}

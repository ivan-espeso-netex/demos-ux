import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, EIconName, EIconColor } from '@netexknowledge/ux-admin-components';
import { EvaluatorsService } from '../../../services/evaluators.service';

@Component({
  selector: 'app-evaluators-cell',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="eval-cell" (click)="onOpen && onOpen(rowData, field)">
      <admin-icon *ngIf="count === 0" [icon]="EIconName.REPORT_PROBLEM" [color]="EIconColor.WARN"></admin-icon>
      <span class="eval-cell__link">{{ label }}</span>
    </div>
  `,
  styles: [`
    .eval-cell {
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }
    .eval-cell__link {
      color: #3f51b5;
      font-size: 14px;
    }
  `],
})
export class EvaluatorsCellComponent {
  @Input() rowData: any;
  @Input() field: 'superiorsEvals' | 'pairsEvals' = 'superiorsEvals';
  @Input() evaluationId = 0;
  @Input() onOpen?: (user: any, field: 'superiorsEvals' | 'pairsEvals') => void;

  readonly EIconName = EIconName;
  readonly EIconColor = EIconColor;

  constructor(private evaluatorsService: EvaluatorsService) {}

  private get serviceField(): 'superiors' | 'pairs' {
    return this.field === 'superiorsEvals' ? 'superiors' : 'pairs';
  }

  get count(): number {
    return this.evaluatorsService.getEvaluatorCount(this.evaluationId, this.rowData?.id ?? 0, this.serviceField);
  }

  get label(): string {
    return `${this.count}/2 evaluations`;
  }
}

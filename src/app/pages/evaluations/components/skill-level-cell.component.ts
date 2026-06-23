import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-level-cell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skill-level">
      <div class="skill-level__bar">
        <div
          *ngFor="let seg of segments; let i = index"
          class="skill-level__segment"
          [class.skill-level__segment--filled]="i < (rowData?.levelValue || 0)">
        </div>
      </div>
      <span class="skill-level__label">{{ rowData?.level }}</span>
    </div>
  `,
  styles: [`
    .skill-level {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .skill-level__bar {
      display: flex;
      gap: 3px;
    }

    .skill-level__segment {
      width: 28px;
      height: 6px;
      border-radius: 3px;
      background: #e0e0e0;

      &--filled {
        background: #3f51b5;
      }
    }

    .skill-level__label {
      font-size: 13px;
      color: #212121;
      white-space: nowrap;
    }
  `],
})
export class SkillLevelCellComponent {
  @Input() rowData: any;
  readonly segments = [0, 1, 2, 3]; // 4 segments (Basic, Medium, Advanced, Expert)
}

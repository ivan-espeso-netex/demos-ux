import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-name-cell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="user-name-cell" [class.user-name-cell--clickable]="!!onOpen" (click)="onOpen && onOpen(rowData)">
      <div class="user-name-cell__avatar" [style.background-color]="avatarColor">
        {{ initials }}
      </div>
      <span class="user-name-cell__name" [class.user-name-cell__name--link]="!!onOpen">{{ rowData?.name }}</span>
    </div>
  `,
  styles: [`
    .user-name-cell {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .user-name-cell--clickable {
      cursor: pointer;
    }
    .user-name-cell__avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      font-weight: 600;
      flex-shrink: 0;
    }
    .user-name-cell__name {
      font-size: 14px;
    }
    .user-name-cell__name--link {
      color: #3f51b5;
    }
  `],
})
export class UserNameCellComponent {
  @Input() rowData: any;
  @Input() onOpen?: (rowData: any) => void;

  private readonly avatarColors = ['#5c6bc0', '#26a69a', '#ef5350', '#ab47bc', '#26c6da', '#ff7043', '#78909c'];

  get initials(): string {
    const name = this.rowData?.name || '';
    const parts = name.trim().split(' ');
    return parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : name.substring(0, 2).toUpperCase();
  }

  get avatarColor(): string {
    const name = this.rowData?.name || '';
    const index = name.charCodeAt(0) % this.avatarColors.length;
    return this.avatarColors[index];
  }
}

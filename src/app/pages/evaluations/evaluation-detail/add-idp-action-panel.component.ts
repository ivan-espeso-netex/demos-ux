import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ButtonComponent,
  InputComponent,
  TextareaComponent,
  SelectComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
  ISelectOption,
} from '@netexknowledge/ux-admin-components';
import { IIdpAction } from '../../../services/idp.service';

@Component({
  selector: 'app-add-idp-action-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, InputComponent, TextareaComponent, SelectComponent],
  templateUrl: './add-idp-action-panel.component.html',
  styleUrl: './add-idp-action-panel.component.scss',
})
export class AddIdpActionPanelComponent implements OnInit {
  @Input() action: IIdpAction | null = null;
  @Output() actionSaved = new EventEmitter<Omit<IIdpAction, 'id'>>();
  @Output() closed = new EventEmitter<void>();

  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;

  title = '';
  objective = '';
  timeline = '';
  kpis: string[] = [''];

  formSubmitted = false;

  timelineOptions: ISelectOption[] = [
    { value: '3 months', viewValue: '3 months' },
    { value: '6 months', viewValue: '6 months' },
    { value: '1 year', viewValue: '1 year' },
    { value: '18 months', viewValue: '18 months' },
    { value: '2 years', viewValue: '2 years' },
  ];

  get isEditMode(): boolean {
    return !!this.action;
  }

  get panelTitle(): string {
    return this.isEditMode ? 'Edit IDP action' : 'Add IDP action';
  }

  get ctaLabel(): string {
    return this.isEditMode ? 'Save changes' : 'Add to IDP';
  }

  get isTitleValid(): boolean {
    return this.title.trim().length > 0;
  }

  get isObjectiveValid(): boolean {
    return this.objective.trim().length > 0;
  }

  get isTimelineValid(): boolean {
    return this.timeline.trim().length > 0;
  }

  get titleError(): string | null {
    return this.formSubmitted && !this.isTitleValid ? 'This field is required' : null;
  }

  get objectiveError(): string | null {
    return this.formSubmitted && !this.isObjectiveValid ? 'This field is required' : null;
  }

  ngOnInit(): void {
    if (this.action) {
      this.title = this.action.title;
      this.objective = this.action.objective;
      this.timeline = this.action.timeline;
      this.kpis = this.action.kpis.length > 0 ? [...this.action.kpis] : [''];
    }
  }

  addKpi(): void {
    this.kpis = [...this.kpis, ''];
  }

  removeKpi(index: number): void {
    this.kpis = this.kpis.filter((_, i) => i !== index);
    if (this.kpis.length === 0) this.kpis = [''];
  }

  trackByIndex(index: number): number {
    return index;
  }

  onSave(): void {
    this.formSubmitted = true;
    if (!this.isTitleValid || !this.isObjectiveValid || !this.isTimelineValid) return;

    const filteredKpis = this.kpis.map(k => k.trim()).filter(k => k.length > 0);

    this.actionSaved.emit({
      title: this.title.trim(),
      objective: this.objective.trim(),
      timeline: this.timeline,
      kpis: filteredKpis,
    });
  }
}

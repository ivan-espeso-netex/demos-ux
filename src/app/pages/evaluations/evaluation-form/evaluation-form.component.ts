import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ButtonComponent,
  InputComponent,
  TextareaComponent,
  SelectComponent,
  DatepickerComponent,
  CheckboxComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
  ISelectOption,
} from '@netexknowledge/ux-admin-components';
import { EvaluationsService } from '../../../services/evaluations.service';

@Component({
  selector: 'app-evaluation-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    DatepickerComponent,
    CheckboxComponent,
  ],
  templateUrl: './evaluation-form.component.html',
  styleUrl: './evaluation-form.component.scss',
})
export class EvaluationFormComponent implements OnInit {
  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;

  isEditMode = false;
  editId: number | null = null;
  formSubmitted = false;

  evaluationName = '';
  description = '';
  evaluationType = '';
  startDate = '';
  dateInit = '';
  dateEnd = '';
  notifyEvaluator = false;
  notifyUser = false;
  allowManagerActionPlan = false;

  evaluationTypeOptions: ISelectOption[] = [
    { value: '0', viewValue: '0º (Autoevaluation)' },
    { value: '90', viewValue: '90º (Superior)' },
    { value: '180', viewValue: '180º (Superior & pairs)' },
    { value: '360', viewValue: '360º (Superior, pairs & subordinates)' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private evaluationsService: EvaluationsService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.editId = Number(id);
      const evaluation = this.evaluationsService.getById(this.editId);
      if (evaluation) {
        this.evaluationName = evaluation.name;
        this.description = evaluation.description || '';
        this.evaluationType = evaluation.evaluationType;
        this.startDate = evaluation.startDate;
        // Fallback a las fechas previas para evaluaciones creadas antes del cambio
        this.dateInit = (evaluation.dateInit && evaluation.dateInit !== '-') ? evaluation.dateInit : evaluation.startDate;
        this.dateEnd = (evaluation.dateEnd && evaluation.dateEnd !== '-') ? evaluation.dateEnd : evaluation.endDate;
        this.notifyEvaluator = evaluation.notifyEvaluator || false;
        this.notifyUser = evaluation.notifyUser || false;
        this.allowManagerActionPlan = evaluation.allowManagerActionPlan || false;
      }
    }
  }

  get title(): string {
    return this.isEditMode ? 'Edit evaluation' : 'Evaluation details';
  }

  get isNameValid(): boolean { return this.evaluationName.trim().length > 0; }
  get isTypeValid(): boolean { return this.evaluationType.length > 0; }
  get isStartDateValid(): boolean { return this.startDate.length > 0; }
  get isDateInitValid(): boolean { return this.dateInit.length > 0; }
  get isDateEndValid(): boolean { return this.dateEnd.length > 0; }

  get nameError(): string | null {
    return this.formSubmitted && !this.isNameValid ? 'Evaluation name is required' : null;
  }
  get typeError(): string | null {
    return this.formSubmitted && !this.isTypeValid ? 'Evaluation type is required' : null;
  }
  get startDateError(): string | null {
    return this.formSubmitted && !this.isStartDateValid ? 'Start date is required' : null;
  }
  get dateInitError(): string | null {
    return this.formSubmitted && !this.isDateInitValid ? 'Date init is required' : null;
  }
  get dateEndError(): string | null {
    return this.formSubmitted && !this.isDateEndValid ? 'Date end is required' : null;
  }

  onNameChange(event: any): void {
    this.evaluationName = event?.value ?? event?.target?.value ?? event ?? '';
  }

  onDescriptionChange(event: any): void {
    this.description = event?.value ?? event?.target?.value ?? event ?? '';
  }

  onTypeChange(event: any): void {
    this.evaluationType = event?.value ?? event ?? '';
  }

  onStartDateChange(event: any): void {
    const date = event?.value ?? event;
    this.startDate = date ? this.formatDate(date) : '';
  }

  onDateInitChange(event: any): void {
    const date = event?.value ?? event;
    this.dateInit = date ? this.formatDate(date) : '';
  }

  onDateEndChange(event: any): void {
    const date = event?.value ?? event;
    this.dateEnd = date ? this.formatDate(date) : '';
  }

  onNotifyEvaluatorChange(event: any): void {
    this.notifyEvaluator = event?.checked ?? event ?? false;
  }

  onNotifyUserChange(event: any): void {
    this.notifyUser = event?.checked ?? event ?? false;
  }

  onAllowManagerActionPlanChange(event: any): void {
    this.allowManagerActionPlan = event?.checked ?? event ?? false;
  }

  onClose(): void {
    this.navigateBack();
  }

  onCancel(): void {
    this.navigateBack();
  }

  onSave(): void {
    this.formSubmitted = true;
    if (!this.isNameValid || !this.isTypeValid || !this.isStartDateValid || !this.isDateInitValid || !this.isDateEndValid) {
      return;
    }

    const data = {
      name: this.evaluationName.trim(),
      description: this.description,
      evaluationType: this.evaluationType,
      startDate: this.startDate,
      endDate: this.dateEnd,
      dateInit: this.dateInit,
      dateEnd: this.dateEnd,
      notifyEvaluator: this.notifyEvaluator,
      notifyUser: this.notifyUser,
      allowManagerActionPlan: this.allowManagerActionPlan,
    };

    if (this.isEditMode && this.editId !== null) {
      this.evaluationsService.update(this.editId, data);
      this.router.navigate(['/evaluations', this.editId]);
    } else {
      const created = this.evaluationsService.create(data);
      this.router.navigate(['/evaluations', created.id]);
    }
  }

  private navigateBack(): void {
    if (this.isEditMode && this.editId !== null) {
      this.router.navigate(['/evaluations', this.editId]);
    } else {
      this.router.navigate(['/evaluations']);
    }
  }

  private formatDate(date: Date | string): string {
    if (typeof date === 'string') return date;
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    return `${d.getDate()}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  }
}

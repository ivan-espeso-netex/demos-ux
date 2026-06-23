import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LaunchEvaluationDialogComponent } from './launch-evaluation-dialog.component';
import { LaunchSuccessDialogComponent } from './launch-success-dialog.component';
import { CannotLaunchDialogComponent } from './cannot-launch-dialog.component';
import {
  ButtonComponent,
  LabelComponent,
  TabsComponent,
  KpiCardComponent,
  CircularProgressBarComponent,
  EButtonButtonType,
  EButtonColor,
  EIconName,
  ELabelColor,
  EKpiCardColor,
  EIconColor,
  ECircularProgressBarColor,
  ITabsLink,
} from '@netexknowledge/ux-admin-components';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { EvaluationsService, IEvaluation } from '../../../services/evaluations.service';
import { AssessmentsService } from '../../../services/assessments.service';
import { TargetUsersService } from '../../../services/target-users.service';
import { TargetUsersTabComponent } from './target-users-tab.component';
import { EvaluatorsTabComponent } from './evaluators-tab.component';
import { AssessmentTabComponent } from './assessment-tab.component';

@Component({
  selector: 'app-evaluation-detail',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    LabelComponent,
    TabsComponent,
    KpiCardComponent,
    CircularProgressBarComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TargetUsersTabComponent,
    EvaluatorsTabComponent,
    AssessmentTabComponent,
  ],
  templateUrl: './evaluation-detail.component.html',
  styleUrl: './evaluation-detail.component.scss',
})
export class EvaluationDetailComponent implements OnInit {
  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  readonly ELabelColor = ELabelColor;
  readonly EKpiCardColor = EKpiCardColor;
  readonly EIconColor = EIconColor;
  readonly ECircularProgressBarColor = ECircularProgressBarColor;

  selectedTabIndex = 0;
  evaluationId = 0;
  evaluation: IEvaluation | undefined;


  tabs: ITabsLink[] = [
    { id: 'details', text: 'Evaluation details', active: true },
    { id: 'target-users', text: 'Target users' },
    { id: 'evaluators', text: 'Evaluators' },
    { id: 'assessment', text: 'Assesment' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private evaluationsService: EvaluationsService,
    private assessmentsService: AssessmentsService,
    private targetUsersService: TargetUsersService,
    private dialog: MatDialog,
  ) {}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.evaluationId = id;
    this.evaluation = this.evaluationsService.getById(id);
    if (this.evaluation) {
      this.breadcrumbService.setEvaluationDetail(this.evaluation.name);
    }
  }

  get notifyEvaluatorText(): string {
    return this.evaluation?.notifyEvaluator ? 'Yes' : 'None';
  }

  get notifyUserText(): string {
    return this.evaluation?.notifyUser ? 'Yes' : 'None';
  }

  onTabClicked(event: { link: ITabsLink; selectedIndex: number }): void {
    this.selectedTabIndex = event.selectedIndex;
  }

  onLaunch(): void {
    const jobRoles = this.targetUsersService.getTargetUsers(this.evaluationId).map(u => u.jobRole);
    const allReady = this.assessmentsService.allAssessmentsReady(
      this.evaluationId,
      jobRoles,
      this.evaluation?.evaluationType || '180',
    );

    if (!allReady) {
      this.dialog.open(CannotLaunchDialogComponent, { width: '480px' });
      return;
    }

    const ref = this.dialog.open(LaunchEvaluationDialogComponent, { width: '560px' });
    ref.afterClosed().subscribe((result: { endDate: Date | null } | null) => {
      if (result) {
        this.evaluationsService.update(this.evaluationId, {
          status: 'IN PROGRESS',
          ...(result.endDate ? { endDate: new Date(result.endDate).toLocaleDateString('en-GB') } : {}),
        });
        this.evaluation = this.evaluationsService.getById(this.evaluationId);
        this.dialog.open(LaunchSuccessDialogComponent, {
          width: '560px',
          data: { startDate: this.evaluation?.startDate ?? '-' },
        });
      }
    });
  }

  onEdit(): void {
    this.router.navigate(['/evaluations', this.evaluationId, 'edit']);
  }

  onClose(): void {
    this.evaluationsService.update(this.evaluationId, { status: 'CLOSED' });
    this.evaluation = this.evaluationsService.getById(this.evaluationId);
  }

  onDelete(): void {
    this.evaluationsService.delete(this.evaluationId);
    this.router.navigate(['/evaluations']);
  }

}

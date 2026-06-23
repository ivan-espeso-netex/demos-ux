import { Routes } from '@angular/router';
import { EvaluationsListComponent } from './pages/evaluations/evaluations-list.component';
import { EvaluationFormComponent } from './pages/evaluations/evaluation-form/evaluation-form.component';
import { EvaluationDetailComponent } from './pages/evaluations/evaluation-detail/evaluation-detail.component';
import { AssessmentsConfigComponent } from './pages/configuration/assessments/assessments-config.component';
import { TargetUserDetailPanelComponent } from './pages/evaluations/evaluation-detail/target-user-detail-panel.component';

export const routes: Routes = [
  { path: '', redirectTo: 'evaluations', pathMatch: 'full' },
  { path: 'evaluations/new', component: EvaluationFormComponent },
  { path: 'evaluations/:id/edit', component: EvaluationFormComponent },
  { path: 'evaluations/:id/users/:userId', component: TargetUserDetailPanelComponent },
  { path: 'evaluations/:id', component: EvaluationDetailComponent },
  { path: 'evaluations', component: EvaluationsListComponent },
  { path: 'configuration/assessments', component: AssessmentsConfigComponent },
];

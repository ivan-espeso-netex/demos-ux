import { Injectable, signal } from '@angular/core';
import { EToolbarBreadcrumbType, IAdminToolbarBreadcrumb } from '@netexknowledge/ux-admin-components';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private readonly _breadcrumbs = signal<IAdminToolbarBreadcrumb[]>([
    { breadcrumbType: EToolbarBreadcrumbType.ACTIVE, text: 'Evaluations' },
  ]);

  readonly breadcrumbs = this._breadcrumbs.asReadonly();

  setEvaluationsList(): void {
    this._breadcrumbs.set([
      { breadcrumbType: EToolbarBreadcrumbType.ACTIVE, text: 'Evaluations' },
    ]);
  }

  setAssessments(): void {
    this._breadcrumbs.set([
      { breadcrumbType: EToolbarBreadcrumbType.LINK, text: 'Configuration' },
      { breadcrumbType: EToolbarBreadcrumbType.ACTIVE, text: 'Assessments' },
    ]);
  }

  setEvaluationDetail(name: string): void {
    this._breadcrumbs.set([
      { breadcrumbType: EToolbarBreadcrumbType.LINK, text: 'Evaluations', routerLink: '/evaluations' },
      { breadcrumbType: EToolbarBreadcrumbType.ACTIVE, text: name },
    ]);
  }

  setTargetUserDetail(evaluationId: number, evaluationName: string, userName: string): void {
    this._breadcrumbs.set([
      { breadcrumbType: EToolbarBreadcrumbType.LINK, text: 'Evaluations', routerLink: '/evaluations' },
      { breadcrumbType: EToolbarBreadcrumbType.LINK, text: evaluationName, routerLink: `/evaluations/${evaluationId}` },
      { breadcrumbType: EToolbarBreadcrumbType.ACTIVE, text: userName },
    ]);
  }
}

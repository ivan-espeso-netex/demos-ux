import { Component, OnInit, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ButtonComponent,
  SearchboxComponent,
  TableComponent,
  TabsComponent,
  LabelComponent,
  KpiCardComponent,
  NoContentPlaceholdersComponent,
  EButtonButtonType,
  EButtonColor,
  EButtonType,
  EIconName,
  EKpiCardColor,
  EIconColor,
  IColumnDefinition,
  ITabsLink,
  INoContentPlaceholdersMenuBtnConfig,
  ImgEntityType,
  ELabelColor,
} from '@netexknowledge/ux-admin-components';
import { ITargetUser, TargetUsersService } from '../../../services/target-users.service';
import { EvaluationsService, IEvaluation } from '../../../services/evaluations.service';
import { EvaluatorsService, IAvailableEvaluator, IEvaluator } from '../../../services/evaluators.service';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import { UserNameCellComponent } from '../components/user-name-cell.component';
import { AssessmentCellComponent } from '../components/assessment-cell.component';
import { TargetUserProgressCellComponent } from '../components/target-user-progress-cell.component';
import { DownloadReportCellComponent } from '../components/download-report-cell.component';
import { SkillLevelCellComponent } from '../components/skill-level-cell.component';
import { AddEvaluatorPanelComponent } from './add-evaluator-panel.component';
import { IdpTabComponent } from './idp-tab.component';

@Component({
  selector: 'app-target-user-detail-panel',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SearchboxComponent,
    TableComponent,
    TabsComponent,
    LabelComponent,
    NoContentPlaceholdersComponent,
    KpiCardComponent,
    AddEvaluatorPanelComponent,
    IdpTabComponent,
  ],
  templateUrl: './target-user-detail-panel.component.html',
  styleUrl: './target-user-detail-panel.component.scss',
})
export class TargetUserDetailPanelComponent implements OnInit {
  evaluationId = 0;
  targetUser: ITargetUser | null = null;
  evaluation: IEvaluation | undefined;

  readonly EButtonButtonType = EButtonButtonType;
  readonly EButtonColor = EButtonColor;
  readonly EIconName = EIconName;
  readonly ELabelColor = ELabelColor;
  readonly EKpiCardColor = EKpiCardColor;
  readonly EIconColor = EIconColor;
  readonly ImgEntityType = ImgEntityType;

  selectedTabIndex = 0;
  searchValue = '';
  showAddEvaluatorPanel = false;

  addEvaluatorEmptyConfig: INoContentPlaceholdersMenuBtnConfig = {
    id: 'add-evaluator-empty',
    buttonType: EButtonButtonType.MATFLATBUTTON,
    type: EButtonType.BUTTON,
    color: EButtonColor.ACCENT,
    text: 'Add evaluator',
    leftIcon: EIconName.ADD,
    rightIcon: EIconName.ADD,
    disabled: false,
    options: [],
  };

  tabs: ITabsLink[] = [
    { id: 'evaluators', text: 'Evaluators', active: true },
    { id: 'results', text: 'Results' },
  ];

  ngOnInit(): void {
    this.evaluationId = Number(this.route.snapshot.paramMap.get('id'));
    const userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.evaluation = this.evaluationsService.getById(this.evaluationId);
    this.targetUser =
      this.targetUsersService
        .getTargetUsers(this.evaluationId, this.isLaunched)
        .find(u => u.id === userId) ?? null;

    if (this.evaluation && this.targetUser) {
      this.breadcrumbService.setTargetUserDetail(
        this.evaluationId,
        this.evaluation.name,
        this.targetUser.name,
      );
    }
    this._updateTabs();
  }

  onBack(): void {
    this.router.navigate(['/evaluations', this.evaluationId]);
  }

  private _updateTabs(): void {
    const base: ITabsLink[] = [
      { id: 'evaluators', text: 'Evaluators', active: this.selectedTabIndex === 0 },
      { id: 'results', text: 'Results', active: this.selectedTabIndex === 1 },
    ];
    if (this.isLaunched) {
      base.push({ id: 'idp', text: 'IDP', active: this.selectedTabIndex === 2 });
    }
    this.tabs = base;
  }

  // Pre-launch column definition (with Assessment column, add evaluator)
  columnDefinition: IColumnDefinition[] = [
    {
      name: 'name',
      displayName: 'Name',
      visible: true,
      disableSorting: true,
      minWidth: '200px',
      columnType: 'component',
      component: { selector: UserNameCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    { name: 'range', displayName: 'Range', visible: true, disableSorting: true, minWidth: '120px' },
    {
      name: 'assessment',
      displayName: 'Assessment',
      visible: true,
      disableSorting: true,
      minWidth: '150px',
      columnType: 'component',
      component: { selector: AssessmentCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    {
      name: 'evaluacion',
      displayName: 'Evaluation status',
      visible: true,
      disableSorting: true,
      minWidth: '160px',
      columnType: 'component',
      component: {
        selector: TargetUserProgressCellComponent as Type<any>,
        inputs: (row: any) => ({ rowData: { progress: row.evaluacion } }),
      },
    },
    { name: 'result', displayName: 'Result', visible: true, disableSorting: true, minWidth: '120px' },
    {
      name: 'download',
      displayName: '',
      visible: true,
      disableSorting: true,
      stickyEnd: true,
      columnType: 'component',
      component: { selector: DownloadReportCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
  ];

  // Post-launch column definition (results view)
  launchedColumnDefinition: IColumnDefinition[] = [
    {
      name: 'name',
      displayName: 'Name',
      visible: true,
      disableSorting: true,
      minWidth: '200px',
      columnType: 'component',
      component: { selector: UserNameCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    { name: 'range', displayName: 'Range', visible: true, disableSorting: true, minWidth: '120px' },
    {
      name: 'evaluationStatus',
      displayName: 'Evaluation status',
      visible: true,
      disableSorting: true,
      minWidth: '160px',
      columnType: 'component',
      component: {
        selector: TargetUserProgressCellComponent as Type<any>,
        inputs: (row: any) => ({ rowData: { progress: row.evaluationStatus } }),
      },
    },
    { name: 'result', displayName: 'Result', visible: true, disableSorting: true, minWidth: '100px' },
    {
      name: 'download',
      displayName: '',
      visible: true,
      disableSorting: true,
      stickyEnd: true,
      columnType: 'component',
      component: { selector: DownloadReportCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
  ];

  skillsColumnDefinition: IColumnDefinition[] = [
    { name: 'name', displayName: 'Skill name', visible: true, disableSorting: true, minWidth: '220px' },
    {
      name: 'level',
      displayName: 'Level',
      visible: true,
      disableSorting: true,
      minWidth: '220px',
      columnType: 'component',
      component: { selector: SkillLevelCellComponent as Type<any>, inputs: (row: any) => ({ rowData: row }) },
    },
    { name: 'required', displayName: 'Required', visible: true, disableSorting: true, minWidth: '120px' },
  ];

  constructor(
    private evaluatorsService: EvaluatorsService,
    private route: ActivatedRoute,
    private router: Router,
    private targetUsersService: TargetUsersService,
    private evaluationsService: EvaluationsService,
    private breadcrumbService: BreadcrumbService,
  ) {}

  get isLaunched(): boolean {
    return this.evaluation?.status === 'IN PROGRESS' || this.evaluation?.status === 'CLOSED' || this.evaluation?.status === 'COMPLETED';
  }

  get avatarColors(): string[] {
    return ['#5c6bc0', '#26a69a', '#ef5350', '#ab47bc', '#26c6da', '#ff7043', '#78909c'];
  }

  get avatarColor(): string {
    const name = this.targetUser?.name || '';
    return this.avatarColors[name.charCodeAt(0) % this.avatarColors.length];
  }

  get initials(): string {
    const name = this.targetUser?.name || '';
    const parts = name.trim().split(' ');
    return parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : name.substring(0, 2).toUpperCase();
  }

  get evaluationTypeName(): string {
    return this.evaluation?.evaluationTypeName || '-';
  }

  get evaluators(): IEvaluator[] {
    if (!this.targetUser) return [];
    return this.evaluatorsService.getAllEvaluators(this.evaluationId, this.targetUser.id);
  }

  get filteredEvaluators(): IEvaluator[] {
    if (!this.searchValue) return this.evaluators;
    const term = this.searchValue.toLowerCase();
    return this.evaluators.filter(e => e.name.toLowerCase().includes(term));
  }

  get launchedEvaluators() {
    if (!this.targetUser) return [];
    return this.evaluatorsService.getEvaluatorResults(this.evaluationId, this.targetUser.id);
  }

  get filteredLaunchedEvaluators() {
    if (!this.searchValue) return this.launchedEvaluators;
    const term = this.searchValue.toLowerCase();
    return this.launchedEvaluators.filter((e: any) => e.name.toLowerCase().includes(term));
  }

  get skillResults(): any[] {
    if (!this.targetUser) return [];
    return this.evaluatorsService.getSkillResults(this.evaluationId, this.targetUser.id);
  }

  get availableForPanel(): IAvailableEvaluator[] {
    if (!this.targetUser) return [];
    return this.evaluatorsService.getNotAddedEvaluators(this.evaluationId, this.targetUser.id, 'superiors');
  }

  onEvaluatorsAdded(evaluators: IAvailableEvaluator[]): void {
    if (!this.targetUser) return;
    this.evaluatorsService.addEvaluators(this.evaluationId, this.targetUser.id, 'superiors', evaluators);
    this.showAddEvaluatorPanel = false;
  }

  onTabClicked(event: { link: ITabsLink; selectedIndex: number }): void {
    this.selectedTabIndex = event?.selectedIndex ?? 0;
  }
}

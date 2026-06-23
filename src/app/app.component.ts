import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  SidenavComponent,
  SidenavButtonComponent,
  SidenavMenuButtonComponent,
  ToolbarComponent,
  EIconName,
  ESidenavButtonMode,
  ESidenavButtonSize,
  EToolbarPanelHeaderType,
  EToolbarBreadcrumbType,
} from '@netexknowledge/ux-admin-components';
import { BreadcrumbService } from './services/breadcrumb.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidenavComponent,
    SidenavButtonComponent,
    SidenavMenuButtonComponent,
    ToolbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sidenavOpened = true;

  readonly EIconName = EIconName;
  readonly ESidenavButtonMode = ESidenavButtonMode;
  readonly ESidenavButtonSize = ESidenavButtonSize;
  readonly EToolbarPanelHeaderType = EToolbarPanelHeaderType;
  readonly EToolbarBreadcrumbType = EToolbarBreadcrumbType;

  logoImgUrl = 'assets/logo-netex-cloud.svg';

  get breadcrumbs() {
    return this.breadcrumbService.breadcrumbs();
  }

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) {}

  onToggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  onToolbarClick(event: MouseEvent): void {
    // La librería no expone routerLink en el logo (modo MAIN); detectamos el clic
    // sobre el logo por su clase y navegamos al home (lista de evaluaciones).
    const target = event.target as HTMLElement;
    if (target.closest('.admin-toolbar__header--logo')) {
      this.router.navigate(['/']);
    }
  }
}

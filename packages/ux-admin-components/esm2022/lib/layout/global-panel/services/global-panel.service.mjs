import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./sidenav.service";
export class GlobalPanelService {
    constructor(sidenavService, injector) {
        this.sidenavService = sidenavService;
        this.injector = injector;
    }
    open(comp, data) {
        const dataInject = this.sidenavService.createData(!!data ? data : {});
        const compRef = this.sidenavService.attachComponent(comp, dataInject);
        this.sidenavService.open();
        return compRef;
    }
    close() {
        this.sidenavService.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: GlobalPanelService, deps: [{ token: i1.SidenavService }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: GlobalPanelService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: GlobalPanelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.SidenavService }, { type: i0.Injector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXBhbmVsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L2dsb2JhbC1wYW5lbC9zZXJ2aWNlcy9nbG9iYWwtcGFuZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWdCLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQzs7O0FBTW5FLE1BQU0sT0FBTyxrQkFBa0I7SUFFOUIsWUFDVyxjQUE4QixFQUM5QixRQUFrQjtRQURsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDO0lBRUwsSUFBSSxDQUFDLElBQXdCLEVBQUUsSUFBYTtRQUMzQyxNQUFNLFVBQVUsR0FBYSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FDMUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ2xCLENBQUM7UUFFRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUzQixPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQzsrR0FyQlcsa0JBQWtCO21IQUFsQixrQkFBa0IsY0FGbEIsTUFBTTs7NEZBRU4sa0JBQWtCO2tCQUg5QixVQUFVO21CQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWRlbmF2U2VydmljZSB9IGZyb20gJy4vc2lkZW5hdi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsUGFuZWxTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgc2lkZW5hdlNlcnZpY2U6IFNpZGVuYXZTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3Jcblx0KSB7IH1cblxuXHRvcGVuKGNvbXA6IENvbXBvbmVudFR5cGU8YW55PiwgZGF0YT86IE9iamVjdCk6IENvbXBvbmVudFJlZjxhbnk+IHtcblx0XHRjb25zdCBkYXRhSW5qZWN0OiBJbmplY3RvciA9IHRoaXMuc2lkZW5hdlNlcnZpY2UuY3JlYXRlRGF0YShcblx0XHRcdCEhZGF0YSA/IGRhdGEgOiB7fVxuXHRcdCk7XG5cblx0XHRjb25zdCBjb21wUmVmID0gdGhpcy5zaWRlbmF2U2VydmljZS5hdHRhY2hDb21wb25lbnQoY29tcCwgZGF0YUluamVjdCk7XG5cblx0XHR0aGlzLnNpZGVuYXZTZXJ2aWNlLm9wZW4oKTtcblxuXHRcdHJldHVybiBjb21wUmVmO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zaWRlbmF2U2VydmljZS5jbG9zZSgpO1xuXHR9XG5cbn1cbiJdfQ==
import { Component, EventEmitter, Input, Output, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { tap } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PanelComponent } from '../../layout/panel/panel.component';
import * as i0 from "@angular/core";
import * as i1 from "./services/sidenav.service";
import * as i2 from "@angular/material/sidenav";
export var EGlobalPanelMode;
(function (EGlobalPanelMode) {
    EGlobalPanelMode["LIGHT"] = "light";
    EGlobalPanelMode["DARK"] = "dark";
})(EGlobalPanelMode || (EGlobalPanelMode = {}));
export class GlobalPanelComponent {
    constructor(sidenavService) {
        this.sidenavService = sidenavService;
        this.position = 'end';
        this.autoFocus = true;
        this.fixedInViewport = true;
        this.fixedTopGap = 0;
        this.fixedBottomGap = 0;
        this.disableClose = true;
        this.hasBackdrop = true;
        this.opened = false;
        this.openingMode = 'over';
        this.mode = EGlobalPanelMode.LIGHT;
        this.closedStart = new EventEmitter();
        this.openedChange = new EventEmitter();
        this.openedStart = new EventEmitter();
    }
    ngAfterViewInit() {
        this.listenOnSidenavOpen();
        this.listenOnSidenavClose();
        this.listenOnMatSidenavCloseFinish();
    }
    listenOnSidenavOpen() {
        this.sidenavService.open$.subscribe(() => this.adminSidenavRef.open());
    }
    listenOnSidenavClose() {
        this.sidenavService.close$.subscribe(() => this.adminSidenavRef.close());
    }
    listenOnMatSidenavCloseFinish() {
        this.adminSidenavRef.openedChange
            .pipe(filter((status) => !status), tap(() => this.sidenavService.detachComponent()))
            .subscribe();
    }
    onKeyDownEscape() {
        this.sidenavService.close();
    }
    onBackDropClick() {
        this.sidenavService.close();
    }
    /**
     * Closes the sidenav panel and emits the close event.
     *
     * @remarks
     * This method implements a hierarchical closing behavior for nested panels:
     *
     * - If there is a nested panel that is currently open and its width exceeds
     *   the parent panel's width, this method will close the nested panel first
     * - Otherwise, it will close the parent panel
     *
     * This behavior ensures a proper visual hierarchy and user experience when
     * dealing with nested panels of different widths.
     *
     */
    close() {
        const panel = this.sidenavService.getPanelRef();
        if (panel?.adminDrawerRef?.opened) {
            panel.adminDrawerRef.close();
        }
        else {
            this.adminSidenavRef.close();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: GlobalPanelComponent, deps: [{ token: i1.SidenavService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: GlobalPanelComponent, isStandalone: true, selector: "admin-global-panel", inputs: { position: "position", autoFocus: "autoFocus", fixedInViewport: "fixedInViewport", fixedTopGap: "fixedTopGap", fixedBottomGap: "fixedBottomGap", disableClose: "disableClose", hasBackdrop: "hasBackdrop", opened: "opened", openingMode: "openingMode", width: "width", mode: "mode" }, outputs: { closedStart: "closedStart", openedChange: "openedChange", openedStart: "openedStart" }, viewQueries: [{ propertyName: "adminSidenavRef", first: true, predicate: ["adminSidenav"], descendants: true }, { propertyName: "panelComponents", predicate: PanelComponent, descendants: true }], ngImport: i0, template: "<mat-sidenav-container class=\"admin-sidenav-container {{mode}}\"\n\t\t\t\t\t\t\t\t\t\t\t [hasBackdrop]=\"hasBackdrop\"\n\t\t\t\t\t\t\t\t\t\t\t (dragover)=\"$event.preventDefault()\"\n\t\t\t\t\t\t\t\t\t\t\t (drop)=\"$event.preventDefault()\"\n\t\t\t\t\t\t\t\t\t\t\t (backdropClick)=\"close()\">\n\t<mat-sidenav class=\"admin-sidenav-container__sidenav\"\n\t\t\t\t\t\t\t #adminSidenav\n\t\t\t\t\t\t\t [mode]=\"openingMode\"\n\t\t\t\t\t\t\t [disableClose]=\"disableClose\"\n\t\t\t\t\t\t\t [attr.role]=\"'dialog'\"\n\t\t\t\t\t\t\t [opened]=\"opened\"\n\t\t\t\t\t\t\t [position]=\"position\"\n\t\t\t\t\t\t\t [autoFocus]=\"autoFocus\"\n\t\t\t\t\t\t\t [fixedInViewport]=\"fixedInViewport\"\n\t\t\t\t\t\t\t [fixedTopGap]=\"fixedTopGap\"\n\t\t\t\t\t\t\t [fixedBottomGap]=\"fixedBottomGap\"\n\t\t\t\t\t\t\t (keydown.escape)=\"close()\"\n\t\t\t\t\t\t\t (closedStart)=\"closedStart.emit()\"\n\t\t\t\t\t\t\t (openedChange)=\"openedChange.emit($event)\"\n\t\t\t\t\t\t\t (openedStart)=\"openedStart.emit()\"\n\t\t\t\t\t\t\t [style.width]=\"width\">\n\n\t\t<aside class=\"admin-sidenav-container__aside\">\n\t\t\t<div class=\"admin-sidenav-container__aside-portal-outlet\"\n\t\t\t\t\t id=\"admin-sidenav-portal-outlet\"\n\t\t\t\t\t cdkPortalOutlet></div>\n\t\t</aside>\n\n\t</mat-sidenav>\n\t<mat-sidenav-content class=\"admin-sidenav-container__content\">\n\n\t\t<ng-content></ng-content>\n\n\t</mat-sidenav-content>\n</mat-sidenav-container>", styles: [".admin-sidenav-container{height:100%}.admin-sidenav-container__aside{background-color:var(--panel-background-color);height:100%;overflow:hidden}.admin-sidenav-container__aside-portal-outlet{height:100%}.admin-sidenav-container__sidenav,.admin-sidenav-container__content{overflow:hidden}.admin-sidenav-container.light{--panel-background-color: #f4f4f4}.admin-sidenav-container.dark{--panel-background-color: #1A1A1A}.admin-sidenav-container .admin-sidenav-container__sidenav,.admin-sidenav-container .admin-sidenav-container__sidenav.fixed-in-viewport{width:fit-content;max-width:100vw;box-sizing:border-box}\n"], dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i2.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i2.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i2.MatSidenavContent, selector: "mat-sidenav-content" }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: GlobalPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-global-panel', standalone: true, imports: [
                        MatIconModule,
                        MatSidenavModule
                    ], encapsulation: ViewEncapsulation.None, template: "<mat-sidenav-container class=\"admin-sidenav-container {{mode}}\"\n\t\t\t\t\t\t\t\t\t\t\t [hasBackdrop]=\"hasBackdrop\"\n\t\t\t\t\t\t\t\t\t\t\t (dragover)=\"$event.preventDefault()\"\n\t\t\t\t\t\t\t\t\t\t\t (drop)=\"$event.preventDefault()\"\n\t\t\t\t\t\t\t\t\t\t\t (backdropClick)=\"close()\">\n\t<mat-sidenav class=\"admin-sidenav-container__sidenav\"\n\t\t\t\t\t\t\t #adminSidenav\n\t\t\t\t\t\t\t [mode]=\"openingMode\"\n\t\t\t\t\t\t\t [disableClose]=\"disableClose\"\n\t\t\t\t\t\t\t [attr.role]=\"'dialog'\"\n\t\t\t\t\t\t\t [opened]=\"opened\"\n\t\t\t\t\t\t\t [position]=\"position\"\n\t\t\t\t\t\t\t [autoFocus]=\"autoFocus\"\n\t\t\t\t\t\t\t [fixedInViewport]=\"fixedInViewport\"\n\t\t\t\t\t\t\t [fixedTopGap]=\"fixedTopGap\"\n\t\t\t\t\t\t\t [fixedBottomGap]=\"fixedBottomGap\"\n\t\t\t\t\t\t\t (keydown.escape)=\"close()\"\n\t\t\t\t\t\t\t (closedStart)=\"closedStart.emit()\"\n\t\t\t\t\t\t\t (openedChange)=\"openedChange.emit($event)\"\n\t\t\t\t\t\t\t (openedStart)=\"openedStart.emit()\"\n\t\t\t\t\t\t\t [style.width]=\"width\">\n\n\t\t<aside class=\"admin-sidenav-container__aside\">\n\t\t\t<div class=\"admin-sidenav-container__aside-portal-outlet\"\n\t\t\t\t\t id=\"admin-sidenav-portal-outlet\"\n\t\t\t\t\t cdkPortalOutlet></div>\n\t\t</aside>\n\n\t</mat-sidenav>\n\t<mat-sidenav-content class=\"admin-sidenav-container__content\">\n\n\t\t<ng-content></ng-content>\n\n\t</mat-sidenav-content>\n</mat-sidenav-container>", styles: [".admin-sidenav-container{height:100%}.admin-sidenav-container__aside{background-color:var(--panel-background-color);height:100%;overflow:hidden}.admin-sidenav-container__aside-portal-outlet{height:100%}.admin-sidenav-container__sidenav,.admin-sidenav-container__content{overflow:hidden}.admin-sidenav-container.light{--panel-background-color: #f4f4f4}.admin-sidenav-container.dark{--panel-background-color: #1A1A1A}.admin-sidenav-container .admin-sidenav-container__sidenav,.admin-sidenav-container .admin-sidenav-container__sidenav.fixed-in-viewport{width:fit-content;max-width:100vw;box-sizing:border-box}\n"] }]
        }], ctorParameters: () => [{ type: i1.SidenavService }], propDecorators: { position: [{
                type: Input
            }], autoFocus: [{
                type: Input
            }], fixedInViewport: [{
                type: Input
            }], fixedTopGap: [{
                type: Input
            }], fixedBottomGap: [{
                type: Input
            }], disableClose: [{
                type: Input
            }], hasBackdrop: [{
                type: Input
            }], opened: [{
                type: Input
            }], openingMode: [{
                type: Input
            }], width: [{
                type: Input
            }], mode: [{
                type: Input
            }], adminSidenavRef: [{
                type: ViewChild,
                args: ['adminSidenav']
            }], panelComponents: [{
                type: ViewChildren,
                args: [PanelComponent]
            }], closedStart: [{
                type: Output
            }], openedChange: [{
                type: Output
            }], openedStart: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvZ2xvYmFsLXBhbmVsL2dsb2JhbC1wYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L2dsb2JhbC1wYW5lbC9nbG9iYWwtcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsU0FBUyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFjLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7O0FBR3BFLE1BQU0sQ0FBTixJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDMUIsbUNBQWUsQ0FBQTtJQUNmLGlDQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUczQjtBQWFELE1BQU0sT0FBTyxvQkFBb0I7SUFxQmhDLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQW5CekMsYUFBUSxHQUFvQixLQUFLLENBQUM7UUFDbEMsY0FBUyxHQUE0RCxJQUFJLENBQUM7UUFDMUUsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsZ0JB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cEIsTUFBTTtnQkFDRyxZQUFZO3NCQUFyQixNQUFNO2dCQUNHLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9sYXlvdXQvcGFuZWwvcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGVuYXZTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zaWRlbmF2LnNlcnZpY2UnO1xuXG5leHBvcnQgZW51bSBFR2xvYmFsUGFuZWxNb2RlIHtcbiAgTElHSFQgPSAnbGlnaHQnLFxuICBEQVJLID0gJ2RhcmsnXG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FkbWluLWdsb2JhbC1wYW5lbCcsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtcblx0XHRNYXRJY29uTW9kdWxlLFxuXHRcdE1hdFNpZGVuYXZNb2R1bGVcblx0XSxcblx0dGVtcGxhdGVVcmw6ICcuL2dsb2JhbC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsOiAnLi9nbG9iYWwtcGFuZWwuY29tcG9uZW50LnNjc3MnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEdsb2JhbFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QElucHV0KCkgcG9zaXRpb246ICdzdGFydCcgfCAnZW5kJyA9ICdlbmQnO1xuXHRASW5wdXQoKSBhdXRvRm9jdXM6ICdkaWFsb2cnIHwgJ2ZpcnN0LXRhYmJhYmxlJyB8ICdmaXJzdC1oZWFkaW5nJyB8IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBmaXhlZEluVmlld3BvcnQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRASW5wdXQoKSBmaXhlZFRvcEdhcDogbnVtYmVyID0gMDtcblx0QElucHV0KCkgZml4ZWRCb3R0b21HYXA6IG51bWJlciA9IDA7XG5cdEBJbnB1dCgpIGRpc2FibGVDbG9zZTogYm9vbGVhbiA9IHRydWU7XG5cdEBJbnB1dCgpIGhhc0JhY2tkcm9wOiBib29sZWFuID0gdHJ1ZTtcblx0QElucHV0KCkgb3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIG9wZW5pbmdNb2RlOiAnb3ZlcicgfCAncHVzaCcgfCAnc2lkZScgPSAnb3Zlcic7XG5cdEBJbnB1dCgpIHdpZHRoPzogc3RyaW5nO1xuXHRASW5wdXQoKSBtb2RlOiBFR2xvYmFsUGFuZWxNb2RlID0gRUdsb2JhbFBhbmVsTW9kZS5MSUdIVDtcblxuXHRAVmlld0NoaWxkKCdhZG1pblNpZGVuYXYnKSBhZG1pblNpZGVuYXZSZWYhOiBNYXRTaWRlbmF2O1xuXHRAVmlld0NoaWxkcmVuKFBhbmVsQ29tcG9uZW50KSBwYW5lbENvbXBvbmVudHMhOiBRdWVyeUxpc3Q8UGFuZWxDb21wb25lbnQ+O1xuXG5cdEBPdXRwdXQoKSBjbG9zZWRTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblx0QE91dHB1dCgpIG9wZW5lZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblx0QE91dHB1dCgpIG9wZW5lZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2lkZW5hdlNlcnZpY2U6IFNpZGVuYXZTZXJ2aWNlKSB7IH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5saXN0ZW5PblNpZGVuYXZPcGVuKCk7XG5cdFx0dGhpcy5saXN0ZW5PblNpZGVuYXZDbG9zZSgpO1xuXHRcdHRoaXMubGlzdGVuT25NYXRTaWRlbmF2Q2xvc2VGaW5pc2goKTtcblx0fVxuXG5cdHByaXZhdGUgbGlzdGVuT25TaWRlbmF2T3BlbigpIHtcblx0XHR0aGlzLnNpZGVuYXZTZXJ2aWNlLm9wZW4kLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFkbWluU2lkZW5hdlJlZi5vcGVuKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBsaXN0ZW5PblNpZGVuYXZDbG9zZSgpIHtcblx0XHR0aGlzLnNpZGVuYXZTZXJ2aWNlLmNsb3NlJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZG1pblNpZGVuYXZSZWYuY2xvc2UoKSk7XG5cdH1cblxuXHRwcml2YXRlIGxpc3Rlbk9uTWF0U2lkZW5hdkNsb3NlRmluaXNoKCkge1xuXHRcdHRoaXMuYWRtaW5TaWRlbmF2UmVmLm9wZW5lZENoYW5nZVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoc3RhdHVzOiBib29sZWFuKSA9PiAhc3RhdHVzKSxcblx0XHRcdFx0dGFwKCgpID0+IHRoaXMuc2lkZW5hdlNlcnZpY2UuZGV0YWNoQ29tcG9uZW50KCkpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRvbktleURvd25Fc2NhcGUoKSB7XG5cdFx0dGhpcy5zaWRlbmF2U2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0b25CYWNrRHJvcENsaWNrKCkge1xuXHRcdHRoaXMuc2lkZW5hdlNlcnZpY2UuY2xvc2UoKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIENsb3NlcyB0aGUgc2lkZW5hdiBwYW5lbCBhbmQgZW1pdHMgdGhlIGNsb3NlIGV2ZW50LlxuXHQgKiBcblx0ICogQHJlbWFya3Ncblx0ICogVGhpcyBtZXRob2QgaW1wbGVtZW50cyBhIGhpZXJhcmNoaWNhbCBjbG9zaW5nIGJlaGF2aW9yIGZvciBuZXN0ZWQgcGFuZWxzOlxuXHQgKiBcblx0ICogLSBJZiB0aGVyZSBpcyBhIG5lc3RlZCBwYW5lbCB0aGF0IGlzIGN1cnJlbnRseSBvcGVuIGFuZCBpdHMgd2lkdGggZXhjZWVkc1xuXHQgKiAgIHRoZSBwYXJlbnQgcGFuZWwncyB3aWR0aCwgdGhpcyBtZXRob2Qgd2lsbCBjbG9zZSB0aGUgbmVzdGVkIHBhbmVsIGZpcnN0XG5cdCAqIC0gT3RoZXJ3aXNlLCBpdCB3aWxsIGNsb3NlIHRoZSBwYXJlbnQgcGFuZWxcblx0ICogXG5cdCAqIFRoaXMgYmVoYXZpb3IgZW5zdXJlcyBhIHByb3BlciB2aXN1YWwgaGllcmFyY2h5IGFuZCB1c2VyIGV4cGVyaWVuY2Ugd2hlblxuXHQgKiBkZWFsaW5nIHdpdGggbmVzdGVkIHBhbmVscyBvZiBkaWZmZXJlbnQgd2lkdGhzLlxuXHQgKiBcblx0ICovXG5cdGNsb3NlKCkge1xuXHRcdGNvbnN0IHBhbmVsID0gdGhpcy5zaWRlbmF2U2VydmljZS5nZXRQYW5lbFJlZigpO1xuXHRcdGlmIChwYW5lbD8uYWRtaW5EcmF3ZXJSZWY/Lm9wZW5lZCkge1xuXHRcdFx0cGFuZWwuYWRtaW5EcmF3ZXJSZWYuY2xvc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZG1pblNpZGVuYXZSZWYuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxufSIsIjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJhZG1pbi1zaWRlbmF2LWNvbnRhaW5lciB7e21vZGV9fVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFtoYXNCYWNrZHJvcF09XCJoYXNCYWNrZHJvcFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IChkcmFnb3Zlcik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IChkcm9wKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKGJhY2tkcm9wQ2xpY2spPVwiY2xvc2UoKVwiPlxuXHQ8bWF0LXNpZGVuYXYgY2xhc3M9XCJhZG1pbi1zaWRlbmF2LWNvbnRhaW5lcl9fc2lkZW5hdlwiXG5cdFx0XHRcdFx0XHRcdCAjYWRtaW5TaWRlbmF2XG5cdFx0XHRcdFx0XHRcdCBbbW9kZV09XCJvcGVuaW5nTW9kZVwiXG5cdFx0XHRcdFx0XHRcdCBbZGlzYWJsZUNsb3NlXT1cImRpc2FibGVDbG9zZVwiXG5cdFx0XHRcdFx0XHRcdCBbYXR0ci5yb2xlXT1cIidkaWFsb2cnXCJcblx0XHRcdFx0XHRcdFx0IFtvcGVuZWRdPVwib3BlbmVkXCJcblx0XHRcdFx0XHRcdFx0IFtwb3NpdGlvbl09XCJwb3NpdGlvblwiXG5cdFx0XHRcdFx0XHRcdCBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1c1wiXG5cdFx0XHRcdFx0XHRcdCBbZml4ZWRJblZpZXdwb3J0XT1cImZpeGVkSW5WaWV3cG9ydFwiXG5cdFx0XHRcdFx0XHRcdCBbZml4ZWRUb3BHYXBdPVwiZml4ZWRUb3BHYXBcIlxuXHRcdFx0XHRcdFx0XHQgW2ZpeGVkQm90dG9tR2FwXT1cImZpeGVkQm90dG9tR2FwXCJcblx0XHRcdFx0XHRcdFx0IChrZXlkb3duLmVzY2FwZSk9XCJjbG9zZSgpXCJcblx0XHRcdFx0XHRcdFx0IChjbG9zZWRTdGFydCk9XCJjbG9zZWRTdGFydC5lbWl0KClcIlxuXHRcdFx0XHRcdFx0XHQgKG9wZW5lZENoYW5nZSk9XCJvcGVuZWRDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcblx0XHRcdFx0XHRcdFx0IChvcGVuZWRTdGFydCk9XCJvcGVuZWRTdGFydC5lbWl0KClcIlxuXHRcdFx0XHRcdFx0XHQgW3N0eWxlLndpZHRoXT1cIndpZHRoXCI+XG5cblx0XHQ8YXNpZGUgY2xhc3M9XCJhZG1pbi1zaWRlbmF2LWNvbnRhaW5lcl9fYXNpZGVcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJhZG1pbi1zaWRlbmF2LWNvbnRhaW5lcl9fYXNpZGUtcG9ydGFsLW91dGxldFwiXG5cdFx0XHRcdFx0IGlkPVwiYWRtaW4tc2lkZW5hdi1wb3J0YWwtb3V0bGV0XCJcblx0XHRcdFx0XHQgY2RrUG9ydGFsT3V0bGV0PjwvZGl2PlxuXHRcdDwvYXNpZGU+XG5cblx0PC9tYXQtc2lkZW5hdj5cblx0PG1hdC1zaWRlbmF2LWNvbnRlbnQgY2xhc3M9XCJhZG1pbi1zaWRlbmF2LWNvbnRhaW5lcl9fY29udGVudFwiPlxuXG5cdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXG5cdDwvbWF0LXNpZGVuYXYtY29udGVudD5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPiJdfQ==
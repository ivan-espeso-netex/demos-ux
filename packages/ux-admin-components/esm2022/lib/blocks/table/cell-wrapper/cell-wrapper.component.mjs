import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
export class CellWrapperComponent {
    constructor() {
        this.inputs = {};
        this.outputs = {};
        this.componentRef = null;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.createComponent();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.removeChildComponent();
    }
    createComponent() {
        if (!this.componentType) {
            return;
        }
        this.removeChildComponent();
        this.componentRef = this.componentContainer.createComponent(this.componentType);
        this.updateInputs();
        this.updateOutputs();
    }
    updateInputs() {
        if (!this.componentRef) {
            return;
        }
        for (const [key, value] of Object.entries(this.inputs)) {
            this.componentRef.instance[key] = value;
        }
        this.componentRef.changeDetectorRef.detectChanges();
    }
    updateOutputs() {
        if (!this.componentRef) {
            return;
        }
        for (const [outputName, handler] of Object.entries(this.outputs)) {
            if (this.componentRef.instance[outputName]) {
                const output$ = this.componentRef.instance[outputName];
                output$
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((event) => {
                    handler(event);
                });
            }
        }
    }
    removeChildComponent() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CellWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CellWrapperComponent, isStandalone: true, selector: "admin-cell-wrapper", inputs: { componentType: "componentType", inputs: "inputs", outputs: "outputs" }, viewQueries: [{ propertyName: "componentContainer", first: true, predicate: ["componentContainer"], descendants: true, read: ViewContainerRef, static: true }], ngImport: i0, template: "<div class=\"admin-cell-wrapper\">\n  <ng-container #componentContainer></ng-container>\n</div> ", styles: [".admin-cell-wrapper{display:block;width:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CellWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-cell-wrapper', standalone: true, imports: [
                        CommonModule
                    ], template: "<div class=\"admin-cell-wrapper\">\n  <ng-container #componentContainer></ng-container>\n</div> ", styles: [".admin-cell-wrapper{display:block;width:100%}\n"] }]
        }], propDecorators: { componentType: [{
                type: Input
            }], inputs: [{
                type: Input
            }], outputs: [{
                type: Input
            }], componentContainer: [{
                type: ViewChild,
                args: ['componentContainer', { read: ViewContainerRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9ibG9ja3MvdGFibGUvY2VsbC13cmFwcGVyL2NlbGwtd3JhcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvYmxvY2tzL3RhYmxlL2NlbGwtd3JhcHBlci9jZWxsLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQWdCLEtBQUssRUFBMkIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBYyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQVd0RCxNQUFNLE9BQU8sb0JBQW9CO0lBVGpDO1FBWVcsV0FBTSxHQUEyQixFQUFFLENBQUM7UUFDcEMsWUFBTyxHQUE0QyxFQUFFLENBQUM7UUFJdkQsaUJBQVksR0FBNkIsSUFBSSxDQUFDO1FBQzlDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0tBMkR4QztJQXpEQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QixPQUFPO1FBQ1QsQ0FBQztRQUVELEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMxQyxDQUFDO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRU8sYUFBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZCLE9BQU87UUFDVCxDQUFDO1FBRUQsS0FBSyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDakUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUMzQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQW9CLENBQUM7Z0JBRTFFLE9BQU87cUJBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCLFNBQVMsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO29CQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7K0dBbkVVLG9CQUFvQjttR0FBcEIsb0JBQW9CLHFRQUtVLGdCQUFnQiwyQ0NsQjNELGtHQUVPLHdHRE1ILFlBQVk7OzRGQUtILG9CQUFvQjtrQkFUaEMsU0FBUzsrQkFDRSxvQkFBb0IsY0FDbEIsSUFBSSxXQUNQO3dCQUNQLFlBQVk7cUJBQ2I7OEJBTVEsYUFBYTtzQkFBckIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUVOLGtCQUFrQjtzQkFEakIsU0FBUzt1QkFBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFR5cGUsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkbWluLWNlbGwtd3JhcHBlcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NlbGwtd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NlbGwtd3JhcHBlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENlbGxXcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGNvbXBvbmVudFR5cGUhOiBUeXBlPGFueT47XG4gIEBJbnB1dCgpIGlucHV0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBASW5wdXQoKSBvdXRwdXRzOiB7IFtrZXk6IHN0cmluZ106IChldmVudDogYW55KSA9PiB2b2lkIH0gPSB7fTtcbiAgQFZpZXdDaGlsZCgnY29tcG9uZW50Q29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgY29tcG9uZW50Q29udGFpbmVyITogVmlld0NvbnRhaW5lclJlZjtcbiAgXG4gIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMucmVtb3ZlQ2hpbGRDb21wb25lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29tcG9uZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRUeXBlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVDaGlsZENvbXBvbmVudCgpO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRDb250YWluZXIuY3JlYXRlQ29tcG9uZW50KHRoaXMuY29tcG9uZW50VHlwZSk7XG4gICAgdGhpcy51cGRhdGVJbnB1dHMoKTtcbiAgICB0aGlzLnVwZGF0ZU91dHB1dHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSW5wdXRzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmlucHV0cykpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVPdXRwdXRzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtvdXRwdXROYW1lLCBoYW5kbGVyXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLm91dHB1dHMpKSB7XG4gICAgICBpZiAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Vbb3V0cHV0TmFtZV0pIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0JCA9IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW291dHB1dE5hbWVdIGFzIE9ic2VydmFibGU8YW55PjtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dCRcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVDaGlsZENvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cbn0gIiwiPGRpdiBjbGFzcz1cImFkbWluLWNlbGwtd3JhcHBlclwiPlxuICA8bmctY29udGFpbmVyICNjb21wb25lbnRDb250YWluZXI+PC9uZy1jb250YWluZXI+XG48L2Rpdj4gIl19
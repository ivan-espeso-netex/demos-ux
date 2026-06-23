import { Injectable, InjectionToken, Injector, createComponent } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export const SIDENAVDATA = new InjectionToken('SIDENAV_DATA');
export class SidenavService {
    constructor(applicationRef, injector) {
        this.applicationRef = applicationRef;
        this.injector = injector;
        /** Reference to the ComponentRef instance that's currently attached to the sidenav.
         * This reference is used to control the component's state and access its properties.
         * It can be null when no component is currently attached.
         */
        this.componentRef = null;
        /** Reference to the PanelComponent instance that's currently attached to the sidenav.
         * This reference is used to control the panel's state and access its properties.
         * It can be null when no panel is currently attached.
         */
        this.panelRef = null;
        this.openSource = new Subject();
        this.closeSource = new Subject();
        this.isOpenedSource = new BehaviorSubject(false);
        this.open$ = this.openSource.asObservable();
        this.close$ = this.closeSource.asObservable();
        this.isOpened$ = this.isOpenedSource.asObservable();
    }
    open() {
        this.openSource.next();
        this.isOpenedSource.next(true);
    }
    close() {
        this.closeSource.next();
        this.isOpenedSource.next(false);
    }
    /** Used to create the data injected to the component
     * that's going to be attached to the sidenav PortalOutlet.
     * @param {any} data - The data to be injected into the component.
     * @returns {Injector} Returns the injector that's needed when
     * creating a ComponentPortal instance.
     */
    createData(data) {
        return Injector.create({
            parent: this.injector,
            providers: [
                { provide: SIDENAVDATA, useValue: data }
            ]
        });
    }
    /**
     * Searches for the ViewChild('panel') in the component and saves it using setPanelRef.
     * Uses setTimeout to wait for the ViewChild to be available after component initialization.
     *
     * @param component - The component containing the ViewChild('panel')
     * @returns void - The method doesn't return anything as the panel is saved internally
     *
     * @example
     * // Find and save the panel in a component
     * this.findPanelComponent(myComponent);
     */
    findPanelComponent(component) {
        // Wait for ViewChild to be available
        setTimeout(() => {
            const panelViewChild = component?.panel;
            if (panelViewChild) {
                this.setPanelRef(panelViewChild);
            }
        }, 0);
    }
    /** Used to attach a ComponentPortal instance to the sidenav PortalOutlet.
     * @param {ComponentPortal} portal - The ComponentPortal instance that's
     * going to be attached to the sidenav PortalOutlet.
     * @param {Injector} injector - The injector instance of the module which the
     * instantiated component belongs to.
     * @returns {ComponentRef} Reference to the instantiated component.
    */
    attachComponent(component, injector) {
        if (this.componentRef) {
            this.detachComponent();
        }
        this.componentRef = createComponent(component, {
            environmentInjector: this.applicationRef.injector,
            elementInjector: injector
        });
        this.applicationRef.attachView(this.componentRef.hostView);
        const domElem = this.componentRef.location.nativeElement;
        document.getElementById('admin-sidenav-portal-outlet')?.appendChild(domElem);
        /**
         * Executes the panel search after the component is fully initialized and rendered.
         * Uses Promise.resolve().then() to ensure the component is completely rendered before searching.
         * This prevents timing issues and ensures we can find the panel if it exists.
         *
         * @remarks
         * - Executes as a microtask after the current execution context
         * - Ensures component is fully rendered in the DOM before searching
         * - Prevents blocking the main thread
         */
        Promise.resolve().then(() => {
            if (this.componentRef?.instance) {
                this.findPanelComponent(this.componentRef.instance);
            }
        });
        return this.componentRef;
    }
    /** Used to detach a ComponentPortal from the sidenav PortalOutlet.*/
    detachComponent() {
        if (this.componentRef) {
            this.applicationRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
            this.setPanelRef(null);
        }
    }
    /**
     * Sets the reference to the PanelComponent found in the sidenav.
     * This reference is used to control the panel's state (open/close) from the sidenav.
     *
     * @param panel - The PanelComponent instance to store, or null to clear the reference
     *
     */
    setPanelRef(panel) {
        this.panelRef = panel;
    }
    /**
     * Gets the current reference to the PanelComponent in the sidenav.
     * This reference can be used to check if a panel exists and control its state.
     *
     * @returns PanelComponent | null - The current panel reference or null if no panel is attached
     *
     */
    getPanelRef() {
        return this.panelRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SidenavService, deps: [{ token: i0.ApplicationRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SidenavService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SidenavService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i0.ApplicationRef }, { type: i0.Injector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2xheW91dC9nbG9iYWwtcGFuZWwvc2VydmljZXMvc2lkZW5hdi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0MsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUdoRCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUssY0FBYyxDQUFDLENBQUM7QUFLbEUsTUFBTSxPQUFPLGNBQWM7SUFzQjFCLFlBQ1MsY0FBOEIsRUFDOUIsUUFBa0I7UUFEbEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUF0QjNCOzs7V0FHRztRQUNLLGlCQUFZLEdBQTZCLElBQUksQ0FBQztRQUV0RDs7O1dBR0c7UUFDSyxhQUFRLEdBQTBCLElBQUksQ0FBQztRQUV2QyxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbEMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUU3RCxVQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxXQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxjQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUszQyxDQUFDO0lBRUwsSUFBSTtRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7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RSxNQUFNO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBJbmplY3RvciwgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L3BhbmVsL3BhbmVsLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBTSURFTkFWREFUQSA9IG5ldyBJbmplY3Rpb25Ub2tlbjx7fT4oJ1NJREVOQVZfREFUQScpO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2U2VydmljZSB7XG5cblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgQ29tcG9uZW50UmVmIGluc3RhbmNlIHRoYXQncyBjdXJyZW50bHkgYXR0YWNoZWQgdG8gdGhlIHNpZGVuYXYuXG5cdCAqIFRoaXMgcmVmZXJlbmNlIGlzIHVzZWQgdG8gY29udHJvbCB0aGUgY29tcG9uZW50J3Mgc3RhdGUgYW5kIGFjY2VzcyBpdHMgcHJvcGVydGllcy5cblx0ICogSXQgY2FuIGJlIG51bGwgd2hlbiBubyBjb21wb25lbnQgaXMgY3VycmVudGx5IGF0dGFjaGVkLlxuXHQgKi9cblx0cHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+IHwgbnVsbCA9IG51bGw7XG5cblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgUGFuZWxDb21wb25lbnQgaW5zdGFuY2UgdGhhdCdzIGN1cnJlbnRseSBhdHRhY2hlZCB0byB0aGUgc2lkZW5hdi5cblx0ICogVGhpcyByZWZlcmVuY2UgaXMgdXNlZCB0byBjb250cm9sIHRoZSBwYW5lbCdzIHN0YXRlIGFuZCBhY2Nlc3MgaXRzIHByb3BlcnRpZXMuXG5cdCAqIEl0IGNhbiBiZSBudWxsIHdoZW4gbm8gcGFuZWwgaXMgY3VycmVudGx5IGF0dGFjaGVkLlxuXHQgKi9cblx0cHJpdmF0ZSBwYW5lbFJlZjogUGFuZWxDb21wb25lbnQgfCBudWxsID0gbnVsbDtcblxuXHRwcml2YXRlIG9wZW5Tb3VyY2UgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXHRwcml2YXRlIGNsb3NlU291cmNlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblx0cHJpdmF0ZSBpc09wZW5lZFNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cdG9wZW4kID0gdGhpcy5vcGVuU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXHRjbG9zZSQgPSB0aGlzLmNsb3NlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXHRpc09wZW5lZCQgPSB0aGlzLmlzT3BlbmVkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG5cdCkgeyB9XG5cblx0b3BlbigpOiB2b2lkIHtcblx0XHR0aGlzLm9wZW5Tb3VyY2UubmV4dCgpO1xuXHRcdHRoaXMuaXNPcGVuZWRTb3VyY2UubmV4dCh0cnVlKTtcblx0fVxuXG5cdGNsb3NlKCk6IHZvaWQge1xuXHRcdHRoaXMuY2xvc2VTb3VyY2UubmV4dCgpO1xuXHRcdHRoaXMuaXNPcGVuZWRTb3VyY2UubmV4dChmYWxzZSk7XG5cdH1cblxuXHQvKiogVXNlZCB0byBjcmVhdGUgdGhlIGRhdGEgaW5qZWN0ZWQgdG8gdGhlIGNvbXBvbmVudFxuXHQgKiB0aGF0J3MgZ29pbmcgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIHNpZGVuYXYgUG9ydGFsT3V0bGV0LlxuXHQgKiBAcGFyYW0ge2FueX0gZGF0YSAtIFRoZSBkYXRhIHRvIGJlIGluamVjdGVkIGludG8gdGhlIGNvbXBvbmVudC5cblx0ICogQHJldHVybnMge0luamVjdG9yfSBSZXR1cm5zIHRoZSBpbmplY3RvciB0aGF0J3MgbmVlZGVkIHdoZW5cblx0ICogY3JlYXRpbmcgYSBDb21wb25lbnRQb3J0YWwgaW5zdGFuY2UuXG5cdCAqL1xuXHRjcmVhdGVEYXRhKGRhdGE6IGFueSk6IEluamVjdG9yIHtcblx0XHRyZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdHBhcmVudDogdGhpcy5pbmplY3Rvcixcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IFNJREVOQVZEQVRBLCB1c2VWYWx1ZTogZGF0YSB9XG5cdFx0XHRdXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoZXMgZm9yIHRoZSBWaWV3Q2hpbGQoJ3BhbmVsJykgaW4gdGhlIGNvbXBvbmVudCBhbmQgc2F2ZXMgaXQgdXNpbmcgc2V0UGFuZWxSZWYuXG5cdCAqIFVzZXMgc2V0VGltZW91dCB0byB3YWl0IGZvciB0aGUgVmlld0NoaWxkIHRvIGJlIGF2YWlsYWJsZSBhZnRlciBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24uXG5cdCAqIFxuXHQgKiBAcGFyYW0gY29tcG9uZW50IC0gVGhlIGNvbXBvbmVudCBjb250YWluaW5nIHRoZSBWaWV3Q2hpbGQoJ3BhbmVsJylcblx0ICogQHJldHVybnMgdm9pZCAtIFRoZSBtZXRob2QgZG9lc24ndCByZXR1cm4gYW55dGhpbmcgYXMgdGhlIHBhbmVsIGlzIHNhdmVkIGludGVybmFsbHlcblx0ICogXG5cdCAqIEBleGFtcGxlXG5cdCAqIC8vIEZpbmQgYW5kIHNhdmUgdGhlIHBhbmVsIGluIGEgY29tcG9uZW50XG5cdCAqIHRoaXMuZmluZFBhbmVsQ29tcG9uZW50KG15Q29tcG9uZW50KTtcblx0ICovXG5cdHByaXZhdGUgZmluZFBhbmVsQ29tcG9uZW50KGNvbXBvbmVudDogYW55KTogdm9pZCB7XG5cdFx0Ly8gV2FpdCBmb3IgVmlld0NoaWxkIHRvIGJlIGF2YWlsYWJsZVxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFuZWxWaWV3Q2hpbGQgPSBjb21wb25lbnQ/LnBhbmVsO1xuXHRcdFx0aWYgKHBhbmVsVmlld0NoaWxkKSB7XG5cdFx0XHRcdHRoaXMuc2V0UGFuZWxSZWYocGFuZWxWaWV3Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdH0sIDApO1xuXHR9XG5cblx0LyoqIFVzZWQgdG8gYXR0YWNoIGEgQ29tcG9uZW50UG9ydGFsIGluc3RhbmNlIHRvIHRoZSBzaWRlbmF2IFBvcnRhbE91dGxldC5cblx0ICogQHBhcmFtIHtDb21wb25lbnRQb3J0YWx9IHBvcnRhbCAtIFRoZSBDb21wb25lbnRQb3J0YWwgaW5zdGFuY2UgdGhhdCdzXG5cdCAqIGdvaW5nIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBzaWRlbmF2IFBvcnRhbE91dGxldC5cblx0ICogQHBhcmFtIHtJbmplY3Rvcn0gaW5qZWN0b3IgLSBUaGUgaW5qZWN0b3IgaW5zdGFuY2Ugb2YgdGhlIG1vZHVsZSB3aGljaCB0aGVcblx0ICogaW5zdGFudGlhdGVkIGNvbXBvbmVudCBiZWxvbmdzIHRvLlxuXHQgKiBAcmV0dXJucyB7Q29tcG9uZW50UmVmfSBSZWZlcmVuY2UgdG8gdGhlIGluc3RhbnRpYXRlZCBjb21wb25lbnQuXG5cdCovXG5cdGF0dGFjaENvbXBvbmVudDxUPihjb21wb25lbnQ6IGFueSwgaW5qZWN0b3I6IEluamVjdG9yKTogQ29tcG9uZW50UmVmPFQ+IHtcblx0XHRpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcblx0XHRcdHRoaXMuZGV0YWNoQ29tcG9uZW50KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50LCB7XG5cdFx0XHRlbnZpcm9ubWVudEluamVjdG9yOiB0aGlzLmFwcGxpY2F0aW9uUmVmLmluamVjdG9yLFxuXHRcdFx0ZWxlbWVudEluamVjdG9yOiBpbmplY3RvclxuXHRcdH0pO1xuXG5cdFx0dGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuXHRcdGNvbnN0IGRvbUVsZW0gPSB0aGlzLmNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZG1pbi1zaWRlbmF2LXBvcnRhbC1vdXRsZXQnKT8uYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG5cblx0XHQvKipcblx0XHQgKiBFeGVjdXRlcyB0aGUgcGFuZWwgc2VhcmNoIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgZnVsbHkgaW5pdGlhbGl6ZWQgYW5kIHJlbmRlcmVkLlxuXHRcdCAqIFVzZXMgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIHRvIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIGNvbXBsZXRlbHkgcmVuZGVyZWQgYmVmb3JlIHNlYXJjaGluZy5cblx0XHQgKiBUaGlzIHByZXZlbnRzIHRpbWluZyBpc3N1ZXMgYW5kIGVuc3VyZXMgd2UgY2FuIGZpbmQgdGhlIHBhbmVsIGlmIGl0IGV4aXN0cy5cblx0XHQgKiBcblx0XHQgKiBAcmVtYXJrc1xuXHRcdCAqIC0gRXhlY3V0ZXMgYXMgYSBtaWNyb3Rhc2sgYWZ0ZXIgdGhlIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHRcblx0XHQgKiAtIEVuc3VyZXMgY29tcG9uZW50IGlzIGZ1bGx5IHJlbmRlcmVkIGluIHRoZSBET00gYmVmb3JlIHNlYXJjaGluZ1xuXHRcdCAqIC0gUHJldmVudHMgYmxvY2tpbmcgdGhlIG1haW4gdGhyZWFkXG5cdFx0ICovXG5cdFx0UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5jb21wb25lbnRSZWY/Lmluc3RhbmNlKSB7XG5cdFx0XHRcdHRoaXMuZmluZFBhbmVsQ29tcG9uZW50KHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZjtcblx0fVxuXG5cdC8qKiBVc2VkIHRvIGRldGFjaCBhIENvbXBvbmVudFBvcnRhbCBmcm9tIHRoZSBzaWRlbmF2IFBvcnRhbE91dGxldC4qL1xuXHRkZXRhY2hDb21wb25lbnQoKSB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG5cdFx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLmRldGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYgPSBudWxsO1xuXHRcdFx0dGhpcy5zZXRQYW5lbFJlZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgcmVmZXJlbmNlIHRvIHRoZSBQYW5lbENvbXBvbmVudCBmb3VuZCBpbiB0aGUgc2lkZW5hdi5cblx0ICogVGhpcyByZWZlcmVuY2UgaXMgdXNlZCB0byBjb250cm9sIHRoZSBwYW5lbCdzIHN0YXRlIChvcGVuL2Nsb3NlKSBmcm9tIHRoZSBzaWRlbmF2LlxuXHQgKiBcblx0ICogQHBhcmFtIHBhbmVsIC0gVGhlIFBhbmVsQ29tcG9uZW50IGluc3RhbmNlIHRvIHN0b3JlLCBvciBudWxsIHRvIGNsZWFyIHRoZSByZWZlcmVuY2Vcblx0ICogXG5cdCAqL1xuXHRzZXRQYW5lbFJlZihwYW5lbDogUGFuZWxDb21wb25lbnQgfCBudWxsKSB7XG5cdFx0dGhpcy5wYW5lbFJlZiA9IHBhbmVsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGN1cnJlbnQgcmVmZXJlbmNlIHRvIHRoZSBQYW5lbENvbXBvbmVudCBpbiB0aGUgc2lkZW5hdi5cblx0ICogVGhpcyByZWZlcmVuY2UgY2FuIGJlIHVzZWQgdG8gY2hlY2sgaWYgYSBwYW5lbCBleGlzdHMgYW5kIGNvbnRyb2wgaXRzIHN0YXRlLlxuXHQgKiBcblx0ICogQHJldHVybnMgUGFuZWxDb21wb25lbnQgfCBudWxsIC0gVGhlIGN1cnJlbnQgcGFuZWwgcmVmZXJlbmNlIG9yIG51bGwgaWYgbm8gcGFuZWwgaXMgYXR0YWNoZWRcblx0ICogXG5cdCAqL1xuXHRnZXRQYW5lbFJlZigpOiBQYW5lbENvbXBvbmVudCB8IG51bGwge1xuXHRcdHJldHVybiB0aGlzLnBhbmVsUmVmO1xuXHR9XG5cbn0iXX0=
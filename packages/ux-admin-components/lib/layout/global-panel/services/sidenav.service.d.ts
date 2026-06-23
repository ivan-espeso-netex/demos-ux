import { ApplicationRef, ComponentRef, InjectionToken, Injector } from '@angular/core';
import { PanelComponent } from '../../../layout/panel/panel.component';
import * as i0 from "@angular/core";
export declare const SIDENAVDATA: InjectionToken<{}>;
export declare class SidenavService {
    private applicationRef;
    private injector;
    /** Reference to the ComponentRef instance that's currently attached to the sidenav.
     * This reference is used to control the component's state and access its properties.
     * It can be null when no component is currently attached.
     */
    private componentRef;
    /** Reference to the PanelComponent instance that's currently attached to the sidenav.
     * This reference is used to control the panel's state and access its properties.
     * It can be null when no panel is currently attached.
     */
    private panelRef;
    private openSource;
    private closeSource;
    private isOpenedSource;
    open$: import("rxjs").Observable<void>;
    close$: import("rxjs").Observable<void>;
    isOpened$: import("rxjs").Observable<boolean>;
    constructor(applicationRef: ApplicationRef, injector: Injector);
    open(): void;
    close(): void;
    /** Used to create the data injected to the component
     * that's going to be attached to the sidenav PortalOutlet.
     * @param {any} data - The data to be injected into the component.
     * @returns {Injector} Returns the injector that's needed when
     * creating a ComponentPortal instance.
     */
    createData(data: any): Injector;
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
    private findPanelComponent;
    /** Used to attach a ComponentPortal instance to the sidenav PortalOutlet.
     * @param {ComponentPortal} portal - The ComponentPortal instance that's
     * going to be attached to the sidenav PortalOutlet.
     * @param {Injector} injector - The injector instance of the module which the
     * instantiated component belongs to.
     * @returns {ComponentRef} Reference to the instantiated component.
    */
    attachComponent<T>(component: any, injector: Injector): ComponentRef<T>;
    /** Used to detach a ComponentPortal from the sidenav PortalOutlet.*/
    detachComponent(): void;
    /**
     * Sets the reference to the PanelComponent found in the sidenav.
     * This reference is used to control the panel's state (open/close) from the sidenav.
     *
     * @param panel - The PanelComponent instance to store, or null to clear the reference
     *
     */
    setPanelRef(panel: PanelComponent | null): void;
    /**
     * Gets the current reference to the PanelComponent in the sidenav.
     * This reference can be used to check if a panel exists and control its state.
     *
     * @returns PanelComponent | null - The current panel reference or null if no panel is attached
     *
     */
    getPanelRef(): PanelComponent | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidenavService>;
}

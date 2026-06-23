import { ComponentType } from '@angular/cdk/overlay';
import { ComponentRef, Injector } from '@angular/core';
import { SidenavService } from './sidenav.service';
import * as i0 from "@angular/core";
export declare class GlobalPanelService {
    protected sidenavService: SidenavService;
    protected injector: Injector;
    constructor(sidenavService: SidenavService, injector: Injector);
    open(comp: ComponentType<any>, data?: Object): ComponentRef<any>;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalPanelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GlobalPanelService>;
}

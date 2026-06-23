import { EventEmitter } from '@angular/core';
import { EDividerMode } from '../../atoms/divider/divider.component';
import * as i0 from "@angular/core";
export declare enum ESidenavNoOpenButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class SidenavNoOpenButtonComponent {
    mode: ESidenavNoOpenButtonMode;
    id: string;
    opened: boolean;
    toggleSidenav: EventEmitter<void>;
    EDividerMode: typeof EDividerMode;
    ESidenavNoOpenButtonMode: typeof ESidenavNoOpenButtonMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavNoOpenButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavNoOpenButtonComponent, "admin-sidenav-no-open-button", never, { "mode": { "alias": "mode"; "required": false; }; "id": { "alias": "id"; "required": false; }; "opened": { "alias": "opened"; "required": false; }; }, { "toggleSidenav": "toggleSidenav"; }, never, ["[upper]", "[lower]"], true, never>;
}

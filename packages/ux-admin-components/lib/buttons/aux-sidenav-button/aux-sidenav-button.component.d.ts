import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
export declare enum EAuxSidenavButtonColor {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export declare enum EAuxSidenavButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class AuxSidenavButtonComponent {
    id: string;
    color: EAuxSidenavButtonColor;
    mode: EAuxSidenavButtonMode;
    text?: string;
    tooltip: string;
    disabled: boolean;
    active?: boolean;
    icon?: EIconName;
    routerLink?: string | any[];
    buttonClicked: EventEmitter<Event>;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuxSidenavButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuxSidenavButtonComponent, "admin-aux-sidenav-button", never, { "id": { "alias": "id"; "required": false; }; "color": { "alias": "color"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "text": { "alias": "text"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "active": { "alias": "active"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

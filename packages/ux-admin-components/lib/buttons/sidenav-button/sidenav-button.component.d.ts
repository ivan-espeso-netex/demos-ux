import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
export declare enum ESidenavButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum ESidenavButtonSize {
    SMALL = "small",
    DEFAULT = "default"
}
export declare class SidenavButtonComponent {
    mode: ESidenavButtonMode;
    id: string;
    text?: string;
    size: ESidenavButtonSize;
    tooltip?: string;
    disabled: boolean;
    icon?: EIconName;
    routerLink?: string | any[];
    buttonClicked: EventEmitter<Event>;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavButtonComponent, "admin-sidenav-button", never, { "mode": { "alias": "mode"; "required": false; }; "id": { "alias": "id"; "required": false; }; "text": { "alias": "text"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

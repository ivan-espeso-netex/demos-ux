import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum ELinkTextMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class LinkTextComponent {
    id: string;
    text: string;
    mode: ELinkTextMode;
    routerLink?: string | any[];
    buttonClicked: EventEmitter<Event>;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkTextComponent, "admin-link-text", never, { "id": { "alias": "id"; "required": false; }; "text": { "alias": "text"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

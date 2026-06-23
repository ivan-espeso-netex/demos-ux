import { EventEmitter } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { EIconName } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
export declare enum EPanelMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class PanelComponent {
    opened: boolean;
    openingMode: 'over' | 'push' | 'side';
    hasBackdrop: boolean;
    position: 'start' | 'end';
    autoFocus: boolean;
    width: string;
    mode: EPanelMode;
    fixedInViewport: boolean;
    keyDownEscape: EventEmitter<void>;
    closedStart: EventEmitter<void>;
    openedChange: EventEmitter<boolean>;
    openedStart: EventEmitter<void>;
    adminDrawerRef: MatDrawer;
    EIconName: typeof EIconName;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelComponent, "admin-panel", never, { "opened": { "alias": "opened"; "required": false; }; "openingMode": { "alias": "openingMode"; "required": false; }; "hasBackdrop": { "alias": "hasBackdrop"; "required": false; }; "position": { "alias": "position"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "width": { "alias": "width"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "fixedInViewport": { "alias": "fixedInViewport"; "required": false; }; }, { "keyDownEscape": "keyDownEscape"; "closedStart": "closedStart"; "openedChange": "openedChange"; "openedStart": "openedStart"; }, never, ["[panel-content]", "[main-content]"], true, never>;
}

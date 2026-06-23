import { AfterViewInit, EventEmitter, QueryList } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PanelComponent } from '../../layout/panel/panel.component';
import { SidenavService } from './services/sidenav.service';
import * as i0 from "@angular/core";
export declare enum EGlobalPanelMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class GlobalPanelComponent implements AfterViewInit {
    private sidenavService;
    position: 'start' | 'end';
    autoFocus: 'dialog' | 'first-tabbable' | 'first-heading' | boolean;
    fixedInViewport: boolean;
    fixedTopGap: number;
    fixedBottomGap: number;
    disableClose: boolean;
    hasBackdrop: boolean;
    opened: boolean;
    openingMode: 'over' | 'push' | 'side';
    width?: string;
    mode: EGlobalPanelMode;
    adminSidenavRef: MatSidenav;
    panelComponents: QueryList<PanelComponent>;
    closedStart: EventEmitter<void>;
    openedChange: EventEmitter<boolean>;
    openedStart: EventEmitter<void>;
    constructor(sidenavService: SidenavService);
    ngAfterViewInit(): void;
    private listenOnSidenavOpen;
    private listenOnSidenavClose;
    private listenOnMatSidenavCloseFinish;
    onKeyDownEscape(): void;
    onBackDropClick(): void;
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
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GlobalPanelComponent, "admin-global-panel", never, { "position": { "alias": "position"; "required": false; }; "autoFocus": { "alias": "autoFocus"; "required": false; }; "fixedInViewport": { "alias": "fixedInViewport"; "required": false; }; "fixedTopGap": { "alias": "fixedTopGap"; "required": false; }; "fixedBottomGap": { "alias": "fixedBottomGap"; "required": false; }; "disableClose": { "alias": "disableClose"; "required": false; }; "hasBackdrop": { "alias": "hasBackdrop"; "required": false; }; "opened": { "alias": "opened"; "required": false; }; "openingMode": { "alias": "openingMode"; "required": false; }; "width": { "alias": "width"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "closedStart": "closedStart"; "openedChange": "openedChange"; "openedStart": "openedStart"; }, never, ["*"], true, never>;
}

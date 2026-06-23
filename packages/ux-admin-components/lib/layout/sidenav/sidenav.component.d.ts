import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EProgressBarColor } from '../../atoms/progress-bar/progress-bar.component';
import { EProgressBarWithButtonMode } from '../../blocks/progress-bar-with-button/progress-bar-with-button.component';
import * as i0 from "@angular/core";
export declare enum ESidenavMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class SidenavComponent {
    opened: boolean;
    title?: string;
    icon?: EIconName;
    progressBarText?: string;
    progressBarValue: number;
    progressBarColor: EProgressBarColor;
    buttonText?: string;
    mode: ESidenavMode;
    toggleSidenav: EventEmitter<void>;
    sidenavFooterButtonClicked: EventEmitter<Event>;
    EProgressBarWithButtonMode: typeof EProgressBarWithButtonMode;
    ESidenavMode: typeof ESidenavMode;
    EIconName: typeof EIconName;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavComponent, "admin-sidenav", never, { "opened": { "alias": "opened"; "required": false; }; "title": { "alias": "title"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "progressBarText": { "alias": "progressBarText"; "required": false; }; "progressBarValue": { "alias": "progressBarValue"; "required": false; }; "progressBarColor": { "alias": "progressBarColor"; "required": false; }; "buttonText": { "alias": "buttonText"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "toggleSidenav": "toggleSidenav"; "sidenavFooterButtonClicked": "sidenavFooterButtonClicked"; }, never, ["*"], true, never>;
}

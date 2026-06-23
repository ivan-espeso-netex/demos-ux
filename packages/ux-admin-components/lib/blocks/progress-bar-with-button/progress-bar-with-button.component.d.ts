import { EventEmitter } from '@angular/core';
import { EIconColor, EIconMode, EIconName } from '../../atoms/icon/icon.component';
import { EProgressBarColor, EProgressBarMode } from '../../atoms/progress-bar/progress-bar.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export declare enum EProgressBarWithButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class ProgressBarWithButtonComponent {
    icon?: EIconName;
    title: string;
    progressBarText: string;
    progressBarValue: number;
    progressBarColor: EProgressBarColor;
    buttonText: string;
    mode: EProgressBarWithButtonMode;
    sidenavFooterButtonClicked: EventEmitter<Event>;
    buttonButtonTypeDefault: EButtonButtonType;
    buttonColorDefault: EButtonColor;
    buttonTypeDefault: EButtonType;
    EButtonMode: typeof EButtonMode;
    EIconColor: typeof EIconColor;
    EIconMode: typeof EIconMode;
    EProgressBarColor: typeof EProgressBarColor;
    EProgressBarWithButtonMode: typeof EProgressBarWithButtonMode;
    EProgressBarMode: typeof EProgressBarMode;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarWithButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarWithButtonComponent, "admin-progress-bar-with-button", never, { "icon": { "alias": "icon"; "required": false; }; "title": { "alias": "title"; "required": false; }; "progressBarText": { "alias": "progressBarText"; "required": false; }; "progressBarValue": { "alias": "progressBarValue"; "required": false; }; "progressBarColor": { "alias": "progressBarColor"; "required": false; }; "buttonText": { "alias": "buttonText"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "sidenavFooterButtonClicked": "sidenavFooterButtonClicked"; }, never, never, true, never>;
}

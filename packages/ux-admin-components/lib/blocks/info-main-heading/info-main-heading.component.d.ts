import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export declare enum IAdminInfoMainHeadingMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class InfoMainHeadingComponent {
    id: string;
    mode: IAdminInfoMainHeadingMode;
    title: string;
    buttonType: EButtonType;
    buttonButtonType: EButtonButtonType;
    buttonColor: EButtonColor;
    buttonIcon: EIconName;
    buttonClicked: EventEmitter<void>;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonColor: typeof EButtonColor;
    EButtonType: typeof EButtonType;
    EButtonMode: typeof EButtonMode;
    IAdminInfoMainHeadingMode: typeof IAdminInfoMainHeadingMode;
    onButtonClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InfoMainHeadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InfoMainHeadingComponent, "admin-info-main-heading", never, { "id": { "alias": "id"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "title": { "alias": "title"; "required": false; }; "buttonType": { "alias": "buttonType"; "required": false; }; "buttonButtonType": { "alias": "buttonButtonType"; "required": false; }; "buttonColor": { "alias": "buttonColor"; "required": false; }; "buttonIcon": { "alias": "buttonIcon"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

import { EventEmitter } from '@angular/core';
import { EIconMode, EIconName } from '../../atoms/icon/icon.component';
import { ELabelColor, ELabelMode } from '../../atoms/label/label.component';
import { EProgressBarColor, EProgressMode } from '../../atoms/progress-bar/progress-bar.component';
import { EButtonButtonType, EButtonColor } from '../../buttons/button/button.component';
import { EAdminMenuMode, IAdminMenuOption } from '../../buttons/menu/menu.component';
import * as i0 from "@angular/core";
export declare enum ESecondaryContentHeadingMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class SecondaryContentHeadingComponent {
    mode: ESecondaryContentHeadingMode;
    icon?: EIconName;
    isLoading: boolean;
    title: string;
    label?: string;
    labelColor: ELabelColor;
    labelMode: ELabelMode;
    options: IAdminMenuOption[];
    optionClicked: EventEmitter<IAdminMenuOption>;
    buttontype: EButtonButtonType;
    color: EButtonColor;
    EIconName: typeof EIconName;
    EIconMode: typeof EIconMode;
    ELabelColor: typeof ELabelColor;
    ELabelMode: typeof ELabelMode;
    ESecondaryContentHeadingMode: typeof ESecondaryContentHeadingMode;
    EMenuMode: typeof EAdminMenuMode;
    EProgressMode: typeof EProgressMode;
    EProgressBarColor: typeof EProgressBarColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecondaryContentHeadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecondaryContentHeadingComponent, "admin-secondary-content-heading", never, { "mode": { "alias": "mode"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "title": { "alias": "title"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelColor": { "alias": "labelColor"; "required": false; }; "labelMode": { "alias": "labelMode"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "optionClicked": "optionClicked"; }, never, never, true, never>;
}

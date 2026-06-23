import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export interface SnackbarData {
    id?: string;
    buttonButtonType?: EButtonButtonType;
    buttonColor?: EButtonColor;
    buttonType?: EButtonType;
    text: string;
    buttontext?: string;
    leftIcon?: EIconName;
    rightIcon?: EIconName;
    hasActions?: boolean;
}
export declare enum ESnackbarMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class SnackbarContentComponent {
    data: SnackbarData;
    constructor(data: SnackbarData);
    id: string;
    text: string;
    buttonType: EButtonType;
    buttonButtonType: EButtonButtonType;
    buttonColor: EButtonColor;
    buttontext: string;
    leftIcon?: EIconName;
    rightIcon?: EIconName;
    hasActions: boolean;
    mode: ESnackbarMode;
    snackbarContentButtonClicked: EventEmitter<void>;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonType: typeof EButtonType;
    EButtonColor: typeof EButtonColor;
    EButtonMode: typeof EButtonMode;
    ESnackbarMode: typeof ESnackbarMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackbarContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackbarContentComponent, "admin-snackbar-content", never, { "id": { "alias": "id"; "required": false; }; "text": { "alias": "text"; "required": false; }; "buttonType": { "alias": "buttonType"; "required": false; }; "buttonButtonType": { "alias": "buttonButtonType"; "required": false; }; "buttonColor": { "alias": "buttonColor"; "required": false; }; "buttontext": { "alias": "buttontext"; "required": false; }; "leftIcon": { "alias": "leftIcon"; "required": false; }; "rightIcon": { "alias": "rightIcon"; "required": false; }; "hasActions": { "alias": "hasActions"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "snackbarContentButtonClicked": "snackbarContentButtonClicked"; }, never, never, true, never>;
}

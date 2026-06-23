import { Type } from '@angular/core';
import { EIconName } from '../../../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonType } from '../../../../buttons/button/button.component';
import { BaseDialog } from '../base-dialog.directive';
import * as i0 from "@angular/core";
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export declare class ConfirmDialogComponent extends BaseDialog<boolean> {
    title: import("@angular/core").InputSignal<string>;
    message: import("@angular/core").InputSignal<string | undefined>;
    confirmButtonText: import("@angular/core").InputSignal<string>;
    cancelButtonText: import("@angular/core").InputSignal<string>;
    innerComponent?: {
        selector: Type<any> | null;
        inputs?: any;
    };
    buttonButtonTypeDefault: EButtonButtonType;
    buttonTypeDefault: EButtonType;
    buttonCancelButtonTypeDefault: EButtonButtonType;
    buttonCancelTypeDefault: EButtonType;
    buttonConfirmButtonTypeDefault: EButtonButtonType;
    buttonConfirmTypeDefault: EButtonType;
    buttonConfirmColorDefault: EButtonColor;
    EIconName: typeof EIconName;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmDialogComponent, "ng-component", never, { "title": { "alias": "title"; "required": true; "isSignal": true; }; "message": { "alias": "message"; "required": false; "isSignal": true; }; "confirmButtonText": { "alias": "confirmButtonText"; "required": true; "isSignal": true; }; "cancelButtonText": { "alias": "cancelButtonText"; "required": false; "isSignal": true; }; "innerComponent": { "alias": "innerComponent"; "required": false; }; }, {}, never, never, true, never>;
}

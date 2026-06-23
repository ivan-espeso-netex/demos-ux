import { MatDialogRef } from '@angular/material/dialog';
import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export declare enum EPopupMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class PopupComponent {
    private dialogRef;
    readonly popup: any;
    constructor(dialogRef: MatDialogRef<PopupComponent>);
    mode: any;
    EButtonColor: typeof EButtonColor;
    EButtonType: typeof EButtonType;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonMode: typeof EButtonMode;
    EPopupMode: typeof EPopupMode;
    EIconName: typeof EIconName;
    actionButtonClicked(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopupComponent, "admin-popup", never, { "mode": { "alias": "mode"; "required": false; }; }, {}, never, never, true, never>;
}

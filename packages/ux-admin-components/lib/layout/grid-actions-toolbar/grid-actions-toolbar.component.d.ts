import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export declare enum EGridActionsToolbarMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class GridActionsToolbarComponent {
    title: string;
    closeButtonTooltip: string;
    mode: EGridActionsToolbarMode;
    closeClickedButton: EventEmitter<void>;
    EGridActionsToolbarMode: typeof EGridActionsToolbarMode;
    EButtonMode: typeof EButtonMode;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonColor: typeof EButtonColor;
    EButtonType: typeof EButtonType;
    EIconName: typeof EIconName;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridActionsToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridActionsToolbarComponent, "admin-grid-actions-toolbar", never, { "title": { "alias": "title"; "required": false; }; "closeButtonTooltip": { "alias": "closeButtonTooltip"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "closeClickedButton": "closeClickedButton"; }, never, ["[actions]"], true, never>;
}

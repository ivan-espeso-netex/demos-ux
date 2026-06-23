import { EventEmitter } from '@angular/core';
import { EDividerMode } from '../../atoms/divider/divider.component';
import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export declare enum EAuxSidenavMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class AuxSidenavComponent {
    mode: EAuxSidenavMode;
    id: string;
    title: string;
    icon?: EIconName;
    idIconButton: string;
    tooltipIconButton: string;
    iconButtonClicked: EventEmitter<string>;
    EButtonType: typeof EButtonType;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonColor: typeof EButtonColor;
    EDividerMode: typeof EDividerMode;
    EButtonMode: typeof EButtonMode;
    EAuxSidenavMode: typeof EAuxSidenavMode;
    EIconName: typeof EIconName;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuxSidenavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuxSidenavComponent, "admin-aux-sidenav", never, { "mode": { "alias": "mode"; "required": false; }; "id": { "alias": "id"; "required": false; }; "title": { "alias": "title"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "idIconButton": { "alias": "idIconButton"; "required": false; }; "tooltipIconButton": { "alias": "tooltipIconButton"; "required": false; }; }, { "iconButtonClicked": "iconButtonClicked"; }, never, ["[upper]", "[med]", "[lower]"], true, never>;
}

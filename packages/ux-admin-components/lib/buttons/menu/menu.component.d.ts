import { EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { EIconMode, EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonSize, EButtonType } from '../button/button.component';
import * as i0 from "@angular/core";
export interface IAdminMenuOption {
    id?: string;
    text?: string;
    disabled?: boolean;
    visible?: boolean;
    hasCheckIcon?: boolean;
    intro?: string;
    icon?: EIconName;
    divider?: boolean;
    actionIcon?: EIconName;
    actionIconTooltip?: string;
    action?: (option: IAdminMenuOption) => void;
    iconAction?: (option: IAdminMenuOption) => void;
}
export declare enum EAdminMenuMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class MenuComponent {
    options: IAdminMenuOption[];
    buttonType: EButtonButtonType;
    id: string;
    type: EButtonType;
    color: EButtonColor;
    size: EButtonSize;
    text: string;
    leftIcon?: EIconName;
    rightIcon?: EIconName;
    disabled: boolean;
    mode: EAdminMenuMode;
    optionClicked: EventEmitter<IAdminMenuOption>;
    optionActionClicked: EventEmitter<IAdminMenuOption>;
    EButtonMode: typeof EButtonMode;
    EAdminMenuMode: typeof EAdminMenuMode;
    EIconMode: typeof EIconMode;
    EIconName: typeof EIconName;
    handleClick(option: IAdminMenuOption): void;
    handleActionIconClick(option: IAdminMenuOption, event: Event): void;
    openMenu(menuTrigger: MatMenuTrigger): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "admin-menu", never, { "options": { "alias": "options"; "required": false; }; "buttonType": { "alias": "buttonType"; "required": false; }; "id": { "alias": "id"; "required": false; }; "type": { "alias": "type"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; "text": { "alias": "text"; "required": false; }; "leftIcon": { "alias": "leftIcon"; "required": false; }; "rightIcon": { "alias": "rightIcon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "optionClicked": "optionClicked"; "optionActionClicked": "optionActionClicked"; }, never, never, true, never>;
}

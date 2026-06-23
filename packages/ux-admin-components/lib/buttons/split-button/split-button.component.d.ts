import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
export declare enum ESplitButtonColor {
    PRIMARY = "primary",
    ACCENT = "accent"
}
export declare enum ESplitButtonStatus {
    ENABLED = "enabled",
    DISABLED = "disabled",
    AWAITING = "awaiting"
}
export declare enum ESplitButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
interface ISplitButtonCommonProps {
    disabled?: boolean;
    divider?: boolean;
    id: string;
    text: string;
    action?: () => void;
}
interface ISplitButtonWithIcon extends ISplitButtonCommonProps {
    icon: EIconName;
}
interface ISplitButtonWithoutIcon extends ISplitButtonCommonProps {
    icon?: undefined;
}
export type ISplitButtonOption = ISplitButtonWithIcon | ISplitButtonWithoutIcon;
export declare class SplitButtonComponent {
    color: ESplitButtonColor;
    label: string;
    options: ISplitButtonOption[];
    waitingStateLabel: string;
    status: ESplitButtonStatus;
    mode: ESplitButtonMode;
    leftIcon?: EIconName;
    onBtnClick: EventEmitter<Event>;
    onDropdownClick: EventEmitter<ISplitButtonOption>;
    EIconName: typeof EIconName;
    handleClick(option: ISplitButtonOption): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitButtonComponent, "admin-split-button", never, { "color": { "alias": "color"; "required": false; }; "label": { "alias": "label"; "required": false; }; "options": { "alias": "options"; "required": false; }; "waitingStateLabel": { "alias": "waitingStateLabel"; "required": false; }; "status": { "alias": "status"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "leftIcon": { "alias": "leftIcon"; "required": false; }; }, { "onBtnClick": "onBtnClick"; "onDropdownClick": "onDropdownClick"; }, never, never, true, never>;
}
export {};

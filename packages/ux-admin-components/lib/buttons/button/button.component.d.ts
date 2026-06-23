import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { ImgEntityType } from '../../atoms/image/image.component';
import * as i0 from "@angular/core";
export declare enum EButtonType {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}
export declare enum EButtonButtonType {
    MATBUTTON = "mat-button",
    MATFLATBUTTON = "mat-flat-button",
    MATSTROKEDBUTTON = "mat-stroked-button",
    MATICONBUTTON = "mat-icon-button"
}
export declare enum EButtonColor {
    PRIMARY = "primary",
    ACCENT = "accent",
    WARN = "warn",
    WHITE = "white"
}
export declare enum EButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EButtonSize {
    SMALL = "small",
    LARGE = "large"
}
export declare class ButtonComponent {
    mode: EButtonMode;
    id: string;
    text: string;
    type: EButtonType;
    tooltip: string;
    buttonType: EButtonButtonType;
    color: EButtonColor;
    size: EButtonSize;
    disabled: boolean;
    leftIcon?: EIconName;
    rightIcon?: EIconName;
    form: string;
    loadingState: boolean;
    buttonClicked: EventEmitter<Event>;
    ImgEntityType: typeof ImgEntityType;
    /**
     * Gets the dynamic ImgEntityType for a specific icon
     * @param icon The icon name
     * @returns The corresponding ImgEntityType
     */
    getDynamicImgEntityTypeForIcon(icon: string): ImgEntityType;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "admin-button", never, { "mode": { "alias": "mode"; "required": false; }; "id": { "alias": "id"; "required": false; }; "text": { "alias": "text"; "required": false; }; "type": { "alias": "type"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "buttonType": { "alias": "buttonType"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "leftIcon": { "alias": "leftIcon"; "required": false; }; "rightIcon": { "alias": "rightIcon"; "required": false; }; "form": { "alias": "form"; "required": false; }; "loadingState": { "alias": "loadingState"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

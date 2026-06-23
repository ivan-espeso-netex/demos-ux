import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
export declare enum ETextButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum ETextButtonType {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}
export declare enum ETextButtonSize {
    SMALL = "small",
    DEFAULT = "default"
}
export declare class TextButtonComponent {
    id: string;
    text: string;
    type: ETextButtonType;
    size: ETextButtonSize;
    tooltip: string;
    disabled: boolean;
    icon?: EIconName;
    mode: ETextButtonMode;
    buttonClicked: EventEmitter<Event>;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextButtonComponent, "admin-text-button", never, { "id": { "alias": "id"; "required": false; }; "text": { "alias": "text"; "required": false; }; "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { ImgEntityType } from '../../atoms/image/image.component';
import * as i0 from "@angular/core";
export declare enum EImageMenuButtonType {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}
export declare enum EImageMenuButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class ImageMenuButtonComponent {
    id: string;
    type: EImageMenuButtonType;
    mode: EImageMenuButtonMode;
    text?: string;
    tooltip: string;
    disabled: boolean;
    image: string;
    imageAlt: string;
    selected: boolean;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    EIconName: typeof EIconName;
    buttonClicked: EventEmitter<Event>;
    handleImageError(): void;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageMenuButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageMenuButtonComponent, "admin-image-menu-button", never, { "id": { "alias": "id"; "required": false; }; "type": { "alias": "type"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "text": { "alias": "text"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "image": { "alias": "image"; "required": false; }; "imageAlt": { "alias": "imageAlt"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

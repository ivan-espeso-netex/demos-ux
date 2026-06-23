import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { ImgEntityType } from '../../atoms/image/image.component';
import * as i0 from "@angular/core";
export declare enum EConversationalStarterButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EConversationalStarterButtonType {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}
export declare class ConversationalStarterButtonComponent {
    mode: EConversationalStarterButtonMode;
    id: string;
    image?: string;
    imageAlt?: string;
    title?: string;
    text: string;
    textTooltip: string;
    type: EConversationalStarterButtonType;
    disabled: boolean;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    EIconName: typeof EIconName;
    buttonClicked: EventEmitter<Event>;
    handleImageError(): void;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConversationalStarterButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConversationalStarterButtonComponent, "admin-conversational-starter-button", never, { "mode": { "alias": "mode"; "required": false; }; "id": { "alias": "id"; "required": false; }; "image": { "alias": "image"; "required": false; }; "imageAlt": { "alias": "imageAlt"; "required": false; }; "title": { "alias": "title"; "required": false; }; "text": { "alias": "text"; "required": false; }; "textTooltip": { "alias": "textTooltip"; "required": false; }; "type": { "alias": "type"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

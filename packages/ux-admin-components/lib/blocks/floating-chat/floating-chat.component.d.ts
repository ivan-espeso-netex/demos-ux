import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export declare enum EFloatingChatType {
    SUGGESTIONS = "suggestions",
    DEFAULT = "default"
}
export declare enum EFloatingChatMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EFloatingChatSize {
    INLINE = "inline",
    MINIFIED = "minified"
}
export declare class FloatingChatComponent {
    id: string;
    mode: EFloatingChatMode;
    type: EFloatingChatType;
    size: EFloatingChatSize;
    title: string;
    headerImgUrl: string;
    headerImgAlt: string;
    iconRight: EIconName;
    iconColorRight: EButtonColor;
    iconLeft: EIconName;
    iconColorLeft: EButtonColor;
    iconTooltipLeft: string;
    iconTooltipRight: string;
    iconButtonClickedLeft: EventEmitter<string>;
    iconButtonClickedRight: EventEmitter<string>;
    EFloatingChatMode: typeof EFloatingChatMode;
    EButtonMode: typeof EButtonMode;
    EButtonType: typeof EButtonType;
    EButtonButtonType: typeof EButtonButtonType;
    EFloatingChatType: typeof EFloatingChatType;
    EIconName: typeof EIconName;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    ImgMode: typeof EImgMode;
    handleImageError(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FloatingChatComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FloatingChatComponent, "admin-floating-chat", never, { "id": { "alias": "id"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; "title": { "alias": "title"; "required": false; }; "headerImgUrl": { "alias": "headerImgUrl"; "required": false; }; "headerImgAlt": { "alias": "headerImgAlt"; "required": false; }; "iconRight": { "alias": "iconRight"; "required": false; }; "iconColorRight": { "alias": "iconColorRight"; "required": false; }; "iconLeft": { "alias": "iconLeft"; "required": false; }; "iconColorLeft": { "alias": "iconColorLeft"; "required": false; }; "iconTooltipLeft": { "alias": "iconTooltipLeft"; "required": false; }; "iconTooltipRight": { "alias": "iconTooltipRight"; "required": false; }; }, { "iconButtonClickedLeft": "iconButtonClickedLeft"; "iconButtonClickedRight": "iconButtonClickedRight"; }, never, ["[header]", "[bodySuggestions]", "[body]", "[footer]"], true, never>;
}

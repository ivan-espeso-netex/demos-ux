import { EventEmitter } from '@angular/core';
import { EDividerMode } from '../../atoms/divider/divider.component';
import { EIconMode, EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../button/button.component';
import * as i0 from "@angular/core";
interface IAdminProfileMenuCommonProps {
    idOption?: string;
    text?: string;
    disabledOption?: boolean;
    hasIntro?: boolean;
    intro?: string;
    type?: string;
    action?: () => void;
}
interface IAdminProfileMenuWithIcon extends IAdminProfileMenuCommonProps {
    icon: EIconName;
}
interface IAdminProfileMenuWithoutIcon extends IAdminProfileMenuCommonProps {
    icon?: undefined;
}
export type IAdminProfileMenuOption = IAdminProfileMenuWithIcon | IAdminProfileMenuWithoutIcon;
export declare enum EAdminProfileMenuMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class ProfileMenuComponent {
    mode: EAdminProfileMenuMode;
    menuButtonId?: string;
    menuButtonDisabled: boolean;
    menuButtonTooltip: string;
    id?: string;
    headerImgUrl: string;
    headerImgAlt: string;
    headerTitle: string;
    headerSubtitle: string;
    showHeaderButton?: boolean;
    headerButtonText?: string;
    options: IAdminProfileMenuOption[];
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    ImgMode: typeof EImgMode;
    EAdminProfileMenuMode: typeof EAdminProfileMenuMode;
    EDividerMode: typeof EDividerMode;
    EButtonMode: typeof EButtonMode;
    buttonButtonTypeDefault: EButtonButtonType;
    buttonColorDefault: EButtonColor;
    buttonTypeDefault: EButtonType;
    buttonHeaderButtonTypeDefault: EButtonButtonType;
    buttonHeaderColorDefault: EButtonColor;
    buttonHeaderTypeDefault: EButtonType;
    EIconMode: typeof EIconMode;
    EIconName: typeof EIconName;
    menuButtonClicked: EventEmitter<Event>;
    headerButtonClicked: EventEmitter<void>;
    menuOptionClicked: EventEmitter<IAdminProfileMenuOption>;
    handleImageError(): void;
    handleClick(): void;
    handleMenuOptionClick(option: IAdminProfileMenuOption): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileMenuComponent, "admin-profile-menu", never, { "mode": { "alias": "mode"; "required": false; }; "menuButtonId": { "alias": "menuButtonId"; "required": false; }; "menuButtonDisabled": { "alias": "menuButtonDisabled"; "required": false; }; "menuButtonTooltip": { "alias": "menuButtonTooltip"; "required": false; }; "id": { "alias": "id"; "required": false; }; "headerImgUrl": { "alias": "headerImgUrl"; "required": false; }; "headerImgAlt": { "alias": "headerImgAlt"; "required": false; }; "headerTitle": { "alias": "headerTitle"; "required": false; }; "headerSubtitle": { "alias": "headerSubtitle"; "required": false; }; "showHeaderButton": { "alias": "showHeaderButton"; "required": false; }; "headerButtonText": { "alias": "headerButtonText"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "menuButtonClicked": "menuButtonClicked"; "headerButtonClicked": "headerButtonClicked"; "menuOptionClicked": "menuOptionClicked"; }, never, never, true, never>;
}
export {};

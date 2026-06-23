import { EventEmitter } from '@angular/core';
import { EIconColor, EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import { EProgressBarColor, EProgressBarMode } from '../../atoms/progress-bar/progress-bar.component';
import { EButtonButtonType, EButtonColor } from '../../buttons/button/button.component';
import { EAdminMenuMode, IAdminMenuOption } from '../../buttons/menu/menu.component';
import { ETextButtonMode, ETextButtonType } from '../../buttons/text-button/text-button.component';
import * as i0 from "@angular/core";
export declare enum EGridCardState {
    ACTIVE = "active",
    INACTIVE = "inactive",
    WARN = "warn"
}
export declare enum EGridCardMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class GridCardComponent {
    id: string;
    title: string;
    subtitle: string;
    image?: string | ImgEntityType;
    alt?: string;
    state?: EGridCardState;
    leftIcon?: EIconName;
    rightIcon?: EIconName;
    options: IAdminMenuOption[];
    leftFooterText: string;
    rightFooterText: string;
    skeleton: boolean;
    skeletonItems: number;
    mode: EGridCardMode;
    textButton: string;
    iconButton?: EIconName;
    progressBarValue: number;
    progressBarColor: EProgressBarColor;
    progressBarText: string;
    buttonClicked: EventEmitter<Event>;
    optionClicked: EventEmitter<IAdminMenuOption>;
    textButtonClicked: EventEmitter<void>;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    ImgMode: typeof EImgMode;
    EMenuMode: typeof EAdminMenuMode;
    EIconName: typeof EIconName;
    ETextButtonType: typeof ETextButtonType;
    ETextButtonMode: typeof ETextButtonMode;
    EProgressBarColor: typeof EProgressBarColor;
    EProgressBarMode: typeof EProgressBarMode;
    buttontype: EButtonButtonType;
    color: EButtonColor;
    EIconColor: typeof EIconColor;
    EGridCardState: typeof EGridCardState;
    EGridCardMode: typeof EGridCardMode;
    handleClick(event: Event): void;
    handleImageError(): void;
    isImgEntityType(value: string | ImgEntityType | undefined): value is ImgEntityType;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridCardComponent, "admin-grid-card", never, { "id": { "alias": "id"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "image": { "alias": "image"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "state": { "alias": "state"; "required": false; }; "leftIcon": { "alias": "leftIcon"; "required": false; }; "rightIcon": { "alias": "rightIcon"; "required": false; }; "options": { "alias": "options"; "required": false; }; "leftFooterText": { "alias": "leftFooterText"; "required": false; }; "rightFooterText": { "alias": "rightFooterText"; "required": false; }; "skeleton": { "alias": "skeleton"; "required": false; }; "skeletonItems": { "alias": "skeletonItems"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "textButton": { "alias": "textButton"; "required": false; }; "iconButton": { "alias": "iconButton"; "required": false; }; "progressBarValue": { "alias": "progressBarValue"; "required": false; }; "progressBarColor": { "alias": "progressBarColor"; "required": false; }; "progressBarText": { "alias": "progressBarText"; "required": false; }; }, { "buttonClicked": "buttonClicked"; "optionClicked": "optionClicked"; "textButtonClicked": "textButtonClicked"; }, never, never, true, never>;
    static ngAcceptInputType_skeleton: unknown;
}

import { EventEmitter } from '@angular/core';
import { ECircularProgressBarColor, ECircularProgressBarMode } from '../../atoms/circular-progress-bar/circular-progress-bar.component';
import { EIconColor, EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import { ELabelColor, ELabelMode } from '../../atoms/label/label.component';
import { EButtonButtonType, EButtonColor, EButtonSize } from '../../buttons/button/button.component';
import { EAdminMenuMode, IAdminMenuOption } from '../../buttons/menu/menu.component';
import * as i0 from "@angular/core";
export declare enum EFeaturedInfoMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class FeaturedInfoComponent {
    id: string;
    prefixTitle?: string;
    title?: string;
    subtitle?: string;
    subtitle2?: string;
    subtitleValue?: string;
    subtitleValue2?: string;
    circularProgressBarValue?: number;
    circularProgressBarColor?: string;
    image?: string;
    alt?: string;
    mode: EFeaturedInfoMode;
    options: IAdminMenuOption[];
    label: string;
    labelColor: ELabelColor;
    labelMode: ELabelMode;
    description?: string;
    optionClicked: EventEmitter<IAdminMenuOption>;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    ImgMode: typeof EImgMode;
    EFeaturedInfoMode: typeof EFeaturedInfoMode;
    EMenuMode: typeof EAdminMenuMode;
    buttontype: EButtonButtonType;
    EButtonSize: typeof EButtonSize;
    color: EButtonColor;
    EIconName: typeof EIconName;
    EIconColor: typeof EIconColor;
    ELabelMode: typeof ELabelMode;
    ECircularProgressBarColor: typeof ECircularProgressBarColor;
    ECircularProgressBarMode: typeof ECircularProgressBarMode;
    handleImageError(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeaturedInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeaturedInfoComponent, "admin-featured-info", never, { "id": { "alias": "id"; "required": false; }; "prefixTitle": { "alias": "prefixTitle"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "subtitle2": { "alias": "subtitle2"; "required": false; }; "subtitleValue": { "alias": "subtitleValue"; "required": false; }; "subtitleValue2": { "alias": "subtitleValue2"; "required": false; }; "circularProgressBarValue": { "alias": "circularProgressBarValue"; "required": false; }; "circularProgressBarColor": { "alias": "circularProgressBarColor"; "required": false; }; "image": { "alias": "image"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "options": { "alias": "options"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelColor": { "alias": "labelColor"; "required": false; }; "labelMode": { "alias": "labelMode"; "required": false; }; "description": { "alias": "description"; "required": false; }; }, { "optionClicked": "optionClicked"; }, never, never, true, never>;
}

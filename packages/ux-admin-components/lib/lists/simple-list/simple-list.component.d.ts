import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import { ETextButtonMode, ETextButtonType } from '../../buttons/text-button/text-button.component';
import * as i0 from "@angular/core";
export interface IAdminSimpleListOption {
    id: string;
    text: string;
    hasImage?: boolean;
    image?: string;
    altImage?: string;
    imgError?: boolean;
    hasButton?: boolean;
    buttonId?: string;
    buttonText?: string;
    buttonIcon?: string;
    /** Begin deprecated input */
    buttonIconFontFamily?: string;
}
export declare enum EAdminSimpleListMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class SimpleListComponent {
    id: string;
    visibleItems: number;
    showAll: boolean;
    options: IAdminSimpleListOption[];
    textSeeLess: string;
    textSeeMore: string;
    mode: EAdminSimpleListMode;
    hasOptionsToggleVisibility: boolean;
    buttonClicked: EventEmitter<void>;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    EImgMode: typeof EImgMode;
    EAdminSimpleListMode: typeof EAdminSimpleListMode;
    ETextButtonMode: typeof ETextButtonMode;
    EIconName: typeof EIconName;
    buttonType: ETextButtonType;
    visibleOptions: any[];
    ngOnChanges(): void;
    toggleView(): void;
    updateVisibleOptions(): void;
    handleImageError(option: IAdminSimpleListOption): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SimpleListComponent, "admin-simple-list", never, { "id": { "alias": "id"; "required": false; }; "visibleItems": { "alias": "visibleItems"; "required": false; }; "showAll": { "alias": "showAll"; "required": false; }; "options": { "alias": "options"; "required": false; }; "textSeeLess": { "alias": "textSeeLess"; "required": false; }; "textSeeMore": { "alias": "textSeeMore"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "hasOptionsToggleVisibility": { "alias": "hasOptionsToggleVisibility"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

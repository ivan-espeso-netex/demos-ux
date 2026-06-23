import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { ImgEntityType } from '../../atoms/image/image.component';
import { EButtonButtonType, EButtonColor, EButtonType } from '../../buttons/button/button.component';
import { EFloatingActionButtonMode, IFloatingActionButtonOption } from '../../buttons/floating-action-button/floating-action-button.component';
import * as i0 from "@angular/core";
export declare enum EPhotoBrowserUse {
    AUDIO = "audio",
    DEFAULT = "default",
    DOC = "doc",
    ELEARNING = "elearning",
    EXCEL = "excel",
    GROUP = "group",
    IMAGE = "image",
    NEWSLETTER = "newsletter",
    PDF = "PDF",
    POWERPOINT = "powerpoint",
    PROFILE = "profile",
    VIDEO = "video",
    WORD = "word",
    ZIP = "ZIP"
}
export declare enum EPhotoBrowserShape {
    SQUARE = "square",
    CIRCLE = "circle"
}
export declare enum EPhotoBrowserButtonPosition {
    INSIDE = "inside",
    OUTSIDE = "outside"
}
export declare enum EPhotoBrowserButtonIcon {
    EDIT = "edit",
    DELETE = "close"
}
export declare enum EPhotoBrowserMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class PhotoBrowserComponent {
    alt?: string;
    buttonDisabled: boolean;
    buttonIcon: EIconName;
    buttonId?: string;
    buttonTooltip?: string;
    buttonTooltipEdit?: string;
    buttonTooltipClose?: string;
    height: number;
    id?: string;
    image?: string | undefined;
    shape: EPhotoBrowserShape;
    buttonPosition: EPhotoBrowserButtonPosition;
    use: EPhotoBrowserUse;
    width: number;
    mode: EPhotoBrowserMode;
    helperText?: string;
    options: IFloatingActionButtonOption[];
    readonly: boolean;
    optionClicked: EventEmitter<IFloatingActionButtonOption>;
    buttonClicked: EventEmitter<void>;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    buttonTypeDefault: EButtonType;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonColor: typeof EButtonColor;
    buttonColorDefault: EButtonColor;
    EPhotoBrowserUse: typeof EPhotoBrowserUse;
    EPhotoBrowserButtonIcon: typeof EPhotoBrowserButtonIcon;
    EPhotoBrowserShape: typeof EPhotoBrowserShape;
    EIconName: typeof EIconName;
    EFloatingActionButtonMode: typeof EFloatingActionButtonMode;
    EPhotoBrowserMode: typeof EPhotoBrowserMode;
    handleImageError(): void;
    getIconByUse(): EIconName;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhotoBrowserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhotoBrowserComponent, "admin-photo-browser", never, { "alt": { "alias": "alt"; "required": false; }; "buttonDisabled": { "alias": "buttonDisabled"; "required": false; }; "buttonIcon": { "alias": "buttonIcon"; "required": false; }; "buttonId": { "alias": "buttonId"; "required": false; }; "buttonTooltip": { "alias": "buttonTooltip"; "required": false; }; "buttonTooltipEdit": { "alias": "buttonTooltipEdit"; "required": false; }; "buttonTooltipClose": { "alias": "buttonTooltipClose"; "required": false; }; "height": { "alias": "height"; "required": false; }; "id": { "alias": "id"; "required": false; }; "image": { "alias": "image"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "buttonPosition": { "alias": "buttonPosition"; "required": false; }; "use": { "alias": "use"; "required": false; }; "width": { "alias": "width"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "options": { "alias": "options"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "optionClicked": "optionClicked"; "buttonClicked": "buttonClicked"; }, never, never, true, never>;
    static ngAcceptInputType_readonly: unknown;
}

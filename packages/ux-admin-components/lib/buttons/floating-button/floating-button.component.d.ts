import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { ImgEntityType } from '../../atoms/image/image.component';
import * as i0 from "@angular/core";
export declare class FloatingButtonComponent {
    id: string;
    tooltip: string;
    disabled: boolean;
    image: string;
    imageAlt: string;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    EIconName: typeof EIconName;
    buttonClicked: EventEmitter<Event>;
    handleImageError(): void;
    handleClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FloatingButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FloatingButtonComponent, "admin-floating-button", never, { "id": { "alias": "id"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "image": { "alias": "image"; "required": false; }; "imageAlt": { "alias": "imageAlt"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

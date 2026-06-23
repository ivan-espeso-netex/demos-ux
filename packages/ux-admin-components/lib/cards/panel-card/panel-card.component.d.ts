import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import * as i0 from "@angular/core";
export declare enum EPanelCardMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class PanelCardComponent {
    id: string;
    mode: EPanelCardMode;
    title: string;
    description: string;
    image: string;
    alt: string;
    skeleton: boolean;
    skeletonItems: number;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    ImgMode: typeof EImgMode;
    EPanelCardMode: typeof EPanelCardMode;
    EIconName: typeof EIconName;
    cardClicked: EventEmitter<Event>;
    handleClick(): void;
    handleImageError(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PanelCardComponent, "admin-panel-card", never, { "id": { "alias": "id"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "image": { "alias": "image"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "skeleton": { "alias": "skeleton"; "required": false; }; "skeletonItems": { "alias": "skeletonItems"; "required": false; }; }, { "cardClicked": "cardClicked"; }, never, never, true, never>;
    static ngAcceptInputType_skeleton: unknown;
}

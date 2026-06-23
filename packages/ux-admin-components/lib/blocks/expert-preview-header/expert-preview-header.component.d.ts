import { EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import * as i0 from "@angular/core";
export declare enum EExpertPreviewHeaderMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class ExpertPreviewHeaderComponent {
    id: string;
    mode: EExpertPreviewHeaderMode;
    title: string;
    subtitle: string;
    image?: string;
    alt?: string;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    EImgMode: typeof EImgMode;
    EExpertPreviewHeaderMode: typeof EExpertPreviewHeaderMode;
    EIconName: typeof EIconName;
    handleImageError(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpertPreviewHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpertPreviewHeaderComponent, "admin-expert-preview-header", never, { "id": { "alias": "id"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "image": { "alias": "image"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; }, {}, never, never, true, never>;
}

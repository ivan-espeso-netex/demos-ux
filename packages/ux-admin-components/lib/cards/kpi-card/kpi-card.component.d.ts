import { EIconColor, EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import * as i0 from "@angular/core";
export declare enum EKpiCardColor {
    WHITE = "white",
    ACCENT = "accent",
    SECONDARY = "secondary",
    WARN = "warn",
    SUCCESS = "success",
    PURPLE = "purple",
    ALERT = "alert"
}
export declare enum EKpiCardMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class KpiCardComponent {
    id: string;
    mode: EKpiCardMode;
    title: string;
    subtitle: string;
    color?: EKpiCardColor;
    image?: string;
    alt: string;
    icon?: EIconName;
    iconColor: EIconColor;
    skeleton: boolean;
    skeletonItems: number;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    ImgMode: typeof EImgMode;
    EKpiCardMode: typeof EKpiCardMode;
    EIconName: typeof EIconName;
    handleImageError(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<KpiCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KpiCardComponent, "admin-kpi-card", never, { "id": { "alias": "id"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "color": { "alias": "color"; "required": false; }; "image": { "alias": "image"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "iconColor": { "alias": "iconColor"; "required": false; }; "skeleton": { "alias": "skeleton"; "required": false; }; "skeletonItems": { "alias": "skeletonItems"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_skeleton: unknown;
}

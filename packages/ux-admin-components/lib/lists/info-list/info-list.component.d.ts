import * as i0 from "@angular/core";
export declare enum IAdminInfoListMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class InfoListComponent {
    id: string;
    title: string;
    hasBorder: boolean;
    mode: IAdminInfoListMode;
    skeleton: boolean;
    skeletonItems: number;
    imgError: boolean;
    handleImageError(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InfoListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InfoListComponent, "admin-info-list", never, { "id": { "alias": "id"; "required": false; }; "title": { "alias": "title"; "required": false; }; "hasBorder": { "alias": "hasBorder"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "skeleton": { "alias": "skeleton"; "required": false; }; "skeletonItems": { "alias": "skeletonItems"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_skeleton: unknown;
}

import * as i0 from "@angular/core";
export declare enum ELabelColor {
    PRIMARY = "primary",
    ACCENT = "accent",
    WARN = "warn",
    SUCCESS = "success",
    EXTRA = "extra",
    ALERT = "alert",
    BLACK = "black"
}
export declare enum ELabelMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class LabelComponent {
    mode: ELabelMode;
    id?: string;
    text: string;
    color: ELabelColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelComponent, "admin-label", never, { "mode": { "alias": "mode"; "required": false; }; "id": { "alias": "id"; "required": false; }; "text": { "alias": "text"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, never, true, never>;
}

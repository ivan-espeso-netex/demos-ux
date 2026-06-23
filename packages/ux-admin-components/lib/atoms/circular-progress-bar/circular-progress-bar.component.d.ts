import * as i0 from "@angular/core";
export declare enum ECircularProgressBarMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum ECircularProgressBarColor {
    ACCENT = "accent",
    WARN = "warn",
    ALERT = "alert",
    SUCCESS = "success"
}
export declare class CircularProgressBarComponent {
    id: string;
    mode: ECircularProgressBarMode;
    value?: number;
    color: ECircularProgressBarColor | string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<CircularProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CircularProgressBarComponent, "admin-circular-progress-bar", never, { "id": { "alias": "id"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "value": { "alias": "value"; "required": false; }; "color": { "alias": "color"; "required": false; }; }, {}, never, never, true, never>;
}

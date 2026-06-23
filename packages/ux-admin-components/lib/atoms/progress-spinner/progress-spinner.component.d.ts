import * as i0 from "@angular/core";
export declare enum EProgressSpinnerMode {
    DETERMINATE = "determinate",
    INDETERMINATE = "indeterminate"
}
export declare enum EProgressSpinnerColor {
    PRIMARY = "primary",
    ACCENT = "accent",
    WARN = "warn",
    SUCCESS = "success",
    EXTRA = "extra",
    ALERT = "alert",
    WHITE = "white"
}
export declare enum EProgressSpinnerModeColor {
    LIGHT = "light",
    DARK = "dark"
}
export declare class ProgressSpinnerComponent {
    id: string;
    progressMode: EProgressSpinnerMode;
    value: number;
    color: EProgressSpinnerColor;
    diameter: number;
    strokeWidth: number;
    text?: string;
    mode: EProgressSpinnerModeColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressSpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressSpinnerComponent, "admin-progress-spinner", never, { "id": { "alias": "id"; "required": false; }; "progressMode": { "alias": "progressMode"; "required": false; }; "value": { "alias": "value"; "required": false; }; "color": { "alias": "color"; "required": false; }; "diameter": { "alias": "diameter"; "required": false; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; }; "text": { "alias": "text"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, {}, never, never, true, never>;
}

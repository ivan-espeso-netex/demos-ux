import { EIconName } from '../../atoms/icon/icon.component';
import { EProgressSpinnerColor, EProgressSpinnerMode } from '../progress-spinner/progress-spinner.component';
import * as i0 from "@angular/core";
export declare enum EDisclaimerMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EDisclaimerColor {
    PRIMARY = "primary",
    ACCENT = "accent",
    ALERT = "alert",
    WARN = "warn",
    SUCCESS = "success",
    EXTRA = "extra"
}
export declare class DisclaimerComponent {
    id?: string;
    mode: EDisclaimerMode;
    text: string;
    color: EDisclaimerColor;
    icon?: EIconName;
    hasProgressSpinner: boolean;
    modeProgressSpinner: EProgressSpinnerMode;
    diameter: number;
    strokeWidth: number;
    getProgressSpinnerColor(): EProgressSpinnerColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<DisclaimerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DisclaimerComponent, "admin-disclaimer", never, { "id": { "alias": "id"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "text": { "alias": "text"; "required": false; }; "color": { "alias": "color"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "hasProgressSpinner": { "alias": "hasProgressSpinner"; "required": false; }; "modeProgressSpinner": { "alias": "modeProgressSpinner"; "required": false; }; "diameter": { "alias": "diameter"; "required": false; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; }; }, {}, never, never, true, never>;
}

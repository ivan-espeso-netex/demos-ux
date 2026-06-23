import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export declare enum ECanvasCardMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum ECanvasCardType {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export declare class CanvasCardComponent {
    id: string;
    title: string;
    skeleton: boolean;
    skeletonItems: number;
    mode: ECanvasCardMode;
    type: ECanvasCardType;
    buttonText: string;
    buttonTooltip: string;
    deleteClicked: import("@angular/core").OutputEmitterRef<void>;
    buttonClicked: import("@angular/core").OutputEmitterRef<void>;
    buttonButtonTypeDefault: EButtonButtonType;
    buttonColorDefault: EButtonColor;
    buttonTypeDefault: EButtonType;
    EButtonMode: typeof EButtonMode;
    ECanvasCardMode: typeof ECanvasCardMode;
    EIconName: typeof EIconName;
    static ɵfac: i0.ɵɵFactoryDeclaration<CanvasCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CanvasCardComponent, "admin-canvas-card", never, { "id": { "alias": "id"; "required": false; }; "title": { "alias": "title"; "required": false; }; "skeleton": { "alias": "skeleton"; "required": false; }; "skeletonItems": { "alias": "skeletonItems"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "type": { "alias": "type"; "required": false; }; "buttonText": { "alias": "buttonText"; "required": false; }; "buttonTooltip": { "alias": "buttonTooltip"; "required": false; }; }, { "deleteClicked": "deleteClicked"; "buttonClicked": "buttonClicked"; }, never, ["*"], true, never>;
    static ngAcceptInputType_skeleton: unknown;
}

import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export declare enum IAdminInfoBlockMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class InfoBlockComponent {
    id: string;
    mode: IAdminInfoBlockMode;
    title: string;
    buttonType: EButtonType;
    buttonButtonType: EButtonButtonType;
    buttonColor: EButtonColor;
    buttonIcon?: EIconName;
    skeleton: boolean;
    skeletonItems: number;
    buttonClicked: EventEmitter<void>;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonColor: typeof EButtonColor;
    EButtonType: typeof EButtonType;
    EIconName: typeof EIconName;
    EButtonMode: typeof EButtonMode;
    IAdminInfoBlockMode: typeof IAdminInfoBlockMode;
    onButtonClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InfoBlockComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InfoBlockComponent, "admin-info-block", never, { "id": { "alias": "id"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "title": { "alias": "title"; "required": false; }; "buttonType": { "alias": "buttonType"; "required": false; }; "buttonButtonType": { "alias": "buttonButtonType"; "required": false; }; "buttonColor": { "alias": "buttonColor"; "required": false; }; "buttonIcon": { "alias": "buttonIcon"; "required": false; }; "skeleton": { "alias": "skeleton"; "required": false; }; "skeletonItems": { "alias": "skeletonItems"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, ["*"], true, never>;
    static ngAcceptInputType_skeleton: unknown;
}

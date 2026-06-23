import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export interface ITabsLink {
    id: string;
    text: string;
    disabled?: boolean;
    active?: boolean;
}
export declare enum ETabsMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class TabsComponent {
    selectedIndex: number;
    links: ITabsLink[];
    mode: ETabsMode;
    textButton: string;
    typeButton: EButtonType;
    tooltipButton: string;
    disabledButton: boolean;
    leftIconButton?: EIconName;
    hasAction: boolean;
    linkClicked: EventEmitter<{
        link: ITabsLink;
        selectedIndex: number;
    }>;
    actionButtonClicked: EventEmitter<void>;
    EButtonColor: typeof EButtonColor;
    buttonMode: import("@angular/core").Signal<EButtonMode>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsComponent, "admin-tabs", never, { "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "links": { "alias": "links"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "textButton": { "alias": "textButton"; "required": false; }; "typeButton": { "alias": "typeButton"; "required": false; }; "tooltipButton": { "alias": "tooltipButton"; "required": false; }; "disabledButton": { "alias": "disabledButton"; "required": false; }; "leftIconButton": { "alias": "leftIconButton"; "required": false; }; "hasAction": { "alias": "hasAction"; "required": false; }; }, { "linkClicked": "linkClicked"; "actionButtonClicked": "actionButtonClicked"; }, never, never, true, never>;
}

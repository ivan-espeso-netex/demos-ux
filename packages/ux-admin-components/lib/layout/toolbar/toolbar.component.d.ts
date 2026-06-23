import { EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { EIconMode, EIconName } from '../../atoms/icon/icon.component';
import { ImgEntityType } from '../../atoms/image/image.component';
import { EProgressBarColor, EProgressMode } from '../../atoms/progress-bar/progress-bar.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import { EAdminMenuMode } from '../../buttons/menu/menu.component';
import { ToolbarActionDirective } from './toolbar-action.directive';
import { ToolbarExtraActionDirective } from './toolbar-extra-action.directive';
import * as i0 from "@angular/core";
export interface IAdminToolbarBreadcrumb {
    breadcrumbType: EToolbarBreadcrumbType;
    text?: string;
    id?: string;
    routerLink?: string | any[];
    disabled?: boolean;
    ellipsisOptions?: IAdminMenuEllipsisOptions[];
}
export interface IAdminMenuEllipsisOptions {
    idEllipsisOptions: string;
    iconEllipsisOptions?: EIconName;
    textEllipsisOptions: string;
    disabledEllipsisOptions?: boolean;
}
export declare enum EToolbarPanelHeaderType {
    MAIN = "main",
    PANEL = "panel",
    DRAWER = "drawer",
    CUSTOM = "custom",
    SECONDARY = "secondary"
}
export declare enum EToolbarBreadcrumbType {
    INACTIVE = "inactive",
    LINK = "link",
    ACTIVE = "active",
    ELLIPSIS = "ellipsis"
}
export declare enum EToolbarMode {
    LIGHT = "light",
    DARK = "dark"
}
type ToolbarActions = ToolbarActionDirective | ToolbarActionDirective[] | Readonly<ToolbarActionDirective> | Readonly<ToolbarActionDirective[]>;
type ToolbarExtraActions = ToolbarExtraActionDirective | ToolbarExtraActionDirective[] | Readonly<ToolbarExtraActionDirective> | Readonly<ToolbarExtraActionDirective[]>;
export declare class ToolbarComponent {
    panelHeaderType: EToolbarPanelHeaderType;
    title: string;
    tooltipButton: string;
    logoImgUrl: string | ImgEntityType;
    isLoading: boolean;
    breadcrumbs: IAdminToolbarBreadcrumb[];
    routerLink?: string | any[];
    mode: EToolbarMode;
    hasBorder: boolean;
    buttonClicked: EventEmitter<Event>;
    menuButtonClicked: EventEmitter<Event>;
    optionEllipsisClicked: EventEmitter<IAdminMenuEllipsisOptions>;
    buttonButtonTypeDefault: EButtonButtonType;
    buttonColorDefault: EButtonColor;
    buttonTypeDefault: EButtonType;
    EToolbarPanelHeaderType: typeof EToolbarPanelHeaderType;
    EToolbarBreadcrumbType: typeof EToolbarBreadcrumbType;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonColor: typeof EButtonColor;
    EButtonType: typeof EButtonType;
    EToolbarMode: typeof EToolbarMode;
    EButtonMode: typeof EButtonMode;
    EIconName: typeof EIconName;
    ImgEntityType: typeof ImgEntityType;
    EProgressMode: typeof EProgressMode;
    EProgressBarColor: typeof EProgressBarColor;
    EAdminMenuMode: typeof EAdminMenuMode;
    EIconMode: typeof EIconMode;
    private static readonly cachedImgEntityTypes;
    handleClick(): void;
    menuButtonClick(): void;
    openMenu(menuTrigger: MatMenuTrigger): void;
    handleEllipsisOptionClick(option: IAdminMenuEllipsisOptions): void;
    isImgEntityType(value: string): value is ImgEntityType;
    actions: import("@angular/core").InputSignal<ToolbarActions | undefined>;
    protected contentActions: import("@angular/core").Signal<readonly ToolbarActionDirective[]>;
    toolbarActions: import("@angular/core").Signal<import("@angular/core").TemplateRef<any>[]>;
    extraActions: import("@angular/core").InputSignal<ToolbarExtraActions | undefined>;
    protected contentExtraActions: import("@angular/core").Signal<readonly ToolbarExtraActionDirective[]>;
    toolbarExtraActions: import("@angular/core").Signal<import("@angular/core").TemplateRef<any>[]>;
    closeClicked: import("@angular/core").OutputEmitterRef<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarComponent, "admin-toolbar", never, { "panelHeaderType": { "alias": "panelHeaderType"; "required": false; }; "title": { "alias": "title"; "required": false; }; "tooltipButton": { "alias": "tooltipButton"; "required": false; }; "logoImgUrl": { "alias": "logoImgUrl"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "breadcrumbs": { "alias": "breadcrumbs"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "hasBorder": { "alias": "hasBorder"; "required": false; }; "actions": { "alias": "actions"; "required": false; "isSignal": true; }; "extraActions": { "alias": "extraActions"; "required": false; "isSignal": true; }; }, { "buttonClicked": "buttonClicked"; "menuButtonClicked": "menuButtonClicked"; "optionEllipsisClicked": "optionEllipsisClicked"; "closeClicked": "closeClicked"; }, ["contentActions", "contentExtraActions"], never, true, never>;
}
export {};

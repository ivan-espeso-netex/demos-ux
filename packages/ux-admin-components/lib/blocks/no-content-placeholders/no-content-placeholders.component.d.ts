import { HttpClient } from '@angular/common/http';
import { ElementRef, EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import { EAdminMenuMode, IAdminMenuOption } from '../../buttons/menu/menu.component';
import { ESplitButtonColor, ESplitButtonMode, ESplitButtonStatus, ISplitButtonOption } from '../../buttons/split-button/split-button.component';
import * as i0 from "@angular/core";
export interface INoContentPlaceholdersMenuBtnConfig {
    buttonType: EButtonButtonType;
    id: string;
    type: EButtonType;
    color: EButtonColor;
    text: string;
    leftIcon: EIconName;
    rightIcon: EIconName;
    disabled: boolean;
    options: IAdminMenuOption[];
}
export interface INoContentPlaceholdersSplitBtnConfig {
    id: string;
    color: ESplitButtonColor;
    label: string;
    status: ESplitButtonStatus;
    mode: ESplitButtonMode;
    options: ISplitButtonOption[];
    waitingStateLabel: string;
}
export declare enum ENoContentPlaceholdersMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class NoContentPlaceholdersComponent {
    private http;
    private el;
    constructor(http: HttpClient, el: ElementRef);
    title: string;
    description: string;
    alt: string;
    hasButton: boolean;
    menuButtonConfig?: INoContentPlaceholdersMenuBtnConfig;
    splitButtonConfig?: INoContentPlaceholdersSplitBtnConfig;
    buttonText: string;
    buttonIcon: EIconName;
    imgEntity: ImgEntityType;
    mode: ENoContentPlaceholdersMode;
    buttonClicked: EventEmitter<Event>;
    menuButtonClicked: EventEmitter<Event>;
    optionMenuButtonClicked: EventEmitter<IAdminMenuOption>;
    splitButtonClicked: EventEmitter<Event>;
    splitButtonDropdownClicked: EventEmitter<ISplitButtonOption>;
    buttonButtonTypeDefault: EButtonButtonType;
    buttonColorDefault: EButtonColor;
    buttonTypeDefault: EButtonType;
    EButtonMode: typeof EButtonMode;
    ImgMode: typeof EImgMode;
    ENoContentPlaceholdersMode: typeof ENoContentPlaceholdersMode;
    EAdminMenuMode: typeof EAdminMenuMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<NoContentPlaceholdersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NoContentPlaceholdersComponent, "admin-no-content-placeholders", never, { "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "hasButton": { "alias": "hasButton"; "required": false; }; "menuButtonConfig": { "alias": "menuButtonConfig"; "required": false; }; "splitButtonConfig": { "alias": "splitButtonConfig"; "required": false; }; "buttonText": { "alias": "buttonText"; "required": false; }; "buttonIcon": { "alias": "buttonIcon"; "required": false; }; "imgEntity": { "alias": "imgEntity"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "buttonClicked": "buttonClicked"; "menuButtonClicked": "menuButtonClicked"; "optionMenuButtonClicked": "optionMenuButtonClicked"; "splitButtonClicked": "splitButtonClicked"; "splitButtonDropdownClicked": "splitButtonDropdownClicked"; }, never, never, true, never>;
}

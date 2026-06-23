import { EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { EIconMode, EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export declare enum EAdminMenuListMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EAdminMenuListType {
    MENU_LIST_ITEM = "menu-list-item",
    MENU_LIST_NESTED_ITEM = "menu-list-nested-item"
}
interface IAdminMenuListCommonProps {
    idListItem: string;
    text: string;
    type: EAdminMenuListType;
    disabled?: boolean;
    options?: IAdminMenuListNestedOption[];
    idNestedList?: string;
}
interface IAdminMenuListWithLeftIcon extends IAdminMenuListCommonProps {
    icon: EIconName;
}
interface IAdminMenuListWithoutLeftIcon extends IAdminMenuListCommonProps {
    icon?: undefined;
}
interface IAdminMenuListWithRightIcon extends IAdminMenuListCommonProps {
    rightIcon: EIconName;
}
interface IAdminMenuListWithoutRightIcon extends IAdminMenuListCommonProps {
    rightIcon?: undefined;
}
interface IAdminMenuListWithBothIcons extends IAdminMenuListWithLeftIcon, IAdminMenuListWithRightIcon {
}
interface IAdminMenuListWithLeftIconOnly extends IAdminMenuListWithLeftIcon, IAdminMenuListWithoutRightIcon {
}
interface IAdminMenuListWithRightIconOnly extends IAdminMenuListWithoutLeftIcon, IAdminMenuListWithRightIcon {
}
interface IAdminMenuListWithoutIcons extends IAdminMenuListWithoutLeftIcon, IAdminMenuListWithoutRightIcon {
}
export type IAdminMenuListOption = IAdminMenuListWithBothIcons | IAdminMenuListWithLeftIconOnly | IAdminMenuListWithRightIconOnly | IAdminMenuListWithoutIcons;
interface IAdminMenuListNestedOptionCommonProps {
    idNestedList: string;
    textNestedList: string;
    disabledNestedList?: boolean;
    hasCheckIconNestedList?: boolean;
}
interface IAdminMenuListNestedOptionWithIcon extends IAdminMenuListNestedOptionCommonProps {
    iconNestedList: EIconName;
}
interface IAdminMenuListNestedOptionWithoutIcon extends IAdminMenuListNestedOptionCommonProps {
    iconNestedList?: undefined;
}
export type IAdminMenuListNestedOption = IAdminMenuListNestedOptionWithIcon | IAdminMenuListNestedOptionWithoutIcon;
export declare class MenuListComponent {
    listItems: IAdminMenuListOption[];
    id: string;
    disabled: boolean;
    mode: EAdminMenuListMode;
    optionClicked: EventEmitter<IAdminMenuListOption>;
    nestedOptionClicked: EventEmitter<IAdminMenuListNestedOption>;
    buttonButtonTypeDefault: EButtonButtonType;
    buttonColorDefault: EButtonColor;
    buttonTypeDefault: EButtonType;
    EIconMode: typeof EIconMode;
    EAdminMenuListMode: typeof EAdminMenuListMode;
    EIconName: typeof EIconName;
    handleClick(listItem: IAdminMenuListOption): void;
    handleNestedItemClick(option: IAdminMenuListNestedOption): void;
    openMenu(menuTrigger: MatMenuTrigger): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuListComponent, "admin-menu-list", never, { "listItems": { "alias": "listItems"; "required": false; }; "id": { "alias": "id"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "optionClicked": "optionClicked"; "nestedOptionClicked": "nestedOptionClicked"; }, never, never, true, never>;
}
export {};

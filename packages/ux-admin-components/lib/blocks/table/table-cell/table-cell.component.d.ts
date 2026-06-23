import { ElementRef, EventEmitter } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { EIconName } from '../../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../../atoms/image/image.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../../buttons/button/button.component';
import { EAdminTableMode } from '../table.component';
import * as i0 from "@angular/core";
export type ChildButtonConfig = {
    buttonType: EButtonButtonType;
    disabled?: boolean;
    color: EButtonColor;
    id?: string | undefined;
    leftIcon?: EIconName;
    rightIcon?: EIconName;
    label?: string;
    tooltip?: string;
    type?: EButtonType;
};
export type ChildIconConfig = {
    icon: EIconName;
};
export type ChildImageConfig = {
    src?: string | undefined;
    alt: string | undefined;
    shape: ImageShape | undefined;
    imgError?: boolean;
};
export declare enum ETableCellMode {
    LIGHT = "light",
    DARK = "dark"
}
export type ChildComponent = 'image' | 'icon' | 'button';
export type ImageShape = 'square' | 'rounded';
export declare enum ELinkTarget {
    SELF = "_self",
    BLANK = "_blank"
}
export type TableCellConfig = {
    id?: string;
    label?: string;
    link?: {
        url: string;
        target?: ELinkTarget;
    };
    routerLink?: string | any[];
    childComponent?: ChildComponent;
    childButtonConfig?: ChildButtonConfig;
    childIconConfig?: ChildIconConfig;
    childImageConfig?: ChildImageConfig;
};
export declare class TableCellComponent {
    tooltipDisabled: boolean;
    buttonButtonTypeDefault: EButtonButtonType;
    buttonTypeDefault: EButtonType;
    buttonColorDefault: EButtonColor;
    EAdminTableMode: typeof EAdminTableMode;
    EButtonMode: typeof EButtonMode;
    ETableCellMode: typeof ETableCellMode;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    ImgMode: typeof EImgMode;
    EIconName: typeof EIconName;
    labelElement: ElementRef<HTMLSpanElement>;
    tooltip: MatTooltip;
    get dynamicClass(): string;
    tableCellConfig: TableCellConfig;
    mode: ETableCellMode;
    buttonTableCellClicked: EventEmitter<string>;
    get linkTarget(): ELinkTarget;
    ngAfterViewInit(): void;
    checkOverflow(): boolean;
    handleButtonClicked(): void;
    handleImageError(): void;
    get imageShapeClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableCellComponent, "admin-table-cell", never, { "tableCellConfig": { "alias": "tableCellConfig"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "buttonTableCellClicked": "buttonTableCellClicked"; }, never, never, true, never>;
}

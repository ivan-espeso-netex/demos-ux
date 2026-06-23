import { FlatTreeControl } from '@angular/cdk/tree';
import { EventEmitter, OnInit } from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { EIconMode, EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor } from '../../buttons/button/button.component';
import { EAdminMenuMode, IAdminMenuOption } from '../../buttons/menu/menu.component';
import * as i0 from "@angular/core";
export declare enum EAdminTreeMode {
    LIGHT = "light",
    DARK = "dark"
}
export interface IAdminTreeNode {
    [key: string]: any;
    children?: IAdminTreeNode[];
}
export interface IAdminTreeNodeClickEvent {
    node: IAdminTreeNode;
    isExpanded: boolean;
}
interface IAdminTreeFlatNode {
    expandable: boolean;
    level: number;
    label: string;
    icon?: EIconName;
    raw: IAdminTreeNode;
    options?: IAdminMenuOption[];
}
export declare class TreeComponent implements OnInit {
    mode: EAdminTreeMode;
    data: IAdminTreeNode[];
    labelKey: string;
    childrenKey: string;
    globalIcon?: EIconName;
    nodeClick: EventEmitter<IAdminTreeNodeClickEvent>;
    optionClicked: EventEmitter<IAdminMenuOption>;
    EIconName: typeof EIconName;
    EAdminTreeMode: typeof EAdminTreeMode;
    EIconMode: typeof EIconMode;
    EAdminMenuMode: typeof EAdminMenuMode;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonColor: typeof EButtonColor;
    buttontype: EButtonButtonType;
    color: EButtonColor;
    selectedNode: IAdminTreeFlatNode | null;
    treeControl: FlatTreeControl<IAdminTreeFlatNode, IAdminTreeFlatNode>;
    ngOnInit(): void;
    private transformer;
    private treeFlattener;
    dataSource: MatTreeFlatDataSource<IAdminTreeNode, IAdminTreeFlatNode, IAdminTreeFlatNode>;
    hasChild: (_: number, node: IAdminTreeFlatNode) => boolean;
    hasNoChild: (_: number, node: IAdminTreeFlatNode) => boolean;
    onNodeClick(node: IAdminTreeFlatNode, event: Event): void;
    isSelected(node: IAdminTreeFlatNode): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeComponent, "admin-tree", never, { "mode": { "alias": "mode"; "required": false; }; "data": { "alias": "data"; "required": false; }; "labelKey": { "alias": "labelKey"; "required": false; }; "childrenKey": { "alias": "childrenKey"; "required": false; }; "globalIcon": { "alias": "globalIcon"; "required": false; }; }, { "nodeClick": "nodeClick"; "optionClicked": "optionClicked"; }, never, never, true, never>;
}
export {};

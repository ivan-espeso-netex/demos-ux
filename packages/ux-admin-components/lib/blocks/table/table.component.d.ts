import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import { IColumnDefinition, IVisibleColumnDefinition } from './table.models';
import { StatusType, TTableRowData } from './types/table.types';
import * as i0 from "@angular/core";
export declare enum EAdminTableMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class TableComponent<T extends Record<string, any> = any> implements AfterViewInit, OnChanges, OnInit {
    private destroy$;
    countSelectedRows: number;
    dataSource: MatTableDataSource<TTableRowData<T>>;
    noContentPlaceholderImageDefault: string;
    selectable: import("@angular/core").InputSignal<boolean>;
    singleSelection: import("@angular/core").InputSignal<boolean>;
    selection?: SelectionModel<TTableRowData<T>>;
    private _isSticked;
    get isSticked(): boolean;
    set isSticked(value: boolean);
    columnDefinition: import("@angular/core").InputSignal<IColumnDefinition[]>;
    columns: import("@angular/core").Signal<IColumnDefinition[]>;
    columnNames: import("@angular/core").Signal<string[]>;
    status: import("@angular/core").InputSignal<StatusType>;
    dropdownButtonType: EButtonType;
    dropdownButtonButtonType: EButtonButtonType;
    dropdownButtonColor: EButtonColor;
    EAdminTableMode: typeof EAdminTableMode;
    EButtonMode: typeof EButtonMode;
    EIconName: typeof EIconName;
    rowData: TTableRowData<T>[];
    selectedData: TTableRowData<T>[];
    selectionHeaderMessage: string;
    visibleColumnDefinition: IVisibleColumnDefinition[];
    dropdownButtonTooltip: string;
    mode: EAdminTableMode;
    stickyHeader: boolean;
    parentContainer: HTMLElement | null;
    tableWidth: string;
    enableSortClear: boolean;
    defaultSort: {
        active: string;
        direction: 'asc' | 'desc';
    } | undefined;
    getSelectedRows: EventEmitter<TTableRowData<T>[]>;
    getSelectedRow: EventEmitter<TTableRowData<T>>;
    changeVisibleColumns: EventEmitter<IVisibleColumnDefinition>;
    sortChange: EventEmitter<Sort>;
    sort: MatSort;
    labels: QueryList<ElementRef>;
    headerLabels: QueryList<ElementRef>;
    tooltipDisabledMap: Map<string, boolean>;
    headerTooltipDisabledMap: Map<string, boolean>;
    private syncSelection;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private applyDefaultSort;
    updateTooltipStates(): void;
    isTextOverflowing(label: HTMLElement): boolean;
    checkTooltipDisabled(key: string): boolean;
    checkHeaderTooltipDisabled(key: string): boolean;
    isAllSelected(): boolean;
    masterToggle(): void;
    toggleRow(row: TTableRowData<T>, checked: boolean): void;
    rowSelect(row: TTableRowData<T>): void;
    onMenuItemChange(column: IVisibleColumnDefinition, visible: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent<any>, "admin-table", never, { "selectable": { "alias": "selectable"; "required": false; "isSignal": true; }; "singleSelection": { "alias": "singleSelection"; "required": false; "isSignal": true; }; "columnDefinition": { "alias": "columnDefinition"; "required": true; "isSignal": true; }; "status": { "alias": "status"; "required": false; "isSignal": true; }; "rowData": { "alias": "rowData"; "required": false; }; "selectedData": { "alias": "selectedData"; "required": false; }; "selectionHeaderMessage": { "alias": "selectionHeaderMessage"; "required": false; }; "visibleColumnDefinition": { "alias": "visibleColumnDefinition"; "required": false; }; "dropdownButtonTooltip": { "alias": "dropdownButtonTooltip"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "stickyHeader": { "alias": "stickyHeader"; "required": false; }; "parentContainer": { "alias": "parentContainer"; "required": false; }; "tableWidth": { "alias": "tableWidth"; "required": false; }; "enableSortClear": { "alias": "enableSortClear"; "required": false; }; "defaultSort": { "alias": "defaultSort"; "required": false; }; }, { "getSelectedRows": "getSelectedRows"; "getSelectedRow": "getSelectedRow"; "changeVisibleColumns": "changeVisibleColumns"; "sortChange": "sortChange"; }, never, ["[selection-header-actions]", "admin-no-content-placeholders"], true, never>;
    static ngAcceptInputType_enableSortClear: unknown;
}

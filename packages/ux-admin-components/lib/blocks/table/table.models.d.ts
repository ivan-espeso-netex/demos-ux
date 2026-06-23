import { Type } from '@angular/core';
import { ColumnType } from './types/table.types';
/**
 * @description IColumnDefinition is a custom type which is used in `table` for column properties
 */
export interface IColumnDefinition {
    /**
     * @description Unique identifier for the column
     */
    id?: string;
    /**
     * @description Width of the column (e.g. '100px', '10%', etc.)
     * Use this for fixed-width columns. When specified, the column will have a fixed width and won't grow or shrink.
     * If neither width nor flexGrow is specified, the column will grow uniformly with other columns (default: flex: 1 1 0).
     */
    width?: string;
    /**
     * @description Flex grow factor for the column.
     * Use this for columns that should expand to fill available space.
     * A column with flexGrow: 2 will grow twice as much as one with flexGrow: 1.
     * If width is also specified, it will be used as the flex-basis.
     * If neither width nor flexGrow is specified, the column will grow uniformly (default: flex: 1 1 0).
     */
    flexGrow?: number;
    /**
     * @description Minimum width of the column (e.g. '100px', '10rem', etc.)
     * Use this to ensure a column doesn't shrink below a certain size.
     * This property works best when used with flexGrow or when no width is specified.
     */
    minWidth?: string;
    /**
     * @description Icon for the column header row
     */
    icon?: string;
    /**
     * @description The column name to be used for fetching/binding data
     */
    name: string;
    /**
     * @description The column name to be displayed
     */
    displayName: string;
    /**
     * @description Property for disabling sorting
     */
    disableSorting?: boolean;
    /**
     * @description Property for column type
     */
    columnType?: ColumnType;
    /**
     * @description Property for any component rendered in the cell
     */
    component?: {
        selector: Type<any> | null;
        inputs?: any;
    };
    /**
     * @description Property for visibility of column
     */
    visible: boolean;
    /**
     * @description Property for enable sorting
     */
    sortable?: boolean;
    /**
     * @description Property to make the column sticky at the start
     */
    sticky?: boolean;
    /**
     * @description Property to make the column sticky at the end
     */
    stickyEnd?: boolean;
}
/**
 * @description IVisibleColumnDefinition is a custom type which is used in `table` for visible column properties
 */
export interface IVisibleColumnDefinition {
    /**
     * @description Unique identifier for the column
     */
    id?: string;
    /**
     * @description The column name to be used for fetching/binding data
     */
    name: string;
    /**
     * @description The column name to be displayed beside the checkbox
     */
    displayName: string;
    /**
     * @description Property for visibility of column
     */
    visible: boolean;
}
/**
 * @description Row interface
 */
export interface Row {
    position: number;
}
/**
 * @description ITableRowData is a custom type which is used in `table` for row properties
 */
export interface ITableRowData {
    id: string;
    [key: string]: any;
}

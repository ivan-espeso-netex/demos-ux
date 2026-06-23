export type ColumnType = 'text' | 'component' | undefined;
export type StatusType = 'loading-data' | 'loaded-data' | 'adding-data';
export type TableState<T> = {
    status: StatusType;
    selectable: boolean;
    data: T[];
    columns: T[];
};
/**
 * @description Type for table row data
 * @template T - Generic type that extends Record<string, any> to represent custom row data
 */
export type TTableRowData<T extends Record<string, any>> = T & {
    id: number | string;
    disabled?: boolean;
    [key: string]: any;
};

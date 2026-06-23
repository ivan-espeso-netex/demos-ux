import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
export declare enum ECheckboxMode {
    LIGHT = "light",
    DARK = "dark"
}
export interface ICheckboxOption {
    checked: boolean;
    disabled?: boolean;
    id?: string;
    labelPosition?: string;
    name: string;
    required: boolean;
    value: string;
    label: string;
}
export declare enum ECheckboxLabelPosition {
    BEFORE = "before",
    AFTER = "after"
}
export declare class CheckboxComponent implements ControlValueAccessor {
    mode: ECheckboxMode;
    disabled: boolean;
    id: string;
    label: string;
    labelPosition: ECheckboxLabelPosition;
    name: string;
    required: boolean;
    checkboxChange: EventEmitter<MatCheckboxChange>;
    value: boolean;
    onChange: any;
    onTouched: any;
    writeValue(value: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    onCheckboxChange(event: MatCheckboxChange): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "admin-checkbox", never, { "mode": { "alias": "mode"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "id": { "alias": "id"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "name": { "alias": "name"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, { "checkboxChange": "checkboxChange"; }, never, never, true, never>;
}

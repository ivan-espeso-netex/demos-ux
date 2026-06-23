import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import * as i0 from "@angular/core";
export interface IRadioGroupOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export declare enum ERadioGroupLabelPosition {
    BEFORE = "before",
    AFTER = "after"
}
export declare enum ERadioGroupPosition {
    COLUMN = "column",
    ROW = "row"
}
export declare enum ERadioGroupMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class RadioGroupComponent implements ControlValueAccessor {
    disabled: boolean;
    labelPosition: ERadioGroupLabelPosition;
    name: string;
    position: ERadioGroupPosition;
    mode: ERadioGroupMode;
    options: IRadioGroupOption[];
    radioGroupValue: string;
    radioGroupChange: EventEmitter<MatRadioChange>;
    value: string;
    onChange: (value: string) => void;
    onTouched: () => void;
    writeValue(value: string): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState?(isDisabled: boolean): void;
    onRadioChange(change: MatRadioChange): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroupComponent, "admin-radio-group", never, { "disabled": { "alias": "disabled"; "required": false; }; "labelPosition": { "alias": "labelPosition"; "required": false; }; "name": { "alias": "name"; "required": false; }; "position": { "alias": "position"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "options": { "alias": "options"; "required": false; }; "radioGroupValue": { "alias": "radioGroupValue"; "required": false; }; }, { "radioGroupChange": "radioGroupChange"; }, never, never, true, never>;
}

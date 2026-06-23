import { EventEmitter, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';
import * as i0 from "@angular/core";
export declare enum EDatepickerMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class DatepickerComponent implements ControlValueAccessor, OnInit {
    injector: Injector;
    constructor(injector: Injector);
    mode: EDatepickerMode;
    id: string;
    label: string;
    placeholder: string;
    placeholderStartDate: string;
    placeholderEndDate: string;
    hint: string;
    disabled: boolean;
    hideAssistiveText: boolean;
    errorMsg: string;
    type: 'simple' | 'range';
    dateValue: Date;
    dateRangeValue: DateRange<Date>;
    dateChange: EventEmitter<Date>;
    dateInput: EventEmitter<Date>;
    dateRangeChange: EventEmitter<DateRange<Date>>;
    dateRangeInput: EventEmitter<DateRange<Date>>;
    control: FormControl<any>;
    onChange: any;
    onTouched: any;
    private _value;
    range: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    get value(): Date | DateRange<Date> | null;
    set value(val: Date | DateRange<Date> | null);
    getRangeStart(): Date | null;
    getRangeEnd(): Date | null;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    onDateChange(value: Date): void;
    onDateInput(value: Date): void;
    onStartDateChange(value: Date | null): void;
    onStartDateInput(value: Date | null): void;
    onEndDateChange(value: Date | null): void;
    onEndDateInput(value: Date | null): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatepickerComponent, "admin-datepicker", never, { "mode": { "alias": "mode"; "required": false; }; "id": { "alias": "id"; "required": true; }; "label": { "alias": "label"; "required": true; }; "placeholder": { "alias": "placeholder"; "required": false; }; "placeholderStartDate": { "alias": "placeholderStartDate"; "required": false; }; "placeholderEndDate": { "alias": "placeholderEndDate"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "hideAssistiveText": { "alias": "hideAssistiveText"; "required": false; }; "errorMsg": { "alias": "errorMsg"; "required": false; }; "type": { "alias": "type"; "required": false; }; "dateValue": { "alias": "dateValue"; "required": false; }; "dateRangeValue": { "alias": "dateRangeValue"; "required": false; }; }, { "dateChange": "dateChange"; "dateInput": "dateInput"; "dateRangeChange": "dateRangeChange"; "dateRangeInput": "dateRangeInput"; }, never, never, true, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_hideAssistiveText: unknown;
}

import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, ValidatorFn } from '@angular/forms';
import * as i0 from "@angular/core";
export declare enum ETextareaMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class TextareaComponent implements ControlValueAccessor {
    mode: ETextareaMode;
    errorMessages: {
        [key: string]: string;
    };
    hint: string;
    label: string;
    placeholder: string;
    hideAssistiveText: boolean;
    set disabled(value: boolean);
    get disabled(): boolean;
    set required(value: boolean);
    get required(): boolean;
    set minlength(value: number | null);
    get minlength(): number | null;
    set maxlength(value: number | null);
    get maxlength(): number | null;
    set validators(validatorFns: ValidatorFn[]);
    set value(val: string);
    get value(): string;
    blur: EventEmitter<FormControl>;
    change: EventEmitter<FormControl>;
    focus: EventEmitter<FormControl>;
    formControl: FormControl<string | null>;
    private _disabled;
    private _customValidators;
    private _required;
    private _minlength;
    private _maxlength;
    private _value;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor();
    onInputChange(event: any): void;
    onBlur(): void;
    getErrorMessage(): string;
    hasError(): boolean;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextareaComponent, "admin-textarea", never, { "mode": { "alias": "mode"; "required": false; }; "errorMessages": { "alias": "errorMessages"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "hideAssistiveText": { "alias": "hideAssistiveText"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; "minlength": { "alias": "minlength"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "validators": { "alias": "validators"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "blur": "blur"; "change": "change"; "focus": "focus"; }, never, never, true, never>;
    static ngAcceptInputType_hideAssistiveText: unknown;
}

import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl } from "@angular/forms";
import { ErrorStateMatcher } from '@angular/material/core';
import { EIconName } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
interface Error {
    [key: string]: string | boolean;
}
export declare enum EInputMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EInputType {
    NUMBER = "number",
    TEXT = "text",
    PASSWORD = "password"
}
export declare class InputComponent implements ControlValueAccessor {
    mode: EInputMode;
    disabled: boolean;
    errorMessages: Error;
    errorStateMatcher: ErrorStateMatcher;
    hint: string;
    label: string;
    minlength: number | null;
    maxlength: number | null;
    name: string;
    placeholder: string;
    prefixIcon?: EIconName;
    readonly: boolean;
    required: boolean;
    hideAssistiveText: boolean;
    suffixIcon?: EIconName;
    suffixText: string;
    type: EInputType;
    value: string;
    blur: EventEmitter<FormControl>;
    change: EventEmitter<FormControl>;
    focus: EventEmitter<FormControl>;
    private injector;
    private subscription?;
    control: FormControl;
    ngOnInit(): void;
    onChange: ((value: string) => void) | undefined;
    onTouched: (() => void) | undefined;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onBlur(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "admin-input", never, { "mode": { "alias": "mode"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "errorMessages": { "alias": "errorMessages"; "required": false; }; "errorStateMatcher": { "alias": "errorStateMatcher"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "label": { "alias": "label"; "required": false; }; "minlength": { "alias": "minlength"; "required": false; }; "maxlength": { "alias": "maxlength"; "required": false; }; "name": { "alias": "name"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "prefixIcon": { "alias": "prefixIcon"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; "hideAssistiveText": { "alias": "hideAssistiveText"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "suffixText": { "alias": "suffixText"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "blur": "blur"; "change": "change"; "focus": "focus"; }, never, never, true, never>;
    static ngAcceptInputType_disabled: any;
    static ngAcceptInputType_readonly: any;
    static ngAcceptInputType_required: any;
    static ngAcceptInputType_hideAssistiveText: unknown;
}
export {};

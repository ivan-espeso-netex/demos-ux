import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ErrorStateMatcher } from '@angular/material/core';
import { EIconName } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
export interface IAutocompleteOption {
    id: string;
    text: string;
    disabled?: boolean;
}
interface Error {
    [key: string]: string | boolean;
}
export declare enum EAutocompleteMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class AutocompleteComponent implements ControlValueAccessor, OnInit, OnDestroy {
    autocompleteInput: ElementRef<HTMLInputElement>;
    mode: EAutocompleteMode;
    options: IAutocompleteOption[];
    label: string;
    placeholder: string;
    hint: string;
    errorMessages: Error;
    errorStateMatcher: ErrorStateMatcher;
    required: boolean;
    hideAssistiveText: boolean;
    prefixIcon?: EIconName;
    suffixIcon?: EIconName;
    delay: number;
    value: IAutocompleteOption | string;
    optionSelected: EventEmitter<IAutocompleteOption>;
    blur: EventEmitter<FormControl>;
    change: EventEmitter<FormControl>;
    focus: EventEmitter<FormControl>;
    prefixIconClick: EventEmitter<void>;
    suffixIconClick: EventEmitter<void>;
    private inputSubject;
    private subscription;
    private injector;
    control: FormControl;
    EAutocompleteMode: typeof EAutocompleteMode;
    displayFn: (option: IAutocompleteOption) => string;
    getDisplayText(value: IAutocompleteOption | string): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onOptionSelected(event: MatAutocompleteSelectedEvent): void;
    onInputChange(event: Event): void;
    onChange: ((value: IAutocompleteOption | string) => void) | undefined;
    onTouched: (() => void) | undefined;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onPrefixIconClick(event: Event): void;
    onSuffixIconClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteComponent, "admin-autocomplete", never, { "mode": { "alias": "mode"; "required": false; }; "options": { "alias": "options"; "required": false; }; "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "errorMessages": { "alias": "errorMessages"; "required": false; }; "errorStateMatcher": { "alias": "errorStateMatcher"; "required": false; }; "required": { "alias": "required"; "required": false; }; "hideAssistiveText": { "alias": "hideAssistiveText"; "required": false; }; "prefixIcon": { "alias": "prefixIcon"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "optionSelected": "optionSelected"; "blur": "blur"; "change": "change"; "focus": "focus"; "prefixIconClick": "prefixIconClick"; "suffixIconClick": "suffixIconClick"; }, never, never, true, never>;
    static ngAcceptInputType_required: any;
    static ngAcceptInputType_hideAssistiveText: unknown;
}
export {};

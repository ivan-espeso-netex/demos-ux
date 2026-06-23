import { ElementRef, EventEmitter, QueryList } from '@angular/core';
import { ControlValueAccessor, FormControl, ValidatorFn } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import * as i0 from "@angular/core";
export declare enum ESelectMode {
    LIGHT = "light",
    DARK = "dark"
}
export interface ISelectOption {
    id?: string;
    value: string;
    viewValue: string;
    disabled?: boolean;
}
export declare class SelectComponent implements ControlValueAccessor {
    optionElements: QueryList<ElementRef<HTMLSpanElement>>;
    set disabled(value: boolean);
    get disabled(): boolean;
    mode: ESelectMode;
    errorMessages: {
        [key: string]: string;
    };
    hint: string;
    label: string;
    options: ISelectOption[];
    placeholder: string;
    required: boolean;
    multiple: boolean;
    hideAssistiveText: boolean;
    set validators(validatorFns: ValidatorFn[]);
    selectionChange: EventEmitter<MatSelectChange>;
    private _disabled;
    formControl: FormControl<string | null>;
    onChange: any;
    onTouch: any;
    value: string;
    /**
     * Computed signal returning the CSS classes for the select panel.
     * Ensures base and mode classes are always applied, avoiding race conditions in Firefox.
     */
    panelClass: import("@angular/core").Signal<string[]>;
    /**
   * Map that stores the tooltip disabled state for each select option.
   * The key is the index of the option and the value is a boolean indicating whether the tooltip is disabled.
   */
    tooltipDisabledMap: Map<number, boolean>;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: any): void;
    getErrorMessage(): string;
    hasError(): boolean;
    onClosed(): void;
    onBlur(): void;
    onSelectionChange(event: any): void;
    /**
   * Method executed when the select panel is opened.
   * Checks for overflow in the select options after a short delay.
   * This is used to determine whether a tooltip should be shown or not.
   */
    onOpened(): void;
    /**
   * Method that checks for overflow in the select options.
   * This is used to determine whether a tooltip should be shown or not.
   */
    checkOverflow(): void;
    /**
   * Method that checks if the tooltip should be disabled for a given option.
   * This is used to determine whether a tooltip should be shown or not.
   */
    isTooltipDisabled(index: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent, "admin-select", never, { "disabled": { "alias": "disabled"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "errorMessages": { "alias": "errorMessages"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "label": { "alias": "label"; "required": false; }; "options": { "alias": "options"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "hideAssistiveText": { "alias": "hideAssistiveText"; "required": false; }; "validators": { "alias": "validators"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, never, true, never>;
    static ngAcceptInputType_multiple: unknown;
    static ngAcceptInputType_hideAssistiveText: unknown;
}

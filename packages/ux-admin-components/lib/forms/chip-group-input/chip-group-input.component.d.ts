import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { EIconColor, EIconName } from '../../atoms/icon/icon.component';
import { EChipGroupMode, EChipGroupTheme, EChipGroupType, IAdminChipGroup } from '../types/chip-group.types';
import * as i0 from "@angular/core";
export interface IChipGroupInputAutocompleteOption {
    id: string;
    text: string;
}
export declare class ChipGroupInputComponent implements OnInit, OnDestroy, AfterViewInit {
    addOnBlur: boolean;
    private inputSubject;
    private subscription;
    chipInput: ElementRef<HTMLInputElement>;
    matFormFieldRef: ElementRef;
    private resizeObserver?;
    private lastHeight;
    currentWrapperHeight: import("@angular/core").WritableSignal<number | null>;
    wrapperHeightDiff: import("@angular/core").WritableSignal<number | null>;
    autocompleteOptions: IChipGroupInputAutocompleteOption[];
    chipGroupInputControl: FormControl;
    chips: (IAdminChipGroup)[];
    delay: number;
    errorMessages: {
        [key: string]: string | boolean;
    };
    hint: string;
    label: string;
    placeholder: string;
    mode: EChipGroupMode;
    multipleAutocomplete: boolean;
    loading: boolean;
    hideAssistiveText: boolean;
    addedChip: EventEmitter<string>;
    removedChip: EventEmitter<IAdminChipGroup>;
    clickedChip: EventEmitter<IAdminChipGroup>;
    inputBlurred: EventEmitter<string>;
    inputChanged: EventEmitter<string>;
    inputFocused: EventEmitter<string>;
    optionSelected: EventEmitter<MatAutocompleteSelectedEvent>;
    optionToggled: EventEmitter<{
        option: IChipGroupInputAutocompleteOption;
        checked: boolean;
    }>;
    EChipGroupTheme: typeof EChipGroupTheme;
    EChipGroupMode: typeof EChipGroupMode;
    EIconName: typeof EIconName;
    EIconColor: typeof EIconColor;
    ngOnInit(): void;
    typeOptions: {
        type: EChipGroupType;
        icon: EIconName;
    }[];
    /**
     * Lifecycle hook that is called after Angular has fully initialized the component's view.
     *
     * This implementation sets up a ResizeObserver on the Angular Material input wrapper ('.mat-mdc-text-field-wrapper')
     * but only if the 'multipleAutocomplete' input is true. The observer listens for any changes in the height of the wrapper,
     * which can occur due to user interaction, content changes, or window resizing.
     *
     * When a height change is detected, the method:
     * 1. Updates the current height signal (currentWrapperHeight).
     * 2. Calculates the height difference (wrapperHeightDiff) compared to the previous value.
     * 3. Dynamically repositions the overlay panel ('.cdk-overlay-pane') by adjusting its 'top' style property,
     *    ensuring the overlay remains visually aligned with the input field even as its size changes.
     *
     * This approach ensures that overlays (such as autocomplete dropdowns) are always correctly positioned
     * relative to the input, regardless of dynamic UI changes or browser resizing, without manual intervention.
     *
     * The observer is disconnected in ngOnDestroy to prevent memory leaks.
     */
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onAdd(): void;
    onInput(event: Event): void;
    onFocus(event: Event): void;
    onBlur(event: Event): void;
    onOptionToggle(option: IChipGroupInputAutocompleteOption, checked: boolean): void;
    clearInput(): void;
    isChipSelected(id: string): boolean;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipGroupInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipGroupInputComponent, "admin-chip-group-input", never, { "autocompleteOptions": { "alias": "autocompleteOptions"; "required": false; }; "chipGroupInputControl": { "alias": "chipGroupInputControl"; "required": false; }; "chips": { "alias": "chips"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "errorMessages": { "alias": "errorMessages"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "multipleAutocomplete": { "alias": "multipleAutocomplete"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "hideAssistiveText": { "alias": "hideAssistiveText"; "required": false; }; }, { "addedChip": "addedChip"; "removedChip": "removedChip"; "clickedChip": "clickedChip"; "inputBlurred": "inputBlurred"; "inputChanged": "inputChanged"; "inputFocused": "inputFocused"; "optionSelected": "optionSelected"; "optionToggled": "optionToggled"; }, never, never, true, never>;
    static ngAcceptInputType_hideAssistiveText: unknown;
}

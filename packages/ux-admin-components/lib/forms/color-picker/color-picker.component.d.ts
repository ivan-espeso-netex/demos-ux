import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxColorsColor } from 'ngx-colors';
import * as i0 from "@angular/core";
export declare enum EColorPickerMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class ColorPickerComponent implements OnInit {
    acceptLabel: string;
    cancelLabel: string;
    color: string | null;
    errorMessages: Record<string, string>;
    hideColorPicker: boolean;
    hideTextInput: boolean;
    label: string;
    mode: EColorPickerMode;
    palette?: NgxColorsColor[] | string[];
    placeholder: string;
    readonly: boolean;
    required: boolean;
    change: EventEmitter<string>;
    close: EventEmitter<void>;
    input: EventEmitter<string>;
    open: EventEmitter<void>;
    slider: EventEmitter<string>;
    inputCtrl: FormControl<string | null>;
    pickerCtrl: FormControl<string | null>;
    get displayColor(): string | null;
    onColorPickerPanelChange(color: any): void;
    onColorPickerPanelInput(color: any): void;
    onColorPickerPanelSlider(color: string): void;
    onColorPickerPanelOpen(): void;
    onColorPickerPanelClose(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPickerComponent, "admin-color-picker", never, { "acceptLabel": { "alias": "acceptLabel"; "required": false; }; "cancelLabel": { "alias": "cancelLabel"; "required": false; }; "color": { "alias": "color"; "required": false; }; "errorMessages": { "alias": "errorMessages"; "required": false; }; "hideColorPicker": { "alias": "hideColorPicker"; "required": false; }; "hideTextInput": { "alias": "hideTextInput"; "required": false; }; "label": { "alias": "label"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "palette": { "alias": "palette"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, { "change": "change"; "close": "close"; "input": "input"; "open": "open"; "slider": "slider"; }, never, never, true, never>;
    static ngAcceptInputType_readonly: unknown;
    static ngAcceptInputType_required: unknown;
}

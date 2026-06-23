import { ControlValueAccessor } from '@angular/forms';
import { EIconName } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
export declare enum ESearchboxMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class SearchboxComponent implements ControlValueAccessor {
    id: import("@angular/core").InputSignal<string>;
    label: import("@angular/core").InputSignal<string>;
    value: import("@angular/core").ModelSignal<string>;
    placeholder: import("@angular/core").InputSignal<string>;
    disabled: boolean;
    mode: ESearchboxMode;
    onChange: ((value: string) => void);
    onTouched: (() => void);
    ESearchboxMode: typeof ESearchboxMode;
    EIconName: typeof EIconName;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    updateValue(val: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchboxComponent, "admin-searchbox", never, { "id": { "alias": "id"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "value": "valueChange"; }, never, never, true, never>;
    static ngAcceptInputType_disabled: unknown;
}

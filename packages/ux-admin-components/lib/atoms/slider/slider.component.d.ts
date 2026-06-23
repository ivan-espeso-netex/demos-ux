import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum EAdminSliderMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class SliderComponent {
    disabled: boolean;
    max: number;
    min: number;
    step: number;
    value: number;
    mode: EAdminSliderMode;
    valueChanged: EventEmitter<number>;
    onValueChange(value: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderComponent, "admin-slider", never, { "disabled": { "alias": "disabled"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "step": { "alias": "step"; "required": false; }; "value": { "alias": "value"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "valueChanged": "valueChanged"; }, never, never, true, never>;
}

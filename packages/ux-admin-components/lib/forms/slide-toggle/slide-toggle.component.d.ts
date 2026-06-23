import { EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
export declare enum ESlideToggleMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class SlideToggleComponent {
    id: string;
    name?: string;
    arialabel: string;
    disabled: boolean;
    checked?: boolean;
    label: string;
    isRequired?: boolean;
    mode: ESlideToggleMode;
    slideToggleClicked: EventEmitter<Event>;
    change: EventEmitter<MatSlideToggleChange>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideToggleComponent, "admin-slide-toggle", never, { "id": { "alias": "id"; "required": false; }; "name": { "alias": "name"; "required": false; }; "arialabel": { "alias": "arialabel"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "label": { "alias": "label"; "required": false; }; "isRequired": { "alias": "isRequired"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "slideToggleClicked": "slideToggleClicked"; "change": "change"; }, never, never, true, never>;
}

import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface IAdminSlideTextToggleOption {
    id: string;
    text: string;
    disabled?: boolean;
    active?: boolean;
}
export declare enum EAdminSlideTextToggleMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class SlideTextToggleComponent {
    options: IAdminSlideTextToggleOption[];
    mode: EAdminSlideTextToggleMode;
    buttonClicked: EventEmitter<IAdminSlideTextToggleOption>;
    optionSlideTextToggleClicked(option: IAdminSlideTextToggleOption): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlideTextToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SlideTextToggleComponent, "admin-slide-text-toggle", never, { "options": { "alias": "options"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "buttonClicked": "buttonClicked"; }, never, never, true, never>;
}

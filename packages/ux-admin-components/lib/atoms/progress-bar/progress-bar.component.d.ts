import { EventEmitter } from '@angular/core';
import { ProgressAnimationEnd } from '@angular/material/progress-bar';
import * as i0 from "@angular/core";
export declare enum EProgressMode {
    DETERMINATE = "determinate",
    INDETERMINATE = "indeterminate"
}
export declare enum EProgressBarMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EProgressBarColor {
    ACCENT = "accent",
    WARN = "warn",
    ALERT = "alert",
    SUCCESS = "success"
}
export interface IProgressBarSegment {
    value: number;
    color: EProgressBarColor;
}
export declare class ProgressBarComponent {
    id: string;
    progressMode: EProgressMode;
    mode: EProgressBarMode;
    value: number;
    color: EProgressBarColor;
    segments: IProgressBarSegment[];
    animationEnd: EventEmitter<ProgressAnimationEnd>;
    get hasSegments(): boolean;
    calculateSegmentValue(segmentIndex: number): number;
    onAnimationEnd(param: ProgressAnimationEnd): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarComponent, "admin-progress-bar", never, { "id": { "alias": "id"; "required": false; }; "progressMode": { "alias": "progressMode"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "value": { "alias": "value"; "required": false; }; "color": { "alias": "color"; "required": false; }; "segments": { "alias": "segments"; "required": false; }; }, { "animationEnd": "animationEnd"; }, never, never, true, never>;
}

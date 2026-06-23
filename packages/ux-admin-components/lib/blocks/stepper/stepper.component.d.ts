import * as i0 from "@angular/core";
export interface IAdminStepperStep {
    id: number;
    label: string;
}
export declare enum EAdminStepperMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class StepperComponent {
    currentStepIndex: import("@angular/core").InputSignal<number>;
    steps: import("@angular/core").InputSignal<IAdminStepperStep[]>;
    mode: EAdminStepperMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<StepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StepperComponent, "admin-stepper", never, { "currentStepIndex": { "alias": "currentStepIndex"; "required": false; "isSignal": true; }; "steps": { "alias": "steps"; "required": false; "isSignal": true; }; "mode": { "alias": "mode"; "required": false; }; }, {}, never, never, true, never>;
}

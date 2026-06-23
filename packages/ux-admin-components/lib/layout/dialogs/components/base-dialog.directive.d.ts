import { IDialogableComponent } from '../interfaces/dialogable-component.interface';
import * as i0 from "@angular/core";
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export declare abstract class BaseDialog<Return = void> implements IDialogableComponent<Return> {
    onClose: import("@angular/core").OutputEmitterRef<Return>;
    protected readonly width = "512px";
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseDialog<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseDialog<any>, never, never, {}, { "onClose": "onClose"; }, never, never, true, never>;
}

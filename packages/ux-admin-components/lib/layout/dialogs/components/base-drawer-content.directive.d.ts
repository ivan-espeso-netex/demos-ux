import { ToolbarActionDirective } from "../../toolbar/toolbar-action.directive";
import * as i0 from "@angular/core";
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export declare abstract class BaseDrawerContent<Return = unknown> {
    onClose: import("@angular/core").OutputEmitterRef<Return>;
    toolbarActions: import("@angular/core").Signal<readonly ToolbarActionDirective[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseDrawerContent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseDrawerContent<any>, never, never, {}, {}, never, never, true, never>;
}

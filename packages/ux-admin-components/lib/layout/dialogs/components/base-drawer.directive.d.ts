import { IDialogableComponent } from '../interfaces/dialogable-component.interface';
import { DrawerWidth } from '../types/drawer-width.type';
import * as i0 from "@angular/core";
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export declare abstract class BaseDrawer<Return = unknown> implements IDialogableComponent<Return> {
    onClose: import("@angular/core").OutputEmitterRef<Return>;
    width: DrawerWidth;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseDrawer<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseDrawer<any>, never, never, { "width": { "alias": "width"; "required": false; }; }, { "onClose": "onClose"; }, never, never, true, never>;
}

import { Type } from '@angular/core';
import { BaseDrawerContent } from './components/base-drawer-content.directive';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { IDialogableComponent } from './interfaces/dialogable-component.interface';
import { IOpenDrawerConfig } from './interfaces/open-drawer-config.interface';
import { DialogProps } from './types/dialog-props.type';
import * as i0 from "@angular/core";
type ConfirmDialogProps = Pick<DialogProps<ConfirmDialogComponent>, 'cancelButtonText' | 'confirmButtonText' | 'title' | 'innerComponent'> & {
    message?: string;
};
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export declare class DialogService {
    private readonly _appInjector;
    private readonly _createComponentFn;
    private _renderer?;
    private _root?;
    constructor();
    private _getRenderer;
    openDrawer<T extends BaseDrawerContent<Return>, Return = unknown>(config: IOpenDrawerConfig<T, Return>): DrawerComponent<T, Return> | undefined;
    openCustomDrawer<T extends IDialogableComponent>(cmp: Type<T>, props?: Partial<DialogProps<T>>): T | undefined;
    openConfirmDialog(props: ConfirmDialogProps): any;
    openCustomDialog<T extends IDialogableComponent>(cmp: Type<T>, props?: Partial<DialogProps<T>>): T | undefined;
    private _createDialog;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DialogService>;
}
export {};

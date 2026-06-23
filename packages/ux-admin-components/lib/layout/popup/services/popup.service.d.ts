import { ComponentType } from '@angular/cdk/overlay';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EPopupMode, PopupComponent } from '../popup.component';
import * as i0 from "@angular/core";
export interface IPopupConfig {
    title: string;
    description: string;
    actionButtonText: string;
    closeButtonText?: string;
    action: () => void;
    mode?: EPopupMode;
}
export declare class PopupService {
    private dialog;
    constructor(dialog: MatDialog);
    open(data: IPopupConfig): MatDialogRef<PopupComponent>;
    openWithComponent<T>(component: ComponentType<T>, data?: any): MatDialogRef<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PopupService>;
}

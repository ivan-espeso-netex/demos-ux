import { ComponentType } from '@angular/cdk/overlay';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
export declare enum ESnackbarType {
    NEUTRAL = "neutral",
    WARN = "warn",
    SUCCESS = "success"
}
export declare enum ESnackbarMode {
    DARK = "dark",
    LIGHT = "light"
}
export declare class SnackBarService {
    private snackBar;
    constructor(snackBar: MatSnackBar);
    open(messageKey: string, mode?: ESnackbarMode, type?: ESnackbarType, action?: string, config?: MatSnackBarConfig): MatSnackBarRef<any>;
    openWithComponent<T>(component: ComponentType<T>, config?: MatSnackBarConfig): MatSnackBarRef<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SnackBarService>;
}

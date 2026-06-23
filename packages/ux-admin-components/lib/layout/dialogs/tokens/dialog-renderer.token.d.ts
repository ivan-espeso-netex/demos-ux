import { InjectionToken, Renderer2 } from '@angular/core';
export type DialogRenderer = Renderer2 & {
    addDialog: (dialog: HTMLElement) => void;
};
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export declare const DIALOG_RENDERER: InjectionToken<Promise<DialogRenderer>>;

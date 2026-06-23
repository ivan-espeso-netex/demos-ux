import { InputSignal } from "@angular/core";
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export type DialogProps<T> = {
    [key in keyof T]: T[key] extends InputSignal<infer K> ? K | T[key] : T[key];
};

import { EventEmitter, OutputEmitterRef } from '@angular/core';
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export interface IDialogableComponent<Response = unknown> {
    onClose: OutputEmitterRef<Response> | EventEmitter<Response>;
}

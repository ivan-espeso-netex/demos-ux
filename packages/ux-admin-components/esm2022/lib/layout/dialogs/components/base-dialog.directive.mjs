import { Directive, HostBinding, output } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export class BaseDialog {
    constructor() {
        this.onClose = output();
        this.width = '512px';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseDialog, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: BaseDialog, isStandalone: true, outputs: { onClose: "onClose" }, host: { properties: { "style.inline-size": "this.width" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseDialog, decorators: [{
            type: Directive,
            args: [{ standalone: true }]
        }], propDecorators: { width: [{
                type: HostBinding,
                args: ['style.inline-size']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kaWFsb2cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2xheW91dC9kaWFsb2dzL2NvbXBvbmVudHMvYmFzZS1kaWFsb2cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHL0Q7OztHQUdHO0FBRUgsTUFBTSxPQUFnQixVQUFVO0lBRGhDO1FBRVMsWUFBTyxHQUFHLE1BQU0sRUFBVSxDQUFDO1FBRWYsVUFBSyxHQUFHLE9BQU8sQ0FBQztLQUNwQzsrR0FKcUIsVUFBVTttR0FBVixVQUFVOzs0RkFBVixVQUFVO2tCQUQvQixTQUFTO21CQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTs4QkFJVixLQUFLO3NCQUR2QixXQUFXO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIG91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSURpYWxvZ2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RpYWxvZ2FibGUtY29tcG9uZW50LmludGVyZmFjZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIG5ldyBsYXlvdXQgY29tcG9uZW50cyBhcyBHbG9iYWxQYW5lbCwgUGFuZWwsIFBvcFVwIGFuZCBTbmFja2JhclxuICogVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5cbiAqL1xuQERpcmVjdGl2ZSh7IHN0YW5kYWxvbmU6IHRydWUgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRGlhbG9nPFJldHVybiA9IHZvaWQ+IGltcGxlbWVudHMgSURpYWxvZ2FibGVDb21wb25lbnQ8UmV0dXJuPiB7XG4gIHB1YmxpYyBvbkNsb3NlID0gb3V0cHV0PFJldHVybj4oKTtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5pbmxpbmUtc2l6ZScpXG4gIHByb3RlY3RlZCByZWFkb25seSB3aWR0aCA9ICc1MTJweCc7XG59XG4iXX0=
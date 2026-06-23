import { Directive, HostBinding, Input, output } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export class BaseDrawer {
    constructor() {
        this.onClose = output();
        this.width = '100%';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseDrawer, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: BaseDrawer, isStandalone: true, inputs: { width: "width" }, outputs: { onClose: "onClose" }, host: { properties: { "style.inline-size": "this.width" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseDrawer, decorators: [{
            type: Directive,
            args: [{ standalone: true }]
        }], propDecorators: { width: [{
                type: HostBinding,
                args: ['style.inline-size']
            }, {
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcmF3ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2xheW91dC9kaWFsb2dzL2NvbXBvbmVudHMvYmFzZS1kcmF3ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSXRFOzs7R0FHRztBQUVILE1BQU0sT0FBZ0IsVUFBVTtJQURoQztRQUVTLFlBQU8sR0FBRyxNQUFNLEVBQVUsQ0FBQztRQUczQixVQUFLLEdBQWdCLE1BQU0sQ0FBQztLQUNwQzsrR0FMcUIsVUFBVTttR0FBVixVQUFVOzs0RkFBVixVQUFVO2tCQUQvQixTQUFTO21CQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTs4QkFLdEIsS0FBSztzQkFGWCxXQUFXO3VCQUFDLG1CQUFtQjs7c0JBQy9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgb3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJRGlhbG9nYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2ludGVyZmFjZXMvZGlhbG9nYWJsZS1jb21wb25lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IERyYXdlcldpZHRoIH0gZnJvbSAnLi4vdHlwZXMvZHJhd2VyLXdpZHRoLnR5cGUnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBuZXcgbGF5b3V0IGNvbXBvbmVudHMgYXMgR2xvYmFsUGFuZWwsIFBhbmVsLCBQb3BVcCBhbmQgU25hY2tiYXJcbiAqIFRoaXMgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uXG4gKi9cbkBEaXJlY3RpdmUoeyBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZURyYXdlcjxSZXR1cm4gPSB1bmtub3duPiBpbXBsZW1lbnRzIElEaWFsb2dhYmxlQ29tcG9uZW50PFJldHVybj4ge1xuICBwdWJsaWMgb25DbG9zZSA9IG91dHB1dDxSZXR1cm4+KCk7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuaW5saW5lLXNpemUnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgd2lkdGg6IERyYXdlcldpZHRoID0gJzEwMCUnO1xufVxuIl19
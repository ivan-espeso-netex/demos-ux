import { Directive, forwardRef, inject, viewChildren } from "@angular/core";
import { ToolbarActionDirective } from "../../toolbar/toolbar-action.directive";
import { BaseDrawer } from "./base-drawer.directive";
import * as i0 from "@angular/core";
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export class BaseDrawerContent {
    constructor() {
        this.onClose = inject(forwardRef(() => BaseDrawer)).onClose;
        this.toolbarActions = viewChildren(ToolbarActionDirective);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseDrawerContent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.2.0", version: "17.3.12", type: BaseDrawerContent, isStandalone: true, viewQueries: [{ propertyName: "toolbarActions", predicate: ToolbarActionDirective, descendants: true, isSignal: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BaseDrawerContent, decorators: [{
            type: Directive,
            args: [{ standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcmF3ZXItY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L2RpYWxvZ3MvY29tcG9uZW50cy9iYXNlLWRyYXdlci1jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFckQ7OztHQUdHO0FBRUgsTUFBTSxPQUFnQixpQkFBaUI7SUFEdkM7UUFFUyxZQUFPLEdBQUcsTUFBTSxDQUFxQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDM0UsbUJBQWMsR0FBRyxZQUFZLENBQXlCLHNCQUFzQixDQUFDLENBQUM7S0FDdEY7K0dBSHFCLGlCQUFpQjttR0FBakIsaUJBQWlCLGlGQUV3QixzQkFBc0I7OzRGQUYvRCxpQkFBaUI7a0JBRHRDLFNBQVM7bUJBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBpbmplY3QsIHZpZXdDaGlsZHJlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUb29sYmFyQWN0aW9uRGlyZWN0aXZlIH0gZnJvbSBcIi4uLy4uL3Rvb2xiYXIvdG9vbGJhci1hY3Rpb24uZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBCYXNlRHJhd2VyIH0gZnJvbSBcIi4vYmFzZS1kcmF3ZXIuZGlyZWN0aXZlXCI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIG5ldyBsYXlvdXQgY29tcG9uZW50cyBhcyBHbG9iYWxQYW5lbCwgUGFuZWwsIFBvcFVwIGFuZCBTbmFja2JhclxuICogVGhpcyB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5cbiAqL1xuQERpcmVjdGl2ZSh7IHN0YW5kYWxvbmU6IHRydWUgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRHJhd2VyQ29udGVudDxSZXR1cm4gPSB1bmtub3duPiB7XG4gIHB1YmxpYyBvbkNsb3NlID0gaW5qZWN0PEJhc2VEcmF3ZXI8UmV0dXJuPj4oZm9yd2FyZFJlZigoKSA9PiBCYXNlRHJhd2VyKSkub25DbG9zZTtcbiAgcHVibGljIHRvb2xiYXJBY3Rpb25zID0gdmlld0NoaWxkcmVuPFRvb2xiYXJBY3Rpb25EaXJlY3RpdmU+KFRvb2xiYXJBY3Rpb25EaXJlY3RpdmUpO1xufVxuIl19
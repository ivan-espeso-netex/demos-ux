import { Injectable } from '@angular/core';
import { PopupComponent } from '../popup.component';
import { popupFactory } from '../popup.factory';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class PopupService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(data) {
        const dialogConfig = popupFactory(data);
        const popupRef = this.dialog.open(PopupComponent, dialogConfig);
        return popupRef;
    }
    openWithComponent(component, data = {}) {
        const dialogConfig = popupFactory(data);
        const dialogRef = this.dialog.open(component, dialogConfig);
        return dialogRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PopupService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PopupService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: PopupService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9sYXlvdXQvcG9wdXAvc2VydmljZXMvcG9wdXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQWNoRCxNQUFNLE9BQU8sWUFBWTtJQUV4QixZQUNTLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFDdEIsQ0FBQztJQUVMLElBQUksQ0FBQyxJQUFrQjtRQUN0QixNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRWhFLE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxpQkFBaUIsQ0FBSSxTQUEyQixFQUFFLE9BQVksRUFBRTtRQUMvRCxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTVELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7K0dBcEJXLFlBQVk7bUhBQVosWUFBWSxjQUZaLE1BQU07OzRGQUVOLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEVQb3B1cE1vZGUsIFBvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi4vcG9wdXAuY29tcG9uZW50JztcbmltcG9ydCB7IHBvcHVwRmFjdG9yeSB9IGZyb20gJy4uL3BvcHVwLmZhY3RvcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cENvbmZpZyB7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cdGFjdGlvbkJ1dHRvblRleHQ6IHN0cmluZztcblx0Y2xvc2VCdXR0b25UZXh0Pzogc3RyaW5nO1xuXHRhY3Rpb246ICgpID0+IHZvaWQ7XG5cdG1vZGU/OiBFUG9wdXBNb2RlO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQb3B1cFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcblx0KSB7IH1cblxuXHRvcGVuKGRhdGE6IElQb3B1cENvbmZpZyk6IE1hdERpYWxvZ1JlZjxQb3B1cENvbXBvbmVudD4ge1xuXHRcdGNvbnN0IGRpYWxvZ0NvbmZpZyA9IHBvcHVwRmFjdG9yeShkYXRhKTtcblxuXHRcdGNvbnN0IHBvcHVwUmVmID0gdGhpcy5kaWFsb2cub3BlbihQb3B1cENvbXBvbmVudCwgZGlhbG9nQ29uZmlnKTtcblxuXHRcdHJldHVybiBwb3B1cFJlZjtcblx0fVxuXG5cdG9wZW5XaXRoQ29tcG9uZW50PFQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgZGF0YTogYW55ID0ge30pOiBNYXREaWFsb2dSZWY8VD4ge1xuXHRcdGNvbnN0IGRpYWxvZ0NvbmZpZyA9IHBvcHVwRmFjdG9yeShkYXRhKTtcblxuXHRcdGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oY29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuXG5cdFx0cmV0dXJuIGRpYWxvZ1JlZjtcblx0fVxuXG59XG4iXX0=
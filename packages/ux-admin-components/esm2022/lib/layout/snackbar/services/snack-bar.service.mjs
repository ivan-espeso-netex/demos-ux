import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
export var ESnackbarType;
(function (ESnackbarType) {
    ESnackbarType["NEUTRAL"] = "neutral";
    ESnackbarType["WARN"] = "warn";
    ESnackbarType["SUCCESS"] = "success";
})(ESnackbarType || (ESnackbarType = {}));
export var ESnackbarMode;
(function (ESnackbarMode) {
    ESnackbarMode["DARK"] = "dark";
    ESnackbarMode["LIGHT"] = "light";
})(ESnackbarMode || (ESnackbarMode = {}));
const DEFAULT_CONFIG = {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'right'
};
export class SnackBarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(messageKey, mode = ESnackbarMode.LIGHT, type = ESnackbarType.NEUTRAL, action, config) {
        const snackBarRef = this.snackBar.open(messageKey, action, {
            ...DEFAULT_CONFIG,
            ...config,
            panelClass: [`admin-snackbar-${type}`, `admin-snackbar-${mode}`]
        });
        return snackBarRef;
    }
    openWithComponent(component, config) {
        const snackBarRef = this.snackBar.openFromComponent(component, {
            ...DEFAULT_CONFIG,
            ...config
        });
        return snackBarRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackBarService, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackBarService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackBarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.MatSnackBar }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L3NuYWNrYmFyL3NlcnZpY2VzL3NuYWNrLWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUczQyxNQUFNLENBQU4sSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3hCLG9DQUFtQixDQUFBO0lBQ25CLDhCQUFhLENBQUE7SUFDYixvQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSlcsYUFBYSxLQUFiLGFBQWEsUUFJeEI7QUFFRCxNQUFNLENBQU4sSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3hCLDhCQUFhLENBQUE7SUFDYixnQ0FBZSxDQUFBO0FBQ2hCLENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4QjtBQUVELE1BQU0sY0FBYyxHQUFzQjtJQUN6QyxRQUFRLEVBQUUsSUFBSTtJQUNkLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsa0JBQWtCLEVBQUUsT0FBTztDQUMzQixDQUFDO0FBS0YsTUFBTSxPQUFPLGVBQWU7SUFFM0IsWUFDUyxRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO0lBQzFCLENBQUM7SUFFTCxJQUFJLENBQUMsVUFBa0IsRUFBRSxPQUFzQixhQUFhLENBQUMsS0FBSyxFQUFFLE9BQXNCLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBZSxFQUFFLE1BQTBCO1FBQzNKLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUU7WUFDMUQsR0FBRyxjQUFjO1lBQ2pCLEdBQUcsTUFBTTtZQUNULFVBQVUsRUFBRSxDQUFDLGtCQUFrQixJQUFJLEVBQUUsRUFBRSxrQkFBa0IsSUFBSSxFQUFFLENBQUM7U0FDaEUsQ0FBQyxDQUFDO1FBRUgsT0FBTyxXQUFXLENBQUM7SUFDcEIsQ0FBQztJQUVELGlCQUFpQixDQUFJLFNBQTJCLEVBQUUsTUFBMEI7UUFDM0UsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7WUFDOUQsR0FBRyxjQUFjO1lBQ2pCLEdBQUcsTUFBTTtTQUNULENBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3BCLENBQUM7K0dBdkJXLGVBQWU7bUhBQWYsZUFBZSxjQUZmLE1BQU07OzRGQUVOLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhckNvbmZpZywgTWF0U25hY2tCYXJSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG5leHBvcnQgZW51bSBFU25hY2tiYXJUeXBlIHtcblx0TkVVVFJBTCA9ICduZXV0cmFsJyxcblx0V0FSTiA9ICd3YXJuJyxcblx0U1VDQ0VTUyA9ICdzdWNjZXNzJ1xufVxuXG5leHBvcnQgZW51bSBFU25hY2tiYXJNb2RlIHtcblx0REFSSyA9ICdkYXJrJyxcblx0TElHSFQgPSAnbGlnaHQnXG59XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHOiBNYXRTbmFja0JhckNvbmZpZyA9IHtcblx0ZHVyYXRpb246IDMwMDAsXG5cdHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxuXHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCdcbn07XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIsXG5cdCkgeyB9XG5cblx0b3BlbihtZXNzYWdlS2V5OiBzdHJpbmcsIG1vZGU6IEVTbmFja2Jhck1vZGUgPSBFU25hY2tiYXJNb2RlLkxJR0hULCB0eXBlOiBFU25hY2tiYXJUeXBlID0gRVNuYWNrYmFyVHlwZS5ORVVUUkFMLCBhY3Rpb24/OiBzdHJpbmcsIGNvbmZpZz86IE1hdFNuYWNrQmFyQ29uZmlnKTogTWF0U25hY2tCYXJSZWY8YW55PiB7XG5cdFx0Y29uc3Qgc25hY2tCYXJSZWYgPSB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZUtleSwgYWN0aW9uLCB7XG5cdFx0XHQuLi5ERUZBVUxUX0NPTkZJRyxcblx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdHBhbmVsQ2xhc3M6IFtgYWRtaW4tc25hY2tiYXItJHt0eXBlfWAsIGBhZG1pbi1zbmFja2Jhci0ke21vZGV9YF1cblx0XHR9KTtcblxuXHRcdHJldHVybiBzbmFja0JhclJlZjtcblx0fVxuXG5cdG9wZW5XaXRoQ29tcG9uZW50PFQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgY29uZmlnPzogTWF0U25hY2tCYXJDb25maWcpOiBNYXRTbmFja0JhclJlZjxUPiB7XG5cdFx0Y29uc3Qgc25hY2tCYXJSZWYgPSB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KGNvbXBvbmVudCwge1xuXHRcdFx0Li4uREVGQVVMVF9DT05GSUcsXG5cdFx0XHQuLi5jb25maWdcblx0XHR9KTtcblxuXHRcdHJldHVybiBzbmFja0JhclJlZjtcblx0fVxuXG59XG4iXX0=
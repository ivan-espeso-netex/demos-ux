import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ButtonComponent, EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export var ESnackbarMode;
(function (ESnackbarMode) {
    ESnackbarMode["LIGHT"] = "light";
    ESnackbarMode["DARK"] = "dark";
})(ESnackbarMode || (ESnackbarMode = {}));
export class SnackbarContentComponent {
    constructor(data) {
        this.data = data;
        this.id = '';
        this.text = '';
        this.buttonType = EButtonType.BUTTON;
        this.buttonButtonType = EButtonButtonType.MATBUTTON;
        this.buttonColor = EButtonColor.ACCENT;
        this.buttontext = '';
        this.hasActions = false;
        this.mode = ESnackbarMode.LIGHT;
        this.snackbarContentButtonClicked = new EventEmitter();
        this.EButtonButtonType = EButtonButtonType;
        this.EButtonType = EButtonType;
        this.EButtonColor = EButtonColor;
        this.EButtonMode = EButtonMode;
        this.ESnackbarMode = ESnackbarMode;
        this.id = data.id || '';
        this.text = data.text;
        this.buttonType = data.buttonType || EButtonType.BUTTON;
        this.buttontext = data.buttontext || '';
        this.buttonColor = data.buttonColor || EButtonColor.ACCENT;
        this.buttonButtonType = data.buttonButtonType || EButtonButtonType.MATBUTTON;
        this.leftIcon = data.leftIcon;
        this.rightIcon = data.rightIcon;
        this.hasActions = data.hasActions || false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackbarContentComponent, deps: [{ token: MAT_SNACK_BAR_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: SnackbarContentComponent, isStandalone: true, selector: "admin-snackbar-content", inputs: { id: "id", text: "text", buttonType: "buttonType", buttonButtonType: "buttonButtonType", buttonColor: "buttonColor", buttontext: "buttontext", leftIcon: "leftIcon", rightIcon: "rightIcon", hasActions: "hasActions", mode: "mode" }, outputs: { snackbarContentButtonClicked: "snackbarContentButtonClicked" }, ngImport: i0, template: "<div class=\"admin-snackbarContent {{mode}}\">\n\t<p matSnackBarLabel>{{text}}</p>\n\t@if (hasActions) {\n\t\t<div class=\"admin-snackbarContent--actions\" matSnackBarActions>\n\t\t\t<admin-button \n\t\t\t\tmatSnackBarAction\n\t\t\t\t[buttonType]=\"buttonButtonType\"\n\t\t\t\t[color]=\"buttonColor\"\n\t\t\t\ttext=\"{{buttontext}}\"\n\t\t\t\t[type]=\"buttonType\"\n\t\t\t\t[leftIcon]=\"leftIcon\"\n\t\t\t\t[rightIcon]=\"rightIcon\"\n\t\t\t\t(buttonClicked)=\"snackbarContentButtonClicked.emit()\"\n\t\t\t\t[mode]=\"mode === ESnackbarMode.DARK ? EButtonMode.DARK : EButtonMode.LIGHT\"\n\t\t\t></admin-button>\n\t\t</div>\n\t}\n</div>", styles: [".admin-snackbarContent{background-color:var(--background-color);border-radius:4px;box-shadow:0 0 8px #00000029;display:flex;flex-direction:column;gap:16px;padding:16px;width:320px;margin:-16px}.admin-snackbarContent p{color:#5c5c5c;font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:20px;margin:0;color:var(--text-color)}.admin-snackbarContent .admin-snackbarContent--actions{display:flex;justify-content:end}.admin-snackbarContent.light{--background-color: #ffffff;--text-color: #5c5c5c}.admin-snackbarContent.dark{--background-color: #2A2A2A;--text-color: #eeeeee}\n"], dependencies: [{ kind: "component", type: ButtonComponent, selector: "admin-button", inputs: ["mode", "id", "text", "type", "tooltip", "buttonType", "color", "size", "disabled", "leftIcon", "rightIcon", "form", "loadingState"], outputs: ["buttonClicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SnackbarContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-snackbar-content', standalone: true, imports: [
                        ButtonComponent,
                    ], template: "<div class=\"admin-snackbarContent {{mode}}\">\n\t<p matSnackBarLabel>{{text}}</p>\n\t@if (hasActions) {\n\t\t<div class=\"admin-snackbarContent--actions\" matSnackBarActions>\n\t\t\t<admin-button \n\t\t\t\tmatSnackBarAction\n\t\t\t\t[buttonType]=\"buttonButtonType\"\n\t\t\t\t[color]=\"buttonColor\"\n\t\t\t\ttext=\"{{buttontext}}\"\n\t\t\t\t[type]=\"buttonType\"\n\t\t\t\t[leftIcon]=\"leftIcon\"\n\t\t\t\t[rightIcon]=\"rightIcon\"\n\t\t\t\t(buttonClicked)=\"snackbarContentButtonClicked.emit()\"\n\t\t\t\t[mode]=\"mode === ESnackbarMode.DARK ? EButtonMode.DARK : EButtonMode.LIGHT\"\n\t\t\t></admin-button>\n\t\t</div>\n\t}\n</div>", styles: [".admin-snackbarContent{background-color:var(--background-color);border-radius:4px;box-shadow:0 0 8px #00000029;display:flex;flex-direction:column;gap:16px;padding:16px;width:320px;margin:-16px}.admin-snackbarContent p{color:#5c5c5c;font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:20px;margin:0;color:var(--text-color)}.admin-snackbarContent .admin-snackbarContent--actions{display:flex;justify-content:end}.admin-snackbarContent.light{--background-color: #ffffff;--text-color: #5c5c5c}.admin-snackbarContent.dark{--background-color: #2A2A2A;--text-color: #eeeeee}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_SNACK_BAR_DATA]
                }] }], propDecorators: { id: [{
                type: Input
            }], text: [{
                type: Input
            }], buttonType: [{
                type: Input
            }], buttonButtonType: [{
                type: Input
            }], buttonColor: [{
                type: Input
            }], buttontext: [{
                type: Input
            }], leftIcon: [{
                type: Input
            }], rightIcon: [{
                type: Input
            }], hasActions: [{
                type: Input
            }], mode: [{
                type: Input
            }], snackbarContentButtonClicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L3NuYWNrYmFyLWNvbnRlbnQvc25hY2tiYXItY29udGVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvbGF5b3V0L3NuYWNrYmFyLWNvbnRlbnQvc25hY2tiYXItY29udGVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBY25JLE1BQU0sQ0FBTixJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsZ0NBQWUsQ0FBQTtJQUNmLDhCQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUFXRCxNQUFNLE9BQU8sd0JBQXdCO0lBRW5DLFlBQStDLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7UUFZeEQsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQUNoQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ2hDLHFCQUFnQixHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztRQUMvQyxnQkFBVyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDbEMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUd4QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFNBQUksR0FBa0IsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUV6QyxpQ0FBNEIsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRWxFLHNCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBNUI1QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQzNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDO1FBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQztJQUM3QyxDQUFDOytHQVpVLHdCQUF3QixrQkFFZixrQkFBa0I7bUdBRjNCLHdCQUF3Qiw2WUMvQnJDLDJuQkFpQk0saXFCRFNGLGVBQWU7OzRGQUtOLHdCQUF3QjtrQkFUcEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FDdEIsSUFBSSxXQUNQO3dCQUNQLGVBQWU7cUJBQ2hCOzswQkFNWSxNQUFNOzJCQUFDLGtCQUFrQjt5Q0FZN0IsRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUVJLDRCQUE0QjtzQkFBckMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9TTkFDS19CQVJfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBFSWNvbk5hbWUgfSBmcm9tICcuLi8uLi9hdG9tcy9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCwgRUJ1dHRvbkJ1dHRvblR5cGUsIEVCdXR0b25Db2xvciwgRUJ1dHRvbk1vZGUsIEVCdXR0b25UeXBlIH0gZnJvbSAnLi4vLi4vYnV0dG9ucy9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU25hY2tiYXJEYXRhIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIGJ1dHRvbkJ1dHRvblR5cGU/OiBFQnV0dG9uQnV0dG9uVHlwZTtcbiAgYnV0dG9uQ29sb3I/OiBFQnV0dG9uQ29sb3I7XG4gIGJ1dHRvblR5cGU/OiBFQnV0dG9uVHlwZTtcbiAgdGV4dDogc3RyaW5nO1xuICBidXR0b250ZXh0Pzogc3RyaW5nO1xuICBsZWZ0SWNvbj86IEVJY29uTmFtZTtcbiAgcmlnaHRJY29uPzogRUljb25OYW1lO1xuICBoYXNBY3Rpb25zPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGVudW0gRVNuYWNrYmFyTW9kZSB7XG4gIExJR0hUID0gJ2xpZ2h0JyxcbiAgREFSSyA9ICdkYXJrJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbi1zbmFja2Jhci1jb250ZW50JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3NuYWNrYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc25hY2tiYXItY29udGVudC5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tiYXJDb250ZW50Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IFNuYWNrYmFyRGF0YSkge1xuICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8ICcnO1xuICAgIHRoaXMudGV4dCA9IGRhdGEudGV4dDtcbiAgICB0aGlzLmJ1dHRvblR5cGUgPSBkYXRhLmJ1dHRvblR5cGUgfHwgRUJ1dHRvblR5cGUuQlVUVE9OO1xuICAgIHRoaXMuYnV0dG9udGV4dCA9IGRhdGEuYnV0dG9udGV4dCB8fCAnJztcbiAgICB0aGlzLmJ1dHRvbkNvbG9yID0gZGF0YS5idXR0b25Db2xvciB8fCBFQnV0dG9uQ29sb3IuQUNDRU5UO1xuICAgIHRoaXMuYnV0dG9uQnV0dG9uVHlwZSA9IGRhdGEuYnV0dG9uQnV0dG9uVHlwZSB8fCBFQnV0dG9uQnV0dG9uVHlwZS5NQVRCVVRUT047XG4gICAgdGhpcy5sZWZ0SWNvbiA9IGRhdGEubGVmdEljb247XG4gICAgdGhpcy5yaWdodEljb24gPSBkYXRhLnJpZ2h0SWNvbjtcbiAgICB0aGlzLmhhc0FjdGlvbnMgPSBkYXRhLmhhc0FjdGlvbnMgfHwgZmFsc2U7XG4gIH1cblxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBidXR0b25UeXBlID0gRUJ1dHRvblR5cGUuQlVUVE9OO1xuICBASW5wdXQoKSBidXR0b25CdXR0b25UeXBlID0gRUJ1dHRvbkJ1dHRvblR5cGUuTUFUQlVUVE9OO1xuICBASW5wdXQoKSBidXR0b25Db2xvciA9IEVCdXR0b25Db2xvci5BQ0NFTlQ7XG4gIEBJbnB1dCgpIGJ1dHRvbnRleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBsZWZ0SWNvbj86IEVJY29uTmFtZTtcbiAgQElucHV0KCkgcmlnaHRJY29uPzogRUljb25OYW1lOyBcbiAgQElucHV0KCkgaGFzQWN0aW9uczogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBtb2RlOiBFU25hY2tiYXJNb2RlID0gRVNuYWNrYmFyTW9kZS5MSUdIVDtcblxuICBAT3V0cHV0KCkgc25hY2tiYXJDb250ZW50QnV0dG9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBFQnV0dG9uQnV0dG9uVHlwZSA9IEVCdXR0b25CdXR0b25UeXBlO1xuICBFQnV0dG9uVHlwZSA9IEVCdXR0b25UeXBlO1xuICBFQnV0dG9uQ29sb3IgPSBFQnV0dG9uQ29sb3I7XG4gIEVCdXR0b25Nb2RlID0gRUJ1dHRvbk1vZGU7XG4gIEVTbmFja2Jhck1vZGUgPSBFU25hY2tiYXJNb2RlO1xuXG59XG4iLCI8ZGl2IGNsYXNzPVwiYWRtaW4tc25hY2tiYXJDb250ZW50IHt7bW9kZX19XCI+XG5cdDxwIG1hdFNuYWNrQmFyTGFiZWw+e3t0ZXh0fX08L3A+XG5cdEBpZiAoaGFzQWN0aW9ucykge1xuXHRcdDxkaXYgY2xhc3M9XCJhZG1pbi1zbmFja2JhckNvbnRlbnQtLWFjdGlvbnNcIiBtYXRTbmFja0JhckFjdGlvbnM+XG5cdFx0XHQ8YWRtaW4tYnV0dG9uIFxuXHRcdFx0XHRtYXRTbmFja0JhckFjdGlvblxuXHRcdFx0XHRbYnV0dG9uVHlwZV09XCJidXR0b25CdXR0b25UeXBlXCJcblx0XHRcdFx0W2NvbG9yXT1cImJ1dHRvbkNvbG9yXCJcblx0XHRcdFx0dGV4dD1cInt7YnV0dG9udGV4dH19XCJcblx0XHRcdFx0W3R5cGVdPVwiYnV0dG9uVHlwZVwiXG5cdFx0XHRcdFtsZWZ0SWNvbl09XCJsZWZ0SWNvblwiXG5cdFx0XHRcdFtyaWdodEljb25dPVwicmlnaHRJY29uXCJcblx0XHRcdFx0KGJ1dHRvbkNsaWNrZWQpPVwic25hY2tiYXJDb250ZW50QnV0dG9uQ2xpY2tlZC5lbWl0KClcIlxuXHRcdFx0XHRbbW9kZV09XCJtb2RlID09PSBFU25hY2tiYXJNb2RlLkRBUksgPyBFQnV0dG9uTW9kZS5EQVJLIDogRUJ1dHRvbk1vZGUuTElHSFRcIlxuXHRcdFx0PjwvYWRtaW4tYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHR9XG48L2Rpdj4iXX0=
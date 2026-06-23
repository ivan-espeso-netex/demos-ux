import { Component, Input, output } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { ButtonComponent, EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export var EDragAndDropMode;
(function (EDragAndDropMode) {
    EDragAndDropMode["LIGHT"] = "light";
    EDragAndDropMode["DARK"] = "dark";
})(EDragAndDropMode || (EDragAndDropMode = {}));
export class DragAndDropComponent {
    constructor() {
        this.id = '';
        this.title = '';
        this.subtitle = '';
        this.buttonText = '';
        this.buttonTooltip = '';
        this.buttonButtonType = EButtonButtonType.MATICONBUTTON;
        this.buttonColor = EButtonColor.PRIMARY;
        this.buttonType = EButtonType.SUBMIT;
        this.mode = EDragAndDropMode.LIGHT;
        this.EButtonMode = EButtonMode;
        this.EDragAndDropMode = EDragAndDropMode;
        this.EIconName = EIconName;
        this.isDragOver = false;
        this.buttonClicked = output();
        this.fileDropped = output();
        this.dragOver = output();
        this.dragLeave = output();
    }
    onDrop(event) {
        event.preventDefault();
        this.isDragOver = false;
        this.fileDropped.emit(event);
    }
    onDragOver(event) {
        event.preventDefault();
        this.isDragOver = true;
        this.dragOver.emit(event);
    }
    onDragLeave(event) {
        event.preventDefault();
        this.isDragOver = false;
        this.dragLeave.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DragAndDropComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: DragAndDropComponent, isStandalone: true, selector: "admin-drag-and-drop", inputs: { id: "id", title: "title", subtitle: "subtitle", buttonText: "buttonText", buttonTooltip: "buttonTooltip", icon: "icon", buttonButtonType: "buttonButtonType", buttonColor: "buttonColor", buttonType: "buttonType", mode: "mode" }, outputs: { buttonClicked: "buttonClicked", fileDropped: "fileDropped", dragOver: "dragOver", dragLeave: "dragLeave" }, ngImport: i0, template: "<div \n\t[id]=\"id\"\n\tclass=\"admin-drag-and-drop {{mode}}\"\n\t[class.drag-over]=\"isDragOver\"\n\t(drop)=\"onDrop($event)\"\n\t(dragover)=\"onDragOver($event)\"\n\t(dragleave)=\"onDragLeave($event)\">\n\t<admin-button\n\t\t[buttonType]=\"buttonButtonType\"\n\t\t[color]=\"buttonColor\" \n\t\t[type]=\"buttonType\"\n\t\t[leftIcon]=\"icon\"\n\t\t(click)=\"buttonClicked.emit()\"\n\t\t[text]=\"buttonText\"\n\t\t[tooltip]=\"buttonTooltip\"\n\t\t[mode]=\"mode === EDragAndDropMode.DARK ? EButtonMode.DARK : EButtonMode.LIGHT\">\n\t</admin-button>\n\t<div class=\"drag-and-drop__texts\">\n\t\t<p>{{title}}</p>\n\t\t<label>{{subtitle}}</label>\n\t</div>\n</div>", styles: [".admin-drag-and-drop{align-items:center;border:1px dashed var(--border);border-radius:4px;display:flex;flex-direction:column;gap:8px;padding:32px;transition:all .2s ease}.admin-drag-and-drop.drag-over{border-color:var(--color-accent);background-color:var(--background-color-dragging)}.admin-drag-and-drop .drag-and-drop__texts{align-items:center;display:flex;flex-direction:column;gap:8px}.admin-drag-and-drop .drag-and-drop__texts p{font-family:RobotoBold,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--title-color)}.admin-drag-and-drop .drag-and-drop__texts label{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--subtitle-color)}.admin-drag-and-drop.light{--border: #b8b8b8;--background-color-dragging: #e9ecfb;--title-color: #5c5c5c;--subtitle-color: #999999;--color-accent: #2239c2}.admin-drag-and-drop.dark{--border: #5c5c5c;--background-color-dragging: #414141;--title-color: #eeeeee;--subtitle-color: #999999;--color-accent: #93a0ec}\n"], dependencies: [{ kind: "component", type: ButtonComponent, selector: "admin-button", inputs: ["mode", "id", "text", "type", "tooltip", "buttonType", "color", "size", "disabled", "leftIcon", "rightIcon", "form", "loadingState"], outputs: ["buttonClicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: DragAndDropComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-drag-and-drop', standalone: true, imports: [
                        ButtonComponent,
                    ], template: "<div \n\t[id]=\"id\"\n\tclass=\"admin-drag-and-drop {{mode}}\"\n\t[class.drag-over]=\"isDragOver\"\n\t(drop)=\"onDrop($event)\"\n\t(dragover)=\"onDragOver($event)\"\n\t(dragleave)=\"onDragLeave($event)\">\n\t<admin-button\n\t\t[buttonType]=\"buttonButtonType\"\n\t\t[color]=\"buttonColor\" \n\t\t[type]=\"buttonType\"\n\t\t[leftIcon]=\"icon\"\n\t\t(click)=\"buttonClicked.emit()\"\n\t\t[text]=\"buttonText\"\n\t\t[tooltip]=\"buttonTooltip\"\n\t\t[mode]=\"mode === EDragAndDropMode.DARK ? EButtonMode.DARK : EButtonMode.LIGHT\">\n\t</admin-button>\n\t<div class=\"drag-and-drop__texts\">\n\t\t<p>{{title}}</p>\n\t\t<label>{{subtitle}}</label>\n\t</div>\n</div>", styles: [".admin-drag-and-drop{align-items:center;border:1px dashed var(--border);border-radius:4px;display:flex;flex-direction:column;gap:8px;padding:32px;transition:all .2s ease}.admin-drag-and-drop.drag-over{border-color:var(--color-accent);background-color:var(--background-color-dragging)}.admin-drag-and-drop .drag-and-drop__texts{align-items:center;display:flex;flex-direction:column;gap:8px}.admin-drag-and-drop .drag-and-drop__texts p{font-family:RobotoBold,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--title-color)}.admin-drag-and-drop .drag-and-drop__texts label{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--subtitle-color)}.admin-drag-and-drop.light{--border: #b8b8b8;--background-color-dragging: #e9ecfb;--title-color: #5c5c5c;--subtitle-color: #999999;--color-accent: #2239c2}.admin-drag-and-drop.dark{--border: #5c5c5c;--background-color-dragging: #414141;--title-color: #eeeeee;--subtitle-color: #999999;--color-accent: #93a0ec}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], buttonText: [{
                type: Input
            }], buttonTooltip: [{
                type: Input
            }], icon: [{
                type: Input
            }], buttonButtonType: [{
                type: Input
            }], buttonColor: [{
                type: Input
            }], buttonType: [{
                type: Input
            }], mode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1hbmQtZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvZm9ybXMvZHJhZy1hbmQtZHJvcC9kcmFnLWFuZC1kcm9wLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9mb3Jtcy9kcmFnLWFuZC1kcm9wL2RyYWctYW5kLWRyb3AuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRW5JLE1BQU0sQ0FBTixJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDMUIsbUNBQWUsQ0FBQTtJQUNmLGlDQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUczQjtBQVdELE1BQU0sT0FBTyxvQkFBb0I7SUFUakM7UUFXVSxPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBRTVCLHFCQUFnQixHQUFzQixpQkFBaUIsQ0FBQyxhQUFhLENBQUM7UUFDdEUsZ0JBQVcsR0FBaUIsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUNqRCxlQUFVLEdBQWdCLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDN0MsU0FBSSxHQUFxQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFFeEQsZ0JBQVcsR0FBRyxXQUFXLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXBCLGtCQUFhLEdBQUcsTUFBTSxFQUFRLENBQUM7UUFDL0IsZ0JBQVcsR0FBRyxNQUFNLEVBQWEsQ0FBQztRQUNsQyxhQUFRLEdBQUcsTUFBTSxFQUFhLENBQUM7UUFDL0IsY0FBUyxHQUFHLE1BQU0sRUFBUSxDQUFDO0tBbUIzQjtJQWpCQSxNQUFNLENBQUMsS0FBZ0I7UUFDdEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBZ0I7UUFDMUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBZ0I7UUFDM0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQzsrR0F4Q1csb0JBQW9CO21HQUFwQixvQkFBb0Isb2JDbEJqQyxxcEJBcUJNLDBtQ0RSSixlQUFlOzs0RkFLSixvQkFBb0I7a0JBVGhDLFNBQVM7K0JBQ0UscUJBQXFCLGNBQ25CLElBQUksV0FDUDt3QkFDVCxlQUFlO3FCQUNmOzhCQU1RLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNJLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0UsSUFBSTtzQkFBWixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgb3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFSWNvbk5hbWUgfSBmcm9tICcuLi8uLi9hdG9tcy9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCwgRUJ1dHRvbkJ1dHRvblR5cGUsIEVCdXR0b25Db2xvciwgRUJ1dHRvbk1vZGUsIEVCdXR0b25UeXBlIH0gZnJvbSAnLi4vLi4vYnV0dG9ucy9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBlbnVtIEVEcmFnQW5kRHJvcE1vZGUge1xuICBMSUdIVCA9ICdsaWdodCcsXG4gIERBUksgPSAnZGFyaydcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRtaW4tZHJhZy1hbmQtZHJvcCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcblx0XHRCdXR0b25Db21wb25lbnQsXG5cdF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmFnLWFuZC1kcm9wLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2RyYWctYW5kLWRyb3AuY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XG5cdEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcblx0QElucHV0KCkgc3VidGl0bGU6IHN0cmluZyA9ICcnO1xuXHRASW5wdXQoKSBidXR0b25UZXh0OiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgYnV0dG9uVG9vbHRpcDogc3RyaW5nID0gJyc7XG5cdEBJbnB1dCgpIGljb24/OiBFSWNvbk5hbWU7XG5cdEBJbnB1dCgpIGJ1dHRvbkJ1dHRvblR5cGU6IEVCdXR0b25CdXR0b25UeXBlID0gRUJ1dHRvbkJ1dHRvblR5cGUuTUFUSUNPTkJVVFRPTjtcblx0QElucHV0KCkgYnV0dG9uQ29sb3I6IEVCdXR0b25Db2xvciA9IEVCdXR0b25Db2xvci5QUklNQVJZO1xuXHRASW5wdXQoKSBidXR0b25UeXBlOiBFQnV0dG9uVHlwZSA9IEVCdXR0b25UeXBlLlNVQk1JVDtcblx0QElucHV0KCkgbW9kZTogRURyYWdBbmREcm9wTW9kZSA9IEVEcmFnQW5kRHJvcE1vZGUuTElHSFQ7XG5cbiAgRUJ1dHRvbk1vZGUgPSBFQnV0dG9uTW9kZTtcbiAgRURyYWdBbmREcm9wTW9kZSA9IEVEcmFnQW5kRHJvcE1vZGU7XG4gIEVJY29uTmFtZSA9IEVJY29uTmFtZTtcbiAgXG4gIGlzRHJhZ092ZXIgPSBmYWxzZTtcblxuXHRidXR0b25DbGlja2VkID0gb3V0cHV0PHZvaWQ+KCk7XG5cdGZpbGVEcm9wcGVkID0gb3V0cHV0PERyYWdFdmVudD4oKTtcblx0ZHJhZ092ZXIgPSBvdXRwdXQ8RHJhZ0V2ZW50PigpO1xuXHRkcmFnTGVhdmUgPSBvdXRwdXQ8dm9pZD4oKTtcblxuXHRvbkRyb3AoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5pc0RyYWdPdmVyID0gZmFsc2U7XG5cdFx0dGhpcy5maWxlRHJvcHBlZC5lbWl0KGV2ZW50KTtcblx0fVxuXG5cdG9uRHJhZ092ZXIoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5pc0RyYWdPdmVyID0gdHJ1ZTtcblx0XHR0aGlzLmRyYWdPdmVyLmVtaXQoZXZlbnQpO1xuXHR9XG5cblx0b25EcmFnTGVhdmUoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5pc0RyYWdPdmVyID0gZmFsc2U7XG5cdFx0dGhpcy5kcmFnTGVhdmUuZW1pdCgpO1xuXHR9XG59XG4iLCI8ZGl2IFxuXHRbaWRdPVwiaWRcIlxuXHRjbGFzcz1cImFkbWluLWRyYWctYW5kLWRyb3Age3ttb2RlfX1cIlxuXHRbY2xhc3MuZHJhZy1vdmVyXT1cImlzRHJhZ092ZXJcIlxuXHQoZHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiXG5cdChkcmFnb3Zlcik9XCJvbkRyYWdPdmVyKCRldmVudClcIlxuXHQoZHJhZ2xlYXZlKT1cIm9uRHJhZ0xlYXZlKCRldmVudClcIj5cblx0PGFkbWluLWJ1dHRvblxuXHRcdFtidXR0b25UeXBlXT1cImJ1dHRvbkJ1dHRvblR5cGVcIlxuXHRcdFtjb2xvcl09XCJidXR0b25Db2xvclwiIFxuXHRcdFt0eXBlXT1cImJ1dHRvblR5cGVcIlxuXHRcdFtsZWZ0SWNvbl09XCJpY29uXCJcblx0XHQoY2xpY2spPVwiYnV0dG9uQ2xpY2tlZC5lbWl0KClcIlxuXHRcdFt0ZXh0XT1cImJ1dHRvblRleHRcIlxuXHRcdFt0b29sdGlwXT1cImJ1dHRvblRvb2x0aXBcIlxuXHRcdFttb2RlXT1cIm1vZGUgPT09IEVEcmFnQW5kRHJvcE1vZGUuREFSSyA/IEVCdXR0b25Nb2RlLkRBUksgOiBFQnV0dG9uTW9kZS5MSUdIVFwiPlxuXHQ8L2FkbWluLWJ1dHRvbj5cblx0PGRpdiBjbGFzcz1cImRyYWctYW5kLWRyb3BfX3RleHRzXCI+XG5cdFx0PHA+e3t0aXRsZX19PC9wPlxuXHRcdDxsYWJlbD57e3N1YnRpdGxlfX08L2xhYmVsPlxuXHQ8L2Rpdj5cbjwvZGl2PiJdfQ==
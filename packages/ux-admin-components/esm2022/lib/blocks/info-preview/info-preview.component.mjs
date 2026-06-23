import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EIconColor, EIconName, IconComponent } from '../../atoms/icon/icon.component';
import { EEntityTypes } from '../../types/common.types';
import * as i0 from "@angular/core";
export var EInfoPreviewType;
(function (EInfoPreviewType) {
    EInfoPreviewType["ELEARNING"] = "elearning";
    EInfoPreviewType["IMAGE"] = "image";
    EInfoPreviewType["AUDIO"] = "audio";
    EInfoPreviewType["DOC"] = "doc";
    EInfoPreviewType["PDF"] = "PDF";
    EInfoPreviewType["ZIP"] = "ZIP";
    EInfoPreviewType["VIDEO"] = "video";
    EInfoPreviewType["EXCEL"] = "excel";
    EInfoPreviewType["WORD"] = "word";
    EInfoPreviewType["POWERPOINT"] = "powerpoint";
})(EInfoPreviewType || (EInfoPreviewType = {}));
export class InfoPreviewComponent {
    constructor() {
        this.id = '';
        this.EInfoPreviewType = EInfoPreviewType;
        this.EEntityTypes = EEntityTypes;
        this.EIconColor = EIconColor;
        this.typeOptions = [
            {
                types: [EEntityTypes.ELEARNING, EInfoPreviewType.ELEARNING],
                icon: EIconName.SCHOOL,
            },
            {
                types: [EEntityTypes.IMAGE, EInfoPreviewType.IMAGE],
                icon: EIconName.IMAGE,
            },
            {
                types: [EEntityTypes.AUDIO, EInfoPreviewType.AUDIO],
                icon: EIconName.HEADPHONES,
            },
            {
                types: [EEntityTypes.DOC, EInfoPreviewType.DOC],
                icon: EIconName.DESCRIPTION,
            },
            {
                types: [EEntityTypes.PDF, EInfoPreviewType.PDF],
                icon: EIconName.CUSTOM_PDF,
            },
            {
                types: [EEntityTypes.ZIP, EInfoPreviewType.ZIP],
                icon: EIconName.FOLDER_ZIP,
            },
            {
                types: [EEntityTypes.VIDEO, EInfoPreviewType.VIDEO],
                icon: EIconName.ONDEMAND_VIDEO,
            },
            {
                types: [EEntityTypes.EXCEL, EInfoPreviewType.EXCEL],
                icon: EIconName.CUSTOM_EXCEL,
            },
            {
                types: [EEntityTypes.WORD, EInfoPreviewType.WORD],
                icon: EIconName.CUSTOM_WORD,
            },
            {
                types: [EEntityTypes.POWERPOINT, EInfoPreviewType.POWERPOINT],
                icon: EIconName.CUSTOM_POWERPOINT,
            },
        ];
    }
    get imageContainerClass() {
        return `admin-info-preview--img image-background-${this.type}`;
    }
    ngOnChanges(changes) {
        if (changes['type']) {
            this.getTypeDetails();
        }
    }
    getTypeDetails() {
        const typeDetail = this.typeOptions.find(option => option.types.includes(this.type));
        if (typeDetail) {
            this.icon = typeDetail.icon || undefined;
        }
        return null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InfoPreviewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: InfoPreviewComponent, isStandalone: true, selector: "admin-info-preview", inputs: { id: "id", type: "type", image: "image", roundImage: "roundImage" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"admin-info-preview\">\n\n\t@if (roundImage && !image) {\n\t\t<div class=\"admin-info-preview--round-image\">\n\t\t\t<img mat-card-image src=\"{{roundImage}}\" alt=\"\">\n\t\t</div>\n\t} @else {\n\t\t<div [class]=\"imageContainerClass\">\n\t\t\t@if (image) {\n\t\t\t\t<img mat-card-image src=\"{{image}}\" alt=\"\">\n\t\t\t} @else if (type === EEntityTypes.AUDIO) {\n\t\t\t\t<ng-content select=\"[audio]\"></ng-content>\n\t\t\t} @else if (type === EEntityTypes.VIDEO) {\n\t\t\t\t<ng-content select=\"[video]\"></ng-content>\n\t\t\t} @else if (icon) {\n\t\t\t\t<admin-icon [color]=\"EIconColor.WHITE\" [icon]=\"icon\"></admin-icon>\n\t\t\t}\n\t\t</div>\n\t}\n</div>\n", styles: [".admin-info-preview{align-items:center;display:flex;height:220px;justify-content:center;width:380px}.admin-info-preview .admin-info-preview--round-image{border:1px solid #d4d4d4;border-radius:100px;height:160px;overflow:hidden;width:160px}.admin-info-preview .admin-info-preview--round-image img{height:100%;object-fit:cover;width:100%}.admin-info-preview .admin-info-preview--img{align-items:center;background-color:#fff;border:1px solid #d4d4d4;display:flex;justify-content:center;height:100%;width:100%}.admin-info-preview .admin-info-preview--img.image-background-elearning{background-color:#9ccc65}.admin-info-preview .admin-info-preview--img.image-background-image{background-color:#8b3ce6}.admin-info-preview .admin-info-preview--img.image-background-audio{background-color:#3c53dd}.admin-info-preview .admin-info-preview--img.image-background-doc{background-color:#ae132d}.admin-info-preview .admin-info-preview--img.image-background-PDF{background-color:#3e070e}.admin-info-preview .admin-info-preview--img.image-background-ZIP{background-color:#ffa726}.admin-info-preview .admin-info-preview--img.image-background-video{background-color:#404958}.admin-info-preview .admin-info-preview--img.image-background-excel{background-color:#73af00}.admin-info-preview .admin-info-preview--img.image-background-word{background-color:#3c74dd}.admin-info-preview .admin-info-preview--img.image-background-powerpoint{background-color:#dd5c3c}.admin-info-preview .admin-info-preview--img mat-icon{color:#fff;font-size:48px;height:48px;width:48px}.admin-info-preview .admin-info-preview--img admin-icon{height:48px}.admin-info-preview .admin-info-preview--img img{height:100%;object-fit:cover;width:100%}\n"], dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: IconComponent, selector: "admin-icon", inputs: ["fontFamily", "icon", "color", "mode"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InfoPreviewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-info-preview', standalone: true, imports: [
                        MatIconModule,
                        IconComponent,
                    ], encapsulation: ViewEncapsulation.None, template: "<div class=\"admin-info-preview\">\n\n\t@if (roundImage && !image) {\n\t\t<div class=\"admin-info-preview--round-image\">\n\t\t\t<img mat-card-image src=\"{{roundImage}}\" alt=\"\">\n\t\t</div>\n\t} @else {\n\t\t<div [class]=\"imageContainerClass\">\n\t\t\t@if (image) {\n\t\t\t\t<img mat-card-image src=\"{{image}}\" alt=\"\">\n\t\t\t} @else if (type === EEntityTypes.AUDIO) {\n\t\t\t\t<ng-content select=\"[audio]\"></ng-content>\n\t\t\t} @else if (type === EEntityTypes.VIDEO) {\n\t\t\t\t<ng-content select=\"[video]\"></ng-content>\n\t\t\t} @else if (icon) {\n\t\t\t\t<admin-icon [color]=\"EIconColor.WHITE\" [icon]=\"icon\"></admin-icon>\n\t\t\t}\n\t\t</div>\n\t}\n</div>\n", styles: [".admin-info-preview{align-items:center;display:flex;height:220px;justify-content:center;width:380px}.admin-info-preview .admin-info-preview--round-image{border:1px solid #d4d4d4;border-radius:100px;height:160px;overflow:hidden;width:160px}.admin-info-preview .admin-info-preview--round-image img{height:100%;object-fit:cover;width:100%}.admin-info-preview .admin-info-preview--img{align-items:center;background-color:#fff;border:1px solid #d4d4d4;display:flex;justify-content:center;height:100%;width:100%}.admin-info-preview .admin-info-preview--img.image-background-elearning{background-color:#9ccc65}.admin-info-preview .admin-info-preview--img.image-background-image{background-color:#8b3ce6}.admin-info-preview .admin-info-preview--img.image-background-audio{background-color:#3c53dd}.admin-info-preview .admin-info-preview--img.image-background-doc{background-color:#ae132d}.admin-info-preview .admin-info-preview--img.image-background-PDF{background-color:#3e070e}.admin-info-preview .admin-info-preview--img.image-background-ZIP{background-color:#ffa726}.admin-info-preview .admin-info-preview--img.image-background-video{background-color:#404958}.admin-info-preview .admin-info-preview--img.image-background-excel{background-color:#73af00}.admin-info-preview .admin-info-preview--img.image-background-word{background-color:#3c74dd}.admin-info-preview .admin-info-preview--img.image-background-powerpoint{background-color:#dd5c3c}.admin-info-preview .admin-info-preview--img mat-icon{color:#fff;font-size:48px;height:48px;width:48px}.admin-info-preview .admin-info-preview--img admin-icon{height:48px}.admin-info-preview .admin-info-preview--img img{height:100%;object-fit:cover;width:100%}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], type: [{
                type: Input
            }], image: [{
                type: Input
            }], roundImage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1wcmV2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9ibG9ja3MvaW5mby1wcmV2aWV3L2luZm8tcHJldmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvYmxvY2tzL2luZm8tcHJldmlldy9pbmZvLXByZXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXhELE1BQU0sQ0FBTixJQUFZLGdCQVdYO0FBWEQsV0FBWSxnQkFBZ0I7SUFDMUIsMkNBQXVCLENBQUE7SUFDdkIsbUNBQWUsQ0FBQTtJQUNmLG1DQUFlLENBQUE7SUFDZiwrQkFBVyxDQUFBO0lBQ1gsK0JBQVcsQ0FBQTtJQUNYLCtCQUFXLENBQUE7SUFDWCxtQ0FBZSxDQUFBO0lBQ2YsbUNBQWUsQ0FBQTtJQUNmLGlDQUFhLENBQUE7SUFDYiw2Q0FBeUIsQ0FBQTtBQUMzQixDQUFDLEVBWFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQVczQjtBQWFELE1BQU0sT0FBTyxvQkFBb0I7SUFYakM7UUFlVSxPQUFFLEdBQVcsRUFBRSxDQUFDO1FBS3pCLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3BDLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxVQUFVLENBQUM7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QWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgRUljb25Db2xvciwgRUljb25OYW1lLCBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYXRvbXMvaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFRW50aXR5VHlwZXMgfSBmcm9tICcuLi8uLi90eXBlcy9jb21tb24udHlwZXMnO1xuXG5leHBvcnQgZW51bSBFSW5mb1ByZXZpZXdUeXBlIHtcbiAgRUxFQVJOSU5HID0gJ2VsZWFybmluZycsXG4gIElNQUdFID0gJ2ltYWdlJyxcbiAgQVVESU8gPSAnYXVkaW8nLFxuICBET0MgPSAnZG9jJyxcbiAgUERGID0gJ1BERicsXG4gIFpJUCA9ICdaSVAnLFxuICBWSURFTyA9ICd2aWRlbycsXG4gIEVYQ0VMID0gJ2V4Y2VsJyxcbiAgV09SRCA9ICd3b3JkJyxcbiAgUE9XRVJQT0lOVCA9ICdwb3dlcnBvaW50J1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbi1pbmZvLXByZXZpZXcnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG5cdFx0TWF0SWNvbk1vZHVsZSxcblx0XHRJY29uQ29tcG9uZW50LFxuXHRdLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5mby1wcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2luZm8tcHJldmlldy5jb21wb25lbnQuc2NzcycsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgSW5mb1ByZXZpZXdDb21wb25lbnQge1xuXG4gIGljb24/OiBFSWNvbk5hbWU7XG5cblx0QElucHV0KCkgaWQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0eXBlITogRUluZm9QcmV2aWV3VHlwZSB8IEVFbnRpdHlUeXBlcztcblx0QElucHV0KCkgaW1hZ2U/OiBzdHJpbmc7XG5cdEBJbnB1dCgpIHJvdW5kSW1hZ2U/OiBzdHJpbmc7XG5cblx0RUluZm9QcmV2aWV3VHlwZSA9IEVJbmZvUHJldmlld1R5cGU7XG5cdEVFbnRpdHlUeXBlcyA9IEVFbnRpdHlUeXBlcztcblx0RUljb25Db2xvciA9IEVJY29uQ29sb3I7XG5cblx0Z2V0IGltYWdlQ29udGFpbmVyQ2xhc3MoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYGFkbWluLWluZm8tcHJldmlldy0taW1nIGltYWdlLWJhY2tncm91bmQtJHt0aGlzLnR5cGV9YDtcblx0fVxuXG4gIHR5cGVPcHRpb25zOiBBcnJheTx7XG4gICAgdHlwZXM6IEFycmF5PEVFbnRpdHlUeXBlcyB8IEVJbmZvUHJldmlld1R5cGU+O1xuICAgIGljb246IEVJY29uTmFtZTtcbiAgfT4gPSBbXG4gICAge1xuICAgICAgdHlwZXM6IFtFRW50aXR5VHlwZXMuRUxFQVJOSU5HLCBFSW5mb1ByZXZpZXdUeXBlLkVMRUFSTklOR10sXG4gICAgICBpY29uOiBFSWNvbk5hbWUuU0NIT09MLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZXM6IFtFRW50aXR5VHlwZXMuSU1BR0UsIEVJbmZvUHJldmlld1R5cGUuSU1BR0VdLFxuICAgICAgaWNvbjogRUljb25OYW1lLklNQUdFLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZXM6IFtFRW50aXR5VHlwZXMuQVVESU8sIEVJbmZvUHJldmlld1R5cGUuQVVESU9dLFxuICAgICAgaWNvbjogRUljb25OYW1lLkhFQURQSE9ORVMsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlczogW0VFbnRpdHlUeXBlcy5ET0MsIEVJbmZvUHJldmlld1R5cGUuRE9DXSxcbiAgICAgIGljb246IEVJY29uTmFtZS5ERVNDUklQVElPTixcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGVzOiBbRUVudGl0eVR5cGVzLlBERiwgRUluZm9QcmV2aWV3VHlwZS5QREZdLFxuICAgICAgaWNvbjogRUljb25OYW1lLkNVU1RPTV9QREYsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlczogW0VFbnRpdHlUeXBlcy5aSVAsIEVJbmZvUHJldmlld1R5cGUuWklQXSxcbiAgICAgIGljb246IEVJY29uTmFtZS5GT0xERVJfWklQLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZXM6IFtFRW50aXR5VHlwZXMuVklERU8sIEVJbmZvUHJldmlld1R5cGUuVklERU9dLFxuICAgICAgaWNvbjogRUljb25OYW1lLk9OREVNQU5EX1ZJREVPLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZXM6IFtFRW50aXR5VHlwZXMuRVhDRUwsIEVJbmZvUHJldmlld1R5cGUuRVhDRUxdLFxuICAgICAgaWNvbjogRUljb25OYW1lLkNVU1RPTV9FWENFTCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGVzOiBbRUVudGl0eVR5cGVzLldPUkQsIEVJbmZvUHJldmlld1R5cGUuV09SRF0sXG4gICAgICBpY29uOiBFSWNvbk5hbWUuQ1VTVE9NX1dPUkQsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlczogW0VFbnRpdHlUeXBlcy5QT1dFUlBPSU5ULCBFSW5mb1ByZXZpZXdUeXBlLlBPV0VSUE9JTlRdLFxuICAgICAgaWNvbjogRUljb25OYW1lLkNVU1RPTV9QT1dFUlBPSU5ULFxuICAgIH0sXG4gIF07XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdGlmIChjaGFuZ2VzWyd0eXBlJ10pIHtcblx0XHRcdHRoaXMuZ2V0VHlwZURldGFpbHMoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldFR5cGVEZXRhaWxzKCkge1xuXHRcdGNvbnN0IHR5cGVEZXRhaWwgPSB0aGlzLnR5cGVPcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi50eXBlcy5pbmNsdWRlcyh0aGlzLnR5cGUpKTtcblx0XHRpZiAodHlwZURldGFpbCkge1xuXHRcdFx0dGhpcy5pY29uID0gdHlwZURldGFpbC5pY29uIHx8IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImFkbWluLWluZm8tcHJldmlld1wiPlxuXG5cdEBpZiAocm91bmRJbWFnZSAmJiAhaW1hZ2UpIHtcblx0XHQ8ZGl2IGNsYXNzPVwiYWRtaW4taW5mby1wcmV2aWV3LS1yb3VuZC1pbWFnZVwiPlxuXHRcdFx0PGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCJ7e3JvdW5kSW1hZ2V9fVwiIGFsdD1cIlwiPlxuXHRcdDwvZGl2PlxuXHR9IEBlbHNlIHtcblx0XHQ8ZGl2IFtjbGFzc109XCJpbWFnZUNvbnRhaW5lckNsYXNzXCI+XG5cdFx0XHRAaWYgKGltYWdlKSB7XG5cdFx0XHRcdDxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwie3tpbWFnZX19XCIgYWx0PVwiXCI+XG5cdFx0XHR9IEBlbHNlIGlmICh0eXBlID09PSBFRW50aXR5VHlwZXMuQVVESU8pIHtcblx0XHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2F1ZGlvXVwiPjwvbmctY29udGVudD5cblx0XHRcdH0gQGVsc2UgaWYgKHR5cGUgPT09IEVFbnRpdHlUeXBlcy5WSURFTykge1xuXHRcdFx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJbdmlkZW9dXCI+PC9uZy1jb250ZW50PlxuXHRcdFx0fSBAZWxzZSBpZiAoaWNvbikge1xuXHRcdFx0XHQ8YWRtaW4taWNvbiBbY29sb3JdPVwiRUljb25Db2xvci5XSElURVwiIFtpY29uXT1cImljb25cIj48L2FkbWluLWljb24+XG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cdH1cbjwvZGl2PlxuIl19
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EIconName, IconComponent } from '../../atoms/icon/icon.component';
import { ButtonComponent, EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export var IAdminInfoMainHeadingMode;
(function (IAdminInfoMainHeadingMode) {
    IAdminInfoMainHeadingMode["LIGHT"] = "light";
    IAdminInfoMainHeadingMode["DARK"] = "dark";
})(IAdminInfoMainHeadingMode || (IAdminInfoMainHeadingMode = {}));
export class InfoMainHeadingComponent {
    constructor() {
        this.id = '';
        this.mode = IAdminInfoMainHeadingMode.LIGHT;
        this.title = '';
        this.buttonType = EButtonType.BUTTON;
        this.buttonButtonType = EButtonButtonType.MATBUTTON;
        this.buttonColor = EButtonColor.PRIMARY;
        this.buttonIcon = EIconName.SEND;
        this.buttonClicked = new EventEmitter();
        this.EButtonButtonType = EButtonButtonType;
        this.EButtonColor = EButtonColor;
        this.EButtonType = EButtonType;
        this.EButtonMode = EButtonMode;
        this.IAdminInfoMainHeadingMode = IAdminInfoMainHeadingMode;
    }
    onButtonClicked() {
        this.buttonClicked.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InfoMainHeadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: InfoMainHeadingComponent, isStandalone: true, selector: "admin-info-main-heading", inputs: { id: "id", mode: "mode", title: "title", buttonType: "buttonType", buttonButtonType: "buttonButtonType", buttonColor: "buttonColor", buttonIcon: "buttonIcon" }, outputs: { buttonClicked: "buttonClicked" }, ngImport: i0, template: "<div class=\"admin-info-main-heading {{mode}}\">\n\t<label>{{title}}</label>\n\t<admin-button\n\t\t[buttonType]=\"buttonButtonType\"\n\t\t[color]=\"buttonColor\"\n\t\t[type]=\"buttonType\"\n\t\t[leftIcon]=\"buttonIcon\"\n\t\t(buttonClicked)=\"onButtonClicked()\"\n\t\t[mode]=\"mode === IAdminInfoMainHeadingMode.DARK ? EButtonMode.DARK : EButtonMode.LIGHT\"\n\t></admin-button>\n</div>\n", styles: [".admin-info-main-heading{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:8px}.admin-info-main-heading label{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--text-color);text-transform:uppercase}.admin-info-main-heading.light{--text-color: #1a1a1a}.admin-info-main-heading.dark{--text-color: #ffffff}\n"], dependencies: [{ kind: "component", type: ButtonComponent, selector: "admin-button", inputs: ["mode", "id", "text", "type", "tooltip", "buttonType", "color", "size", "disabled", "leftIcon", "rightIcon", "form", "loadingState"], outputs: ["buttonClicked"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InfoMainHeadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-info-main-heading', standalone: true, imports: [
                        ButtonComponent,
                        IconComponent,
                    ], template: "<div class=\"admin-info-main-heading {{mode}}\">\n\t<label>{{title}}</label>\n\t<admin-button\n\t\t[buttonType]=\"buttonButtonType\"\n\t\t[color]=\"buttonColor\"\n\t\t[type]=\"buttonType\"\n\t\t[leftIcon]=\"buttonIcon\"\n\t\t(buttonClicked)=\"onButtonClicked()\"\n\t\t[mode]=\"mode === IAdminInfoMainHeadingMode.DARK ? EButtonMode.DARK : EButtonMode.LIGHT\"\n\t></admin-button>\n</div>\n", styles: [".admin-info-main-heading{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:8px}.admin-info-main-heading label{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--text-color);text-transform:uppercase}.admin-info-main-heading.light{--text-color: #1a1a1a}.admin-info-main-heading.dark{--text-color: #ffffff}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], mode: [{
                type: Input
            }], title: [{
                type: Input
            }], buttonType: [{
                type: Input
            }], buttonButtonType: [{
                type: Input
            }], buttonColor: [{
                type: Input
            }], buttonIcon: [{
                type: Input
            }], buttonClicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1tYWluLWhlYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2Jsb2Nrcy9pbmZvLW1haW4taGVhZGluZy9pbmZvLW1haW4taGVhZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvYmxvY2tzL2luZm8tbWFpbi1oZWFkaW5nL2luZm8tbWFpbi1oZWFkaW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRW5JLE1BQU0sQ0FBTixJQUFZLHlCQUdYO0FBSEQsV0FBWSx5QkFBeUI7SUFDbkMsNENBQWUsQ0FBQTtJQUNmLDBDQUFhLENBQUE7QUFDZixDQUFDLEVBSFcseUJBQXlCLEtBQXpCLHlCQUF5QixRQUdwQztBQVlELE1BQU0sT0FBTyx3QkFBd0I7SUFWckM7UUFZVSxPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7UUFDdEMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNwQixlQUFVLEdBQWdCLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDN0MscUJBQWdCLEdBQXNCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztRQUNsRSxnQkFBVyxHQUFpQixZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ2pELGVBQVUsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBRXRDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVuRCxzQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQiw4QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztLQUt0RDtJQUhBLGVBQWU7UUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7K0dBcEJXLHdCQUF3QjttR0FBeEIsd0JBQXdCLDBTQ25CckMscVlBV0EseWRERUUsZUFBZTs7NEZBTUosd0JBQXdCO2tCQVZwQyxTQUFTOytCQUNFLHlCQUF5QixjQUN2QixJQUFJLFdBQ1A7d0JBQ1QsZUFBZTt3QkFDZixhQUFhO3FCQUNiOzhCQU1RLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksS0FBSztzQkFBYixLQUFLO2dCQUNFLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFFSSxhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVJY29uTmFtZSwgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2F0b21zL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50LCBFQnV0dG9uQnV0dG9uVHlwZSwgRUJ1dHRvbkNvbG9yLCBFQnV0dG9uTW9kZSwgRUJ1dHRvblR5cGUgfSBmcm9tICcuLi8uLi9idXR0b25zL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcblxuZXhwb3J0IGVudW0gSUFkbWluSW5mb01haW5IZWFkaW5nTW9kZSB7XG4gIExJR0hUID0gJ2xpZ2h0JyxcbiAgREFSSyA9ICdkYXJrJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbi1pbmZvLW1haW4taGVhZGluZycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcblx0XHRCdXR0b25Db21wb25lbnQsXG5cdFx0SWNvbkNvbXBvbmVudCxcblx0XSxcbiAgdGVtcGxhdGVVcmw6ICcuL2luZm8tbWFpbi1oZWFkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2luZm8tbWFpbi1oZWFkaW5nLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBJbmZvTWFpbkhlYWRpbmdDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJzsgXG5cdEBJbnB1dCgpIG1vZGUgPSBJQWRtaW5JbmZvTWFpbkhlYWRpbmdNb2RlLkxJR0hUO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG5cdEBJbnB1dCgpIGJ1dHRvblR5cGU6IEVCdXR0b25UeXBlID0gRUJ1dHRvblR5cGUuQlVUVE9OO1xuXHRASW5wdXQoKSBidXR0b25CdXR0b25UeXBlOiBFQnV0dG9uQnV0dG9uVHlwZSA9IEVCdXR0b25CdXR0b25UeXBlLk1BVEJVVFRPTjtcblx0QElucHV0KCkgYnV0dG9uQ29sb3I6IEVCdXR0b25Db2xvciA9IEVCdXR0b25Db2xvci5QUklNQVJZO1xuXHRASW5wdXQoKSBidXR0b25JY29uOiBFSWNvbk5hbWUgPSBFSWNvbk5hbWUuU0VORDtcblxuXHRAT3V0cHV0KCkgYnV0dG9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRFQnV0dG9uQnV0dG9uVHlwZSA9IEVCdXR0b25CdXR0b25UeXBlO1xuXHRFQnV0dG9uQ29sb3IgPSBFQnV0dG9uQ29sb3I7XG5cdEVCdXR0b25UeXBlID0gRUJ1dHRvblR5cGU7XG5cdEVCdXR0b25Nb2RlID0gRUJ1dHRvbk1vZGU7XG5cdElBZG1pbkluZm9NYWluSGVhZGluZ01vZGUgPSBJQWRtaW5JbmZvTWFpbkhlYWRpbmdNb2RlO1xuXG5cdG9uQnV0dG9uQ2xpY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLmJ1dHRvbkNsaWNrZWQuZW1pdCgpO1xuXHR9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYWRtaW4taW5mby1tYWluLWhlYWRpbmcge3ttb2RlfX1cIj5cblx0PGxhYmVsPnt7dGl0bGV9fTwvbGFiZWw+XG5cdDxhZG1pbi1idXR0b25cblx0XHRbYnV0dG9uVHlwZV09XCJidXR0b25CdXR0b25UeXBlXCJcblx0XHRbY29sb3JdPVwiYnV0dG9uQ29sb3JcIlxuXHRcdFt0eXBlXT1cImJ1dHRvblR5cGVcIlxuXHRcdFtsZWZ0SWNvbl09XCJidXR0b25JY29uXCJcblx0XHQoYnV0dG9uQ2xpY2tlZCk9XCJvbkJ1dHRvbkNsaWNrZWQoKVwiXG5cdFx0W21vZGVdPVwibW9kZSA9PT0gSUFkbWluSW5mb01haW5IZWFkaW5nTW9kZS5EQVJLID8gRUJ1dHRvbk1vZGUuREFSSyA6IEVCdXR0b25Nb2RlLkxJR0hUXCJcblx0PjwvYWRtaW4tYnV0dG9uPlxuPC9kaXY+XG4iXX0=
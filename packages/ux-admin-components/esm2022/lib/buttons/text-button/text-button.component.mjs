import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export var ETextButtonMode;
(function (ETextButtonMode) {
    ETextButtonMode["LIGHT"] = "light";
    ETextButtonMode["DARK"] = "dark";
})(ETextButtonMode || (ETextButtonMode = {}));
export var ETextButtonType;
(function (ETextButtonType) {
    ETextButtonType["BUTTON"] = "button";
    ETextButtonType["SUBMIT"] = "submit";
    ETextButtonType["RESET"] = "reset";
})(ETextButtonType || (ETextButtonType = {}));
export var ETextButtonSize;
(function (ETextButtonSize) {
    ETextButtonSize["SMALL"] = "small";
    ETextButtonSize["DEFAULT"] = "default";
})(ETextButtonSize || (ETextButtonSize = {}));
export class TextButtonComponent {
    constructor() {
        this.id = '';
        this.text = '';
        this.type = ETextButtonType.BUTTON;
        this.size = ETextButtonSize.DEFAULT;
        this.tooltip = '';
        this.disabled = false;
        this.mode = ETextButtonMode.LIGHT;
        this.buttonClicked = new EventEmitter();
    }
    handleClick() {
        this.buttonClicked.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TextButtonComponent, isStandalone: true, selector: "admin-text-button", inputs: { id: "id", text: "text", type: "type", size: "size", tooltip: "tooltip", disabled: "disabled", icon: "icon", mode: "mode" }, outputs: { buttonClicked: "buttonClicked" }, ngImport: i0, template: "<button \n\tclass=\"admin-text-button {{mode}} {{size}}\"\n\t[id]=\"id\" \n\t[type]=\"type\"\n\t[disabled]=\"disabled\"\n\t(click)=\"handleClick()\"\n\tmatTooltip=\"{{tooltip}}\">\n\t<div class=\"mat-stroked-button__wrapper\">\n\t\t@if (icon && size !== 'small') {\n\t\t\t<admin-icon \n\t\t\t\t[icon]=\"icon\">\n\t\t\t</admin-icon>\n\t\t}\n\t\t<span class=\"buttonLabel\">{{text}}</span>\n\t</div>\n</button>\n", styles: ["button.admin-text-button{align-items:center;background:transparent;border:none;color:var(--text-button-label);display:flex;gap:8px;padding:0}button.admin-text-button:hover{color:var(--text-button-label-hover);cursor:pointer}button.admin-text-button:hover .mat-stroked-button__wrapper admin-icon .mat-icon{color:var(--text-button-label-hover)}button.admin-text-button:disabled{pointer-events:none;opacity:.5}button.admin-text-button.small .mat-stroked-button__wrapper .buttonLabel{font-family:RobotoMedium,sans-serif;font-size:12px;font-style:normal;font-weight:400;letter-spacing:0px;margin:0;line-height:auto}button.admin-text-button .mat-stroked-button__wrapper{align-items:center;display:flex;gap:8px}button.admin-text-button .mat-stroked-button__wrapper .buttonLabel{white-space:nowrap;font-family:RobotoMedium,sans-serif;font-size:14px;font-style:normal;font-weight:400;letter-spacing:1.25px;margin:0;line-height:18px}button.admin-text-button .mat-stroked-button__wrapper admin-icon{font-size:18px;height:18px;width:18px}button.admin-text-button .mat-stroked-button__wrapper admin-icon .mat-icon{color:var(--text-button-label);font-size:18px;height:18px;width:18px}button.admin-text-button.light{--text-button-label: #2239c2;--text-button-label-hover: #13206c}button.admin-text-button.dark{--text-button-label: #93a0ec;--text-button-label-hover: #bec6f4}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "ngmodule", type: MatIconModule }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "component", type: IconComponent, selector: "admin-icon", inputs: ["fontFamily", "icon", "color", "mode"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-text-button', standalone: true, imports: [
                        MatButtonModule,
                        MatIconModule,
                        MatTooltipModule,
                        IconComponent
                    ], encapsulation: ViewEncapsulation.None, template: "<button \n\tclass=\"admin-text-button {{mode}} {{size}}\"\n\t[id]=\"id\" \n\t[type]=\"type\"\n\t[disabled]=\"disabled\"\n\t(click)=\"handleClick()\"\n\tmatTooltip=\"{{tooltip}}\">\n\t<div class=\"mat-stroked-button__wrapper\">\n\t\t@if (icon && size !== 'small') {\n\t\t\t<admin-icon \n\t\t\t\t[icon]=\"icon\">\n\t\t\t</admin-icon>\n\t\t}\n\t\t<span class=\"buttonLabel\">{{text}}</span>\n\t</div>\n</button>\n", styles: ["button.admin-text-button{align-items:center;background:transparent;border:none;color:var(--text-button-label);display:flex;gap:8px;padding:0}button.admin-text-button:hover{color:var(--text-button-label-hover);cursor:pointer}button.admin-text-button:hover .mat-stroked-button__wrapper admin-icon .mat-icon{color:var(--text-button-label-hover)}button.admin-text-button:disabled{pointer-events:none;opacity:.5}button.admin-text-button.small .mat-stroked-button__wrapper .buttonLabel{font-family:RobotoMedium,sans-serif;font-size:12px;font-style:normal;font-weight:400;letter-spacing:0px;margin:0;line-height:auto}button.admin-text-button .mat-stroked-button__wrapper{align-items:center;display:flex;gap:8px}button.admin-text-button .mat-stroked-button__wrapper .buttonLabel{white-space:nowrap;font-family:RobotoMedium,sans-serif;font-size:14px;font-style:normal;font-weight:400;letter-spacing:1.25px;margin:0;line-height:18px}button.admin-text-button .mat-stroked-button__wrapper admin-icon{font-size:18px;height:18px;width:18px}button.admin-text-button .mat-stroked-button__wrapper admin-icon .mat-icon{color:var(--text-button-label);font-size:18px;height:18px;width:18px}button.admin-text-button.light{--text-button-label: #2239c2;--text-button-label-hover: #13206c}button.admin-text-button.dark{--text-button-label: #93a0ec;--text-button-label-hover: #bec6f4}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], text: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], disabled: [{
                type: Input
            }], icon: [{
                type: Input
            }], mode: [{
                type: Input
            }], buttonClicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2J1dHRvbnMvdGV4dC1idXR0b24vdGV4dC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2J1dHRvbnMvdGV4dC1idXR0b24vdGV4dC1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBYSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBRTNFLE1BQU0sQ0FBTixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsa0NBQWUsQ0FBQTtJQUNmLGdDQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsZUFBZSxLQUFmLGVBQWUsUUFHMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3pCLG9DQUFpQixDQUFBO0lBQ2pCLG9DQUFpQixDQUFBO0lBQ2pCLGtDQUFlLENBQUE7QUFDakIsQ0FBQyxFQUpXLGVBQWUsS0FBZixlQUFlLFFBSTFCO0FBRUQsTUFBTSxDQUFOLElBQVksZUFHWDtBQUhELFdBQVksZUFBZTtJQUN6QixrQ0FBZSxDQUFBO0lBQ2Ysc0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLGVBQWUsS0FBZixlQUFlLFFBRzFCO0FBZUQsTUFBTSxPQUFPLG1CQUFtQjtJQWJoQztRQWVXLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDaEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixTQUFJLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUM5QixTQUFJLEdBQW9CLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFDaEQsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFNBQUksR0FBb0IsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUU3QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7S0FLckQ7SUFIQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOytHQWZVLG1CQUFtQjttR0FBbkIsbUJBQW1CLGdRQ25DaEMsNFpBZ0JBLDA0Q0RVSSxlQUFlLDhCQUNmLGFBQWEsOEJBQ2IsZ0JBQWdCLDZUQUNoQixhQUFhOzs0RkFNSixtQkFBbUI7a0JBYi9CLFNBQVM7K0JBQ0UsbUJBQW1CLGNBQ2pCLElBQUksV0FDUDt3QkFDUCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixhQUFhO3FCQUNkLGlCQUdjLGlCQUFpQixDQUFDLElBQUk7OEJBSTVCLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUVJLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBFSWNvbk5hbWUsIEljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9hdG9tcy9pY29uL2ljb24uY29tcG9uZW50JztcblxuZXhwb3J0IGVudW0gRVRleHRCdXR0b25Nb2RlIHtcbiAgTElHSFQgPSAnbGlnaHQnLFxuICBEQVJLID0gJ2RhcmsnXG59XG5cbmV4cG9ydCBlbnVtIEVUZXh0QnV0dG9uVHlwZSB7XG4gIEJVVFRPTiA9ICdidXR0b24nLFxuICBTVUJNSVQgPSAnc3VibWl0JyxcbiAgUkVTRVQgPSAncmVzZXQnXG59XG5cbmV4cG9ydCBlbnVtIEVUZXh0QnV0dG9uU2l6ZSB7XG4gIFNNQUxMID0gJ3NtYWxsJyxcbiAgREVGQVVMVCA9ICdkZWZhdWx0J1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbi10ZXh0LWJ1dHRvbicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIEljb25Db21wb25lbnRcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3RleHQtYnV0dG9uLmNvbXBvbmVudC5zY3NzJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0QnV0dG9uQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB0eXBlID0gRVRleHRCdXR0b25UeXBlLkJVVFRPTjtcbiAgQElucHV0KCkgc2l6ZTogRVRleHRCdXR0b25TaXplID0gRVRleHRCdXR0b25TaXplLkRFRkFVTFQ7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpY29uPzogRUljb25OYW1lO1xuICBASW5wdXQoKSBtb2RlOiBFVGV4dEJ1dHRvbk1vZGUgPSBFVGV4dEJ1dHRvbk1vZGUuTElHSFQ7XG5cbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuYnV0dG9uQ2xpY2tlZC5lbWl0KCk7XG4gIH1cbn1cbiIsIjxidXR0b24gXG5cdGNsYXNzPVwiYWRtaW4tdGV4dC1idXR0b24ge3ttb2RlfX0ge3tzaXplfX1cIlxuXHRbaWRdPVwiaWRcIiBcblx0W3R5cGVdPVwidHlwZVwiXG5cdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdChjbGljayk9XCJoYW5kbGVDbGljaygpXCJcblx0bWF0VG9vbHRpcD1cInt7dG9vbHRpcH19XCI+XG5cdDxkaXYgY2xhc3M9XCJtYXQtc3Ryb2tlZC1idXR0b25fX3dyYXBwZXJcIj5cblx0XHRAaWYgKGljb24gJiYgc2l6ZSAhPT0gJ3NtYWxsJykge1xuXHRcdFx0PGFkbWluLWljb24gXG5cdFx0XHRcdFtpY29uXT1cImljb25cIj5cblx0XHRcdDwvYWRtaW4taWNvbj5cblx0XHR9XG5cdFx0PHNwYW4gY2xhc3M9XCJidXR0b25MYWJlbFwiPnt7dGV4dH19PC9zcGFuPlxuXHQ8L2Rpdj5cbjwvYnV0dG9uPlxuIl19
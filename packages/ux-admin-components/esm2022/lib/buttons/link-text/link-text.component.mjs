import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
export var ELinkTextMode;
(function (ELinkTextMode) {
    ELinkTextMode["LIGHT"] = "light";
    ELinkTextMode["DARK"] = "dark";
})(ELinkTextMode || (ELinkTextMode = {}));
export class LinkTextComponent {
    constructor() {
        this.id = '';
        this.text = '';
        this.mode = ELinkTextMode.LIGHT;
        this.buttonClicked = new EventEmitter();
    }
    handleClick() {
        this.buttonClicked.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: LinkTextComponent, isStandalone: true, selector: "admin-link-text", inputs: { id: "id", text: "text", mode: "mode", routerLink: "routerLink" }, outputs: { buttonClicked: "buttonClicked" }, ngImport: i0, template: "<a \n    class=\"admin-link-text {{mode}}\"\n    [id]=\"id\" \n    [routerLink]=\"routerLink\"\n    (click)=\"handleClick()\">\n\t{{text}}\n</a>\n", styles: ["a.admin-link-text{background:transparent;color:var(--text-color);display:inline;font-family:RobotoSemiBold,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:20px;margin:0;text-decoration:underline}a.admin-link-text:hover,a.admin-link-text:visited{color:var(--text-color-hover);cursor:pointer}a.admin-link-text.light{--text-color: #2239c2;--text-color-hover: #13206c}a.admin-link-text.dark{--text-color: #93a0ec;--text-color-hover: #bec6f4}\n"], dependencies: [{ kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LinkTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-link-text', standalone: true, imports: [
                        RouterLink,
                    ], template: "<a \n    class=\"admin-link-text {{mode}}\"\n    [id]=\"id\" \n    [routerLink]=\"routerLink\"\n    (click)=\"handleClick()\">\n\t{{text}}\n</a>\n", styles: ["a.admin-link-text{background:transparent;color:var(--text-color);display:inline;font-family:RobotoSemiBold,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:20px;margin:0;text-decoration:underline}a.admin-link-text:hover,a.admin-link-text:visited{color:var(--text-color-hover);cursor:pointer}a.admin-link-text.light{--text-color: #2239c2;--text-color-hover: #13206c}a.admin-link-text.dark{--text-color: #93a0ec;--text-color-hover: #bec6f4}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], text: [{
                type: Input
            }], mode: [{
                type: Input
            }], routerLink: [{
                type: Input
            }], buttonClicked: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9idXR0b25zL2xpbmstdGV4dC9saW5rLXRleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2J1dHRvbnMvbGluay10ZXh0L2xpbmstdGV4dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFN0MsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QixnQ0FBZSxDQUFBO0lBQ2YsOEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4QjtBQVdELE1BQU0sT0FBTyxpQkFBaUI7SUFUOUI7UUFVVyxPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFHMUIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0tBS3BEO0lBSEMsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQzsrR0FWVSxpQkFBaUI7bUdBQWpCLGlCQUFpQixvTUNqQjlCLG9KQU9BLHlnQkRLRSxVQUFVOzs0RkFLQyxpQkFBaUI7a0JBVDdCLFNBQVM7K0JBQ0UsaUJBQWlCLGNBQ2YsSUFBSSxXQUNQO3dCQUNULFVBQVU7cUJBQ1Y7OEJBS1MsRUFBRTtzQkFBVixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFFSSxhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckxpbmsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgZW51bSBFTGlua1RleHRNb2RlIHtcbiAgTElHSFQgPSAnbGlnaHQnLFxuICBEQVJLID0gJ2RhcmsnXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkbWluLWxpbmstdGV4dCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcblx0XHRSb3V0ZXJMaW5rLFxuXHRdLFxuICB0ZW1wbGF0ZVVybDogJy4vbGluay10ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2xpbmstdGV4dC5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgTGlua1RleHRDb21wb25lbnQge1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZyA9ICcnO1xuXHRASW5wdXQoKSBtb2RlID0gRUxpbmtUZXh0TW9kZS5MSUdIVDtcblx0QElucHV0KCkgcm91dGVyTGluaz86IHN0cmluZyB8IGFueVtdO1xuXG5cdEBPdXRwdXQoKSBidXR0b25DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLmJ1dHRvbkNsaWNrZWQuZW1pdCgpO1xuICB9XG59XG4iLCI8YSBcbiAgICBjbGFzcz1cImFkbWluLWxpbmstdGV4dCB7e21vZGV9fVwiXG4gICAgW2lkXT1cImlkXCIgXG4gICAgW3JvdXRlckxpbmtdPVwicm91dGVyTGlua1wiXG4gICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKClcIj5cblx0e3t0ZXh0fX1cbjwvYT5cbiJdfQ==
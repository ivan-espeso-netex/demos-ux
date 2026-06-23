import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class AdjustPanelHeightDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    onClick(event) {
        this.adjustPanelHeight();
    }
    adjustPanelHeight() {
        const wrapper = this.elementRef.nativeElement;
        if (wrapper) {
            const wrapperRect = wrapper.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const middleOfScreen = viewportHeight / 2;
            const willOpenUpward = wrapperRect.top > middleOfScreen;
            let availableSpace;
            if (willOpenUpward) {
                availableSpace = wrapperRect.top;
            }
            else {
                availableSpace = viewportHeight - wrapperRect.bottom;
            }
            const select = wrapper.querySelector('mat-select');
            if (select) {
                setTimeout(() => {
                    const panel = document.querySelector('.admin-select-panel');
                    if (panel) {
                        panel.style.maxHeight = `${availableSpace * 0.8}px`;
                    }
                }, 0);
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AdjustPanelHeightDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AdjustPanelHeightDirective, isStandalone: true, selector: "mat-form-field[adjustPanelHeight]", host: { listeners: { "click": "onClick($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AdjustPanelHeightDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'mat-form-field[adjustPanelHeight]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRqdXN0LXBhbmVsLWhlaWdodC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvZm9ybXMvc2VsZWN0L2FkanVzdC1wYW5lbC1oZWlnaHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU1wRSxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM3QixDQUFDO0lBR0osT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUE0QixDQUFDO1FBRTdELElBQUksT0FBTyxFQUFFLENBQUM7WUFDWixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNwRCxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQzFDLE1BQU0sY0FBYyxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDMUMsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUM7WUFDeEQsSUFBSSxjQUFjLENBQUM7WUFDbkIsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsY0FBYyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDbkMsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLGNBQWMsR0FBRyxjQUFjLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUN2RCxDQUFDO1lBQ0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQWdCLENBQUM7WUFDbEUsSUFBSSxNQUFNLEVBQUUsQ0FBQztnQkFDWCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQWdCLENBQUM7b0JBQzNFLElBQUksS0FBSyxFQUFFLENBQUM7d0JBQ1YsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxjQUFjLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ3RELENBQUM7Z0JBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDOytHQWxDVSwwQkFBMEI7bUdBQTFCLDBCQUEwQjs7NEZBQTFCLDBCQUEwQjtrQkFKdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7K0VBT0MsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtLWZpZWxkW2FkanVzdFBhbmVsSGVpZ2h0XScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEFkanVzdFBhbmVsSGVpZ2h0RGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmFkanVzdFBhbmVsSGVpZ2h0KCk7XG4gIH1cblxuICBwcml2YXRlIGFkanVzdFBhbmVsSGVpZ2h0KCk6IHZvaWQge1xuICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblxuICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICBjb25zdCB3cmFwcGVyUmVjdCA9IHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IG1pZGRsZU9mU2NyZWVuID0gdmlld3BvcnRIZWlnaHQgLyAyO1xuICAgICAgY29uc3Qgd2lsbE9wZW5VcHdhcmQgPSB3cmFwcGVyUmVjdC50b3AgPiBtaWRkbGVPZlNjcmVlbjtcbiAgICAgIGxldCBhdmFpbGFibGVTcGFjZTtcbiAgICAgIGlmICh3aWxsT3BlblVwd2FyZCkge1xuICAgICAgICBhdmFpbGFibGVTcGFjZSA9IHdyYXBwZXJSZWN0LnRvcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF2YWlsYWJsZVNwYWNlID0gdmlld3BvcnRIZWlnaHQgLSB3cmFwcGVyUmVjdC5ib3R0b207XG4gICAgICB9XG4gICAgICBjb25zdCBzZWxlY3QgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ21hdC1zZWxlY3QnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChzZWxlY3QpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRtaW4tc2VsZWN0LXBhbmVsJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKHBhbmVsKSB7XG4gICAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBgJHthdmFpbGFibGVTcGFjZSAqIDAuOH1weGA7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
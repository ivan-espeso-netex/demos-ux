import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-spinner";
export var EProgressSpinnerMode;
(function (EProgressSpinnerMode) {
    EProgressSpinnerMode["DETERMINATE"] = "determinate";
    EProgressSpinnerMode["INDETERMINATE"] = "indeterminate";
})(EProgressSpinnerMode || (EProgressSpinnerMode = {}));
export var EProgressSpinnerColor;
(function (EProgressSpinnerColor) {
    EProgressSpinnerColor["PRIMARY"] = "primary";
    EProgressSpinnerColor["ACCENT"] = "accent";
    EProgressSpinnerColor["WARN"] = "warn";
    EProgressSpinnerColor["SUCCESS"] = "success";
    EProgressSpinnerColor["EXTRA"] = "extra";
    EProgressSpinnerColor["ALERT"] = "alert";
    EProgressSpinnerColor["WHITE"] = "white";
})(EProgressSpinnerColor || (EProgressSpinnerColor = {}));
export var EProgressSpinnerModeColor;
(function (EProgressSpinnerModeColor) {
    EProgressSpinnerModeColor["LIGHT"] = "light";
    EProgressSpinnerModeColor["DARK"] = "dark";
})(EProgressSpinnerModeColor || (EProgressSpinnerModeColor = {}));
export class ProgressSpinnerComponent {
    constructor() {
        this.id = '';
        this.progressMode = EProgressSpinnerMode.INDETERMINATE;
        this.value = 0;
        this.color = EProgressSpinnerColor.PRIMARY;
        this.diameter = 24;
        this.strokeWidth = 2;
        this.text = '';
        this.mode = EProgressSpinnerModeColor.LIGHT;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ProgressSpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: ProgressSpinnerComponent, isStandalone: true, selector: "admin-progress-spinner", inputs: { id: "id", progressMode: "progressMode", value: "value", color: "color", diameter: "diameter", strokeWidth: "strokeWidth", text: "text", mode: "mode" }, ngImport: i0, template: "<div class=\"admin-progress-spinner {{mode}}\">\n    <mat-progress-spinner\n        [mode]=\"progressMode\"\n        [value]=\"value\"\n        [color]=\"color\"\n        [diameter]=\"diameter\"\n        [strokeWidth]=\"strokeWidth\">\n    </mat-progress-spinner>\n    @if (text) {\n        <span class=\"label\">{{text}}</span>\n    }\n</div>", styles: [".admin-progress-spinner{align-items:center;display:flex;flex-direction:row;gap:12px}.admin-progress-spinner .mat-mdc-progress-spinner.mat-primary .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--progress-spinner-color-primary)}.admin-progress-spinner .mat-mdc-progress-spinner.mat-accent .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--progress-spinner-color-accent)}.admin-progress-spinner .mat-mdc-progress-spinner.mat-success .mdc-circular-progress__indeterminate-circle-graphic{stroke:#285318}.admin-progress-spinner .mat-mdc-progress-spinner.mat-warn .mdc-circular-progress__indeterminate-circle-graphic{stroke:#971127}.admin-progress-spinner .mat-mdc-progress-spinner.mat-extra .mdc-circular-progress__indeterminate-circle-graphic{stroke:#771ae2}.admin-progress-spinner .mat-mdc-progress-spinner.mat-alert .mdc-circular-progress__indeterminate-circle-graphic{stroke:#802d00}.admin-progress-spinner .mat-mdc-progress-spinner.mat-white .mdc-circular-progress__indeterminate-circle-graphic{stroke:#fff}.admin-progress-spinner .label{color:#5c5c5c;font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:20px;margin:0;color:var(--progress-spinner-label-color)}.admin-progress-spinner.light{--progress-spinner-color-primary: #414141;--progress-spinner-color-accent: #2239c2;--progress-spinner-label-color: #5c5c5c}.admin-progress-spinner.dark{--progress-spinner-color-primary: #ffffff;--progress-spinner-color-accent: #6779e4;--progress-spinner-label-color: #eeeeee}\n"], dependencies: [{ kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ProgressSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-progress-spinner', standalone: true, imports: [
                        MatProgressSpinnerModule
                    ], encapsulation: ViewEncapsulation.None, template: "<div class=\"admin-progress-spinner {{mode}}\">\n    <mat-progress-spinner\n        [mode]=\"progressMode\"\n        [value]=\"value\"\n        [color]=\"color\"\n        [diameter]=\"diameter\"\n        [strokeWidth]=\"strokeWidth\">\n    </mat-progress-spinner>\n    @if (text) {\n        <span class=\"label\">{{text}}</span>\n    }\n</div>", styles: [".admin-progress-spinner{align-items:center;display:flex;flex-direction:row;gap:12px}.admin-progress-spinner .mat-mdc-progress-spinner.mat-primary .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--progress-spinner-color-primary)}.admin-progress-spinner .mat-mdc-progress-spinner.mat-accent .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--progress-spinner-color-accent)}.admin-progress-spinner .mat-mdc-progress-spinner.mat-success .mdc-circular-progress__indeterminate-circle-graphic{stroke:#285318}.admin-progress-spinner .mat-mdc-progress-spinner.mat-warn .mdc-circular-progress__indeterminate-circle-graphic{stroke:#971127}.admin-progress-spinner .mat-mdc-progress-spinner.mat-extra .mdc-circular-progress__indeterminate-circle-graphic{stroke:#771ae2}.admin-progress-spinner .mat-mdc-progress-spinner.mat-alert .mdc-circular-progress__indeterminate-circle-graphic{stroke:#802d00}.admin-progress-spinner .mat-mdc-progress-spinner.mat-white .mdc-circular-progress__indeterminate-circle-graphic{stroke:#fff}.admin-progress-spinner .label{color:#5c5c5c;font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:20px;margin:0;color:var(--progress-spinner-label-color)}.admin-progress-spinner.light{--progress-spinner-color-primary: #414141;--progress-spinner-color-accent: #2239c2;--progress-spinner-label-color: #5c5c5c}.admin-progress-spinner.dark{--progress-spinner-color-primary: #ffffff;--progress-spinner-color-accent: #6779e4;--progress-spinner-label-color: #eeeeee}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], progressMode: [{
                type: Input
            }], value: [{
                type: Input
            }], color: [{
                type: Input
            }], diameter: [{
                type: Input
            }], strokeWidth: [{
                type: Input
            }], text: [{
                type: Input
            }], mode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvYXRvbXMvcHJvZ3Jlc3Mtc3Bpbm5lci9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9hdG9tcy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7OztBQUU5RSxNQUFNLENBQU4sSUFBWSxvQkFHWDtBQUhELFdBQVksb0JBQW9CO0lBQzlCLG1EQUEyQixDQUFBO0lBQzNCLHVEQUErQixDQUFBO0FBQ2pDLENBQUMsRUFIVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBRy9CO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBUVg7QUFSRCxXQUFZLHFCQUFxQjtJQUMvQiw0Q0FBbUIsQ0FBQTtJQUNuQiwwQ0FBaUIsQ0FBQTtJQUNqQixzQ0FBYSxDQUFBO0lBQ2IsNENBQW1CLENBQUE7SUFDbkIsd0NBQWUsQ0FBQTtJQUNmLHdDQUFlLENBQUE7SUFDZix3Q0FBZSxDQUFBO0FBQ2pCLENBQUMsRUFSVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBUWhDO0FBRUQsTUFBTSxDQUFOLElBQVkseUJBR1g7QUFIRCxXQUFZLHlCQUF5QjtJQUNuQyw0Q0FBZSxDQUFBO0lBQ2YsMENBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyx5QkFBeUIsS0FBekIseUJBQXlCLFFBR3BDO0FBWUQsTUFBTSxPQUFPLHdCQUF3QjtJQVZyQztRQVdXLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDaEIsaUJBQVksR0FBRyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7UUFDbEQsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixVQUFLLEdBQUcscUJBQXFCLENBQUMsT0FBTyxDQUFDO1FBQ3RDLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsU0FBSSxHQUFZLEVBQUUsQ0FBQztRQUNuQixTQUFJLEdBQUcseUJBQXlCLENBQUMsS0FBSyxDQUFDO0tBQ2pEOytHQVRZLHdCQUF3QjttR0FBeEIsd0JBQXdCLG9QQ2pDckMseVZBV00sbWtERGdCRix3QkFBd0I7OzRGQU1mLHdCQUF3QjtrQkFWcEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FDdEIsSUFBSSxXQUNQO3dCQUNQLHdCQUF3QjtxQkFDekIsaUJBR2MsaUJBQWlCLENBQUMsSUFBSTs4QkFHNUIsRUFBRTtzQkFBVixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuZXhwb3J0IGVudW0gRVByb2dyZXNzU3Bpbm5lck1vZGUge1xuICBERVRFUk1JTkFURSA9ICdkZXRlcm1pbmF0ZScsXG4gIElOREVURVJNSU5BVEUgPSAnaW5kZXRlcm1pbmF0ZSdcbn1cblxuZXhwb3J0IGVudW0gRVByb2dyZXNzU3Bpbm5lckNvbG9yIHtcbiAgUFJJTUFSWSA9ICdwcmltYXJ5JyxcbiAgQUNDRU5UID0gJ2FjY2VudCcsXG4gIFdBUk4gPSAnd2FybicsXG4gIFNVQ0NFU1MgPSAnc3VjY2VzcycsXG4gIEVYVFJBID0gJ2V4dHJhJyxcbiAgQUxFUlQgPSAnYWxlcnQnLFxuICBXSElURSA9ICd3aGl0ZSdcbn1cblxuZXhwb3J0IGVudW0gRVByb2dyZXNzU3Bpbm5lck1vZGVDb2xvciB7XG4gIExJR0hUID0gJ2xpZ2h0JyxcbiAgREFSSyA9ICdkYXJrJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbi1wcm9ncmVzcy1zcGlubmVyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZVxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5zY3NzJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHByb2dyZXNzTW9kZSA9IEVQcm9ncmVzc1NwaW5uZXJNb2RlLklOREVURVJNSU5BVEU7XG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBjb2xvciA9IEVQcm9ncmVzc1NwaW5uZXJDb2xvci5QUklNQVJZO1xuICBASW5wdXQoKSBkaWFtZXRlcjogbnVtYmVyID0gMjQ7XG4gIEBJbnB1dCgpIHN0cm9rZVdpZHRoOiBudW1iZXIgPSAyO1xuICBASW5wdXQoKSB0ZXh0Pzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG1vZGUgPSBFUHJvZ3Jlc3NTcGlubmVyTW9kZUNvbG9yLkxJR0hUO1xufVxuIiwiPGRpdiBjbGFzcz1cImFkbWluLXByb2dyZXNzLXNwaW5uZXIge3ttb2RlfX1cIj5cbiAgICA8bWF0LXByb2dyZXNzLXNwaW5uZXJcbiAgICAgICAgW21vZGVdPVwicHJvZ3Jlc3NNb2RlXCJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgW2RpYW1ldGVyXT1cImRpYW1ldGVyXCJcbiAgICAgICAgW3N0cm9rZVdpZHRoXT1cInN0cm9rZVdpZHRoXCI+XG4gICAgPC9tYXQtcHJvZ3Jlc3Mtc3Bpbm5lcj5cbiAgICBAaWYgKHRleHQpIHtcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPnt7dGV4dH19PC9zcGFuPlxuICAgIH1cbjwvZGl2PiJdfQ==
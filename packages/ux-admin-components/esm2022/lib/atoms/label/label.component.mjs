import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
export var ELabelColor;
(function (ELabelColor) {
    ELabelColor["PRIMARY"] = "primary";
    ELabelColor["ACCENT"] = "accent";
    ELabelColor["WARN"] = "warn";
    ELabelColor["SUCCESS"] = "success";
    ELabelColor["EXTRA"] = "extra";
    ELabelColor["ALERT"] = "alert";
    ELabelColor["BLACK"] = "black";
})(ELabelColor || (ELabelColor = {}));
export var ELabelMode;
(function (ELabelMode) {
    ELabelMode["LIGHT"] = "light";
    ELabelMode["DARK"] = "dark";
})(ELabelMode || (ELabelMode = {}));
export class LabelComponent {
    constructor() {
        this.mode = ELabelMode.LIGHT;
        this.text = 'Label';
        this.color = ELabelColor.PRIMARY;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: LabelComponent, isStandalone: true, selector: "admin-label", inputs: { mode: "mode", id: "id", text: "text", color: "color" }, ngImport: i0, template: "<div class=\"admin-label {{color}} {{mode}}\"\n    [attr.id]=\"id ? id : null\">\n    <span>{{text}}</span>\n</div>\n", styles: [".admin-label{align-items:center;box-sizing:border-box;border-radius:64px;box-shadow:none;display:flex;gap:4px;padding:4px 8px;text-transform:uppercase;width:fit-content;max-width:100%}.admin-label.accent{background-color:#e9ecfb;border:1px solid #2239c2}.admin-label.accent span{color:#2239c2}.admin-label.primary{background-color:var(--primary-background-color);border:1px solid var(--primary-label)}.admin-label.primary span{color:var(--primary-label)}.admin-label.warn{background-color:#f9c8d0;border:1px solid #971127}.admin-label.warn span{color:#971127}.admin-label.success{background-color:#dcedc8;border:1px solid #285318}.admin-label.success span{color:#285318}.admin-label.extra{background-color:#efe4fc;border:1px solid #771ae2}.admin-label.extra span{color:#771ae2}.admin-label.alert{background-color:#ffe0b2;border:1px solid #802d00}.admin-label.alert span{color:#802d00}.admin-label.black{background-color:#1a1a1a;border:1px solid #ffffff}.admin-label.black span{color:#fff}.admin-label span{color:#1a1a1a;font-family:RobotoMedium,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0;overflow:hidden;display:-webkit-box!important;text-align:left;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1}.admin-label.light{--primary-background-color: #d4d4d4;--primary-label: #414141}.admin-label.dark{--primary-background-color: #535353;--primary-label: #ffffff}\n"], dependencies: [{ kind: "ngmodule", type: MatIconModule }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: LabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-label', standalone: true, imports: [
                        MatIconModule,
                        IconComponent
                    ], encapsulation: ViewEncapsulation.None, template: "<div class=\"admin-label {{color}} {{mode}}\"\n    [attr.id]=\"id ? id : null\">\n    <span>{{text}}</span>\n</div>\n", styles: [".admin-label{align-items:center;box-sizing:border-box;border-radius:64px;box-shadow:none;display:flex;gap:4px;padding:4px 8px;text-transform:uppercase;width:fit-content;max-width:100%}.admin-label.accent{background-color:#e9ecfb;border:1px solid #2239c2}.admin-label.accent span{color:#2239c2}.admin-label.primary{background-color:var(--primary-background-color);border:1px solid var(--primary-label)}.admin-label.primary span{color:var(--primary-label)}.admin-label.warn{background-color:#f9c8d0;border:1px solid #971127}.admin-label.warn span{color:#971127}.admin-label.success{background-color:#dcedc8;border:1px solid #285318}.admin-label.success span{color:#285318}.admin-label.extra{background-color:#efe4fc;border:1px solid #771ae2}.admin-label.extra span{color:#771ae2}.admin-label.alert{background-color:#ffe0b2;border:1px solid #802d00}.admin-label.alert span{color:#802d00}.admin-label.black{background-color:#1a1a1a;border:1px solid #ffffff}.admin-label.black span{color:#fff}.admin-label span{color:#1a1a1a;font-family:RobotoMedium,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:16px;margin:0;overflow:hidden;display:-webkit-box!important;text-align:left;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1}.admin-label.light{--primary-background-color: #d4d4d4;--primary-label: #414141}.admin-label.dark{--primary-background-color: #535353;--primary-label: #ffffff}\n"] }]
        }], propDecorators: { mode: [{
                type: Input
            }], id: [{
                type: Input
            }], text: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2F0b21zL2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9hdG9tcy9sYWJlbC9sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUVoRSxNQUFNLENBQU4sSUFBWSxXQVFYO0FBUkQsV0FBWSxXQUFXO0lBQ3JCLGtDQUFtQixDQUFBO0lBQ25CLGdDQUFpQixDQUFBO0lBQ2pCLDRCQUFhLENBQUE7SUFDYixrQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBZSxDQUFBO0lBQ2YsOEJBQWUsQ0FBQTtJQUNoQiw4QkFBZSxDQUFBO0FBQ2hCLENBQUMsRUFSVyxXQUFXLEtBQVgsV0FBVyxRQVF0QjtBQUVELE1BQU0sQ0FBTixJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsNkJBQWUsQ0FBQTtJQUNmLDJCQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsVUFBVSxLQUFWLFVBQVUsUUFHckI7QUFjRCxNQUFNLE9BQU8sY0FBYztJQVozQjtRQWFVLFNBQUksR0FBZSxVQUFVLENBQUMsS0FBSyxDQUFDO1FBRW5DLFNBQUksR0FBVyxPQUFPLENBQUM7UUFDdkIsVUFBSyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7S0FDdEM7K0dBTFksY0FBYzttR0FBZCxjQUFjLHlJQy9CM0IsdUhBSUEsMjhDRG1CSSxhQUFhOzs0RkFRSixjQUFjO2tCQVoxQixTQUFTOytCQUNFLGFBQWEsY0FDWCxJQUFJLFdBQ1A7d0JBQ1AsYUFBYTt3QkFDYixhQUFhO3FCQUNkLGlCQUdjLGlCQUFpQixDQUFDLElBQUk7OEJBSTdCLElBQUk7c0JBQVosS0FBSztnQkFDSSxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYXRvbXMvaWNvbi9pY29uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBlbnVtIEVMYWJlbENvbG9yIHtcbiAgUFJJTUFSWSA9ICdwcmltYXJ5JyxcbiAgQUNDRU5UID0gJ2FjY2VudCcsXG4gIFdBUk4gPSAnd2FybicsXG4gIFNVQ0NFU1MgPSAnc3VjY2VzcycsXG4gIEVYVFJBID0gJ2V4dHJhJyxcbiAgQUxFUlQgPSAnYWxlcnQnLFxuXHRCTEFDSyA9ICdibGFjaycsXG59XG5cbmV4cG9ydCBlbnVtIEVMYWJlbE1vZGUge1xuICBMSUdIVCA9ICdsaWdodCcsXG4gIERBUksgPSAnZGFyaydcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRtaW4tbGFiZWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBJY29uQ29tcG9uZW50XG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9sYWJlbC5jb21wb25lbnQuc2NzcycsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5cbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIG1vZGU6IEVMYWJlbE1vZGUgPSBFTGFiZWxNb2RlLkxJR0hUO1xuICBASW5wdXQoKSBpZD86IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJ0xhYmVsJztcbiAgQElucHV0KCkgY29sb3IgPSBFTGFiZWxDb2xvci5QUklNQVJZO1xufVxuIiwiPGRpdiBjbGFzcz1cImFkbWluLWxhYmVsIHt7Y29sb3J9fSB7e21vZGV9fVwiXG4gICAgW2F0dHIuaWRdPVwiaWQgPyBpZCA6IG51bGxcIj5cbiAgICA8c3Bhbj57e3RleHR9fTwvc3Bhbj5cbjwvZGl2PlxuIl19
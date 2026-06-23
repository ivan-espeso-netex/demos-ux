import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
export var ECheckboxMode;
(function (ECheckboxMode) {
    ECheckboxMode["LIGHT"] = "light";
    ECheckboxMode["DARK"] = "dark";
})(ECheckboxMode || (ECheckboxMode = {}));
export var ECheckboxLabelPosition;
(function (ECheckboxLabelPosition) {
    ECheckboxLabelPosition["BEFORE"] = "before";
    ECheckboxLabelPosition["AFTER"] = "after";
})(ECheckboxLabelPosition || (ECheckboxLabelPosition = {}));
export class CheckboxComponent {
    constructor() {
        this.mode = ECheckboxMode.LIGHT;
        this.disabled = false;
        this.id = '';
        this.label = '';
        this.labelPosition = ECheckboxLabelPosition.AFTER;
        this.name = '';
        this.required = false;
        this.checkboxChange = new EventEmitter();
        this.value = false;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onCheckboxChange(event) {
        this.value = event.checked;
        this.onChange(this.value);
        this.onTouched();
        this.checkboxChange.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: CheckboxComponent, isStandalone: true, selector: "admin-checkbox", inputs: { mode: "mode", disabled: "disabled", id: "id", label: "label", labelPosition: "labelPosition", name: "name", required: "required" }, outputs: { checkboxChange: "checkboxChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CheckboxComponent),
                multi: true
            }
        ], ngImport: i0, template: "<mat-checkbox\n  class=\"admin-checkbox {{mode}}\"\n  [checked]=\"value\"\n  [disabled]=\"disabled\"\n  [id]=\"id\"\n  [labelPosition]=\"labelPosition\"\n  [name]=\"name\"\n  [required]=\"required\"\n  (change)=\"onCheckboxChange($event)\">\n  {{ label }}\n</mat-checkbox>", styles: [".admin-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{background-color:var(--background-color);border-color:var(--border-color)}.admin-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:focus:focus:not(:checked):not(:indeterminate)~.mdc-checkbox__background{background-color:var(--background-color);border-color:var(--border-color)}.admin-checkbox .mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--border-color);opacity:.5}.admin-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{background-color:var(--background-color);border-color:var(--border-color)}.admin-checkbox .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{background-color:var(--background-color);border-color:var(--border-color)}.admin-checkbox .mdc-form-field{font-family:RobotoRegular,sans-serif;color:var(--label-color)}.admin-checkbox .mdc-checkbox .mdc-checkbox__background{width:16px;height:16px;top:calc((var(--mdc-checkbox-state-layer-size) - 16px) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - 16px) / 2)}.admin-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.admin-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.admin-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:focus:checked~.mdc-checkbox__background,.admin-checkbox .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background{background-color:var(--color-accent);border-color:var(--color-accent)}.admin-checkbox.light{--background-color: #ffffff;--border-color: #b8b8b8;--label-color: #5c5c5c;--color-accent: #2239c2}.admin-checkbox.dark{--background-color: #3e3e3e;--border-color: #5c5c5c;--label-color: #eeeeee;--color-accent: #93a0ec}\n"], dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-checkbox', standalone: true, imports: [MatCheckboxModule], encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CheckboxComponent),
                            multi: true
                        }
                    ], template: "<mat-checkbox\n  class=\"admin-checkbox {{mode}}\"\n  [checked]=\"value\"\n  [disabled]=\"disabled\"\n  [id]=\"id\"\n  [labelPosition]=\"labelPosition\"\n  [name]=\"name\"\n  [required]=\"required\"\n  (change)=\"onCheckboxChange($event)\">\n  {{ label }}\n</mat-checkbox>", styles: [".admin-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{background-color:var(--background-color);border-color:var(--border-color)}.admin-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:focus:focus:not(:checked):not(:indeterminate)~.mdc-checkbox__background{background-color:var(--background-color);border-color:var(--border-color)}.admin-checkbox .mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--border-color);opacity:.5}.admin-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{background-color:var(--background-color);border-color:var(--border-color)}.admin-checkbox .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{background-color:var(--background-color);border-color:var(--border-color)}.admin-checkbox .mdc-form-field{font-family:RobotoRegular,sans-serif;color:var(--label-color)}.admin-checkbox .mdc-checkbox .mdc-checkbox__background{width:16px;height:16px;top:calc((var(--mdc-checkbox-state-layer-size) - 16px) / 2);left:calc((var(--mdc-checkbox-state-layer-size) - 16px) / 2)}.admin-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.admin-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.admin-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:focus:checked~.mdc-checkbox__background,.admin-checkbox .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background{background-color:var(--color-accent);border-color:var(--color-accent)}.admin-checkbox.light{--background-color: #ffffff;--border-color: #b8b8b8;--label-color: #5c5c5c;--color-accent: #2239c2}.admin-checkbox.dark{--background-color: #3e3e3e;--border-color: #5c5c5c;--label-color: #eeeeee;--color-accent: #93a0ec}\n"] }]
        }], propDecorators: { mode: [{
                type: Input
            }], disabled: [{
                type: Input
            }], id: [{
                type: Input
            }], label: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], name: [{
                type: Input
            }], required: [{
                type: Input
            }], checkboxChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2Zvcm1zL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9mb3Jtcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFxQixpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFFbEYsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QixnQ0FBZSxDQUFBO0lBQ2YsOEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4QjtBQVlELE1BQU0sQ0FBTixJQUFZLHNCQUdYO0FBSEQsV0FBWSxzQkFBc0I7SUFDaEMsMkNBQWlCLENBQUE7SUFDakIseUNBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSFcsc0JBQXNCLEtBQXRCLHNCQUFzQixRQUdqQztBQWdCRCxNQUFNLE9BQU8saUJBQWlCO0lBZjlCO1FBZ0JXLFNBQUksR0FBa0IsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMxQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQztRQUM3QyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDekIsbUJBQWMsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFbEcsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixhQUFRLEdBQVEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3pCLGNBQVMsR0FBUSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7S0F3QjNCO0lBdEJDLFVBQVUsQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBRSxVQUFtQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBd0I7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOytHQXBDVSxpQkFBaUI7bUdBQWpCLGlCQUFpQiwwUEFSakI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNoRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsMEJDcENILGtSQVVlLCttRURnQkgsaUJBQWlCOzs0RkFZaEIsaUJBQWlCO2tCQWY3QixTQUFTOytCQUNFLGdCQUFnQixjQUNkLElBQUksV0FDUCxDQUFDLGlCQUFpQixDQUFDLGlCQUdiLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUM7NEJBQ2hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzhCQUdRLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRDaGVja2JveENoYW5nZSwgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5cbmV4cG9ydCBlbnVtIEVDaGVja2JveE1vZGUge1xuICBMSUdIVCA9ICdsaWdodCcsXG4gIERBUksgPSAnZGFyaydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3hPcHRpb24ge1xuICBjaGVja2VkOiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGlkPzogc3RyaW5nO1xuICBsYWJlbFBvc2l0aW9uPzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuZXhwb3J0IGVudW0gRUNoZWNrYm94TGFiZWxQb3NpdGlvbiB7XG4gIEJFRk9SRSA9ICdiZWZvcmUnLFxuICBBRlRFUiA9ICdhZnRlcidcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkbWluLWNoZWNrYm94JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdENoZWNrYm94TW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgbW9kZTogRUNoZWNrYm94TW9kZSA9IEVDaGVja2JveE1vZGUuTElHSFQ7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBsYWJlbFBvc2l0aW9uID0gRUNoZWNrYm94TGFiZWxQb3NpdGlvbi5BRlRFUjtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjaGVja2JveENoYW5nZTogRXZlbnRFbWl0dGVyPE1hdENoZWNrYm94Q2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0Q2hlY2tib3hDaGFuZ2U+KCk7XG5cbiAgdmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBvbkNoYW5nZTogYW55ID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgb25DaGVja2JveENoYW5nZShldmVudDogTWF0Q2hlY2tib3hDaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gZXZlbnQuY2hlY2tlZDtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5jaGVja2JveENoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxufSIsIjxtYXQtY2hlY2tib3hcbiAgY2xhc3M9XCJhZG1pbi1jaGVja2JveCB7e21vZGV9fVwiXG4gIFtjaGVja2VkXT1cInZhbHVlXCJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgW2lkXT1cImlkXCJcbiAgW2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiXG4gIFtuYW1lXT1cIm5hbWVcIlxuICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAoY2hhbmdlKT1cIm9uQ2hlY2tib3hDaGFuZ2UoJGV2ZW50KVwiPlxuICB7eyBsYWJlbCB9fVxuPC9tYXQtY2hlY2tib3g+Il19
import { NgClass } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
export var ERadioGroupLabelPosition;
(function (ERadioGroupLabelPosition) {
    ERadioGroupLabelPosition["BEFORE"] = "before";
    ERadioGroupLabelPosition["AFTER"] = "after";
})(ERadioGroupLabelPosition || (ERadioGroupLabelPosition = {}));
export var ERadioGroupPosition;
(function (ERadioGroupPosition) {
    ERadioGroupPosition["COLUMN"] = "column";
    ERadioGroupPosition["ROW"] = "row";
})(ERadioGroupPosition || (ERadioGroupPosition = {}));
export var ERadioGroupMode;
(function (ERadioGroupMode) {
    ERadioGroupMode["LIGHT"] = "light";
    ERadioGroupMode["DARK"] = "dark";
})(ERadioGroupMode || (ERadioGroupMode = {}));
export class RadioGroupComponent {
    constructor() {
        this.mode = ERadioGroupMode.LIGHT;
        this.options = [];
        this.radioGroupChange = new EventEmitter();
        this.value = '';
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
    setDisabledState(isDisabled) { }
    onRadioChange(change) {
        this.value = change.value;
        this.onChange(change.value);
        this.onTouched();
        this.radioGroupChange.emit(change);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RadioGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: RadioGroupComponent, isStandalone: true, selector: "admin-radio-group", inputs: { disabled: "disabled", labelPosition: "labelPosition", name: "name", position: "position", mode: "mode", options: "options", radioGroupValue: "radioGroupValue" }, outputs: { radioGroupChange: "radioGroupChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioGroupComponent),
                multi: true
            }
        ], ngImport: i0, template: "<mat-radio-group \n\t[class]=\"'admin-radio-group admin-radio-group-position-' + position + ' ' + mode\"\n\t[disabled]=\"disabled\"\n\t[name]=\"name\"\n\t[value]=\"radioGroupValue\"\n\t[labelPosition]=\"labelPosition\" \n\t(change)=\"onRadioChange($event)\">\n\t@for (option of options; track option) {\n\t\t<mat-radio-button\n\t\t\t[value]=\"option.value\"\n\t\t\t[disabled]=\"option.disabled\">\n\t\t\t{{ option.label }}\n\t\t</mat-radio-button>\n\t}\n</mat-radio-group>", styles: [".mat-mdc-radio-group.admin-radio-group{display:flex;gap:16px}.mat-mdc-radio-group.admin-radio-group.admin-radio-group-position-column{flex-direction:column;gap:8px}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-form-field .mdc-radio.mdc-radio--disabled{opacity:.5}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-form-field .mdc-radio.mdc-radio--disabled+.mdc-label{opacity:.5}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-form-field .mdc-label{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--label-color)}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--border-color)}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:1}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--color-accent)}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{background-color:var(--color-accent);border-color:var(--color-accent)}.mat-mdc-radio-group.admin-radio-group.light{--label-color: #5c5c5c;--border-color: #b8b8b8;--color-accent: #2239c2}.mat-mdc-radio-group.admin-radio-group.dark{--label-color: #eeeeee;--border-color: #5c5c5c;--color-accent: #93a0ec}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i1.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: RadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-radio-group', standalone: true, imports: [MatFormFieldModule, MatRadioModule, NgClass], encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioGroupComponent),
                            multi: true
                        }
                    ], template: "<mat-radio-group \n\t[class]=\"'admin-radio-group admin-radio-group-position-' + position + ' ' + mode\"\n\t[disabled]=\"disabled\"\n\t[name]=\"name\"\n\t[value]=\"radioGroupValue\"\n\t[labelPosition]=\"labelPosition\" \n\t(change)=\"onRadioChange($event)\">\n\t@for (option of options; track option) {\n\t\t<mat-radio-button\n\t\t\t[value]=\"option.value\"\n\t\t\t[disabled]=\"option.disabled\">\n\t\t\t{{ option.label }}\n\t\t</mat-radio-button>\n\t}\n</mat-radio-group>", styles: [".mat-mdc-radio-group.admin-radio-group{display:flex;gap:16px}.mat-mdc-radio-group.admin-radio-group.admin-radio-group-position-column{flex-direction:column;gap:8px}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-form-field .mdc-radio.mdc-radio--disabled{opacity:.5}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-form-field .mdc-radio.mdc-radio--disabled+.mdc-label{opacity:.5}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-form-field .mdc-label{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--label-color)}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--border-color)}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:1}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--color-accent)}.mat-mdc-radio-group.admin-radio-group .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{background-color:var(--color-accent);border-color:var(--color-accent)}.mat-mdc-radio-group.admin-radio-group.light{--label-color: #5c5c5c;--border-color: #b8b8b8;--color-accent: #2239c2}.mat-mdc-radio-group.admin-radio-group.dark{--label-color: #eeeeee;--border-color: #5c5c5c;--color-accent: #93a0ec}\n"] }]
        }], propDecorators: { disabled: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], name: [{
                type: Input
            }], position: [{
                type: Input
            }], mode: [{
                type: Input
            }], options: [{
                type: Input
            }], radioGroupValue: [{
                type: Input
            }], radioGroupChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2Zvcm1zL3JhZGlvLWdyb3VwL3JhZGlvLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9mb3Jtcy9yYWRpby1ncm91cC9yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBa0IsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQU96RSxNQUFNLENBQU4sSUFBWSx3QkFHWDtBQUhELFdBQVksd0JBQXdCO0lBQ2xDLDZDQUFpQixDQUFBO0lBQ2pCLDJDQUFlLENBQUE7QUFDakIsQ0FBQyxFQUhXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFHbkM7QUFDRCxNQUFNLENBQU4sSUFBWSxtQkFHWDtBQUhELFdBQVksbUJBQW1CO0lBQzdCLHdDQUFpQixDQUFBO0lBQ2pCLGtDQUFXLENBQUE7QUFDYixDQUFDLEVBSFcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQUc5QjtBQUVELE1BQU0sQ0FBTixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsa0NBQWUsQ0FBQTtJQUNmLGdDQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsZUFBZSxLQUFmLGVBQWUsUUFHMUI7QUFpQkQsTUFBTSxPQUFPLG1CQUFtQjtJQWZoQztRQXFCVyxTQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUM3QixZQUFPLEdBQXdCLEVBQUUsQ0FBQztRQUdqQyxxQkFBZ0IsR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFFOUYsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQTRCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUM3QyxjQUFTLEdBQWUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0tBc0JsQztJQXBCQyxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBMkI7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFFLFVBQW1CLElBQVMsQ0FBQztJQUUvQyxhQUFhLENBQUMsTUFBc0I7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7K0dBbkNVLG1CQUFtQjttR0FBbkIsbUJBQW1CLCtSQVJuQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2xELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkN0Q0gsMGRBY2tCLDhoRURjTCxrQkFBa0IsOEJBQUUsY0FBYzs7NEZBWWxDLG1CQUFtQjtrQkFmL0IsU0FBUzsrQkFDRSxtQkFBbUIsY0FDakIsSUFBSSxXQUNQLENBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBRSxpQkFHekMsaUJBQWlCLENBQUMsSUFBSSxhQUMxQjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQzs0QkFDbEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7OEJBSVEsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFFSSxnQkFBZ0I7c0JBQXpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRSYWRpb0NoYW5nZSwgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJhZGlvR3JvdXBPcHRpb24ge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5leHBvcnQgZW51bSBFUmFkaW9Hcm91cExhYmVsUG9zaXRpb24ge1xuICBCRUZPUkUgPSAnYmVmb3JlJyxcbiAgQUZURVIgPSAnYWZ0ZXInXG59XG5leHBvcnQgZW51bSBFUmFkaW9Hcm91cFBvc2l0aW9uIHtcbiAgQ09MVU1OID0gJ2NvbHVtbicsXG4gIFJPVyA9ICdyb3cnXG59XG5cbmV4cG9ydCBlbnVtIEVSYWRpb0dyb3VwTW9kZSB7XG4gIExJR0hUID0gJ2xpZ2h0JyxcbiAgREFSSyA9ICdkYXJrJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbi1yYWRpby1ncm91cCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFsgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRSYWRpb01vZHVsZSwgTmdDbGFzcyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vcmFkaW8tZ3JvdXAuY29tcG9uZW50LnNjc3MnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhZGlvR3JvdXBDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBASW5wdXQoKSBkaXNhYmxlZCE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb24hOiBFUmFkaW9Hcm91cExhYmVsUG9zaXRpb247XG4gIEBJbnB1dCgpIG5hbWUhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uITogRVJhZGlvR3JvdXBQb3NpdGlvbjtcbiAgQElucHV0KCkgbW9kZSA9IEVSYWRpb0dyb3VwTW9kZS5MSUdIVDtcbiAgQElucHV0KCkgb3B0aW9uczogSVJhZGlvR3JvdXBPcHRpb25bXSA9IFtdO1xuICBASW5wdXQoKSByYWRpb0dyb3VwVmFsdWUhOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHJhZGlvR3JvdXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNYXRSYWRpb0NoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1hdFJhZGlvQ2hhbmdlPigpO1xuXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge31cblxuICBvblJhZGlvQ2hhbmdlKGNoYW5nZTogTWF0UmFkaW9DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gY2hhbmdlLnZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlLnZhbHVlKTtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMucmFkaW9Hcm91cENoYW5nZS5lbWl0KGNoYW5nZSk7XG4gIH1cbn1cbiIsIjxtYXQtcmFkaW8tZ3JvdXAgXG5cdFtjbGFzc109XCInYWRtaW4tcmFkaW8tZ3JvdXAgYWRtaW4tcmFkaW8tZ3JvdXAtcG9zaXRpb24tJyArIHBvc2l0aW9uICsgJyAnICsgbW9kZVwiXG5cdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFtuYW1lXT1cIm5hbWVcIlxuXHRbdmFsdWVdPVwicmFkaW9Hcm91cFZhbHVlXCJcblx0W2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiIFxuXHQoY2hhbmdlKT1cIm9uUmFkaW9DaGFuZ2UoJGV2ZW50KVwiPlxuXHRAZm9yIChvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2sgb3B0aW9uKSB7XG5cdFx0PG1hdC1yYWRpby1idXR0b25cblx0XHRcdFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuXHRcdFx0W2Rpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZFwiPlxuXHRcdFx0e3sgb3B0aW9uLmxhYmVsIH19XG5cdFx0PC9tYXQtcmFkaW8tYnV0dG9uPlxuXHR9XG48L21hdC1yYWRpby1ncm91cD4iXX0=
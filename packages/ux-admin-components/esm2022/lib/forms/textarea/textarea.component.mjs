import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
export var ETextareaMode;
(function (ETextareaMode) {
    ETextareaMode["LIGHT"] = "light";
    ETextareaMode["DARK"] = "dark";
})(ETextareaMode || (ETextareaMode = {}));
export class TextareaComponent {
    set disabled(value) {
        this._disabled = value;
        if (value) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
    }
    get disabled() {
        return this._disabled;
    }
    set required(value) {
        this._required = value;
        this.updateValidators();
    }
    get required() {
        return this._required;
    }
    set minlength(value) {
        this._minlength = value;
        this.updateValidators();
    }
    get minlength() {
        return this._minlength;
    }
    set maxlength(value) {
        this._maxlength = value;
        this.updateValidators();
    }
    get maxlength() {
        return this._maxlength;
    }
    set validators(validatorFns) {
        this._customValidators = validatorFns;
        this.updateValidators();
    }
    set value(val) {
        this._value = val;
        if (this.formControl) {
            this.formControl.setValue(val || '', { emitEvent: false });
        }
    }
    get value() {
        return this._value;
    }
    // constructor
    constructor() {
        // inputs
        this.mode = ETextareaMode.LIGHT;
        this.errorMessages = {};
        this.hint = '';
        this.label = '';
        this.placeholder = '';
        this.hideAssistiveText = false;
        // outputs
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        // properties
        this.formControl = new FormControl('');
        this._disabled = false;
        this._customValidators = [];
        this._required = false;
        this._minlength = null;
        this._maxlength = null;
        this._value = '';
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    // public methods
    onInputChange(event) {
        const value = event.target.value;
        this._value = value || '';
        this.onTouched();
        this.onChange(value);
        this.change.emit(this.formControl);
    }
    onBlur() {
        const current = typeof this.formControl.value === 'string' ? this.formControl.value : '';
        const trimmed = current.trim();
        if (trimmed !== current) {
            this._value = trimmed;
            this.formControl.setValue(trimmed);
        }
        this.onTouched();
        this.blur.emit(this.formControl);
        this.formControl.updateValueAndValidity();
    }
    getErrorMessage() {
        const errors = this.formControl.errors;
        if (errors) {
            const firstError = Object.keys(errors)[0];
            return this.errorMessages[firstError] || '';
        }
        return '';
    }
    hasError() {
        return this.formControl.touched && this.formControl.invalid;
    }
    // control value accessor implementation
    writeValue(value) {
        this._value = value || '';
        this.formControl.setValue(value || '', { emitEvent: false });
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // private methods
    updateValidators() {
        const validators = [...this._customValidators];
        if (this._required) {
            validators.push(Validators.required);
        }
        if (this._minlength !== null && this._minlength > 0) {
            validators.push(Validators.minLength(this._minlength));
        }
        if (this._maxlength !== null && this._maxlength > 0) {
            validators.push(Validators.maxLength(this._maxlength));
        }
        this.formControl.setValidators(validators);
        this.formControl.updateValueAndValidity();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: TextareaComponent, isStandalone: true, selector: "admin-textarea", inputs: { mode: "mode", errorMessages: "errorMessages", hint: "hint", label: "label", placeholder: "placeholder", hideAssistiveText: ["hideAssistiveText", "hideAssistiveText", booleanAttribute], disabled: "disabled", required: "required", minlength: "minlength", maxlength: "maxlength", validators: "validators", value: "value" }, outputs: { blur: "blur", change: "change", focus: "focus" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TextareaComponent),
                multi: true
            },
        ], ngImport: i0, template: "<mat-form-field class=\"admin-textarea {{mode}}\" [class.hide-assistive-text]=\"hideAssistiveText\">\n  <mat-label> {{ label }}</mat-label>\n  <textarea \n    matInput \n    [disabled]=\"disabled\"\n    [formControl]=\"formControl\"\n    [placeholder]=\"placeholder\"\n    [required]=\"required\"\n    [value]=\"value\" \n    (input)=\"onInputChange($event)\"\n    (focus)=\"focus.emit(formControl)\" \n    (blur)=\"onBlur()\"></textarea>\n  <mat-hint>{{ hint }}</mat-hint>\n  @if(hasError()) {\n    <mat-error>\n      {{ getErrorMessage() }}\n    </mat-error>\n  }\n</mat-form-field>", styles: ["mat-form-field.admin-textarea{width:100%;font-family:RobotoRegular,sans-serif;font-size:14px}mat-form-field.admin-textarea .mat-mdc-text-field-wrapper .mat-mdc-form-field-focus-overlay{opacity:0}mat-form-field.admin-textarea .mat-mdc-form-field-subscript-wrapper .mat-mdc-form-field-error-wrapper .mat-mdc-form-field-error{color:#dd1839}mat-form-field.admin-textarea .mat-mdc-form-field-flex{height:100%}mat-form-field.admin-textarea :hover .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-textarea .mat-mdc-form-field-infix{padding:20px 0 8px;line-height:24px}mat-form-field.admin-textarea .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-textarea .mat-mdc-form-field-infix .mdc-text-field__input{color:var(--text-color)}mat-form-field.admin-textarea .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:24px}mat-form-field.admin-textarea .mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--filled.mdc-text-field--invalid{border:1px solid #dd1839;border-bottom-right-radius:4px;border-bottom-left-radius:4px}mat-form-field.admin-textarea .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:72px}mat-form-field.admin-textarea .mdc-text-field--filled{border-bottom-left-radius:4px;border-bottom-right-radius:4px}mat-form-field.admin-textarea .mdc-text-field--filled .mdc-text-field__input::placeholder{color:var(--label-color)}mat-form-field.admin-textarea .mdc-text-field--filled .mdc-floating-label{font-family:RobotoRegular,sans-serif;font-style:normal;font-weight:400;line-height:normal;margin:0;font-size:14px}mat-form-field.admin-textarea .mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--input-background);border:1px solid var(--border)}mat-form-field.admin-textarea .mdc-text-field--filled:not(.mdc-text-field--disabled):hover{border-color:var(--color-accent)}mat-form-field.admin-textarea .mdc-text-field--filled.mdc-text-field--disabled{border:1px solid var(--border);opacity:.5}mat-form-field.admin-textarea .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused{background-color:var(--input-background)}mat-form-field.admin-textarea .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--color-accent)}mat-form-field.admin-textarea .mdc-line-ripple{display:none}mat-form-field.admin-textarea .mat-mdc-input-element.mat-mdc-form-field-input-control.mdc-text-field__input.cdk-text-field-autofill-monitored{line-height:18px}mat-form-field.admin-textarea .mat-mdc-form-field-hint{color:var(--hint-color);font-family:RobotoRegular,sans-serif;font-size:12px}mat-form-field.admin-textarea.light{--input-background: #ffffff;--border: #d4d4d4;--label-color: #999999;--hint-color: #5c5c5c;--text-color: #1a1a1a;--icon-color: #999999;--color-accent: #2239c2}mat-form-field.admin-textarea.dark{--input-background: #3e3e3e;--border: #3e3e3e;--label-color: #999999;--hint-color: #eeeeee;--text-color: #ffffff;--icon-color: #999999;--color-accent: #93a0ec}mat-form-field.admin-textarea.hide-assistive-text .mat-mdc-form-field-subscript-wrapper{display:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatIconModule }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: TextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-textarea', standalone: true, imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatIconModule
                    ], encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => TextareaComponent),
                            multi: true
                        },
                    ], template: "<mat-form-field class=\"admin-textarea {{mode}}\" [class.hide-assistive-text]=\"hideAssistiveText\">\n  <mat-label> {{ label }}</mat-label>\n  <textarea \n    matInput \n    [disabled]=\"disabled\"\n    [formControl]=\"formControl\"\n    [placeholder]=\"placeholder\"\n    [required]=\"required\"\n    [value]=\"value\" \n    (input)=\"onInputChange($event)\"\n    (focus)=\"focus.emit(formControl)\" \n    (blur)=\"onBlur()\"></textarea>\n  <mat-hint>{{ hint }}</mat-hint>\n  @if(hasError()) {\n    <mat-error>\n      {{ getErrorMessage() }}\n    </mat-error>\n  }\n</mat-form-field>", styles: ["mat-form-field.admin-textarea{width:100%;font-family:RobotoRegular,sans-serif;font-size:14px}mat-form-field.admin-textarea .mat-mdc-text-field-wrapper .mat-mdc-form-field-focus-overlay{opacity:0}mat-form-field.admin-textarea .mat-mdc-form-field-subscript-wrapper .mat-mdc-form-field-error-wrapper .mat-mdc-form-field-error{color:#dd1839}mat-form-field.admin-textarea .mat-mdc-form-field-flex{height:100%}mat-form-field.admin-textarea :hover .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-textarea .mat-mdc-form-field-infix{padding:20px 0 8px;line-height:24px}mat-form-field.admin-textarea .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-textarea .mat-mdc-form-field-infix .mdc-text-field__input{color:var(--text-color)}mat-form-field.admin-textarea .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:24px}mat-form-field.admin-textarea .mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--filled.mdc-text-field--invalid{border:1px solid #dd1839;border-bottom-right-radius:4px;border-bottom-left-radius:4px}mat-form-field.admin-textarea .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:72px}mat-form-field.admin-textarea .mdc-text-field--filled{border-bottom-left-radius:4px;border-bottom-right-radius:4px}mat-form-field.admin-textarea .mdc-text-field--filled .mdc-text-field__input::placeholder{color:var(--label-color)}mat-form-field.admin-textarea .mdc-text-field--filled .mdc-floating-label{font-family:RobotoRegular,sans-serif;font-style:normal;font-weight:400;line-height:normal;margin:0;font-size:14px}mat-form-field.admin-textarea .mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--input-background);border:1px solid var(--border)}mat-form-field.admin-textarea .mdc-text-field--filled:not(.mdc-text-field--disabled):hover{border-color:var(--color-accent)}mat-form-field.admin-textarea .mdc-text-field--filled.mdc-text-field--disabled{border:1px solid var(--border);opacity:.5}mat-form-field.admin-textarea .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused{background-color:var(--input-background)}mat-form-field.admin-textarea .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--color-accent)}mat-form-field.admin-textarea .mdc-line-ripple{display:none}mat-form-field.admin-textarea .mat-mdc-input-element.mat-mdc-form-field-input-control.mdc-text-field__input.cdk-text-field-autofill-monitored{line-height:18px}mat-form-field.admin-textarea .mat-mdc-form-field-hint{color:var(--hint-color);font-family:RobotoRegular,sans-serif;font-size:12px}mat-form-field.admin-textarea.light{--input-background: #ffffff;--border: #d4d4d4;--label-color: #999999;--hint-color: #5c5c5c;--text-color: #1a1a1a;--icon-color: #999999;--color-accent: #2239c2}mat-form-field.admin-textarea.dark{--input-background: #3e3e3e;--border: #3e3e3e;--label-color: #999999;--hint-color: #eeeeee;--text-color: #ffffff;--icon-color: #999999;--color-accent: #93a0ec}mat-form-field.admin-textarea.hide-assistive-text .mat-mdc-form-field-subscript-wrapper{display:none}\n"] }]
        }], ctorParameters: () => [], propDecorators: { mode: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], hint: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], hideAssistiveText: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], disabled: [{
                type: Input
            }], required: [{
                type: Input
            }], minlength: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], validators: [{
                type: Input
            }], value: [{
                type: Input
            }], blur: [{
                type: Output
            }], change: [{
                type: Output
            }], focus: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2Zvcm1zL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9mb3Jtcy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUF3QixXQUFXLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFlLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pKLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBRXpELE1BQU0sQ0FBTixJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsZ0NBQWUsQ0FBQTtJQUNmLDhCQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUF3QkQsTUFBTSxPQUFPLGlCQUFpQjtJQVU1QixJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8s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TTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgTkdfVkFMVUVfQUNDRVNTT1IsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuZXhwb3J0IGVudW0gRVRleHRhcmVhTW9kZSB7XG4gIExJR0hUID0gJ2xpZ2h0JyxcbiAgREFSSyA9ICdkYXJrJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbi10ZXh0YXJlYScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHRhcmVhLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZVxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRleHRhcmVhQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAvLyBpbnB1dHNcbiAgQElucHV0KCkgbW9kZTogRVRleHRhcmVhTW9kZSA9IEVUZXh0YXJlYU1vZGUuTElHSFQ7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgQElucHV0KCkgaGludCA9ICcnO1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuXHRASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgaGlkZUFzc2lzdGl2ZVRleHQgPSBmYWxzZTtcbiAgXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbC5lbmFibGUoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpIFxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsaWRhdG9ycygpO1xuICB9XG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cblxuICBASW5wdXQoKSBcbiAgc2V0IG1pbmxlbmd0aCh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xuICAgIHRoaXMuX21pbmxlbmd0aCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlVmFsaWRhdG9ycygpO1xuICB9XG4gIGdldCBtaW5sZW5ndGgoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX21pbmxlbmd0aDtcbiAgfVxuXG4gIEBJbnB1dCgpIFxuICBzZXQgbWF4bGVuZ3RoKHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy5fbWF4bGVuZ3RoID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWYWxpZGF0b3JzKCk7XG4gIH1cbiAgZ2V0IG1heGxlbmd0aCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4bGVuZ3RoO1xuICB9XG5cbiAgQElucHV0KCkgXG4gIHNldCB2YWxpZGF0b3JzKHZhbGlkYXRvckZuczogVmFsaWRhdG9yRm5bXSkge1xuICAgIHRoaXMuX2N1c3RvbVZhbGlkYXRvcnMgPSB2YWxpZGF0b3JGbnM7XG4gICAgdGhpcy51cGRhdGVWYWxpZGF0b3JzKCk7XG4gIH1cblxuICBASW5wdXQoKSBcbiAgc2V0IHZhbHVlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2wpIHtcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUodmFsIHx8ICcnLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8vIG91dHB1dHNcbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxGb3JtQ29udHJvbD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Db250cm9sPigpO1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8Rm9ybUNvbnRyb2w+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtQ29udHJvbD4oKTtcbiAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8Rm9ybUNvbnRyb2w+ID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtQ29udHJvbD4oKTtcblxuICAvLyBwcm9wZXJ0aWVzXG4gIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcblxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXN0b21WYWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG4gIHByaXZhdGUgX21pbmxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX21heGxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3ZhbHVlID0gJyc7XG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIC8vIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvLyBwdWJsaWMgbWV0aG9kc1xuICBvbklucHV0Q2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmZvcm1Db250cm9sKTtcbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdHlwZW9mIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUgPT09ICdzdHJpbmcnID8gdGhpcy5mb3JtQ29udHJvbC52YWx1ZSA6ICcnO1xuICAgIGNvbnN0IHRyaW1tZWQgPSBjdXJyZW50LnRyaW0oKTtcbiAgICBpZiAodHJpbW1lZCAhPT0gY3VycmVudCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB0cmltbWVkXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHRyaW1tZWQpO1xuICAgIH1cbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuYmx1ci5lbWl0KHRoaXMuZm9ybUNvbnRyb2wpO1xuICAgIHRoaXMuZm9ybUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5mb3JtQ29udHJvbC5lcnJvcnM7XG4gICAgaWYgKGVycm9ycykge1xuICAgICAgY29uc3QgZmlyc3RFcnJvciA9IE9iamVjdC5rZXlzKGVycm9ycylbMF07XG4gICAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2VzW2ZpcnN0RXJyb3JdIHx8ICcnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtQ29udHJvbC50b3VjaGVkICYmIHRoaXMuZm9ybUNvbnRyb2wuaW52YWxpZDtcbiAgfVxuXG4gIC8vIGNvbnRyb2wgdmFsdWUgYWNjZXNzb3IgaW1wbGVtZW50YXRpb25cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlIHx8ICcnLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8vIHByaXZhdGUgbWV0aG9kc1xuICBwcml2YXRlIHVwZGF0ZVZhbGlkYXRvcnMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IFsuLi50aGlzLl9jdXN0b21WYWxpZGF0b3JzXTtcbiAgICBcbiAgICBpZiAodGhpcy5fcmVxdWlyZWQpIHtcbiAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuX21pbmxlbmd0aCAhPT0gbnVsbCAmJiB0aGlzLl9taW5sZW5ndGggPiAwKSB7XG4gICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5fbWlubGVuZ3RoKSk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLl9tYXhsZW5ndGggIT09IG51bGwgJiYgdGhpcy5fbWF4bGVuZ3RoID4gMCkge1xuICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHRoaXMuX21heGxlbmd0aCkpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbGlkYXRvcnModmFsaWRhdG9ycyk7XG4gICAgdGhpcy5mb3JtQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIH1cblxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiYWRtaW4tdGV4dGFyZWEge3ttb2RlfX1cIiBbY2xhc3MuaGlkZS1hc3Npc3RpdmUtdGV4dF09XCJoaWRlQXNzaXN0aXZlVGV4dFwiPlxuICA8bWF0LWxhYmVsPiB7eyBsYWJlbCB9fTwvbWF0LWxhYmVsPlxuICA8dGV4dGFyZWEgXG4gICAgbWF0SW5wdXQgXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICBbdmFsdWVdPVwidmFsdWVcIiBcbiAgICAoaW5wdXQpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAoZm9jdXMpPVwiZm9jdXMuZW1pdChmb3JtQ29udHJvbClcIiBcbiAgICAoYmx1cik9XCJvbkJsdXIoKVwiPjwvdGV4dGFyZWE+XG4gIDxtYXQtaGludD57eyBoaW50IH19PC9tYXQtaGludD5cbiAgQGlmKGhhc0Vycm9yKCkpIHtcbiAgICA8bWF0LWVycm9yPlxuICAgICAge3sgZ2V0RXJyb3JNZXNzYWdlKCkgfX1cbiAgICA8L21hdC1lcnJvcj5cbiAgfVxuPC9tYXQtZm9ybS1maWVsZD4iXX0=
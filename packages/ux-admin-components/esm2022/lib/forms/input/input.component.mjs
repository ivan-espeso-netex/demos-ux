import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, forwardRef, inject, Injector, Input, Output, ViewEncapsulation } from '@angular/core';
import { ControlContainer, FormControl, FormControlDirective, FormControlName, FormsModule, NG_VALUE_ACCESSOR, NgControl, NgModel, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { IconComponent } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/forms";
export var EInputMode;
(function (EInputMode) {
    EInputMode["LIGHT"] = "light";
    EInputMode["DARK"] = "dark";
})(EInputMode || (EInputMode = {}));
export var EInputType;
(function (EInputType) {
    EInputType["NUMBER"] = "number";
    EInputType["TEXT"] = "text";
    EInputType["PASSWORD"] = "password";
})(EInputType || (EInputType = {}));
export class InputComponent {
    constructor() {
        this.mode = EInputMode.LIGHT;
        this.disabled = false;
        this.hint = '';
        this.label = '';
        this.minlength = null;
        this.maxlength = null;
        this.name = '';
        this.placeholder = '';
        this.readonly = false;
        this.required = false;
        this.hideAssistiveText = false;
        this.suffixText = '';
        this.type = EInputType.TEXT;
        this.value = '';
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        //ControlvalueAccesor implementation
        this.injector = inject(Injector);
    }
    ngOnInit() {
        const ngControl = this.injector.get(NgControl, null, { self: true, optional: true });
        if (ngControl instanceof NgModel) {
            this.control = ngControl.control;
            this.subscription = ngControl.control.valueChanges.subscribe((value) => {
                if (ngControl.model !== value || ngControl.viewModel !== value) {
                    ngControl.viewToModelUpdate(value);
                }
            });
        }
        else if (ngControl instanceof FormControlDirective) {
            this.control = ngControl.control;
        }
        else if (ngControl instanceof FormControlName) {
            const container = this.injector.get(ControlContainer).control;
            if (ngControl.name && container.controls[ngControl.name]) {
                this.control = container.controls[ngControl.name];
            }
        }
        else {
            this.control = new FormControl();
        }
    }
    writeValue(value) {
        this.value = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    onBlur() {
        if (this.control) {
            this.control.markAsTouched();
            if (this.control.value) {
                const current = this.control.value.toString();
                const trimmed = current.trim();
                if (trimmed !== current) {
                    this.control.setValue(trimmed);
                    this.value = trimmed;
                    if (this.onChange) {
                        this.onChange(trimmed);
                    }
                }
                if (this.maxlength && trimmed.length > this.maxlength) {
                    this.control.setErrors({ ...this.control.errors, maxlength: true });
                }
                else {
                    if (this.control.errors?.['maxlength']) {
                        const { maxlength, ...otherErrors } = this.control.errors;
                        this.control.setErrors(Object.keys(otherErrors).length > 0 ? otherErrors : null);
                    }
                }
            }
            else {
                if (this.control.errors?.['maxlength']) {
                    const { maxlength, ...otherErrors } = this.control.errors;
                    this.control.setErrors(Object.keys(otherErrors).length > 0 ? otherErrors : null);
                }
            }
        }
        if (this.onTouched) {
            this.onTouched();
        }
        this.blur.emit(this.control);
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: InputComponent, isStandalone: true, selector: "admin-input", inputs: { mode: "mode", disabled: ["disabled", "disabled", coerceBooleanProperty], errorMessages: "errorMessages", errorStateMatcher: "errorStateMatcher", hint: "hint", label: "label", minlength: "minlength", maxlength: "maxlength", name: "name", placeholder: "placeholder", prefixIcon: "prefixIcon", readonly: ["readonly", "readonly", coerceBooleanProperty], required: ["required", "required", coerceBooleanProperty], hideAssistiveText: ["hideAssistiveText", "hideAssistiveText", booleanAttribute], suffixIcon: "suffixIcon", suffixText: "suffixText", type: "type", value: "value" }, outputs: { blur: "blur", change: "change", focus: "focus" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputComponent),
                multi: true,
            }
        ], ngImport: i0, template: "<mat-form-field class=\"admin-input {{mode}}\" [class.hide-assistive-text]=\"hideAssistiveText\">\n  <mat-label class=\"mat-body\">{{ label }}</mat-label>\n  @if(prefixIcon) {\n\t\t<admin-icon \n\t\t\tmatPrefix \n\t\t\t[icon]=\"prefixIcon\">\n\t\t</admin-icon>\n  }\n  <input \n    matInput \n    #input=\"matInput\"\n    [disabled]=\"disabled\"\n    [errorStateMatcher]=\"errorStateMatcher\"\n    [formControl]=\"control\"\n    [minlength]=\"minlength\"\n    [name]=\"name\"\n    [(ngModel)]=\"value\"\n    [placeholder]=\"placeholder\"\n    [readonly]=\"readonly\"\n    [required]=\"required\"\n    [type]=\"type\"\n    (input)=\"change.emit(control)\"\n    (focus)=\"focus.emit(control)\" \n    (blur)=\"onBlur()\"/>\n    @if(suffixIcon && !suffixText) {\n\t\t\t<admin-icon \n\t\t\t\tmatSuffix \n\t\t\t\t[icon]=\"suffixIcon\">\n\t\t\t</admin-icon>\n    }\n\t\t@if(suffixText && !suffixIcon) {\n\t\t\t<span class=\"admin-input__suffix-text\" matSuffix>.{{suffixText}}</span>\n    }\n    <mat-hint>{{ hint }}</mat-hint>\n    <mat-error class=\"mat-caption\">\n        @for (error of errorMessages | keyvalue; track error) {\n          @if (control?.errors?.[error.key]) { \n            <span>{{ error.value }}</span><br/>\n          }\n        }\n    </mat-error>\n</mat-form-field>", styles: ["mat-form-field.admin-input{--mat-form-field-container-height: 48px;width:100%;font-family:RobotoRegular,sans-serif;font-size:14px}mat-form-field.admin-input .mat-mdc-text-field-wrapper .mat-mdc-form-field-focus-overlay{opacity:0}mat-form-field.admin-input .mat-mdc-form-field-subscript-wrapper .mat-mdc-form-field-error-wrapper .mat-mdc-form-field-error{color:#dd1839}mat-form-field.admin-input .mat-mdc-form-field-flex{height:100%}mat-form-field.admin-input .mat-mdc-form-field-flex .mat-mdc-form-field-icon-prefix{padding:0 12px}mat-form-field.admin-input .mat-mdc-form-field-flex .mat-mdc-form-field-icon-suffix{padding:0 12px 0 0}mat-form-field.admin-input :hover .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-input .mat-mdc-form-field-infix{padding:20px 0 0}mat-form-field.admin-input .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-input .mat-mdc-form-field-infix .mdc-text-field__input{color:var(--text-color)}mat-form-field.admin-input .mat-mdc-form-field-icon-suffix .admin-input__suffix-text{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--suffix-text-color);padding:0 12px}mat-form-field.admin-input .mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--filled.mdc-text-field--invalid{border:1px solid #dd1839;border-bottom-right-radius:4px;border-bottom-left-radius:4px}mat-form-field.admin-input .mdc-text-field--filled{border-bottom-left-radius:4px;border-bottom-right-radius:4px}mat-form-field.admin-input .mdc-text-field--filled .mdc-text-field__input::placeholder{color:var(--label-color)}mat-form-field.admin-input .mdc-text-field--filled .mdc-floating-label{font-family:RobotoRegular,sans-serif;font-style:normal;font-weight:400;line-height:normal;margin:0;font-size:14px}mat-form-field.admin-input .mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--input-background);border:1px solid var(--border)}mat-form-field.admin-input .mdc-text-field--filled:not(.mdc-text-field--disabled):hover{border-color:var(--color-accent)}mat-form-field.admin-input .mdc-text-field--filled.mdc-text-field--disabled{border:1px solid var(--border);opacity:.5}mat-form-field.admin-input .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused{background-color:var(--input-background)}mat-form-field.admin-input .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--color-accent)}mat-form-field.admin-input .mdc-line-ripple{display:none}mat-form-field.admin-input .mat-mdc-input-element.mat-mdc-form-field-input-control.mdc-text-field__input.cdk-text-field-autofill-monitored{line-height:18px}mat-form-field.admin-input .mat-mdc-form-field-hint{color:var(--hint-color);font-family:RobotoRegular,sans-serif;font-size:12px}mat-form-field.admin-input admin-icon .admin-icon.mat-icon{color:var(--icon-color)}mat-form-field.admin-input.light{--input-background: #ffffff;--border: #d4d4d4;--color-accent: #2239c2;--label-color: #999999;--hint-color: #5c5c5c;--text-color: #1a1a1a;--icon-color: #999999;--suffix-text-color: #999999}mat-form-field.admin-input.dark{--input-background: #3e3e3e;--border: #3e3e3e;--color-accent: #93a0ec;--label-color: #999999;--hint-color: #eeeeee;--text-color: #ffffff;--icon-color: #999999;--suffix-text-color: #999999}mat-form-field.admin-input.hide-assistive-text .mat-mdc-form-field-subscript-wrapper{display:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i1.KeyValuePipe, name: "keyvalue" }, { kind: "ngmodule", type: MatIconModule }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i4.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: IconComponent, selector: "admin-icon", inputs: ["fontFamily", "icon", "color", "mode"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-input', standalone: true, imports: [
                        CommonModule,
                        MatIconModule,
                        MatInputModule,
                        MatButtonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        IconComponent
                    ], encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => InputComponent),
                            multi: true,
                        }
                    ], template: "<mat-form-field class=\"admin-input {{mode}}\" [class.hide-assistive-text]=\"hideAssistiveText\">\n  <mat-label class=\"mat-body\">{{ label }}</mat-label>\n  @if(prefixIcon) {\n\t\t<admin-icon \n\t\t\tmatPrefix \n\t\t\t[icon]=\"prefixIcon\">\n\t\t</admin-icon>\n  }\n  <input \n    matInput \n    #input=\"matInput\"\n    [disabled]=\"disabled\"\n    [errorStateMatcher]=\"errorStateMatcher\"\n    [formControl]=\"control\"\n    [minlength]=\"minlength\"\n    [name]=\"name\"\n    [(ngModel)]=\"value\"\n    [placeholder]=\"placeholder\"\n    [readonly]=\"readonly\"\n    [required]=\"required\"\n    [type]=\"type\"\n    (input)=\"change.emit(control)\"\n    (focus)=\"focus.emit(control)\" \n    (blur)=\"onBlur()\"/>\n    @if(suffixIcon && !suffixText) {\n\t\t\t<admin-icon \n\t\t\t\tmatSuffix \n\t\t\t\t[icon]=\"suffixIcon\">\n\t\t\t</admin-icon>\n    }\n\t\t@if(suffixText && !suffixIcon) {\n\t\t\t<span class=\"admin-input__suffix-text\" matSuffix>.{{suffixText}}</span>\n    }\n    <mat-hint>{{ hint }}</mat-hint>\n    <mat-error class=\"mat-caption\">\n        @for (error of errorMessages | keyvalue; track error) {\n          @if (control?.errors?.[error.key]) { \n            <span>{{ error.value }}</span><br/>\n          }\n        }\n    </mat-error>\n</mat-form-field>", styles: ["mat-form-field.admin-input{--mat-form-field-container-height: 48px;width:100%;font-family:RobotoRegular,sans-serif;font-size:14px}mat-form-field.admin-input .mat-mdc-text-field-wrapper .mat-mdc-form-field-focus-overlay{opacity:0}mat-form-field.admin-input .mat-mdc-form-field-subscript-wrapper .mat-mdc-form-field-error-wrapper .mat-mdc-form-field-error{color:#dd1839}mat-form-field.admin-input .mat-mdc-form-field-flex{height:100%}mat-form-field.admin-input .mat-mdc-form-field-flex .mat-mdc-form-field-icon-prefix{padding:0 12px}mat-form-field.admin-input .mat-mdc-form-field-flex .mat-mdc-form-field-icon-suffix{padding:0 12px 0 0}mat-form-field.admin-input :hover .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-input .mat-mdc-form-field-infix{padding:20px 0 0}mat-form-field.admin-input .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-input .mat-mdc-form-field-infix .mdc-text-field__input{color:var(--text-color)}mat-form-field.admin-input .mat-mdc-form-field-icon-suffix .admin-input__suffix-text{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--suffix-text-color);padding:0 12px}mat-form-field.admin-input .mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--filled.mdc-text-field--invalid{border:1px solid #dd1839;border-bottom-right-radius:4px;border-bottom-left-radius:4px}mat-form-field.admin-input .mdc-text-field--filled{border-bottom-left-radius:4px;border-bottom-right-radius:4px}mat-form-field.admin-input .mdc-text-field--filled .mdc-text-field__input::placeholder{color:var(--label-color)}mat-form-field.admin-input .mdc-text-field--filled .mdc-floating-label{font-family:RobotoRegular,sans-serif;font-style:normal;font-weight:400;line-height:normal;margin:0;font-size:14px}mat-form-field.admin-input .mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--input-background);border:1px solid var(--border)}mat-form-field.admin-input .mdc-text-field--filled:not(.mdc-text-field--disabled):hover{border-color:var(--color-accent)}mat-form-field.admin-input .mdc-text-field--filled.mdc-text-field--disabled{border:1px solid var(--border);opacity:.5}mat-form-field.admin-input .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused{background-color:var(--input-background)}mat-form-field.admin-input .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--color-accent)}mat-form-field.admin-input .mdc-line-ripple{display:none}mat-form-field.admin-input .mat-mdc-input-element.mat-mdc-form-field-input-control.mdc-text-field__input.cdk-text-field-autofill-monitored{line-height:18px}mat-form-field.admin-input .mat-mdc-form-field-hint{color:var(--hint-color);font-family:RobotoRegular,sans-serif;font-size:12px}mat-form-field.admin-input admin-icon .admin-icon.mat-icon{color:var(--icon-color)}mat-form-field.admin-input.light{--input-background: #ffffff;--border: #d4d4d4;--color-accent: #2239c2;--label-color: #999999;--hint-color: #5c5c5c;--text-color: #1a1a1a;--icon-color: #999999;--suffix-text-color: #999999}mat-form-field.admin-input.dark{--input-background: #3e3e3e;--border: #3e3e3e;--color-accent: #93a0ec;--label-color: #999999;--hint-color: #eeeeee;--text-color: #ffffff;--icon-color: #999999;--suffix-text-color: #999999}mat-form-field.admin-input.hide-assistive-text .mat-mdc-form-field-subscript-wrapper{display:none}\n"] }]
        }], propDecorators: { mode: [{
                type: Input
            }], disabled: [{
                type: Input,
                args: [{ transform: coerceBooleanProperty }]
            }], errorMessages: [{
                type: Input
            }], errorStateMatcher: [{
                type: Input
            }], hint: [{
                type: Input
            }], label: [{
                type: Input
            }], minlength: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], name: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], prefixIcon: [{
                type: Input
            }], readonly: [{
                type: Input,
                args: [{ transform: coerceBooleanProperty }]
            }], required: [{
                type: Input,
                args: [{ transform: coerceBooleanProperty }]
            }], hideAssistiveText: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], suffixIcon: [{
                type: Input
            }], suffixText: [{
                type: Input
            }], type: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRtaW4tY29tcG9uZW50cy9zcmMvbGliL2Zvcm1zL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9mb3Jtcy9pbnB1dC9pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSSxPQUFPLEVBQ04sZ0JBQWdCLEVBRWhCLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsZUFBZSxFQUVmLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULE9BQU8sRUFDUCxtQkFBbUIsRUFDbkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQWEsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7OztBQU0zRSxNQUFNLENBQU4sSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLDZCQUFlLENBQUE7SUFDZiwyQkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUhXLFVBQVUsS0FBVixVQUFVLFFBR3JCO0FB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RUksSUFBSTtzQkFBYixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBpbmplY3QsIEluamVjdG9yLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q29udHJvbENvbnRhaW5lcixcblx0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG5cdEZvcm1Db250cm9sLFxuXHRGb3JtQ29udHJvbERpcmVjdGl2ZSxcblx0Rm9ybUNvbnRyb2xOYW1lLFxuXHRGb3JtR3JvdXAsXG5cdEZvcm1zTW9kdWxlLFxuXHROR19WQUxVRV9BQ0NFU1NPUixcblx0TmdDb250cm9sLFxuXHROZ01vZGVsLFxuXHRSZWFjdGl2ZUZvcm1zTW9kdWxlXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRUljb25OYW1lLCBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYXRvbXMvaWNvbi9pY29uLmNvbXBvbmVudCc7XG5cbmludGVyZmFjZSBFcnJvciB7XG4gIFtrZXk6c3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbjtcbn1cblxuZXhwb3J0IGVudW0gRUlucHV0TW9kZSB7XG4gIExJR0hUID0gJ2xpZ2h0JyxcbiAgREFSSyA9ICdkYXJrJ1xufVxuXG5leHBvcnQgZW51bSBFSW5wdXRUeXBlIHtcbiAgTlVNQkVSID0gJ251bWJlcicsXG4gIFRFWFQgPSAndGV4dCcsXG4gIFBBU1NXT1JEID0gJ3Bhc3N3b3JkJ1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZG1pbi1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRJY29uQ29tcG9uZW50XG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3J7XG5cblx0QElucHV0KCkgbW9kZTogRUlucHV0TW9kZSA9IEVJbnB1dE1vZGUuTElHSFQ7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogY29lcmNlQm9vbGVhblByb3BlcnR5IH0pIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZXMhOiBFcnJvcjtcbiAgQElucHV0KCkgZXJyb3JTdGF0ZU1hdGNoZXIhOiBFcnJvclN0YXRlTWF0Y2hlcjtcbiAgQElucHV0KCkgaGludCA9ICcnO1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSBtaW5sZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXhsZW5ndGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuYW1lID0gJyc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIHByZWZpeEljb24/OiBFSWNvbk5hbWU7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogY29lcmNlQm9vbGVhblByb3BlcnR5IH0pIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogY29lcmNlQm9vbGVhblByb3BlcnR5IH0pIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBoaWRlQXNzaXN0aXZlVGV4dCA9IGZhbHNlO1xuICBASW5wdXQoKSBzdWZmaXhJY29uPzogRUljb25OYW1lO1x0XG5cdEBJbnB1dCgpIHN1ZmZpeFRleHQgPSAnJztcbiAgQElucHV0KCkgdHlwZTogRUlucHV0VHlwZSA9IEVJbnB1dFR5cGUuVEVYVDtcbiAgQElucHV0KCkgdmFsdWUgPSAnJztcblxuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPEZvcm1Db250cm9sPiA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUNvbnRyb2w+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxGb3JtQ29udHJvbD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Db250cm9sPigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxGb3JtQ29udHJvbD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Db250cm9sPigpO1xuXG4gIC8vQ29udHJvbHZhbHVlQWNjZXNvciBpbXBsZW1lbnRhdGlvblxuICBwcml2YXRlIGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG4gIGNvbnRyb2whOiBGb3JtQ29udHJvbDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLmluamVjdG9yLmdldChOZ0NvbnRyb2wsIG51bGwsIHsgc2VsZjogdHJ1ZSwgb3B0aW9uYWw6IHRydWUgfSk7XG5cbiAgICBpZiAobmdDb250cm9sIGluc3RhbmNlb2YgTmdNb2RlbCkge1xuICAgICAgdGhpcy5jb250cm9sID0gbmdDb250cm9sLmNvbnRyb2w7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG5nQ29udHJvbC5jb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChuZ0NvbnRyb2wubW9kZWwgIT09IHZhbHVlIHx8IG5nQ29udHJvbC52aWV3TW9kZWwgIT09IHZhbHVlKSB7XG4gICAgICAgICAgbmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChuZ0NvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbERpcmVjdGl2ZSkge1xuICAgICAgdGhpcy5jb250cm9sID0gbmdDb250cm9sLmNvbnRyb2w7XG4gICAgfSBlbHNlIGlmIChuZ0NvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbE5hbWUpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuaW5qZWN0b3IuZ2V0KENvbnRyb2xDb250YWluZXIpLmNvbnRyb2wgYXMgRm9ybUdyb3VwO1xuICAgICAgaWYgKG5nQ29udHJvbC5uYW1lICYmIGNvbnRhaW5lci5jb250cm9sc1tuZ0NvbnRyb2wubmFtZV0pIHtcbiAgICAgICAgdGhpcy5jb250cm9sID0gY29udGFpbmVyLmNvbnRyb2xzW25nQ29udHJvbC5uYW1lXSBhcyBGb3JtQ29udHJvbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2U6ICgodmFsdWU6IHN0cmluZykgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG4gIG9uVG91Y2hlZDogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICBcbiAgICAgIGlmICh0aGlzLmNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuY29udHJvbC52YWx1ZS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCB0cmltbWVkID0gY3VycmVudC50cmltKCk7XG4gICAgICAgIGlmICh0cmltbWVkICE9PSBjdXJyZW50KSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRyaW1tZWQpO1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB0cmltbWVkO1xuICAgICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRyaW1tZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1heGxlbmd0aCAmJiB0cmltbWVkLmxlbmd0aCA+IHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sLnNldEVycm9ycyh7IC4uLnRoaXMuY29udHJvbC5lcnJvcnMsIG1heGxlbmd0aDogdHJ1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wuZXJyb3JzPy5bJ21heGxlbmd0aCddKSB7XG4gICAgICAgICAgICBjb25zdCB7IG1heGxlbmd0aCwgLi4ub3RoZXJFcnJvcnMgfSA9IHRoaXMuY29udHJvbC5lcnJvcnM7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuc2V0RXJyb3JzKE9iamVjdC5rZXlzKG90aGVyRXJyb3JzKS5sZW5ndGggPiAwID8gb3RoZXJFcnJvcnMgOiBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udHJvbC5lcnJvcnM/LlsnbWF4bGVuZ3RoJ10pIHtcbiAgICAgICAgICBjb25zdCB7IG1heGxlbmd0aCwgLi4ub3RoZXJFcnJvcnMgfSA9IHRoaXMuY29udHJvbC5lcnJvcnM7XG4gICAgICAgICAgdGhpcy5jb250cm9sLnNldEVycm9ycyhPYmplY3Qua2V5cyhvdGhlckVycm9ycykubGVuZ3RoID4gMCA/IG90aGVyRXJyb3JzIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMub25Ub3VjaGVkKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmJsdXIuZW1pdCh0aGlzLmNvbnRyb2wpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiYWRtaW4taW5wdXQge3ttb2RlfX1cIiBbY2xhc3MuaGlkZS1hc3Npc3RpdmUtdGV4dF09XCJoaWRlQXNzaXN0aXZlVGV4dFwiPlxuICA8bWF0LWxhYmVsIGNsYXNzPVwibWF0LWJvZHlcIj57eyBsYWJlbCB9fTwvbWF0LWxhYmVsPlxuICBAaWYocHJlZml4SWNvbikge1xuXHRcdDxhZG1pbi1pY29uIFxuXHRcdFx0bWF0UHJlZml4IFxuXHRcdFx0W2ljb25dPVwicHJlZml4SWNvblwiPlxuXHRcdDwvYWRtaW4taWNvbj5cbiAgfVxuICA8aW5wdXQgXG4gICAgbWF0SW5wdXQgXG4gICAgI2lucHV0PVwibWF0SW5wdXRcIlxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW2Vycm9yU3RhdGVNYXRjaGVyXT1cImVycm9yU3RhdGVNYXRjaGVyXCJcbiAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgW21pbmxlbmd0aF09XCJtaW5sZW5ndGhcIlxuICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcbiAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgIFt0eXBlXT1cInR5cGVcIlxuICAgIChpbnB1dCk9XCJjaGFuZ2UuZW1pdChjb250cm9sKVwiXG4gICAgKGZvY3VzKT1cImZvY3VzLmVtaXQoY29udHJvbClcIiBcbiAgICAoYmx1cik9XCJvbkJsdXIoKVwiLz5cbiAgICBAaWYoc3VmZml4SWNvbiAmJiAhc3VmZml4VGV4dCkge1xuXHRcdFx0PGFkbWluLWljb24gXG5cdFx0XHRcdG1hdFN1ZmZpeCBcblx0XHRcdFx0W2ljb25dPVwic3VmZml4SWNvblwiPlxuXHRcdFx0PC9hZG1pbi1pY29uPlxuICAgIH1cblx0XHRAaWYoc3VmZml4VGV4dCAmJiAhc3VmZml4SWNvbikge1xuXHRcdFx0PHNwYW4gY2xhc3M9XCJhZG1pbi1pbnB1dF9fc3VmZml4LXRleHRcIiBtYXRTdWZmaXg+Lnt7c3VmZml4VGV4dH19PC9zcGFuPlxuICAgIH1cbiAgICA8bWF0LWhpbnQ+e3sgaGludCB9fTwvbWF0LWhpbnQ+XG4gICAgPG1hdC1lcnJvciBjbGFzcz1cIm1hdC1jYXB0aW9uXCI+XG4gICAgICAgIEBmb3IgKGVycm9yIG9mIGVycm9yTWVzc2FnZXMgfCBrZXl2YWx1ZTsgdHJhY2sgZXJyb3IpIHtcbiAgICAgICAgICBAaWYgKGNvbnRyb2w/LmVycm9ycz8uW2Vycm9yLmtleV0pIHsgXG4gICAgICAgICAgICA8c3Bhbj57eyBlcnJvci52YWx1ZSB9fTwvc3Bhbj48YnIvPlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIDwvbWF0LWVycm9yPlxuPC9tYXQtZm9ybS1maWVsZD4iXX0=
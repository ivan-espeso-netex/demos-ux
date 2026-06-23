import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, computed, EventEmitter, Input, Output, ViewChildren, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdjustPanelHeightDirective } from './adjust-panel-height.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/forms";
export var ESelectMode;
(function (ESelectMode) {
    ESelectMode["LIGHT"] = "light";
    ESelectMode["DARK"] = "dark";
})(ESelectMode || (ESelectMode = {}));
export class SelectComponent {
    constructor() {
        this.mode = ESelectMode.LIGHT;
        this.errorMessages = {};
        this.hint = '';
        this.label = '';
        this.options = [];
        this.placeholder = '';
        this.required = false;
        this.multiple = false;
        this.hideAssistiveText = false;
        this.selectionChange = new EventEmitter();
        this._disabled = false;
        this.formControl = new FormControl('');
        this.onChange = () => { };
        this.onTouch = () => { };
        /**
         * Computed signal returning the CSS classes for the select panel.
         * Ensures base and mode classes are always applied, avoiding race conditions in Firefox.
         */
        this.panelClass = computed(() => ['admin-select-panel', this.mode]);
        /**
       * Map that stores the tooltip disabled state for each select option.
       * The key is the index of the option and the value is a boolean indicating whether the tooltip is disabled.
       */
        this.tooltipDisabledMap = new Map();
    }
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
    set validators(validatorFns) {
        const validators = [...validatorFns];
        if (this.required) {
            validators.push(Validators.required);
        }
        this.formControl.setValidators(validators);
        this.formControl.updateValueAndValidity();
    }
    // begin: methods for ControlValueAccessor implementation
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(value) {
        this.value = value;
        this.formControl.setValue(value, { emitEvent: false });
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
    onClosed() {
        this.onTouch();
    }
    onBlur() {
        this.onTouch();
    }
    onSelectionChange(event) {
        this.value = event.value;
        this.onChange(this.value);
        this.onTouch();
        this.selectionChange.emit(event);
    }
    // end: methods for ControlValueAccessor implementation
    /**
   * Method executed when the select panel is opened.
   * Checks for overflow in the select options after a short delay.
   * This is used to determine whether a tooltip should be shown or not.
   */
    onOpened() {
        setTimeout(() => {
            this.checkOverflow();
        }, 100);
    }
    /**
   * Method that checks for overflow in the select options.
   * This is used to determine whether a tooltip should be shown or not.
   */
    checkOverflow() {
        if (this.optionElements) {
            this.optionElements.forEach((optionElement, index) => {
                const element = optionElement.nativeElement;
                this.tooltipDisabledMap.set(index, element.scrollWidth <= element.clientWidth);
            });
        }
    }
    /**
   * Method that checks if the tooltip should be disabled for a given option.
   * This is used to determine whether a tooltip should be shown or not.
   */
    isTooltipDisabled(index) {
        return this.tooltipDisabledMap.get(index) || false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: SelectComponent, isStandalone: true, selector: "admin-select", inputs: { disabled: "disabled", mode: "mode", errorMessages: "errorMessages", hint: "hint", label: "label", options: "options", placeholder: "placeholder", required: "required", multiple: ["multiple", "multiple", booleanAttribute], hideAssistiveText: ["hideAssistiveText", "hideAssistiveText", booleanAttribute], validators: "validators" }, outputs: { selectionChange: "selectionChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectComponent,
                multi: true
            }
        ], viewQueries: [{ propertyName: "optionElements", predicate: ["optionElement"], descendants: true }], ngImport: i0, template: "<mat-form-field class=\"admin-select {{mode}}\" [class.hide-assistive-text]=\"hideAssistiveText\" adjustPanelHeight>\n  <mat-label>{{ label }}</mat-label>\n  <mat-select\n    [formControl]=\"formControl\"\n    hideSingleSelectionIndicator\n    [panelClass]=\"panelClass()\"\n    [placeholder]=\"placeholder\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [multiple]=\"multiple\"\n    (selectionChange)=\"onSelectionChange($event)\"\n    (opened)=\"onOpened()\"\n    (closed)=\"onClosed()\"\n    (blur)=\"onBlur()\">\n    @for(option of options; track option.value; let i = $index) {\n      <mat-option [value]=\"option.value\" [disabled]=\"option.disabled\">\n        <span\n          #optionElement\n          [matTooltip]=\"option.viewValue\"\n          [matTooltipDisabled]=\"isTooltipDisabled(i)\"\n          class=\"admin-select-option-text\">\n          {{ option.viewValue }}\n        </span>\n      </mat-option>\n    }\n  </mat-select>\n  <mat-hint>{{ hint }}</mat-hint>\n  @if(hasError()) {\n    <mat-error>\n      {{ getErrorMessage() }}\n    </mat-error>\n  }\n</mat-form-field>\n", styles: ["mat-form-field.admin-select{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;line-height:18px;width:100%}mat-form-field.admin-select .mat-mdc-text-field-wrapper{height:48px}mat-form-field.admin-select .mat-mdc-text-field-wrapper .mat-mdc-form-field-focus-overlay{opacity:0}mat-form-field.admin-select .mat-mdc-form-field-subscript-wrapper .mat-mdc-form-field-error-wrapper .mat-mdc-form-field-error{color:#dd1839}mat-form-field.admin-select .mat-mdc-form-field-flex{height:100%}mat-form-field.admin-select :hover .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-select .mat-mdc-form-field-infix{padding:20px 0 8px;line-height:24px}mat-form-field.admin-select .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-select .mat-mdc-form-field-infix .mat-mdc-select{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--text-color)}mat-form-field.admin-select .mat-mdc-form-field-infix .mat-mdc-select .mat-mdc-select-arrow{color:var(--icon-color)}mat-form-field.admin-select .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:24px}mat-form-field.admin-select .mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--filled.mdc-text-field--invalid{border:1px solid #dd1839;border-bottom-right-radius:4px;border-bottom-left-radius:4px}mat-form-field.admin-select .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:72px}mat-form-field.admin-select .mdc-text-field--filled{border-bottom-left-radius:4px;border-bottom-right-radius:4px}mat-form-field.admin-select .mdc-text-field--filled .mdc-floating-label{font-family:RobotoRegular,sans-serif;font-style:normal;font-weight:400;line-height:normal;margin:0;font-size:14px}mat-form-field.admin-select .mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--input-background);border:1px solid var(--border)}mat-form-field.admin-select .mdc-text-field--filled:not(.mdc-text-field--disabled):hover{border-color:var(--color-accent)}mat-form-field.admin-select .mdc-text-field--filled.mdc-text-field--disabled{border:1px solid var(--border);opacity:.5}mat-form-field.admin-select .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused{background-color:var(--input-background);border:1px solid var(--color-accent)}mat-form-field.admin-select .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--color-accent)}mat-form-field.admin-select .mdc-line-ripple{display:none}mat-form-field.admin-select .mat-mdc-input-element.mat-mdc-form-field-input-control.mdc-text-field__input.cdk-text-field-autofill-monitored{line-height:18px}mat-form-field.admin-select .mat-mdc-form-field-hint{color:var(--hint-color);font-family:RobotoRegular,sans-serif;font-size:12px}mat-form-field.admin-select.light{--input-background: #ffffff;--border: #d4d4d4;--label-color: #999999;--hint-color: #5c5c5c;--text-color: #1a1a1a;--icon-color: #1a1a1a;--color-accent: #2239c2}mat-form-field.admin-select.dark{--input-background: #3e3e3e;--border: #3e3e3e;--label-color: #999999;--hint-color: #eeeeee;--text-color: #ffffff;--icon-color: #ffffff;--color-accent: #93a0ec}mat-form-field.admin-select.hide-assistive-text .mat-mdc-form-field-subscript-wrapper{display:none}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel{background-color:var(--panel-background);border:1px solid var(--panel-border);border-radius:4px;box-shadow:none}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-mdc-option.mdc-list-item .mdc-list-item__primary-text{color:#5c5c5c;font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:20px;margin:0;color:var(--panel-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-mdc-option.mdc-list-item .admin-select-option-text{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-pseudo-checkbox{width:16px;height:16px}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-pseudo-checkbox-full{border-color:var(--border-color)}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked{background-color:#2239c2;border-color:#2239c2}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked:after{width:9px;height:3px}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel.light{--border-color: #b8b8b8;--panel-background: #ffffff;--panel-border: #d4d4d4;--panel-text-color: #1a1a1a}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel.dark{--border-color: #5c5c5c;--panel-background: #2A2A2A;--panel-border: #3e3e3e;--panel-text-color: #ffffff}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i4.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: AdjustPanelHeightDirective, selector: "mat-form-field[adjustPanelHeight]" }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-select', standalone: true, imports: [
                        CommonModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatInputModule,
                        MatTooltipModule,
                        FormsModule,
                        ReactiveFormsModule,
                        AdjustPanelHeightDirective,
                    ], encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: SelectComponent,
                            multi: true
                        }
                    ], template: "<mat-form-field class=\"admin-select {{mode}}\" [class.hide-assistive-text]=\"hideAssistiveText\" adjustPanelHeight>\n  <mat-label>{{ label }}</mat-label>\n  <mat-select\n    [formControl]=\"formControl\"\n    hideSingleSelectionIndicator\n    [panelClass]=\"panelClass()\"\n    [placeholder]=\"placeholder\"\n    [required]=\"required\"\n    [disabled]=\"disabled\"\n    [multiple]=\"multiple\"\n    (selectionChange)=\"onSelectionChange($event)\"\n    (opened)=\"onOpened()\"\n    (closed)=\"onClosed()\"\n    (blur)=\"onBlur()\">\n    @for(option of options; track option.value; let i = $index) {\n      <mat-option [value]=\"option.value\" [disabled]=\"option.disabled\">\n        <span\n          #optionElement\n          [matTooltip]=\"option.viewValue\"\n          [matTooltipDisabled]=\"isTooltipDisabled(i)\"\n          class=\"admin-select-option-text\">\n          {{ option.viewValue }}\n        </span>\n      </mat-option>\n    }\n  </mat-select>\n  <mat-hint>{{ hint }}</mat-hint>\n  @if(hasError()) {\n    <mat-error>\n      {{ getErrorMessage() }}\n    </mat-error>\n  }\n</mat-form-field>\n", styles: ["mat-form-field.admin-select{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;line-height:18px;width:100%}mat-form-field.admin-select .mat-mdc-text-field-wrapper{height:48px}mat-form-field.admin-select .mat-mdc-text-field-wrapper .mat-mdc-form-field-focus-overlay{opacity:0}mat-form-field.admin-select .mat-mdc-form-field-subscript-wrapper .mat-mdc-form-field-error-wrapper .mat-mdc-form-field-error{color:#dd1839}mat-form-field.admin-select .mat-mdc-form-field-flex{height:100%}mat-form-field.admin-select :hover .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-select .mat-mdc-form-field-infix{padding:20px 0 8px;line-height:24px}mat-form-field.admin-select .mat-mdc-form-field-infix .mdc-floating-label.mat-mdc-floating-label{color:var(--label-color)}mat-form-field.admin-select .mat-mdc-form-field-infix .mat-mdc-select{font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:normal;margin:0;color:var(--text-color)}mat-form-field.admin-select .mat-mdc-form-field-infix .mat-mdc-select .mat-mdc-select-arrow{color:var(--icon-color)}mat-form-field.admin-select .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:24px}mat-form-field.admin-select .mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--filled.mdc-text-field--invalid{border:1px solid #dd1839;border-bottom-right-radius:4px;border-bottom-left-radius:4px}mat-form-field.admin-select .mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:72px}mat-form-field.admin-select .mdc-text-field--filled{border-bottom-left-radius:4px;border-bottom-right-radius:4px}mat-form-field.admin-select .mdc-text-field--filled .mdc-floating-label{font-family:RobotoRegular,sans-serif;font-style:normal;font-weight:400;line-height:normal;margin:0;font-size:14px}mat-form-field.admin-select .mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--input-background);border:1px solid var(--border)}mat-form-field.admin-select .mdc-text-field--filled:not(.mdc-text-field--disabled):hover{border-color:var(--color-accent)}mat-form-field.admin-select .mdc-text-field--filled.mdc-text-field--disabled{border:1px solid var(--border);opacity:.5}mat-form-field.admin-select .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused{background-color:var(--input-background);border:1px solid var(--color-accent)}mat-form-field.admin-select .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid).mdc-text-field--focused .mdc-floating-label--float-above{color:var(--color-accent)}mat-form-field.admin-select .mdc-line-ripple{display:none}mat-form-field.admin-select .mat-mdc-input-element.mat-mdc-form-field-input-control.mdc-text-field__input.cdk-text-field-autofill-monitored{line-height:18px}mat-form-field.admin-select .mat-mdc-form-field-hint{color:var(--hint-color);font-family:RobotoRegular,sans-serif;font-size:12px}mat-form-field.admin-select.light{--input-background: #ffffff;--border: #d4d4d4;--label-color: #999999;--hint-color: #5c5c5c;--text-color: #1a1a1a;--icon-color: #1a1a1a;--color-accent: #2239c2}mat-form-field.admin-select.dark{--input-background: #3e3e3e;--border: #3e3e3e;--label-color: #999999;--hint-color: #eeeeee;--text-color: #ffffff;--icon-color: #ffffff;--color-accent: #93a0ec}mat-form-field.admin-select.hide-assistive-text .mat-mdc-form-field-subscript-wrapper{display:none}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel{background-color:var(--panel-background);border:1px solid var(--panel-border);border-radius:4px;box-shadow:none}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-mdc-option.mdc-list-item .mdc-list-item__primary-text{color:#5c5c5c;font-family:RobotoRegular,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:20px;margin:0;color:var(--panel-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-mdc-option.mdc-list-item .admin-select-option-text{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-pseudo-checkbox{width:16px;height:16px}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-pseudo-checkbox-full{border-color:var(--border-color)}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked{background-color:#2239c2;border-color:#2239c2}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel .mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked:after{width:9px;height:3px}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel.light{--border-color: #b8b8b8;--panel-background: #ffffff;--panel-border: #d4d4d4;--panel-text-color: #1a1a1a}.cdk-overlay-pane div.mat-mdc-select-panel.admin-select-panel.dark{--border-color: #5c5c5c;--panel-background: #2A2A2A;--panel-border: #3e3e3e;--panel-text-color: #ffffff}\n"] }]
        }], propDecorators: { optionElements: [{
                type: ViewChildren,
                args: ['optionElement']
            }], disabled: [{
                type: Input
            }], mode: [{
                type: Input
            }], errorMessages: [{
                type: Input
            }], hint: [{
                type: Input
            }], label: [{
                type: Input
            }], options: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], required: [{
                type: Input
            }], multiple: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hideAssistiveText: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], validators: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9mb3Jtcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9mb3Jtcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0osT0FBTyxFQUF3QixXQUFXLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFlLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pKLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7O0FBRTdFLE1BQU0sQ0FBTixJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDckIsOEJBQWUsQ0FBQTtJQUNmLDRCQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsV0FBVyxLQUFYLFdBQVcsUUFHdEI7QUFpQ0QsTUFBTSxPQUFPLGVBQWU7SUF6QjVCO1FBeUNVLFNBQUksR0FBZ0IsV0FB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LGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLGVBQWU7Z0JBQzVCLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiw4SEMxQ0gsdWxDQWlDQSwyaUtEVEksWUFBWSw4QkFDWixrQkFBa0IsK2RBQ2xCLGVBQWUsbXJCQUNmLGNBQWMsOEJBQ2QsZ0JBQWdCLDRUQUNoQixXQUFXLG1XQUNYLG1CQUFtQixrTkFDbkIsMEJBQTBCOzs0RkFjakIsZUFBZTtrQkF6QjNCLFNBQVM7K0JBQ0UsY0FBYyxjQUNaLElBQUksV0FDUDt3QkFDUCxZQUFZO3dCQUNaLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLDBCQUEwQjtxQkFDM0IsaUJBR2MsaUJBQWlCLENBQUMsSUFBSSxhQUMxQjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLGlCQUFpQjs0QkFDNUIsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7OEJBSzhCLGNBQWM7c0JBQTVDLFlBQVk7dUJBQUMsZUFBZTtnQkFHekIsUUFBUTtzQkFEWCxLQUFLO2dCQVlFLElBQUk7c0JBQVosS0FBSztnQkFDSSxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDa0MsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxpQkFBaUI7c0JBQXhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBRWxDLFVBQVU7c0JBRGIsS0FBSztnQkFVSSxlQUFlO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENvbXBvbmVudCwgY29tcHV0ZWQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIEZvcm1zTW9kdWxlLCBOR19WQUxVRV9BQ0NFU1NPUiwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0Q2hhbmdlLCBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgQWRqdXN0UGFuZWxIZWlnaHREaXJlY3RpdmUgfSBmcm9tICcuL2FkanVzdC1wYW5lbC1oZWlnaHQuZGlyZWN0aXZlJztcblxuZXhwb3J0IGVudW0gRVNlbGVjdE1vZGUge1xuICBMSUdIVCA9ICdsaWdodCcsXG4gIERBUksgPSAnZGFyaydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0T3B0aW9uIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkbWluLXNlbGVjdCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQWRqdXN0UGFuZWxIZWlnaHREaXJlY3RpdmUsXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5zY3NzJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogU2VsZWN0Q29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQFZpZXdDaGlsZHJlbignb3B0aW9uRWxlbWVudCcpIG9wdGlvbkVsZW1lbnRzITogUXVlcnlMaXN0PEVsZW1lbnRSZWY8SFRNTFNwYW5FbGVtZW50Pj47XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cdEBJbnB1dCgpIG1vZGU6IEVTZWxlY3RNb2RlID0gRVNlbGVjdE1vZGUuTElHSFQ7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgQElucHV0KCkgaGludCA9ICcnO1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSBvcHRpb25zOiBJU2VsZWN0T3B0aW9uW10gPSBbXTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIG11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBoaWRlQXNzaXN0aXZlVGV4dCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgdmFsaWRhdG9ycyh2YWxpZGF0b3JGbnM6IFZhbGlkYXRvckZuW10pIHtcbiAgICBjb25zdCB2YWxpZGF0b3JzID0gWy4uLnZhbGlkYXRvckZuc107XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICB9XG4gICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuICAgIHRoaXMuZm9ybUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0U2VsZWN0Q2hhbmdlPigpO1xuXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHt9O1xuICBvblRvdWNoOiBhbnkgPSAoKSA9PiB7fTtcbiAgdmFsdWUhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbXB1dGVkIHNpZ25hbCByZXR1cm5pbmcgdGhlIENTUyBjbGFzc2VzIGZvciB0aGUgc2VsZWN0IHBhbmVsLlxuICAgKiBFbnN1cmVzIGJhc2UgYW5kIG1vZGUgY2xhc3NlcyBhcmUgYWx3YXlzIGFwcGxpZWQsIGF2b2lkaW5nIHJhY2UgY29uZGl0aW9ucyBpbiBGaXJlZm94LlxuICAgKi9cbiAgcGFuZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IFsnYWRtaW4tc2VsZWN0LXBhbmVsJywgdGhpcy5tb2RlXSk7XG5cblx0LyoqXG4gICAqIE1hcCB0aGF0IHN0b3JlcyB0aGUgdG9vbHRpcCBkaXNhYmxlZCBzdGF0ZSBmb3IgZWFjaCBzZWxlY3Qgb3B0aW9uLlxuICAgKiBUaGUga2V5IGlzIHRoZSBpbmRleCBvZiB0aGUgb3B0aW9uIGFuZCB0aGUgdmFsdWUgaXMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgdG9vbHRpcCBpcyBkaXNhYmxlZC5cbiAgICovXG5cdHRvb2x0aXBEaXNhYmxlZE1hcDogTWFwPG51bWJlciwgYm9vbGVhbj4gPSBuZXcgTWFwKCk7XG5cbiAgLy8gYmVnaW46IG1ldGhvZHMgZm9yIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gIH1cblxuICBnZXRFcnJvck1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmZvcm1Db250cm9sLmVycm9ycztcbiAgICBpZiAoZXJyb3JzKSB7XG4gICAgICBjb25zdCBmaXJzdEVycm9yID0gT2JqZWN0LmtleXMoZXJyb3JzKVswXTtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZXNbZmlyc3RFcnJvcl0gfHwgJyc7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm1Db250cm9sLnRvdWNoZWQgJiYgdGhpcy5mb3JtQ29udHJvbC5pbnZhbGlkO1xuICB9XG5cbiAgb25DbG9zZWQoKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gIH1cblxuICBvblNlbGVjdGlvbkNoYW5nZShldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IGV2ZW50LnZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5vblRvdWNoKCk7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cbiAgLy8gZW5kOiBtZXRob2RzIGZvciBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvblxuXG5cdC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgc2VsZWN0IHBhbmVsIGlzIG9wZW5lZC5cbiAgICogQ2hlY2tzIGZvciBvdmVyZmxvdyBpbiB0aGUgc2VsZWN0IG9wdGlvbnMgYWZ0ZXIgYSBzaG9ydCBkZWxheS5cbiAgICogVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGEgdG9vbHRpcCBzaG91bGQgYmUgc2hvd24gb3Igbm90LlxuICAgKi9cblx0b25PcGVuZWQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9LCAxMDApO1xuICB9XG5cblx0LyoqXG4gICAqIE1ldGhvZCB0aGF0IGNoZWNrcyBmb3Igb3ZlcmZsb3cgaW4gdGhlIHNlbGVjdCBvcHRpb25zLlxuICAgKiBUaGlzIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSB0b29sdGlwIHNob3VsZCBiZSBzaG93biBvciBub3QuXG4gICAqL1xuXHRjaGVja092ZXJmbG93KCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbkVsZW1lbnRzKSB7XG5cdFx0XHR0aGlzLm9wdGlvbkVsZW1lbnRzLmZvckVhY2goKG9wdGlvbkVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBvcHRpb25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cdFx0XHRcdHRoaXMudG9vbHRpcERpc2FibGVkTWFwLnNldChpbmRleCwgZWxlbWVudC5zY3JvbGxXaWR0aCA8PSBlbGVtZW50LmNsaWVudFdpZHRoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAgKiBNZXRob2QgdGhhdCBjaGVja3MgaWYgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGRpc2FibGVkIGZvciBhIGdpdmVuIG9wdGlvbi5cbiAgICogVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGEgdG9vbHRpcCBzaG91bGQgYmUgc2hvd24gb3Igbm90LlxuICAgKi9cbiAgaXNUb29sdGlwRGlzYWJsZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvb2x0aXBEaXNhYmxlZE1hcC5nZXQoaW5kZXgpIHx8IGZhbHNlO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJhZG1pbi1zZWxlY3Qge3ttb2RlfX1cIiBbY2xhc3MuaGlkZS1hc3Npc3RpdmUtdGV4dF09XCJoaWRlQXNzaXN0aXZlVGV4dFwiIGFkanVzdFBhbmVsSGVpZ2h0PlxuICA8bWF0LWxhYmVsPnt7IGxhYmVsIH19PC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0XG4gICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcbiAgICBoaWRlU2luZ2xlU2VsZWN0aW9uSW5kaWNhdG9yXG4gICAgW3BhbmVsQ2xhc3NdPVwicGFuZWxDbGFzcygpXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIlxuICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgKG9wZW5lZCk9XCJvbk9wZW5lZCgpXCJcbiAgICAoY2xvc2VkKT1cIm9uQ2xvc2VkKClcIlxuICAgIChibHVyKT1cIm9uQmx1cigpXCI+XG4gICAgQGZvcihvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2sgb3B0aW9uLnZhbHVlOyBsZXQgaSA9ICRpbmRleCkge1xuICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiIFtkaXNhYmxlZF09XCJvcHRpb24uZGlzYWJsZWRcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAjb3B0aW9uRWxlbWVudFxuICAgICAgICAgIFttYXRUb29sdGlwXT1cIm9wdGlvbi52aWV3VmFsdWVcIlxuICAgICAgICAgIFttYXRUb29sdGlwRGlzYWJsZWRdPVwiaXNUb29sdGlwRGlzYWJsZWQoaSlcIlxuICAgICAgICAgIGNsYXNzPVwiYWRtaW4tc2VsZWN0LW9wdGlvbi10ZXh0XCI+XG4gICAgICAgICAge3sgb3B0aW9uLnZpZXdWYWx1ZSB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgfVxuICA8L21hdC1zZWxlY3Q+XG4gIDxtYXQtaGludD57eyBoaW50IH19PC9tYXQtaGludD5cbiAgQGlmKGhhc0Vycm9yKCkpIHtcbiAgICA8bWF0LWVycm9yPlxuICAgICAge3sgZ2V0RXJyb3JNZXNzYWdlKCkgfX1cbiAgICA8L21hdC1lcnJvcj5cbiAgfVxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==
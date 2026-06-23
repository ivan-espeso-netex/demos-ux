import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, forwardRef, Input, input, model, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EIconName, IconComponent } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
export var ESearchboxMode;
(function (ESearchboxMode) {
    ESearchboxMode["LIGHT"] = "light";
    ESearchboxMode["DARK"] = "dark";
})(ESearchboxMode || (ESearchboxMode = {}));
let nextUniqueId = 0;
const selector = 'admin-searchbox';
export class SearchboxComponent {
    constructor() {
        this.id = input(`${selector}-${nextUniqueId++}`);
        this.label = input('Search');
        this.value = model('');
        this.placeholder = input('Search');
        this.disabled = false;
        this.mode = ESearchboxMode.LIGHT;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.ESearchboxMode = ESearchboxMode;
        this.EIconName = EIconName;
    }
    writeValue(value) {
        this.value.set(value);
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
    updateValue(val) {
        if (!this.disabled && val !== this.value()) {
            this.writeValue(val);
            this.onChange(val);
            this.onTouched();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SearchboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: SearchboxComponent, isStandalone: true, selector: "admin-searchbox", inputs: { id: { classPropertyName: "id", publicName: "id", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, mode: { classPropertyName: "mode", publicName: "mode", isSignal: false, isRequired: false, transformFunction: null } }, outputs: { value: "valueChange" }, host: { attributes: { "id": "" }, properties: { "class.disabled": "disabled" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SearchboxComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"admin-searchbox {{mode}}\">\n  <admin-icon tabindex=\"-1\" (click)=\"updateValue(input.value)\" [icon]=\"EIconName.SEARCH\"></admin-icon>\n  <label class=\"sr-only\" [for]=\"id()\">{{ label() }}</label>\n  <input\n    #input\n    (blur)=\"onTouched()\"\n    (change)=\"updateValue(input.value)\"\n    (keyup.enter)=\"updateValue(input.value)\"\n    (keyup.escape)=\"updateValue('')\"\n    [id]=\"id()\"\n    [placeholder]=\"placeholder()\"\n    [value]=\"value()\"\n    type=\"text\"\n    [disabled]=\"disabled\"\n  />\n  @if (value()) {\n    <admin-icon tabindex=\"-1\" (click)=\"updateValue('')\" [icon]=\"EIconName.CLOSE\"></admin-icon>\n  }\n</div>\n", styles: [".admin-searchbox{align-items:center;background-color:var(--input-background-color);block-size:40px;border-radius:64px;border:1px solid var(--input-border-color);box-sizing:border-box;display:inline-flex;font-family:RobotoRegular;font-size:14px;font-weight:400;gap:4px;min-inline-size:300px;padding-block:8px;padding-inline:16px}.admin-searchbox admin-icon .admin-icon.mat-icon.mat-primary{color:var(--input-placeholder-color)}.admin-searchbox input{background-color:transparent;color:var(--input-text-color);font:inherit;flex-grow:1;flex-shrink:0;line-height:18px;appearance:none;border:none;outline:none}.admin-searchbox input::placeholder{color:var(--input-placeholder-color);opacity:1}.admin-searchbox.disabled{cursor:not-allowed;opacity:.5}.admin-searchbox.disabled>input,.admin-searchbox.disabled>mat-icon{cursor:inherit}.admin-searchbox:not(.disabled):hover,.admin-searchbox:not(.disabled):focus-within{border-color:var(--color-accent)}.admin-searchbox .sr-only{block-size:1px;border:0;clip:rect(0,0,0,0);inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute}.admin-searchbox.light{--input-background-color: #ffffff;--input-border-color: #d4d4d4;--input-text-color: #1a1a1a;--input-placeholder-color: #999999;--color-accent: #2239c2}.admin-searchbox.dark{--input-background-color: #3e3e3e;--input-border-color: #3e3e3e;--input-text-color: #ffffff;--input-placeholder-color: #999999;--color-accent: #93a0ec}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: IconComponent, selector: "admin-icon", inputs: ["fontFamily", "icon", "color", "mode"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: SearchboxComponent, decorators: [{
            type: Component,
            args: [{ selector: selector, standalone: true, imports: [
                        CommonModule,
                        MatButtonModule,
                        IconComponent
                    ], encapsulation: ViewEncapsulation.None, host: {
                        'id': '',
                        '[class.disabled]': 'disabled'
                    }, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SearchboxComponent),
                            multi: true
                        }
                    ], template: "<div class=\"admin-searchbox {{mode}}\">\n  <admin-icon tabindex=\"-1\" (click)=\"updateValue(input.value)\" [icon]=\"EIconName.SEARCH\"></admin-icon>\n  <label class=\"sr-only\" [for]=\"id()\">{{ label() }}</label>\n  <input\n    #input\n    (blur)=\"onTouched()\"\n    (change)=\"updateValue(input.value)\"\n    (keyup.enter)=\"updateValue(input.value)\"\n    (keyup.escape)=\"updateValue('')\"\n    [id]=\"id()\"\n    [placeholder]=\"placeholder()\"\n    [value]=\"value()\"\n    type=\"text\"\n    [disabled]=\"disabled\"\n  />\n  @if (value()) {\n    <admin-icon tabindex=\"-1\" (click)=\"updateValue('')\" [icon]=\"EIconName.CLOSE\"></admin-icon>\n  }\n</div>\n", styles: [".admin-searchbox{align-items:center;background-color:var(--input-background-color);block-size:40px;border-radius:64px;border:1px solid var(--input-border-color);box-sizing:border-box;display:inline-flex;font-family:RobotoRegular;font-size:14px;font-weight:400;gap:4px;min-inline-size:300px;padding-block:8px;padding-inline:16px}.admin-searchbox admin-icon .admin-icon.mat-icon.mat-primary{color:var(--input-placeholder-color)}.admin-searchbox input{background-color:transparent;color:var(--input-text-color);font:inherit;flex-grow:1;flex-shrink:0;line-height:18px;appearance:none;border:none;outline:none}.admin-searchbox input::placeholder{color:var(--input-placeholder-color);opacity:1}.admin-searchbox.disabled{cursor:not-allowed;opacity:.5}.admin-searchbox.disabled>input,.admin-searchbox.disabled>mat-icon{cursor:inherit}.admin-searchbox:not(.disabled):hover,.admin-searchbox:not(.disabled):focus-within{border-color:var(--color-accent)}.admin-searchbox .sr-only{block-size:1px;border:0;clip:rect(0,0,0,0);inline-size:1px;margin:-1px;overflow:hidden;padding:0;position:absolute}.admin-searchbox.light{--input-background-color: #ffffff;--input-border-color: #d4d4d4;--input-text-color: #1a1a1a;--input-placeholder-color: #999999;--color-accent: #2239c2}.admin-searchbox.dark{--input-background-color: #3e3e3e;--input-border-color: #3e3e3e;--input-text-color: #ffffff;--input-placeholder-color: #999999;--color-accent: #93a0ec}\n"] }]
        }], propDecorators: { disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], mode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9mb3Jtcy9zZWFyY2hib3gvc2VhcmNoYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9mb3Jtcy9zZWFyY2hib3gvc2VhcmNoYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRTNFLE1BQU0sQ0FBTixJQUFZLGNBR1g7QUFIRCxXQUFZLGNBQWM7SUFDeEIsaUNBQWUsQ0FBQTtJQUNmLCtCQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsY0FBYyxLQUFkLGNBQWMsUUFHekI7QUFFRCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDckIsTUFBTSxRQUFRLEdBQUUsaUJBQWlCLENBQUM7QUF5QmxDLE1BQU0sT0FBTyxrQkFBa0I7SUF2Qi9CO1FBeUJFLE9BQUUsR0FBRyxLQUFLLENBQVMsR0FBRyxRQUFRLElBQUksWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELFVBQUssR0FBRyxLQUFLLENBQVMsUUFBUSxDQUFDLENBQUE7UUFDL0IsVUFBSyxHQUFHLEtBQUssQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUMxQixnQkFBVyxHQUFHLEtBQUssQ0FBUyxRQUFRLENBQUMsQ0FBQztRQUNFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEQsU0FBSSxHQUFtQixjQUFjLENBQUMsS0FBSyxDQUFDO1FBRXJELGFBQVEsR0FBOEIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQy9DLGNBQVMsR0FBaUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBRW5DLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLGNBQVMsR0FBRyxTQUFTLENBQUM7S0F3QnZCO0lBdEJDLFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxFQUF1QjtRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBYTtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFXO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7SUFDSCxDQUFDOytHQW5DVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixncUJBTVQsZ0JBQWdCLDRQQWR6QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2pELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkNuQ0gsNnBCQW1CQSxpOUNEREUsWUFBWSw4QkFDWixlQUFlLCtCQUNmLGFBQWE7OzRGQWlCRixrQkFBa0I7a0JBdkI5QixTQUFTOytCQUNSLFFBQVEsY0FDSSxJQUFJLFdBQ1A7d0JBQ1QsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7cUJBQ2IsaUJBR2MsaUJBQWlCLENBQUMsSUFBSSxRQUM5Qjt3QkFDSixJQUFJLEVBQUUsRUFBRTt3QkFDUixrQkFBa0IsRUFBRSxVQUFVO3FCQUMvQixhQUNVO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDOzRCQUNqRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs4QkFRdUMsUUFBUTtzQkFBL0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDN0IsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIGlucHV0LCBtb2RlbCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBFSWNvbk5hbWUsIEljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9hdG9tcy9pY29uL2ljb24uY29tcG9uZW50JztcblxuZXhwb3J0IGVudW0gRVNlYXJjaGJveE1vZGUge1xuICBMSUdIVCA9ICdsaWdodCcsXG4gIERBUksgPSAnZGFyaydcbn1cblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5jb25zdCBzZWxlY3RvciA9J2FkbWluLXNlYXJjaGJveCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSwgXG5cdFx0TWF0QnV0dG9uTW9kdWxlLCBcblx0XHRJY29uQ29tcG9uZW50XG5cdF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2hib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2VhcmNoYm94LmNvbXBvbmVudC5zY3NzJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdpZCc6ICcnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlYXJjaGJveENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hib3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcntcblxuICBpZCA9IGlucHV0PHN0cmluZz4oYCR7c2VsZWN0b3J9LSR7bmV4dFVuaXF1ZUlkKyt9YCk7XG4gIGxhYmVsID0gaW5wdXQ8c3RyaW5nPignU2VhcmNoJylcbiAgdmFsdWUgPSBtb2RlbDxzdHJpbmc+KCcnKTtcbiAgcGxhY2Vob2xkZXIgPSBpbnB1dDxzdHJpbmc+KCdTZWFyY2gnKTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1vZGU6IEVTZWFyY2hib3hNb2RlID0gRVNlYXJjaGJveE1vZGUuTElHSFQ7XG5cbiAgb25DaGFuZ2U6ICgodmFsdWU6IHN0cmluZykgPT4gdm9pZCkgPSAoKSA9PiB7fTtcbiAgb25Ub3VjaGVkOiAoKCkgPT4gdm9pZCkgPSAoKSA9PiB7fTtcblxuICBFU2VhcmNoYm94TW9kZSA9IEVTZWFyY2hib3hNb2RlO1xuICBFSWNvbk5hbWUgPSBFSWNvbk5hbWU7XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZS5zZXQodmFsdWUpO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+dm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHZhbCAhPT0gdGhpcy52YWx1ZSgpKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodmFsKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbn0iLCI8ZGl2IGNsYXNzPVwiYWRtaW4tc2VhcmNoYm94IHt7bW9kZX19XCI+XG4gIDxhZG1pbi1pY29uIHRhYmluZGV4PVwiLTFcIiAoY2xpY2spPVwidXBkYXRlVmFsdWUoaW5wdXQudmFsdWUpXCIgW2ljb25dPVwiRUljb25OYW1lLlNFQVJDSFwiPjwvYWRtaW4taWNvbj5cbiAgPGxhYmVsIGNsYXNzPVwic3Itb25seVwiIFtmb3JdPVwiaWQoKVwiPnt7IGxhYmVsKCkgfX08L2xhYmVsPlxuICA8aW5wdXRcbiAgICAjaW5wdXRcbiAgICAoYmx1cik9XCJvblRvdWNoZWQoKVwiXG4gICAgKGNoYW5nZSk9XCJ1cGRhdGVWYWx1ZShpbnB1dC52YWx1ZSlcIlxuICAgIChrZXl1cC5lbnRlcik9XCJ1cGRhdGVWYWx1ZShpbnB1dC52YWx1ZSlcIlxuICAgIChrZXl1cC5lc2NhcGUpPVwidXBkYXRlVmFsdWUoJycpXCJcbiAgICBbaWRdPVwiaWQoKVwiXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyKClcIlxuICAgIFt2YWx1ZV09XCJ2YWx1ZSgpXCJcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgLz5cbiAgQGlmICh2YWx1ZSgpKSB7XG4gICAgPGFkbWluLWljb24gdGFiaW5kZXg9XCItMVwiIChjbGljayk9XCJ1cGRhdGVWYWx1ZSgnJylcIiBbaWNvbl09XCJFSWNvbk5hbWUuQ0xPU0VcIj48L2FkbWluLWljb24+XG4gIH1cbjwvZGl2PlxuIl19
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, effect, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { SliderComponent } from '../../atoms/slider/slider.component';
import * as i0 from "@angular/core";
export var EImageCropOutputFormat;
(function (EImageCropOutputFormat) {
    EImageCropOutputFormat["PNG"] = "png";
    EImageCropOutputFormat["JPEG"] = "jpeg";
    EImageCropOutputFormat["WEBP"] = "webp";
    EImageCropOutputFormat["BMP"] = "bmp";
    EImageCropOutputFormat["ICO"] = "ico";
})(EImageCropOutputFormat || (EImageCropOutputFormat = {}));
export var EImageCropOutputType;
(function (EImageCropOutputType) {
    EImageCropOutputType["BASE64"] = "base64";
    EImageCropOutputType["BLOB"] = "blob";
})(EImageCropOutputType || (EImageCropOutputType = {}));
export class ImageCropComponent {
    constructor() {
        this.transform = {
            translateUnit: 'px',
            scale: 1,
            rotate: 0,
            flipH: false,
            flipV: false
        };
        this.disabled = false;
        this.imageAltText = undefined;
        this.imageBase64 = undefined;
        this.imageFile = undefined;
        this.imageChangedEvent = null;
        this.imageURL = undefined;
        this.cropperWidth = 100;
        this.cropperHeight = 100;
        this.outputFormat = EImageCropOutputFormat.PNG;
        this.outputType = EImageCropOutputType.BLOB;
        this.roundCropper = false;
        this.zoomValue = input(1);
        this.minZoomValue = 1;
        this.maxZoomValue = 5;
        this.stepZoomValue = 0.1;
        this.cropperChanged = new EventEmitter();
        this.cropperReady = new EventEmitter();
        this.imageCropped = new EventEmitter();
        this.imageLoaded = new EventEmitter();
        this.loadImageFailed = new EventEmitter();
        this.zoomChangeEvent = new EventEmitter();
        this.zoomEffect = effect(() => {
            const newZoomValue = this.zoomValue();
            this.transform = {
                ...this.transform,
                scale: newZoomValue
            };
        });
    }
    onCropperChanged(event) {
        this.cropperChanged.emit(event);
    }
    onCropperReady(event) {
        this.cropperReady.emit(event);
    }
    onImageCropped(event) {
        this.imageCropped.emit(event);
    }
    onImageLoaded(event) {
        this.imageLoaded.emit(event);
    }
    onLoadImageFailed() {
        this.loadImageFailed.emit();
    }
    onZoomChange(event) {
        this.transform = {
            ...this.transform,
            scale: event
        };
        this.zoomChangeEvent.emit(event);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ImageCropComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.3.12", type: ImageCropComponent, isStandalone: true, selector: "admin-image-crop", inputs: { disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: false, isRequired: false, transformFunction: coerceBooleanProperty }, imageAltText: { classPropertyName: "imageAltText", publicName: "imageAltText", isSignal: false, isRequired: false, transformFunction: null }, imageBase64: { classPropertyName: "imageBase64", publicName: "imageBase64", isSignal: false, isRequired: false, transformFunction: null }, imageFile: { classPropertyName: "imageFile", publicName: "imageFile", isSignal: false, isRequired: false, transformFunction: null }, imageChangedEvent: { classPropertyName: "imageChangedEvent", publicName: "imageChangedEvent", isSignal: false, isRequired: false, transformFunction: null }, imageURL: { classPropertyName: "imageURL", publicName: "imageURL", isSignal: false, isRequired: false, transformFunction: null }, cropperWidth: { classPropertyName: "cropperWidth", publicName: "cropperWidth", isSignal: false, isRequired: false, transformFunction: null }, cropperHeight: { classPropertyName: "cropperHeight", publicName: "cropperHeight", isSignal: false, isRequired: false, transformFunction: null }, outputFormat: { classPropertyName: "outputFormat", publicName: "outputFormat", isSignal: false, isRequired: false, transformFunction: null }, outputType: { classPropertyName: "outputType", publicName: "outputType", isSignal: false, isRequired: false, transformFunction: null }, roundCropper: { classPropertyName: "roundCropper", publicName: "roundCropper", isSignal: false, isRequired: false, transformFunction: null }, zoomValue: { classPropertyName: "zoomValue", publicName: "zoomValue", isSignal: true, isRequired: false, transformFunction: null }, minZoomValue: { classPropertyName: "minZoomValue", publicName: "minZoomValue", isSignal: false, isRequired: false, transformFunction: null }, maxZoomValue: { classPropertyName: "maxZoomValue", publicName: "maxZoomValue", isSignal: false, isRequired: false, transformFunction: null }, stepZoomValue: { classPropertyName: "stepZoomValue", publicName: "stepZoomValue", isSignal: false, isRequired: false, transformFunction: null } }, outputs: { cropperChanged: "cropperChanged", cropperReady: "cropperReady", imageCropped: "imageCropped", imageLoaded: "imageLoaded", loadImageFailed: "loadImageFailed", zoomChangeEvent: "zoomChangeEvent" }, ngImport: i0, template: "<image-cropper\n\t[disabled]=\"disabled\"\n\t[imageAltText]=\"imageAltText\"\n\t[imageBase64]=\"imageBase64\"\n\t[imageChangedEvent]=\"imageChangedEvent\"\n\t[imageFile]=\"imageFile\"\t\n\t[imageURL]=\"imageURL\"\n\t[hideResizeSquares]=\"true\"\n\t[(transform)]=\"transform\"\n\t[cropperStaticWidth]=\"cropperWidth\"\n\t[cropperStaticHeight]=\"cropperHeight\"\n\t[containWithinAspectRatio]=false\n\t[allowMoveImage]=\"true\"\n\t[format]=\"outputFormat\"\n\t[output]=\"outputType\"\n\t[roundCropper]=\"roundCropper\"\n\t(cropperChange)=\"onCropperChanged($event)\"\n\t(imageCropped)=\"onImageCropped($event)\"\n\t(imageLoaded)=\"onImageLoaded($event)\"\n\t(cropperReady)=\"onCropperReady($event)\"\n\t(loadImageFailed)=\"onLoadImageFailed()\">\n</image-cropper>\n<admin-slider\n\t(valueChanged)=\"onZoomChange($event)\"\n\t[value]=\"zoomValue()\"\n\t[min]=\"minZoomValue\"\n\t[max]=\"maxZoomValue\"\n\t[step]=\"stepZoomValue\"\n\t[disabled]=\"disabled\">\n</admin-slider>\n", styles: [":host{display:flex;flex-direction:column;width:100%;align-items:center}image-cropper{--cropper-overlay-color: rgba(0, 0, 0, .8);--cropper-outline-color: rgba(0, 0, 0, .8);--cropper-border: 0px solid transparent;--cropper-color: transparent;padding:0;height:240px}image-cropper.disabled{cursor:not-allowed}admin-slider{display:inline-block;width:300px;margin-inline:auto}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "component", type: ImageCropperComponent, selector: "image-cropper", inputs: ["imageChangedEvent", "imageURL", "imageBase64", "imageFile", "imageAltText", "options", "cropperFrameAriaLabel", "output", "format", "autoCrop", "cropper", "transform", "maintainAspectRatio", "aspectRatio", "resetCropOnAspectRatioChange", "resizeToWidth", "resizeToHeight", "cropperMinWidth", "cropperMinHeight", "cropperMaxHeight", "cropperMaxWidth", "cropperStaticWidth", "cropperStaticHeight", "canvasRotation", "initialStepSize", "roundCropper", "onlyScaleDown", "imageQuality", "backgroundColor", "containWithinAspectRatio", "hideResizeSquares", "allowMoveImage", "checkImageType", "alignImage", "disabled", "hidden"], outputs: ["imageCropped", "startCropImage", "imageLoaded", "cropperReady", "loadImageFailed", "transformChange", "cropperChange"] }, { kind: "ngmodule", type: FormsModule }, { kind: "component", type: SliderComponent, selector: "admin-slider", inputs: ["disabled", "max", "min", "step", "value", "mode"], outputs: ["valueChanged"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ImageCropComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-image-crop', standalone: true, imports: [CommonModule, ImageCropperComponent, FormsModule, SliderComponent], template: "<image-cropper\n\t[disabled]=\"disabled\"\n\t[imageAltText]=\"imageAltText\"\n\t[imageBase64]=\"imageBase64\"\n\t[imageChangedEvent]=\"imageChangedEvent\"\n\t[imageFile]=\"imageFile\"\t\n\t[imageURL]=\"imageURL\"\n\t[hideResizeSquares]=\"true\"\n\t[(transform)]=\"transform\"\n\t[cropperStaticWidth]=\"cropperWidth\"\n\t[cropperStaticHeight]=\"cropperHeight\"\n\t[containWithinAspectRatio]=false\n\t[allowMoveImage]=\"true\"\n\t[format]=\"outputFormat\"\n\t[output]=\"outputType\"\n\t[roundCropper]=\"roundCropper\"\n\t(cropperChange)=\"onCropperChanged($event)\"\n\t(imageCropped)=\"onImageCropped($event)\"\n\t(imageLoaded)=\"onImageLoaded($event)\"\n\t(cropperReady)=\"onCropperReady($event)\"\n\t(loadImageFailed)=\"onLoadImageFailed()\">\n</image-cropper>\n<admin-slider\n\t(valueChanged)=\"onZoomChange($event)\"\n\t[value]=\"zoomValue()\"\n\t[min]=\"minZoomValue\"\n\t[max]=\"maxZoomValue\"\n\t[step]=\"stepZoomValue\"\n\t[disabled]=\"disabled\">\n</admin-slider>\n", styles: [":host{display:flex;flex-direction:column;width:100%;align-items:center}image-cropper{--cropper-overlay-color: rgba(0, 0, 0, .8);--cropper-outline-color: rgba(0, 0, 0, .8);--cropper-border: 0px solid transparent;--cropper-color: transparent;padding:0;height:240px}image-cropper.disabled{cursor:not-allowed}admin-slider{display:inline-block;width:300px;margin-inline:auto}\n"] }]
        }], propDecorators: { disabled: [{
                type: Input,
                args: [{ transform: coerceBooleanProperty }]
            }], imageAltText: [{
                type: Input
            }], imageBase64: [{
                type: Input
            }], imageFile: [{
                type: Input
            }], imageChangedEvent: [{
                type: Input
            }], imageURL: [{
                type: Input
            }], cropperWidth: [{
                type: Input
            }], cropperHeight: [{
                type: Input
            }], outputFormat: [{
                type: Input
            }], outputType: [{
                type: Input
            }], roundCropper: [{
                type: Input
            }], minZoomValue: [{
                type: Input
            }], maxZoomValue: [{
                type: Input
            }], stepZoomValue: [{
                type: Input
            }], cropperChanged: [{
                type: Output
            }], cropperReady: [{
                type: Output
            }], imageCropped: [{
                type: Output
            }], imageLoaded: [{
                type: Output
            }], loadImageFailed: [{
                type: Output
            }], zoomChangeEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvZm9ybXMvaW1hZ2UtY3JvcC9pbWFnZS1jcm9wLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9mb3Jtcy9pbWFnZS1jcm9wL2ltYWdlLWNyb3AuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFrRCxxQkFBcUIsRUFBK0IsTUFBTSxtQkFBbUIsQ0FBQztBQUN2SSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBRXRFLE1BQU0sQ0FBTixJQUFZLHNCQU1YO0FBTkQsV0FBWSxzQkFBc0I7SUFDakMscUNBQVcsQ0FBQTtJQUNYLHVDQUFhLENBQUE7SUFDYix1Q0FBYSxDQUFBO0lBQ2IscUNBQVcsQ0FBQTtJQUNYLHFDQUFXLENBQUE7QUFDWixDQUFDLEVBTlcsc0JBQXNCLEtBQXRCLHNCQUFzQixRQU1qQztBQUVELE1BQU0sQ0FBTixJQUFZLG9CQUdYO0FBSEQsV0FBWSxvQkFBb0I7SUFDL0IseUNBQWlCLENBQUE7SUFDakIscUNBQWEsQ0FBQTtBQUNkLENBQUMsRUFIVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBRy9CO0FBUUQsTUFBTSxPQUFP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Szt1QkFBQyxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRTtnQkFDbEMsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUVHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNJLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0csWUFBWTtzQkFBckIsTUFBTTtnQkFDRyxZQUFZO3NCQUFyQixNQUFNO2dCQUNHLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxlQUFlO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgZWZmZWN0LCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDcm9wcGVyUG9zaXRpb24sIERpbWVuc2lvbnMsIEltYWdlQ3JvcHBlZEV2ZW50LCBJbWFnZUNyb3BwZXJDb21wb25lbnQsIEltYWdlVHJhbnNmb3JtLCBMb2FkZWRJbWFnZSB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcbmltcG9ydCB7IFNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2F0b21zL3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGVudW0gRUltYWdlQ3JvcE91dHB1dEZvcm1hdCB7XG5cdFBORyA9ICdwbmcnLFxuXHRKUEVHID0gJ2pwZWcnLFxuXHRXRUJQID0gJ3dlYnAnLFxuXHRCTVAgPSAnYm1wJyxcblx0SUNPID0gJ2ljbycsXG59XG5cbmV4cG9ydCBlbnVtIEVJbWFnZUNyb3BPdXRwdXRUeXBlIHtcblx0QkFTRTY0ID0gJ2Jhc2U2NCcsXG5cdEJMT0IgPSAnYmxvYidcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkbWluLWltYWdlLWNyb3AnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJbWFnZUNyb3BwZXJDb21wb25lbnQsIEZvcm1zTW9kdWxlLCBTbGlkZXJDb21wb25lbnRdLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtY3JvcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9pbWFnZS1jcm9wLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNyb3BDb21wb25lbnQge1xuXHRcblx0dHJhbnNmb3JtOiBJbWFnZVRyYW5zZm9ybSA9IHtcblx0XHR0cmFuc2xhdGVVbml0OiAncHgnLFxuXHRcdHNjYWxlOiAxLFxuXHRcdHJvdGF0ZTogMCxcblx0XHRmbGlwSDogZmFsc2UsXG5cdFx0ZmxpcFY6IGZhbHNlXG5cdH07XG5cblx0QElucHV0KHsgdHJhbnNmb3JtOiBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgaW1hZ2VBbHRUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cdEBJbnB1dCgpIGltYWdlQmFzZTY0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cdEBJbnB1dCgpIGltYWdlRmlsZTogRmlsZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblx0QElucHV0KCkgaW1hZ2VDaGFuZ2VkRXZlbnQ6IEV2ZW50IHwgbnVsbCA9IG51bGw7XG5cdEBJbnB1dCgpIGltYWdlVVJMOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cdEBJbnB1dCgpIGNyb3BwZXJXaWR0aCA9IDEwMDtcblx0QElucHV0KCkgY3JvcHBlckhlaWdodCA9IDEwMDtcblx0QElucHV0KCkgb3V0cHV0Rm9ybWF0OiBFSW1hZ2VDcm9wT3V0cHV0Rm9ybWF0ID0gRUltYWdlQ3JvcE91dHB1dEZvcm1hdC5QTkc7XG5cdEBJbnB1dCgpIG91dHB1dFR5cGU6IEVJbWFnZUNyb3BPdXRwdXRUeXBlID0gRUltYWdlQ3JvcE91dHB1dFR5cGUuQkxPQjtcblx0QElucHV0KCkgcm91bmRDcm9wcGVyOiBib29sZWFuID0gZmFsc2U7XG5cdHpvb21WYWx1ZSA9IGlucHV0PG51bWJlcj4oMSk7XG5cdEBJbnB1dCgpIG1pblpvb21WYWx1ZSA9IDE7XHRcdFxuXHRASW5wdXQoKSBtYXhab29tVmFsdWUgPSA1O1xuXHRASW5wdXQoKSBzdGVwWm9vbVZhbHVlID0gMC4xO1xuXHRAT3V0cHV0KCkgY3JvcHBlckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENyb3BwZXJQb3NpdGlvbj4oKTtcblx0QE91dHB1dCgpIGNyb3BwZXJSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8RGltZW5zaW9ucz4oKTtcblx0QE91dHB1dCgpIGltYWdlQ3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VDcm9wcGVkRXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBpbWFnZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TG9hZGVkSW1hZ2U+KCk7XG5cdEBPdXRwdXQoKSBsb2FkSW1hZ2VGYWlsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cdEBPdXRwdXQoKSB6b29tQ2hhbmdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRcblx0cHJpdmF0ZSB6b29tRWZmZWN0ID0gZWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBuZXdab29tVmFsdWUgPSB0aGlzLnpvb21WYWx1ZSgpO1xuXHRcdHRoaXMudHJhbnNmb3JtID0ge1xuXHRcdFx0Li4udGhpcy50cmFuc2Zvcm0sXG5cdFx0XHRzY2FsZTogbmV3Wm9vbVZhbHVlXG5cdFx0fTtcblx0fSk7XG5cblx0b25Dcm9wcGVyQ2hhbmdlZChldmVudDogQ3JvcHBlclBvc2l0aW9uKSB7XG5cdFx0dGhpcy5jcm9wcGVyQ2hhbmdlZC5lbWl0KGV2ZW50KTtcblx0fVxuXG5cdG9uQ3JvcHBlclJlYWR5KGV2ZW50OiBEaW1lbnNpb25zKSB7XG5cdFx0dGhpcy5jcm9wcGVyUmVhZHkuZW1pdChldmVudCk7XG5cdH1cblxuXHRvbkltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQpIHtcblx0XHR0aGlzLmltYWdlQ3JvcHBlZC5lbWl0KGV2ZW50KTtcblx0fVxuXG5cdG9uSW1hZ2VMb2FkZWQoZXZlbnQ6IExvYWRlZEltYWdlKSB7XG5cdFx0dGhpcy5pbWFnZUxvYWRlZC5lbWl0KGV2ZW50KTtcblx0fVxuXG5cdG9uTG9hZEltYWdlRmFpbGVkKCkge1xuXHRcdHRoaXMubG9hZEltYWdlRmFpbGVkLmVtaXQoKTtcblx0fVxuXG5cdG9uWm9vbUNoYW5nZShldmVudDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy50cmFuc2Zvcm0gPSB7XG5cdFx0XHQuLi50aGlzLnRyYW5zZm9ybSxcblx0XHRcdHNjYWxlOiBldmVudFxuXHRcdH07XG5cdFx0dGhpcy56b29tQ2hhbmdlRXZlbnQuZW1pdChldmVudCk7XG5cdH1cblxufVxuIiwiPGltYWdlLWNyb3BwZXJcblx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0W2ltYWdlQWx0VGV4dF09XCJpbWFnZUFsdFRleHRcIlxuXHRbaW1hZ2VCYXNlNjRdPVwiaW1hZ2VCYXNlNjRcIlxuXHRbaW1hZ2VDaGFuZ2VkRXZlbnRdPVwiaW1hZ2VDaGFuZ2VkRXZlbnRcIlxuXHRbaW1hZ2VGaWxlXT1cImltYWdlRmlsZVwiXHRcblx0W2ltYWdlVVJMXT1cImltYWdlVVJMXCJcblx0W2hpZGVSZXNpemVTcXVhcmVzXT1cInRydWVcIlxuXHRbKHRyYW5zZm9ybSldPVwidHJhbnNmb3JtXCJcblx0W2Nyb3BwZXJTdGF0aWNXaWR0aF09XCJjcm9wcGVyV2lkdGhcIlxuXHRbY3JvcHBlclN0YXRpY0hlaWdodF09XCJjcm9wcGVySGVpZ2h0XCJcblx0W2NvbnRhaW5XaXRoaW5Bc3BlY3RSYXRpb109ZmFsc2Vcblx0W2FsbG93TW92ZUltYWdlXT1cInRydWVcIlxuXHRbZm9ybWF0XT1cIm91dHB1dEZvcm1hdFwiXG5cdFtvdXRwdXRdPVwib3V0cHV0VHlwZVwiXG5cdFtyb3VuZENyb3BwZXJdPVwicm91bmRDcm9wcGVyXCJcblx0KGNyb3BwZXJDaGFuZ2UpPVwib25Dcm9wcGVyQ2hhbmdlZCgkZXZlbnQpXCJcblx0KGltYWdlQ3JvcHBlZCk9XCJvbkltYWdlQ3JvcHBlZCgkZXZlbnQpXCJcblx0KGltYWdlTG9hZGVkKT1cIm9uSW1hZ2VMb2FkZWQoJGV2ZW50KVwiXG5cdChjcm9wcGVyUmVhZHkpPVwib25Dcm9wcGVyUmVhZHkoJGV2ZW50KVwiXG5cdChsb2FkSW1hZ2VGYWlsZWQpPVwib25Mb2FkSW1hZ2VGYWlsZWQoKVwiPlxuPC9pbWFnZS1jcm9wcGVyPlxuPGFkbWluLXNsaWRlclxuXHQodmFsdWVDaGFuZ2VkKT1cIm9uWm9vbUNoYW5nZSgkZXZlbnQpXCJcblx0W3ZhbHVlXT1cInpvb21WYWx1ZSgpXCJcblx0W21pbl09XCJtaW5ab29tVmFsdWVcIlxuXHRbbWF4XT1cIm1heFpvb21WYWx1ZVwiXG5cdFtzdGVwXT1cInN0ZXBab29tVmFsdWVcIlxuXHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbjwvYWRtaW4tc2xpZGVyPlxuIl19
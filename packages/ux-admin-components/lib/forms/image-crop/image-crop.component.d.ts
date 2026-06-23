import { EventEmitter } from '@angular/core';
import { CropperPosition, Dimensions, ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';
import * as i0 from "@angular/core";
export declare enum EImageCropOutputFormat {
    PNG = "png",
    JPEG = "jpeg",
    WEBP = "webp",
    BMP = "bmp",
    ICO = "ico"
}
export declare enum EImageCropOutputType {
    BASE64 = "base64",
    BLOB = "blob"
}
export declare class ImageCropComponent {
    transform: ImageTransform;
    disabled: boolean;
    imageAltText: string | undefined;
    imageBase64: string | undefined;
    imageFile: File | undefined;
    imageChangedEvent: Event | null;
    imageURL: string | undefined;
    cropperWidth: number;
    cropperHeight: number;
    outputFormat: EImageCropOutputFormat;
    outputType: EImageCropOutputType;
    roundCropper: boolean;
    zoomValue: import("@angular/core").InputSignal<number>;
    minZoomValue: number;
    maxZoomValue: number;
    stepZoomValue: number;
    cropperChanged: EventEmitter<CropperPosition>;
    cropperReady: EventEmitter<Dimensions>;
    imageCropped: EventEmitter<ImageCroppedEvent>;
    imageLoaded: EventEmitter<LoadedImage>;
    loadImageFailed: EventEmitter<void>;
    zoomChangeEvent: EventEmitter<number>;
    private zoomEffect;
    onCropperChanged(event: CropperPosition): void;
    onCropperReady(event: Dimensions): void;
    onImageCropped(event: ImageCroppedEvent): void;
    onImageLoaded(event: LoadedImage): void;
    onLoadImageFailed(): void;
    onZoomChange(event: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageCropComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageCropComponent, "admin-image-crop", never, { "disabled": { "alias": "disabled"; "required": false; }; "imageAltText": { "alias": "imageAltText"; "required": false; }; "imageBase64": { "alias": "imageBase64"; "required": false; }; "imageFile": { "alias": "imageFile"; "required": false; }; "imageChangedEvent": { "alias": "imageChangedEvent"; "required": false; }; "imageURL": { "alias": "imageURL"; "required": false; }; "cropperWidth": { "alias": "cropperWidth"; "required": false; }; "cropperHeight": { "alias": "cropperHeight"; "required": false; }; "outputFormat": { "alias": "outputFormat"; "required": false; }; "outputType": { "alias": "outputType"; "required": false; }; "roundCropper": { "alias": "roundCropper"; "required": false; }; "zoomValue": { "alias": "zoomValue"; "required": false; "isSignal": true; }; "minZoomValue": { "alias": "minZoomValue"; "required": false; }; "maxZoomValue": { "alias": "maxZoomValue"; "required": false; }; "stepZoomValue": { "alias": "stepZoomValue"; "required": false; }; }, { "cropperChanged": "cropperChanged"; "cropperReady": "cropperReady"; "imageCropped": "imageCropped"; "imageLoaded": "imageLoaded"; "loadImageFailed": "loadImageFailed"; "zoomChangeEvent": "zoomChangeEvent"; }, never, never, true, never>;
    static ngAcceptInputType_disabled: any;
}

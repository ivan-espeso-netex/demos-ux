import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import { ELabelColor, ELabelMode } from '../../atoms/label/label.component';
import { EProgressBarColor, EProgressBarMode } from '../../atoms/progress-bar/progress-bar.component';
import * as i0 from "@angular/core";
export declare enum EAdminCourseCardMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EAdminCourseCardSize {
    SMALL = "small",
    LARGE = "large"
}
export declare class CourseCardComponent {
    id: string;
    title: string;
    subtitle: string;
    image?: string;
    alt: string;
    label: string;
    labelColor: ELabelColor;
    labelMode: ELabelMode;
    icon?: EIconName;
    mode: EAdminCourseCardMode;
    size: EAdminCourseCardSize;
    progressBarValue: number;
    progressBarColor: EProgressBarColor;
    skeleton: boolean;
    skeletonItems: number;
    imgError: boolean;
    ImgEntityType: typeof ImgEntityType;
    ImgMode: typeof EImgMode;
    ELabelColor: typeof ELabelColor;
    ELabelMode: typeof ELabelMode;
    EProgressBarColor: typeof EProgressBarColor;
    EProgressBarMode: typeof EProgressBarMode;
    EAdminCourseCardMode: typeof EAdminCourseCardMode;
    cardClicked: EventEmitter<Event>;
    handleClick(event: Event): void;
    handleImageError(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CourseCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CourseCardComponent, "admin-course-card", never, { "id": { "alias": "id"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "image": { "alias": "image"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "label": { "alias": "label"; "required": false; }; "labelColor": { "alias": "labelColor"; "required": false; }; "labelMode": { "alias": "labelMode"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "size": { "alias": "size"; "required": false; }; "progressBarValue": { "alias": "progressBarValue"; "required": false; }; "progressBarColor": { "alias": "progressBarColor"; "required": false; }; "skeleton": { "alias": "skeleton"; "required": false; }; "skeletonItems": { "alias": "skeletonItems"; "required": false; }; }, { "cardClicked": "cardClicked"; }, never, never, true, never>;
    static ngAcceptInputType_skeleton: unknown;
}

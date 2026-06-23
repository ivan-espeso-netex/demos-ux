import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EImgMode, ImgEntityType } from '../../atoms/image/image.component';
import { ETextButtonMode, ETextButtonType } from '../../buttons/text-button/text-button.component';
import { ECheckboxMode } from '../../forms/checkbox/checkbox.component';
import * as i0 from "@angular/core";
export declare enum EAdminCommentMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class CommentComponent {
    mode: EAdminCommentMode;
    id: string;
    idCheckbox?: string;
    hasCheckbox?: boolean;
    image?: string;
    altImage?: string;
    imgError?: boolean;
    title: string;
    subtitle: string;
    nameLink?: boolean;
    textButtonId: string;
    ImgEntityType: typeof ImgEntityType;
    ECheckboxMode: typeof ECheckboxMode;
    EImgMode: typeof EImgMode;
    EAdminCommentMode: typeof EAdminCommentMode;
    textButtonType: ETextButtonType;
    ETextButtonMode: typeof ETextButtonMode;
    EIconName: typeof EIconName;
    handleImageError(): void;
    buttonClicked: EventEmitter<void>;
    commentCheckboxClicked: EventEmitter<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CommentComponent, "admin-comment", never, { "mode": { "alias": "mode"; "required": false; }; "id": { "alias": "id"; "required": false; }; "idCheckbox": { "alias": "idCheckbox"; "required": false; }; "hasCheckbox": { "alias": "hasCheckbox"; "required": false; }; "image": { "alias": "image"; "required": false; }; "altImage": { "alias": "altImage"; "required": false; }; "imgError": { "alias": "imgError"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "nameLink": { "alias": "nameLink"; "required": false; }; "textButtonId": { "alias": "textButtonId"; "required": false; }; }, { "buttonClicked": "buttonClicked"; "commentCheckboxClicked": "commentCheckboxClicked"; }, never, ["*"], true, never>;
}

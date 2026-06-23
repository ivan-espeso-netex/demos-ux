import { EventEmitter } from '@angular/core';
import { EDividerMode } from '../../atoms/divider/divider.component';
import { EIconName } from '../../atoms/icon/icon.component';
import { EMessageInputMode } from '../../forms/message-input/message-input.component';
import { EAdminCommentMode } from '../../lists/comment/comment.component';
import { EExpertPreviewHeaderMode } from '../expert-preview-header/expert-preview-header.component';
import * as i0 from "@angular/core";
export declare enum EExpertsChatContainerMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class ExpertsChatContainerComponent {
    id: string;
    title: string;
    mode: EExpertsChatContainerMode;
    messageInputId: string;
    messageInputPlaceholder: string;
    messageInputIconLeftButton: EIconName;
    messageInputIconRightButton: EIconName;
    messageInputIdLeftButton: string;
    messageInputIdRightButton: string;
    messageInputTooltipLeftButton: string;
    messageInputTooltipRightButton: string;
    messageInputLeftIconButtonClicked: EventEmitter<void>;
    messageInputRightIconButtonClicked: EventEmitter<void>;
    EIconName: typeof EIconName;
    EDividerMode: typeof EDividerMode;
    EMessageInputMode: typeof EMessageInputMode;
    EExpertPreviewHeaderMode: typeof EExpertPreviewHeaderMode;
    EExpertsChatContainerMode: typeof EExpertsChatContainerMode;
    EAdminCommentMode: typeof EAdminCommentMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpertsChatContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpertsChatContainerComponent, "admin-experts-chat-container", never, { "id": { "alias": "id"; "required": false; }; "title": { "alias": "title"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "messageInputId": { "alias": "messageInputId"; "required": false; }; "messageInputPlaceholder": { "alias": "messageInputPlaceholder"; "required": false; }; "messageInputIconLeftButton": { "alias": "messageInputIconLeftButton"; "required": false; }; "messageInputIconRightButton": { "alias": "messageInputIconRightButton"; "required": false; }; "messageInputIdLeftButton": { "alias": "messageInputIdLeftButton"; "required": false; }; "messageInputIdRightButton": { "alias": "messageInputIdRightButton"; "required": false; }; "messageInputTooltipLeftButton": { "alias": "messageInputTooltipLeftButton"; "required": false; }; "messageInputTooltipRightButton": { "alias": "messageInputTooltipRightButton"; "required": false; }; }, { "messageInputLeftIconButtonClicked": "messageInputLeftIconButtonClicked"; "messageInputRightIconButtonClicked": "messageInputRightIconButtonClicked"; }, never, ["*"], true, never>;
}

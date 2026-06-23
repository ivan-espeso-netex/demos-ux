import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { ImgEntityType } from '../../atoms/image/image.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import { EChipGroupMode, IAdminChipGroup } from '../types/chip-group.types';
import * as i0 from "@angular/core";
export declare enum EMessageInputMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EMessageInputType {
    DEFAULT = "default",
    STRETCH = "stretch",
    IA_THINKING = "iaThinking"
}
export declare class MessageInputComponent {
    messageInputType: EMessageInputType;
    disabled: boolean;
    mode: EMessageInputMode;
    placeholder: string;
    iconLeftButton?: EIconName;
    iconRightButton?: EIconName;
    idLeftButton: string;
    idRightButton: string;
    tooltipLeftButton: string;
    tooltipRightButton: string;
    disabledRightButton: boolean;
    chips: IAdminChipGroup[];
    messageInputBlur: EventEmitter<string>;
    messageInputFocus: EventEmitter<string>;
    messageInputInput: EventEmitter<string>;
    leftIconButtonClicked: EventEmitter<string>;
    rightIconButtonClicked: EventEmitter<string>;
    /** Event emitted when a chip is removed */
    removedChip: EventEmitter<IAdminChipGroup>;
    /** Event emitted when a chip is clicked */
    clickedChip: EventEmitter<IAdminChipGroup>;
    onTextareaInput(value: string): void;
    EIconName: typeof EIconName;
    EButtonType: typeof EButtonType;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonColor: typeof EButtonColor;
    EMessageInputMode: typeof EMessageInputMode;
    EButtonMode: typeof EButtonMode;
    EMessageInputType: typeof EMessageInputType;
    EChipGroupMode: typeof EChipGroupMode;
    ImgEntityType: typeof ImgEntityType;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageInputComponent, "admin-message-input", never, { "messageInputType": { "alias": "messageInputType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "iconLeftButton": { "alias": "iconLeftButton"; "required": false; }; "iconRightButton": { "alias": "iconRightButton"; "required": false; }; "idLeftButton": { "alias": "idLeftButton"; "required": false; }; "idRightButton": { "alias": "idRightButton"; "required": false; }; "tooltipLeftButton": { "alias": "tooltipLeftButton"; "required": false; }; "tooltipRightButton": { "alias": "tooltipRightButton"; "required": false; }; "disabledRightButton": { "alias": "disabledRightButton"; "required": false; }; "chips": { "alias": "chips"; "required": false; }; }, { "messageInputBlur": "messageInputBlur"; "messageInputFocus": "messageInputFocus"; "messageInputInput": "messageInputInput"; "leftIconButtonClicked": "leftIconButtonClicked"; "rightIconButtonClicked": "rightIconButtonClicked"; "removedChip": "removedChip"; "clickedChip": "clickedChip"; }, never, never, true, never>;
}

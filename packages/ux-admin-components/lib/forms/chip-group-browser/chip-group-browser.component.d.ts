import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EButtonButtonType, EButtonMode } from '../../../public-api';
import { EIconColor, EIconName } from '../../atoms/icon/icon.component';
import { EChipGroupMode, EChipGroupTheme, EChipGroupType, IAdminChipGroup } from '../types/chip-group.types';
import * as i0 from "@angular/core";
export declare class ChipGroupBrowserComponent {
    chips: (IAdminChipGroup)[];
    buttonDisabled: boolean;
    buttonText: string;
    buttonTooltip: string;
    chipGroupBrowserControl: FormControl;
    errorMessages: {
        [key: string]: string | boolean;
    };
    hint: string;
    label: string;
    mode: EChipGroupMode;
    hideAssistiveText: boolean;
    removedChip: EventEmitter<IAdminChipGroup>;
    clickedChip: EventEmitter<IAdminChipGroup>;
    clickedButton: EventEmitter<Event>;
    buttonButtonTypeDefault: EButtonButtonType;
    EButtonMode: typeof EButtonMode;
    EChipGroupMode: typeof EChipGroupMode;
    EChipGroupTheme: typeof EChipGroupTheme;
    EIconName: typeof EIconName;
    EIconColor: typeof EIconColor;
    typeOptions: {
        type: EChipGroupType;
        icon: EIconName;
    }[];
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipGroupBrowserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipGroupBrowserComponent, "admin-chip-group-browser", never, { "chips": { "alias": "chips"; "required": false; }; "buttonDisabled": { "alias": "buttonDisabled"; "required": false; }; "buttonText": { "alias": "buttonText"; "required": false; }; "buttonTooltip": { "alias": "buttonTooltip"; "required": false; }; "chipGroupBrowserControl": { "alias": "chipGroupBrowserControl"; "required": false; }; "errorMessages": { "alias": "errorMessages"; "required": false; }; "hint": { "alias": "hint"; "required": false; }; "label": { "alias": "label"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "hideAssistiveText": { "alias": "hideAssistiveText"; "required": false; }; }, { "removedChip": "removedChip"; "clickedChip": "clickedChip"; "clickedButton": "clickedButton"; }, never, never, true, never>;
    static ngAcceptInputType_hideAssistiveText: unknown;
}

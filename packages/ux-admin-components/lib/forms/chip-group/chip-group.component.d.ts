import { EventEmitter } from '@angular/core';
import { EIconColor, EIconName } from '../../atoms/icon/icon.component';
import { EChipGroupMode, EChipGroupTheme, EChipGroupType, IAdminChipGroup } from '../types/chip-group.types';
import * as i0 from "@angular/core";
export declare class ChipGroupComponent {
    mode: EChipGroupMode;
    chips: IAdminChipGroup[];
    selectable: boolean;
    removedChip: EventEmitter<IAdminChipGroup>;
    clickedChip: EventEmitter<IAdminChipGroup>;
    selectedChipIndex: number;
    EIconColor: typeof EIconColor;
    EChipGroupMode: typeof EChipGroupMode;
    EChipGroupTheme: typeof EChipGroupTheme;
    EIconName: typeof EIconName;
    onRemoved(chip: IAdminChipGroup): void;
    onClicked(chip: IAdminChipGroup): void;
    typeOptions: {
        type: EChipGroupType;
        icon: EIconName;
    }[];
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipGroupComponent, "admin-chip-group", never, { "mode": { "alias": "mode"; "required": false; }; "chips": { "alias": "chips"; "required": false; }; "selectable": { "alias": "selectable"; "required": false; }; }, { "removedChip": "removedChip"; "clickedChip": "clickedChip"; }, never, never, true, never>;
    static ngAcceptInputType_selectable: any;
}

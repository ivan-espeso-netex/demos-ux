import { EventEmitter, SimpleChanges } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor } from '../../buttons/button/button.component';
import { EAdminMenuMode, IAdminMenuOption } from '../../buttons/menu/menu.component';
import { EEntityTypes } from '../../types/common.types';
import * as i0 from "@angular/core";
export declare enum EAdaptativeResourceCardMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class AdaptiveResourceCardComponent {
    cardIcon: EIconName;
    id: string;
    type: EEntityTypes;
    text: string;
    subtext: string;
    image?: string;
    options: IAdminMenuOption[];
    selected?: boolean;
    skeleton: boolean;
    skeletonItems: number;
    mode: EAdaptativeResourceCardMode;
    buttonClicked: EventEmitter<Event>;
    optionClicked: EventEmitter<IAdminMenuOption>;
    buttontype: EButtonButtonType;
    color: EButtonColor;
    EAdaptativeResourceCardMode: typeof EAdaptativeResourceCardMode;
    EAdminMenuMode: typeof EAdminMenuMode;
    EIconName: typeof EIconName;
    handleClick(event: Event): void;
    typeOptions: Array<{
        types: Array<EEntityTypes>;
        icon: EIconName;
    }>;
    ngOnChanges(changes: SimpleChanges): void;
    private getTypeDetails;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdaptiveResourceCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdaptiveResourceCardComponent, "admin-adaptive-resource-card", never, { "id": { "alias": "id"; "required": false; }; "type": { "alias": "type"; "required": false; }; "text": { "alias": "text"; "required": false; }; "subtext": { "alias": "subtext"; "required": false; }; "image": { "alias": "image"; "required": false; }; "options": { "alias": "options"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "skeleton": { "alias": "skeleton"; "required": false; }; "skeletonItems": { "alias": "skeletonItems"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "buttonClicked": "buttonClicked"; "optionClicked": "optionClicked"; }, never, never, true, never>;
    static ngAcceptInputType_skeleton: unknown;
}

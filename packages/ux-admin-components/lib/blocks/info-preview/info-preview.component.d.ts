import { SimpleChanges } from '@angular/core';
import { EIconColor, EIconName } from '../../atoms/icon/icon.component';
import { EEntityTypes } from '../../types/common.types';
import * as i0 from "@angular/core";
export declare enum EInfoPreviewType {
    ELEARNING = "elearning",
    IMAGE = "image",
    AUDIO = "audio",
    DOC = "doc",
    PDF = "PDF",
    ZIP = "ZIP",
    VIDEO = "video",
    EXCEL = "excel",
    WORD = "word",
    POWERPOINT = "powerpoint"
}
export declare class InfoPreviewComponent {
    icon?: EIconName;
    id: string;
    type: EInfoPreviewType | EEntityTypes;
    image?: string;
    roundImage?: string;
    EInfoPreviewType: typeof EInfoPreviewType;
    EEntityTypes: typeof EEntityTypes;
    EIconColor: typeof EIconColor;
    get imageContainerClass(): string;
    typeOptions: Array<{
        types: Array<EEntityTypes | EInfoPreviewType>;
        icon: EIconName;
    }>;
    ngOnChanges(changes: SimpleChanges): void;
    private getTypeDetails;
    static ɵfac: i0.ɵɵFactoryDeclaration<InfoPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InfoPreviewComponent, "admin-info-preview", never, { "id": { "alias": "id"; "required": false; }; "type": { "alias": "type"; "required": false; }; "image": { "alias": "image"; "required": false; }; "roundImage": { "alias": "roundImage"; "required": false; }; }, {}, never, ["[audio]", "[video]"], true, never>;
}

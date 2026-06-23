import { EIconName } from '../../atoms/icon/icon.component';
import * as i0 from "@angular/core";
export declare enum IAdminExpansionPanelMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class ExpansionPanelComponent {
    mode: IAdminExpansionPanelMode;
    id: string;
    title: string;
    tooltip?: string;
    icon?: EIconName;
    expanded: boolean;
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpansionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpansionPanelComponent, "admin-expansion-panel", never, { "mode": { "alias": "mode"; "required": false; }; "id": { "alias": "id"; "required": false; }; "title": { "alias": "title"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], true, never>;
}

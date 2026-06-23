import { EIconName } from '../../atoms/icon/icon.component';
import { IAdminExpansionPanelMode } from '../../blocks/expansion-panel/expansion-panel.component';
import { ESidenavButtonMode } from '../sidenav-button/sidenav-button.component';
import * as i0 from "@angular/core";
export declare enum ESidenavMenuButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class SidenavMenuButtonComponent {
    id: string;
    text: string;
    tooltip: string;
    expanded: boolean;
    icon: EIconName;
    mode: ESidenavMenuButtonMode;
    opened: import("@angular/core").InputSignal<boolean>;
    IAdminExpansionPanelMode: typeof IAdminExpansionPanelMode;
    ESidenavMenuButtonMode: typeof ESidenavMenuButtonMode;
    ESidenavButtonMode: typeof ESidenavButtonMode;
    EIconName: typeof EIconName;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidenavMenuButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidenavMenuButtonComponent, "admin-sidenav-menu-button", never, { "id": { "alias": "id"; "required": false; }; "text": { "alias": "text"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "opened": { "alias": "opened"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

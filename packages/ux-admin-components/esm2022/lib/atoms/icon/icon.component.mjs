import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
export var EIconName;
(function (EIconName) {
    EIconName["ADD"] = "add";
    EIconName["ANALYTICS"] = "analytics";
    EIconName["APPS"] = "apps";
    EIconName["ARROW_BACK"] = "arrow_back";
    EIconName["ARROW_DROP_DOWN"] = "arrow_drop_down";
    EIconName["ARROW_DROP_UP"] = "arrow_drop_up";
    EIconName["ARROW_FRONT"] = "arrow_front";
    EIconName["ARROW_SPLIT"] = "arrow_split";
    EIconName["ATTACH_FILE"] = "attach_file";
    EIconName["ATTACH_FILE_ADD"] = "attach_file_add";
    EIconName["AUTO_AWESOME"] = "auto_awesome";
    EIconName["BROKEN_IMAGE"] = "broken_image";
    EIconName["CALENDAR_TODAY"] = "calendar_today";
    EIconName["CANCEL"] = "cancel";
    EIconName["CANCEL_FILLED"] = "cancel_filled";
    EIconName["CHAT"] = "chat";
    EIconName["CHECK"] = "check";
    EIconName["CHECK_CIRCLE"] = "check_circle";
    EIconName["CHECK_CIRCLE_FILLED"] = "check_circle_filled";
    EIconName["CHEVRON_LEFT"] = "chevron_left";
    EIconName["CHEVRON_RIGHT"] = "chevron_right";
    EIconName["CLOSE"] = "close";
    EIconName["CLOUD"] = "cloud";
    EIconName["CLOUD_DOWNLOAD"] = "cloud_download";
    EIconName["CLOUD_UPLOAD"] = "cloud_upload";
    EIconName["CONTENT_COPY"] = "content_copy";
    EIconName["CUSTOM_ACCOUNT_LOGOUT"] = "custom_account_logout";
    EIconName["CUSTOM_AI_MANAGER"] = "custom_ai_manager";
    EIconName["CUSTOM_AUDIT"] = "custom_audit";
    EIconName["CUSTOM_AUTOMATE"] = "custom_automate";
    EIconName["CUSTOM_BADGE"] = "custom_badge";
    EIconName["CUSTOM_BOLT"] = "custom_bolt";
    EIconName["CUSTOM_BUILD"] = "custom_build";
    EIconName["CUSTOM_CATALOG"] = "custom_catalog";
    EIconName["CUSTOM_CLONE"] = "custom_clone";
    EIconName["CUSTOM_COLLAPSE"] = "custom_collapse";
    EIconName["CUSTOM_CSV"] = "custom_csv";
    EIconName["CUSTOM_DISK"] = "custom_disk";
    EIconName["CUSTOM_DOT"] = "custom_dot";
    EIconName["CUSTOM_EXCEL"] = "custom_excel";
    EIconName["CUSTOM_EXIT"] = "custom_exit";
    EIconName["CUSTOM_EXPAND"] = "custom_expand";
    EIconName["CUSTOM_EXPORT"] = "custom_export";
    EIconName["CUSTOM_EXTENDED_FIELD"] = "custom_extended_field";
    EIconName["CUSTOM_EXTERNAL_PREVIEW"] = "custom_external_preview";
    EIconName["CUSTOM_FILE_AUDIO"] = "custom_file_audio";
    EIconName["CUSTOM_FILE_DOC"] = "custom_file_doc";
    EIconName["CUSTOM_FILE_ELEARNING"] = "custom_file_elearning";
    EIconName["CUSTOM_FILE_EXCEL"] = "custom_file_excel";
    EIconName["CUSTOM_FILE_IMAGE"] = "custom_file_image";
    EIconName["CUSTOM_FILE_PDF"] = "custom_file_pdf";
    EIconName["CUSTOM_FILE_POWERPOINT"] = "custom_file_powerpoint";
    EIconName["CUSTOM_FILE_VIDEO"] = "custom_file_video";
    EIconName["CUSTOM_FILE_WORD"] = "custom_file_word";
    EIconName["CUSTOM_FILE_ZIP"] = "custom_file_zip";
    EIconName["CUSTOM_FLAG_CHINA"] = "custom_flag_china";
    EIconName["CUSTOM_FLAG_FRANCE"] = "custom_flag_france";
    EIconName["CUSTOM_FLAG_GERMANY"] = "custom_flag_germany";
    EIconName["CUSTOM_FLAG_ITALY"] = "custom_flag_italy";
    EIconName["CUSTOM_FLAG_PORTUGAL"] = "custom_flag_portugal";
    EIconName["CUSTOM_FLAG_RUSSIA"] = "custom_flag_russia";
    EIconName["CUSTOM_FLAG_SPAIN"] = "custom_flag_spain";
    EIconName["CUSTOM_FLAG_UK"] = "custom_flag_uk";
    EIconName["CUSTOM_GOOGLE"] = "custom_google";
    EIconName["CUSTOM_ID_CARD"] = "custom_id_card";
    EIconName["CUSTOM_IMPORT_USERS"] = "custom_import_users";
    EIconName["CUSTOM_LEARNING_PROGRAM"] = "custom_learning_program";
    EIconName["CUSTOM_LIBRARY"] = "custom_library";
    EIconName["CUSTOM_LINK_TRIGGERS"] = "custom_link_triggers";
    EIconName["CUSTOM_LOG"] = "custom_log";
    EIconName["CUSTOM_PATHWAY"] = "custom_pathway";
    EIconName["CUSTOM_PDF"] = "custom_pdf";
    EIconName["CUSTOM_POWERPOINT"] = "custom_powerpoint";
    EIconName["CUSTOM_PREVIEW"] = "custom_preview";
    EIconName["CUSTOM_PROCESS"] = "custom_process";
    EIconName["CUSTOM_PROGRESS"] = "custom_progress";
    EIconName["CUSTOM_REPORT"] = "custom_report";
    EIconName["CUSTOM_TEST"] = "custom_test";
    EIconName["CUSTOM_UNPIN"] = "custom_unpin";
    EIconName["CUSTOM_WAIT"] = "custom_wait";
    EIconName["CUSTOM_WORD"] = "custom_word";
    EIconName["DELETE"] = "delete";
    EIconName["DESCRIPTION"] = "description";
    EIconName["DIVERSITY"] = "diversity_3";
    EIconName["DOCK_TO_LEFT"] = "dock-to-left";
    EIconName["DOCK_TO_RIGHT"] = "dock_to_right";
    EIconName["DOWNLOAD"] = "download";
    EIconName["DRAG_INDICATOR"] = "drag_indicator";
    EIconName["EDIT"] = "edit";
    EIconName["EDIT_DOCUMENT"] = "edit_document";
    EIconName["ERROR"] = "error";
    EIconName["EVENT_AVAILABLE"] = "event_available";
    EIconName["EXPAND_LESS"] = "expand_less";
    EIconName["EXPAND_MORE"] = "expand_more";
    EIconName["FACE"] = "face";
    EIconName["FACE_FILLED"] = "face_filled";
    EIconName["FAVORITE_BORDER"] = "favorite_border";
    EIconName["FILE_COPY"] = "file_copy";
    EIconName["FILTER_LIST"] = "filter_list";
    EIconName["FOLDER"] = "folder";
    EIconName["FOLDER_FILLED"] = "folder_filled";
    EIconName["FOLDER_SHARED"] = "folder_shared";
    EIconName["FOLDER_ZIP"] = "folder_zip";
    EIconName["GRID_VIEW"] = "grid_view";
    EIconName["GROUP_ADD"] = "group_add";
    EIconName["GROUP_OFF"] = "group_off";
    EIconName["HEADPHONES"] = "headphones";
    EIconName["HELP_OUTLINE"] = "help_outline";
    EIconName["IMAGE"] = "image";
    EIconName["INFO"] = "info";
    EIconName["KEY"] = "key";
    EIconName["LAUNCH"] = "launch";
    EIconName["LINK"] = "link";
    EIconName["LOCK"] = "lock";
    EIconName["MENU"] = "menu";
    EIconName["MILITARY_TECH"] = "military_tech";
    EIconName["MORE_VERT"] = "more_vert";
    EIconName["NOTIFICATIONS"] = "notifications";
    EIconName["ONDEMAND_VIDEO"] = "ondemand_video";
    EIconName["PEOPLE"] = "people";
    EIconName["PERSON"] = "person";
    EIconName["PERSON_OFF"] = "person_off";
    EIconName["PREVIEW"] = "preview";
    EIconName["REPORT_PROBLEM"] = "report_problem";
    EIconName["SAVE"] = "save";
    EIconName["SCHEDULE"] = "schedule";
    EIconName["SCHOOL"] = "school";
    EIconName["SEARCH"] = "search";
    EIconName["SEND"] = "send";
    EIconName["SETTINGS"] = "settings";
    EIconName["SHARE"] = "share";
    EIconName["STAR_BORDER"] = "star_border";
    EIconName["STAR_FILLED"] = "star_filled";
    EIconName["STOP_CIRCLE"] = "stop_circle";
    EIconName["TOGGLE_OFF"] = "toggle_off";
    EIconName["TOGGLE_ON"] = "toggle_on";
    EIconName["TRANSLATE"] = "translate";
    EIconName["TUNE"] = "tune";
    EIconName["UPLOAD"] = "upload";
    EIconName["VIDEO_LIBRARY"] = "video_library";
    EIconName["VIEW_LIST"] = "view_list";
    EIconName["VISIBILITY"] = "visibility";
    EIconName["VISIBILITY_OFF"] = "visibility_off";
})(EIconName || (EIconName = {}));
export var EIconColor;
(function (EIconColor) {
    EIconColor["PRIMARY"] = "primary";
    EIconColor["ACCENT"] = "accent";
    EIconColor["WARN"] = "warn";
    EIconColor["WHITE"] = "white";
    EIconColor["SUCCESS"] = "success";
    EIconColor["GRAY"] = "gray";
})(EIconColor || (EIconColor = {}));
export var EIconMode;
(function (EIconMode) {
    EIconMode["LIGHT"] = "light";
    EIconMode["DARK"] = "dark";
})(EIconMode || (EIconMode = {}));
// For each colored icon, the value represents
// how many path segments (span.pathN) the icon uses.
// You can check the exact number of paths for each icon
// in `src/lib/assets/icons/custom/_custom-icons.scss`,
// which defines the shapes for the `adminDesignSystem.woff` font.
const COLORED_ICON_PATHS = {
    [EIconName.CUSTOM_FILE_EXCEL]: 2,
    [EIconName.CUSTOM_FILE_WORD]: 2,
    [EIconName.CUSTOM_FILE_POWERPOINT]: 2,
    [EIconName.CUSTOM_FILE_AUDIO]: 2,
    [EIconName.CUSTOM_FILE_DOC]: 2,
    [EIconName.CUSTOM_FILE_ELEARNING]: 2,
    [EIconName.CUSTOM_FILE_IMAGE]: 2,
    [EIconName.CUSTOM_FILE_PDF]: 2,
    [EIconName.CUSTOM_FILE_VIDEO]: 2,
    [EIconName.CUSTOM_FILE_ZIP]: 2,
    [EIconName.CUSTOM_FLAG_CHINA]: 6,
    [EIconName.CUSTOM_FLAG_FRANCE]: 3,
    [EIconName.CUSTOM_FLAG_GERMANY]: 3,
    [EIconName.CUSTOM_FLAG_ITALY]: 3,
    [EIconName.CUSTOM_FLAG_PORTUGAL]: 3,
    [EIconName.CUSTOM_FLAG_RUSSIA]: 4,
    [EIconName.CUSTOM_FLAG_SPAIN]: 2,
    [EIconName.CUSTOM_FLAG_UK]: 7,
    [EIconName.CUSTOM_GOOGLE]: 4,
};
export class IconComponent {
    constructor() {
        this.fontFamily = 'icons-custom';
        this.icon = EIconName.ADD;
        this.color = EIconColor.PRIMARY;
        this.mode = EIconMode.LIGHT;
    }
    get isEnumColor() {
        return Object.values(EIconColor).includes(this.color);
    }
    get isColoredIcon() {
        return this.icon in COLORED_ICON_PATHS;
    }
    get coloredIconPaths() {
        const count = COLORED_ICON_PATHS[this.icon] ?? 0;
        return Array.from({ length: count }, (_, i) => i + 1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: IconComponent, isStandalone: true, selector: "admin-icon", inputs: { fontFamily: "fontFamily", icon: "icon", color: "color", mode: "mode" }, ngImport: i0, template: "\t<!-- BEGIN DEPRECATED -->\n@switch (fontFamily) {\n\n\t@case (\"material-icons-outlined\") {\n\t\t<mat-icon class=\"admin-icon {{fontFamily}} {{mode}}\"\n\t\t\t\t\t\t\taria-hidden=\"false\"\n\t\t\t\t\t\t\tfontIcon=\"{{icon}}\"\n\t\t\t\t\t\t\tcolor=\"{{color}}\"></mat-icon>\n\t\t}\n\t@case (\"material-icons-filled\") {\n\t\t<mat-icon class=\"admin-icon {{fontFamily}} {{mode}}\"\n\t\t\t\t\t\t\taria-hidden=\"false\"\n\t\t\t\t\t\t\tfontIcon=\"{{icon}}\"\n\t\t\t\t\t\t\tcolor=\"{{color}}\"></mat-icon>\n\t\t}\n\n\t@case (\"icons-custom\") {\n\t<!-- END DEPRECATED -->\n\n\t<mat-icon\n\t\tclass=\"admin-icon icon-{{icon}} {{mode}}\"\n\t\taria-hidden=\"false\"\n\t\t[color]=\"isEnumColor ? color : undefined\"\n\t\t[style.color]=\"isEnumColor ? null : color\">\n\t\t@if (isColoredIcon) {\n\t\t\t<div coloredIcon>\n\t\t\t\t@for (path of coloredIconPaths; track path) {\n\t\t\t\t\t<span class=\"path{{path}}\"></span>\n\t\t\t\t}\n\t\t\t</div>\n\t\t}\n\t</mat-icon>\n\t}\n}\n", styles: ["admin-icon{display:inline-block;font-size:24px;height:24px}admin-icon .admin-icon.mat-icon.mat-white{color:#fff}admin-icon .admin-icon.mat-icon.mat-success{color:#8bc34a}admin-icon .admin-icon.mat-icon.mat-gray{color:#d4d4d4}admin-icon .admin-icon.mat-icon.mat-primary{color:var(--icon-primary-color)}admin-icon .admin-icon.light{--icon-primary-color: #414141}admin-icon .admin-icon.dark{--icon-primary-color: #ffffff}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'admin-icon', standalone: true, imports: [
                        CommonModule,
                        MatIconModule
                    ], encapsulation: ViewEncapsulation.None, template: "\t<!-- BEGIN DEPRECATED -->\n@switch (fontFamily) {\n\n\t@case (\"material-icons-outlined\") {\n\t\t<mat-icon class=\"admin-icon {{fontFamily}} {{mode}}\"\n\t\t\t\t\t\t\taria-hidden=\"false\"\n\t\t\t\t\t\t\tfontIcon=\"{{icon}}\"\n\t\t\t\t\t\t\tcolor=\"{{color}}\"></mat-icon>\n\t\t}\n\t@case (\"material-icons-filled\") {\n\t\t<mat-icon class=\"admin-icon {{fontFamily}} {{mode}}\"\n\t\t\t\t\t\t\taria-hidden=\"false\"\n\t\t\t\t\t\t\tfontIcon=\"{{icon}}\"\n\t\t\t\t\t\t\tcolor=\"{{color}}\"></mat-icon>\n\t\t}\n\n\t@case (\"icons-custom\") {\n\t<!-- END DEPRECATED -->\n\n\t<mat-icon\n\t\tclass=\"admin-icon icon-{{icon}} {{mode}}\"\n\t\taria-hidden=\"false\"\n\t\t[color]=\"isEnumColor ? color : undefined\"\n\t\t[style.color]=\"isEnumColor ? null : color\">\n\t\t@if (isColoredIcon) {\n\t\t\t<div coloredIcon>\n\t\t\t\t@for (path of coloredIconPaths; track path) {\n\t\t\t\t\t<span class=\"path{{path}}\"></span>\n\t\t\t\t}\n\t\t\t</div>\n\t\t}\n\t</mat-icon>\n\t}\n}\n", styles: ["admin-icon{display:inline-block;font-size:24px;height:24px}admin-icon .admin-icon.mat-icon.mat-white{color:#fff}admin-icon .admin-icon.mat-icon.mat-success{color:#8bc34a}admin-icon .admin-icon.mat-icon.mat-gray{color:#d4d4d4}admin-icon .admin-icon.mat-icon.mat-primary{color:var(--icon-primary-color)}admin-icon .admin-icon.light{--icon-primary-color: #414141}admin-icon .admin-icon.dark{--icon-primary-color: #ffffff}\n"] }]
        }], propDecorators: { fontFamily: [{
                type: Input
            }], icon: [{
                type: Input
            }], color: [{
                type: Input
            }], mode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZG1pbi1jb21wb25lbnRzL3NyYy9saWIvYXRvbXMvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkbWluLWNvbXBvbmVudHMvc3JjL2xpYi9hdG9tcy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXZELE1BQU0sQ0FBTixJQUFZLFNBZ0pYO0FBaEpELFdBQVksU0FBUztJQUNwQix3QkFBVyxDQUFBO0lBQ1gsb0NBQXVCLENBQUE7SUFDdkIsMEJBQWEsQ0FBQTtJQUNiLHNDQUF5QixDQUFBO0lBQ3pCLGdEQUFtQyxDQUFBO0lBQ25DLDRDQUErQixDQUFBO0lBQy9CLHdDQUEyQixDQUFBO0lBQzNCLHdDQUEyQixDQUFBO0lBQzNCLHdDQUEyQixDQUFBO0lBQzNCLGdEQUFtQyxDQUFBO0lBQ25DLDBDQUE2QixDQUFBO0lBQzdCLDBDQUE2QixDQUFBO0lBQzdCLDhDQUFpQyxDQUFBO0lBQ2pDLDhCQUFpQixDQUFBO0lBQ2pCLDRDQUErQixDQUFBO0lBQy9CLDBCQUFhLENBQUE7SUFDYiw0QkFBZSxDQUFBO0lBQ2YsMENBQTZCLENBQUE7SUFDN0Isd0RBQTJDLENBQUE7SUFDM0MsMENBQTZCLENBQUE7SUFDN0IsNENBQStCLENBQUE7SUFDL0IsNEJBQWUsQ0FBQTtJQUNmLDRCQUFlLENBQUE7SUFDZiw4Q0FBaUMsQ0FBQTtJQUNqQywwQ0FBNkIsQ0FBQTtJQUM3QiwwQ0FBNkIsQ0FBQTtJQUM3Qiw0REFBK0MsQ0FBQTtJQUMvQyxvREFBdUMsQ0FBQTtJQUN2QywwQ0FBNkIsQ0FBQTtJQUM3QixnREFBbUMsQ0FBQTtJQUNuQywwQ0FBNkIsQ0FBQTtJQUM3Qix3Q0FBMkIsQ0FBQTtJQUMzQiwwQ0FBNkIsQ0FBQTtJQUM3Qiw4Q0FBaUMsQ0FBQTtJQUNqQywwQ0FBNkIsQ0FBQTtJQUM3QixnREFBbUMsQ0FBQTtJQUNuQyxzQ0FBeUIsQ0FBQTtJQUN6Qix3Q0FBMkIsQ0FBQTtJQUMzQixzQ0FBeUIsQ0FBQTtJQUN6QiwwQ0FBNkIsQ0FBQTtJQUM3Qix3Q0FBMkIsQ0FBQTtJQUMzQiw0Q0FBK0IsQ0FBQTtJQUMvQiw0Q0FBK0IsQ0FBQTtJQUMvQiw0REFBK0MsQ0FBQTtJQUMvQyxnRUFBbUQsQ0FBQTtJQUNuRCxvREFBdUMsQ0FBQTtJQUN2QyxnREFBbUMsQ0FBQTtJQUNuQyw0REFBK0MsQ0FBQTtJQUMvQyxvREFBdUMsQ0FBQTtJQUN2QyxvREFBdUMsQ0FBQTtJQUN2QyxnREFBbUMsQ0FBQTtJQUNuQyw4REFBaUQsQ0FBQTtJQUNqRCxvREFBdUMsQ0FBQTtJQUN2QyxrREFBcUMsQ0FBQTtJQUNyQyxnREFBbUMsQ0FBQTtJQUNuQyxvREFBdUMsQ0FBQTtJQUN2QyxzREFBeUMsQ0FBQTtJQUN6Qyx3REFBMkMsQ0FBQTtJQUMzQyxvREFBdUMsQ0FBQTtJQUN2QywwREFBNkMsQ0FBQTtJQUM3QyxzREFBeUMsQ0FBQTtJQUN6QyxvREFBdUMsQ0FBQTtJQUN2Qyw4Q0FBaUMsQ0FBQTtJQUNqQyw0Q0FBK0IsQ0FBQTtJQUMvQiw4Q0FBaUMsQ0FBQTtJQUNqQyx3REFBMkMsQ0FBQTtJQUMxQyxnRUFBbUQsQ0FBQTtJQUNwRCw4Q0FBaUMsQ0FBQTtJQUNqQywwREFBNkMsQ0FBQTtJQUM3QyxzQ0FBeUIsQ0FBQTtJQUN6Qiw4Q0FBaUMsQ0FBQTtJQUNqQyxzQ0FBeUIsQ0FBQTtJQUN6QixvREFBdUMsQ0FBQTtJQUN2Qyw4Q0FBaUMsQ0FBQTtJQUNqQyw4Q0FBaUMsQ0FBQTtJQUNqQyxnREFB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QUksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksa0JBQWtCLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ25CLE1BQU0sS0FBSyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7K0dBbEJXLGFBQWE7bUdBQWIsYUFBYSx3SkMxTTFCLDY4QkFrQ0EsNmREaUtFLFlBQVksOEJBQ1osYUFBYTs7NEZBTUYsYUFBYTtrQkFYekIsU0FBUzsrQkFDQyxZQUFZLGNBQ1YsSUFBSSxXQUNQO3dCQUNSLFlBQVk7d0JBQ1osYUFBYTtxQkFDYixpQkFHYyxpQkFBaUIsQ0FBQyxJQUFJOzhCQUk1QixVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmV4cG9ydCBlbnVtIEVJY29uTmFtZSB7XG5cdEFERCA9ICdhZGQnLFxuXHRBTkFMWVRJQ1MgPSAnYW5hbHl0aWNzJyxcblx0QVBQUyA9ICdhcHBzJyxcblx0QVJST1dfQkFDSyA9ICdhcnJvd19iYWNrJyxcblx0QVJST1dfRFJPUF9ET1dOID0gJ2Fycm93X2Ryb3BfZG93bicsXG5cdEFSUk9XX0RST1BfVVAgPSAnYXJyb3dfZHJvcF91cCcsXG5cdEFSUk9XX0ZST05UID0gJ2Fycm93X2Zyb250Jyxcblx0QVJST1dfU1BMSVQgPSAnYXJyb3dfc3BsaXQnLFxuXHRBVFRBQ0hfRklMRSA9ICdhdHRhY2hfZmlsZScsXG5cdEFUVEFDSF9GSUxFX0FERCA9ICdhdHRhY2hfZmlsZV9hZGQnLFxuXHRBVVRPX0FXRVNPTUUgPSAnYXV0b19hd2Vzb21lJyxcblx0QlJPS0VOX0lNQUdFID0gJ2Jyb2tlbl9pbWFnZScsXG5cdENBTEVOREFSX1RPREFZID0gJ2NhbGVuZGFyX3RvZGF5Jyxcblx0Q0FOQ0VMID0gJ2NhbmNlbCcsXG5cdENBTkNFTF9GSUxMRUQgPSAnY2FuY2VsX2ZpbGxlZCcsXG5cdENIQVQgPSAnY2hhdCcsXG5cdENIRUNLID0gJ2NoZWNrJyxcblx0Q0hFQ0tfQ0lSQ0xFID0gJ2NoZWNrX2NpcmNsZScsXG5cdENIRUNLX0NJUkNMRV9GSUxMRUQgPSAnY2hlY2tfY2lyY2xlX2ZpbGxlZCcsXG5cdENIRVZST05fTEVGVCA9ICdjaGV2cm9uX2xlZnQnLFxuXHRDSEVWUk9OX1JJR0hUID0gJ2NoZXZyb25fcmlnaHQnLFxuXHRDTE9TRSA9ICdjbG9zZScsXG5cdENMT1VEID0gJ2Nsb3VkJyxcblx0Q0xPVURfRE9XTkxPQUQgPSAnY2xvdWRfZG93bmxvYWQnLFxuXHRDTE9VRF9VUExPQUQgPSAnY2xvdWRfdXBsb2FkJyxcblx0Q09OVEVOVF9DT1BZID0gJ2NvbnRlbnRfY29weScsXG5cdENVU1RPTV9BQ0NPVU5UX0xPR09VVCA9ICdjdXN0b21fYWNjb3VudF9sb2dvdXQnLFxuXHRDVVNUT01fQUlfTUFOQUdFUiA9ICdjdXN0b21fYWlfbWFuYWdlcicsXG5cdENVU1RPTV9BVURJVCA9ICdjdXN0b21fYXVkaXQnLFxuXHRDVVNUT01fQVVUT01BVEUgPSAnY3VzdG9tX2F1dG9tYXRlJyxcblx0Q1VTVE9NX0JBREdFID0gJ2N1c3RvbV9iYWRnZScsXG5cdENVU1RPTV9CT0xUID0gJ2N1c3RvbV9ib2x0Jyxcblx0Q1VTVE9NX0JVSUxEID0gJ2N1c3RvbV9idWlsZCcsXG5cdENVU1RPTV9DQVRBTE9HID0gJ2N1c3RvbV9jYXRhbG9nJyxcblx0Q1VTVE9NX0NMT05FID0gJ2N1c3RvbV9jbG9uZScsXG5cdENVU1RPTV9DT0xMQVBTRSA9ICdjdXN0b21fY29sbGFwc2UnLFxuXHRDVVNUT01fQ1NWID0gJ2N1c3RvbV9jc3YnLFxuXHRDVVNUT01fRElTSyA9ICdjdXN0b21fZGlzaycsXG5cdENVU1RPTV9ET1QgPSAnY3VzdG9tX2RvdCcsXG5cdENVU1RPTV9FWENFTCA9ICdjdXN0b21fZXhjZWwnLFxuXHRDVVNUT01fRVhJVCA9ICdjdXN0b21fZXhpdCcsXG5cdENVU1RPTV9FWFBBTkQgPSAnY3VzdG9tX2V4cGFuZCcsXG5cdENVU1RPTV9FWFBPUlQgPSAnY3VzdG9tX2V4cG9ydCcsXG5cdENVU1RPTV9FWFRFTkRFRF9GSUVMRCA9ICdjdXN0b21fZXh0ZW5kZWRfZmllbGQnLFxuXHRDVVNUT01fRVhURVJOQUxfUFJFVklFVyA9ICdjdXN0b21fZXh0ZXJuYWxfcHJldmlldycsXG5cdENVU1RPTV9GSUxFX0FVRElPID0gJ2N1c3RvbV9maWxlX2F1ZGlvJyxcblx0Q1VTVE9NX0ZJTEVfRE9DID0gJ2N1c3RvbV9maWxlX2RvYycsXG5cdENVU1RPTV9GSUxFX0VMRUFSTklORyA9ICdjdXN0b21fZmlsZV9lbGVhcm5pbmcnLFxuXHRDVVNUT01fRklMRV9FWENFTCA9ICdjdXN0b21fZmlsZV9leGNlbCcsXG5cdENVU1RPTV9GSUxFX0lNQUdFID0gJ2N1c3RvbV9maWxlX2ltYWdlJyxcblx0Q1VTVE9NX0ZJTEVfUERGID0gJ2N1c3RvbV9maWxlX3BkZicsXG5cdENVU1RPTV9GSUxFX1BPV0VSUE9JTlQgPSAnY3VzdG9tX2ZpbGVfcG93ZXJwb2ludCcsXG5cdENVU1RPTV9GSUxFX1ZJREVPID0gJ2N1c3RvbV9maWxlX3ZpZGVvJyxcblx0Q1VTVE9NX0ZJTEVfV09SRCA9ICdjdXN0b21fZmlsZV93b3JkJyxcblx0Q1VTVE9NX0ZJTEVfWklQID0gJ2N1c3RvbV9maWxlX3ppcCcsXG5cdENVU1RPTV9GTEFHX0NISU5BID0gJ2N1c3RvbV9mbGFnX2NoaW5hJyxcblx0Q1VTVE9NX0ZMQUdfRlJBTkNFID0gJ2N1c3RvbV9mbGFnX2ZyYW5jZScsXG5cdENVU1RPTV9GTEFHX0dFUk1BTlkgPSAnY3VzdG9tX2ZsYWdfZ2VybWFueScsXG5cdENVU1RPTV9GTEFHX0lUQUxZID0gJ2N1c3RvbV9mbGFnX2l0YWx5Jyxcblx0Q1VTVE9NX0ZMQUdfUE9SVFVHQUwgPSAnY3VzdG9tX2ZsYWdfcG9ydHVnYWwnLFxuXHRDVVNUT01fRkxBR19SVVNTSUEgPSAnY3VzdG9tX2ZsYWdfcnVzc2lhJyxcblx0Q1VTVE9NX0ZMQUdfU1BBSU4gPSAnY3VzdG9tX2ZsYWdfc3BhaW4nLFxuXHRDVVNUT01fRkxBR19VSyA9ICdjdXN0b21fZmxhZ191aycsXG5cdENVU1RPTV9HT09HTEUgPSAnY3VzdG9tX2dvb2dsZScsXG5cdENVU1RPTV9JRF9DQVJEID0gJ2N1c3RvbV9pZF9jYXJkJyxcblx0Q1VTVE9NX0lNUE9SVF9VU0VSUyA9ICdjdXN0b21faW1wb3J0X3VzZXJzJyxcbiAgQ1VTVE9NX0xFQVJOSU5HX1BST0dSQU0gPSAnY3VzdG9tX2xlYXJuaW5nX3Byb2dyYW0nLFxuXHRDVVNUT01fTElCUkFSWSA9ICdjdXN0b21fbGlicmFyeScsXG5cdENVU1RPTV9MSU5LX1RSSUdHRVJTID0gJ2N1c3RvbV9saW5rX3RyaWdnZXJzJyxcblx0Q1VTVE9NX0xPRyA9ICdjdXN0b21fbG9nJyxcblx0Q1VTVE9NX1BBVEhXQVkgPSAnY3VzdG9tX3BhdGh3YXknLFxuXHRDVVNUT01fUERGID0gJ2N1c3RvbV9wZGYnLFxuXHRDVVNUT01fUE9XRVJQT0lOVCA9ICdjdXN0b21fcG93ZXJwb2ludCcsXG5cdENVU1RPTV9QUkVWSUVXID0gJ2N1c3RvbV9wcmV2aWV3Jyxcblx0Q1VTVE9NX1BST0NFU1MgPSAnY3VzdG9tX3Byb2Nlc3MnLFxuXHRDVVNUT01fUFJPR1JFU1MgPSAnY3VzdG9tX3Byb2dyZXNzJyxcblx0Q1VTVE9NX1JFUE9SVCA9ICdjdXN0b21fcmVwb3J0Jyxcblx0Q1VTVE9NX1RFU1QgPSAnY3VzdG9tX3Rlc3QnLFxuXHRDVVNUT01fVU5QSU4gPSAnY3VzdG9tX3VucGluJyxcblx0Q1VTVE9NX1dBSVQgPSAnY3VzdG9tX3dhaXQnLFxuXHRDVVNUT01fV09SRCA9ICdjdXN0b21fd29yZCcsXG5cdERFTEVURSA9ICdkZWxldGUnLFxuXHRERVNDUklQVElPTiA9ICdkZXNjcmlwdGlvbicsXG5cdERJVkVSU0lUWSA9ICdkaXZlcnNpdHlfMycsXG5cdERPQ0tfVE9fTEVGVCA9ICdkb2NrLXRvLWxlZnQnLFxuXHRET0NLX1RPX1JJR0hUID0gJ2RvY2tfdG9fcmlnaHQnLFxuXHRET1dOTE9BRCA9ICdkb3dubG9hZCcsXG5cdERSQUdfSU5ESUNBVE9SID0gJ2RyYWdfaW5kaWNhdG9yJyxcblx0RURJVCA9ICdlZGl0Jyxcblx0RURJVF9ET0NVTUVOVCA9ICdlZGl0X2RvY3VtZW50Jyxcblx0RVJST1IgPSAnZXJyb3InLFxuXHRFVkVOVF9BVkFJTEFCTEUgPSAnZXZlbnRfYXZhaWxhYmxlJyxcblx0RVhQQU5EX0xFU1MgPSAnZXhwYW5kX2xlc3MnLFxuXHRFWFBBTkRfTU9SRSA9ICdleHBhbmRfbW9yZScsXG5cdEZBQ0UgPSAnZmFjZScsXG5cdEZBQ0VfRklMTEVEID0gJ2ZhY2VfZmlsbGVkJyxcblx0RkFWT1JJVEVfQk9SREVSID0gJ2Zhdm9yaXRlX2JvcmRlcicsXG5cdEZJTEVfQ09QWSA9ICdmaWxlX2NvcHknLFxuXHRGSUxURVJfTElTVCA9ICdmaWx0ZXJfbGlzdCcsXG5cdEZPTERFUiA9ICdmb2xkZXInLFxuXHRGT0xERVJfRklMTEVEID0gJ2ZvbGRlcl9maWxsZWQnLFxuXHRGT0xERVJfU0hBUkVEID0gJ2ZvbGRlcl9zaGFyZWQnLFxuXHRGT0xERVJfWklQID0gJ2ZvbGRlcl96aXAnLFxuXHRHUklEX1ZJRVcgPSAnZ3JpZF92aWV3Jyxcblx0R1JPVVBfQUREID0gJ2dyb3VwX2FkZCcsXG5cdEdST1VQX09GRiA9ICdncm91cF9vZmYnLFxuXHRIRUFEUEhPTkVTID0gJ2hlYWRwaG9uZXMnLFxuXHRIRUxQX09VVExJTkUgPSAnaGVscF9vdXRsaW5lJyxcblx0SU1BR0UgPSAnaW1hZ2UnLFxuXHRJTkZPID0gJ2luZm8nLFxuXHRLRVkgPSAna2V5Jyxcblx0TEFVTkNIID0gJ2xhdW5jaCcsXG5cdExJTksgPSAnbGluaycsXG5cdExPQ0sgPSAnbG9jaycsXG5cdE1FTlUgPSAnbWVudScsXG5cdE1JTElUQVJZX1RFQ0ggPSAnbWlsaXRhcnlfdGVjaCcsXG5cdE1PUkVfVkVSVCA9ICdtb3JlX3ZlcnQnLFxuXHROT1RJRklDQVRJT05TID0gJ25vdGlmaWNhdGlvbnMnLFxuXHRPTkRFTUFORF9WSURFTyA9ICdvbmRlbWFuZF92aWRlbycsXG5cdFBFT1BMRSA9ICdwZW9wbGUnLFxuXHRQRVJTT04gPSAncGVyc29uJyxcblx0UEVSU09OX09GRiA9ICdwZXJzb25fb2ZmJyxcblx0UFJFVklFVyA9ICdwcmV2aWV3Jyxcblx0UkVQT1JUX1BST0JMRU0gPSAncmVwb3J0X3Byb2JsZW0nLFxuICBTQVZFID0gJ3NhdmUnLFxuXHRTQ0hFRFVMRSA9ICdzY2hlZHVsZScsXG5cdFNDSE9PTCA9ICdzY2hvb2wnLFxuXHRTRUFSQ0ggPSAnc2VhcmNoJyxcblx0U0VORCA9ICdzZW5kJyxcblx0U0VUVElOR1MgPSAnc2V0dGluZ3MnLFxuXHRTSEFSRSA9ICdzaGFyZScsXG5cdFNUQVJfQk9SREVSID0gJ3N0YXJfYm9yZGVyJyxcblx0U1RBUl9GSUxMRUQgPSAnc3Rhcl9maWxsZWQnLFxuXHRTVE9QX0NJUkNMRSA9ICdzdG9wX2NpcmNsZScsXG5cdFRPR0dMRV9PRkYgPSAndG9nZ2xlX29mZicsXG5cdFRPR0dMRV9PTiA9ICd0b2dnbGVfb24nLFxuXHRUUkFOU0xBVEUgPSAndHJhbnNsYXRlJyxcblx0VFVORSA9ICd0dW5lJyxcblx0VVBMT0FEID0gJ3VwbG9hZCcsXG5cdFZJREVPX0xJQlJBUlkgPSAndmlkZW9fbGlicmFyeScsXG5cdFZJRVdfTElTVCA9ICd2aWV3X2xpc3QnLFxuXHRWSVNJQklMSVRZID0gJ3Zpc2liaWxpdHknLFxuXHRWSVNJQklMSVRZX09GRiA9ICd2aXNpYmlsaXR5X29mZicsXG59XG5cbmV4cG9ydCBlbnVtIEVJY29uQ29sb3Ige1xuXHRQUklNQVJZID0gJ3ByaW1hcnknLFxuXHRBQ0NFTlQgPSAnYWNjZW50Jyxcblx0V0FSTiA9ICd3YXJuJyxcblx0V0hJVEUgPSAnd2hpdGUnLFxuXHRTVUNDRVNTID0gJ3N1Y2Nlc3MnLFxuXHRHUkFZID0gJ2dyYXknLFxufVxuXG5leHBvcnQgZW51bSBFSWNvbk1vZGUge1xuICBMSUdIVCA9ICdsaWdodCcsXG4gIERBUksgPSAnZGFyaydcbn1cblxuLy8gRm9yIGVhY2ggY29sb3JlZCBpY29uLCB0aGUgdmFsdWUgcmVwcmVzZW50c1xuLy8gaG93IG1hbnkgcGF0aCBzZWdtZW50cyAoc3Bhbi5wYXRoTikgdGhlIGljb24gdXNlcy5cbi8vIFlvdSBjYW4gY2hlY2sgdGhlIGV4YWN0IG51bWJlciBvZiBwYXRocyBmb3IgZWFjaCBpY29uXG4vLyBpbiBgc3JjL2xpYi9hc3NldHMvaWNvbnMvY3VzdG9tL19jdXN0b20taWNvbnMuc2Nzc2AsXG4vLyB3aGljaCBkZWZpbmVzIHRoZSBzaGFwZXMgZm9yIHRoZSBgYWRtaW5EZXNpZ25TeXN0ZW0ud29mZmAgZm9udC5cbmNvbnN0IENPTE9SRURfSUNPTl9QQVRIUzogUGFydGlhbDxSZWNvcmQ8RUljb25OYW1lLCBudW1iZXI+PiA9IHtcblx0W0VJY29uTmFtZS5DVVNUT01fRklMRV9FWENFTF06ICAgICAgMixcblx0W0VJY29uTmFtZS5DVVNUT01fRklMRV9XT1JEXTogICAgICAgMixcblx0W0VJY29uTmFtZS5DVVNUT01fRklMRV9QT1dFUlBPSU5UXTogMixcblx0W0VJY29uTmFtZS5DVVNUT01fRklMRV9BVURJT106ICAgICAgMixcblx0W0VJY29uTmFtZS5DVVNUT01fRklMRV9ET0NdOiAgICAgICAgMixcblx0W0VJY29uTmFtZS5DVVNUT01fRklMRV9FTEVBUk5JTkddOiAgMixcblx0W0VJY29uTmFtZS5DVVNUT01fRklMRV9JTUFHRV06ICAgICAgMixcblx0W0VJY29uTmFtZS5DVVNUT01fRklMRV9QREZdOiAgICAgICAgMixcblx0W0VJY29uTmFtZS5DVVNUT01fRklMRV9WSURFT106ICAgICAgMixcblx0W0VJY29uTmFtZS5DVVNUT01fRklMRV9aSVBdOiAgICAgICAgMixcblx0W0VJY29uTmFtZS5DVVNUT01fRkxBR19DSElOQV06ICAgICAgNixcblx0W0VJY29uTmFtZS5DVVNUT01fRkxBR19GUkFOQ0VdOiAgICAgMyxcblx0W0VJY29uTmFtZS5DVVNUT01fRkxBR19HRVJNQU5ZXTogICAgMyxcblx0W0VJY29uTmFtZS5DVVNUT01fRkxBR19JVEFMWV06ICAgICAgMyxcblx0W0VJY29uTmFtZS5DVVNUT01fRkxBR19QT1JUVUdBTF06ICAgMyxcblx0W0VJY29uTmFtZS5DVVNUT01fRkxBR19SVVNTSUFdOiAgICAgNCxcblx0W0VJY29uTmFtZS5DVVNUT01fRkxBR19TUEFJTl06ICAgICAgMixcblx0W0VJY29uTmFtZS5DVVNUT01fRkxBR19VS106ICAgICAgICAgNyxcblx0W0VJY29uTmFtZS5DVVNUT01fR09PR0xFXTogICAgICAgICAgNCxcbn07XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FkbWluLWljb24nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdE1hdEljb25Nb2R1bGVcblx0XSxcblx0dGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybDogJy4vaWNvbi5jb21wb25lbnQuc2NzcycsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG5cblx0QElucHV0KCkgZm9udEZhbWlseSA9ICdpY29ucy1jdXN0b20nO1xuXHRASW5wdXQoKSBpY29uOiBFSWNvbk5hbWUgPSBFSWNvbk5hbWUuQUREO1xuXHRASW5wdXQoKSBjb2xvcjogRUljb25Db2xvciB8IHN0cmluZyA9IEVJY29uQ29sb3IuUFJJTUFSWTtcblx0QElucHV0KCkgbW9kZSA9IEVJY29uTW9kZS5MSUdIVDtcblxuXHRnZXQgaXNFbnVtQ29sb3IoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChPYmplY3QudmFsdWVzKEVJY29uQ29sb3IpIGFzIHN0cmluZ1tdKS5pbmNsdWRlcyh0aGlzLmNvbG9yKTtcblx0fVxuXG5cdGdldCBpc0NvbG9yZWRJY29uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmljb24gaW4gQ09MT1JFRF9JQ09OX1BBVEhTO1xuXHR9XG5cblx0Z2V0IGNvbG9yZWRJY29uUGF0aHMoKTogbnVtYmVyW10ge1xuXHRcdGNvbnN0IGNvdW50ID0gQ09MT1JFRF9JQ09OX1BBVEhTW3RoaXMuaWNvbl0gPz8gMDtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSwgKF8sIGkpID0+IGkgKyAxKTtcblx0fVxufVxuIiwiXHQ8IS0tIEJFR0lOIERFUFJFQ0FURUQgLS0+XG5Ac3dpdGNoIChmb250RmFtaWx5KSB7XG5cblx0QGNhc2UgKFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIikge1xuXHRcdDxtYXQtaWNvbiBjbGFzcz1cImFkbWluLWljb24ge3tmb250RmFtaWx5fX0ge3ttb2RlfX1cIlxuXHRcdFx0XHRcdFx0XHRhcmlhLWhpZGRlbj1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0Zm9udEljb249XCJ7e2ljb259fVwiXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwie3tjb2xvcn19XCI+PC9tYXQtaWNvbj5cblx0XHR9XG5cdEBjYXNlIChcIm1hdGVyaWFsLWljb25zLWZpbGxlZFwiKSB7XG5cdFx0PG1hdC1pY29uIGNsYXNzPVwiYWRtaW4taWNvbiB7e2ZvbnRGYW1pbHl9fSB7e21vZGV9fVwiXG5cdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0XHRmb250SWNvbj1cInt7aWNvbn19XCJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJ7e2NvbG9yfX1cIj48L21hdC1pY29uPlxuXHRcdH1cblxuXHRAY2FzZSAoXCJpY29ucy1jdXN0b21cIikge1xuXHQ8IS0tIEVORCBERVBSRUNBVEVEIC0tPlxuXG5cdDxtYXQtaWNvblxuXHRcdGNsYXNzPVwiYWRtaW4taWNvbiBpY29uLXt7aWNvbn19IHt7bW9kZX19XCJcblx0XHRhcmlhLWhpZGRlbj1cImZhbHNlXCJcblx0XHRbY29sb3JdPVwiaXNFbnVtQ29sb3IgPyBjb2xvciA6IHVuZGVmaW5lZFwiXG5cdFx0W3N0eWxlLmNvbG9yXT1cImlzRW51bUNvbG9yID8gbnVsbCA6IGNvbG9yXCI+XG5cdFx0QGlmIChpc0NvbG9yZWRJY29uKSB7XG5cdFx0XHQ8ZGl2IGNvbG9yZWRJY29uPlxuXHRcdFx0XHRAZm9yIChwYXRoIG9mIGNvbG9yZWRJY29uUGF0aHM7IHRyYWNrIHBhdGgpIHtcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInBhdGh7e3BhdGh9fVwiPjwvc3Bhbj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0fVxuXHQ8L21hdC1pY29uPlxuXHR9XG59XG4iXX0=
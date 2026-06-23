import { EIconColor, EIconName } from '../../atoms/icon/icon.component';
export declare enum EChipGroupTheme {
    ACCENT = "accent",
    LIGHT = "light"
}
export declare enum EChipGroupMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum EChipGroupType {
    ELEARNING = "elearning",
    IMAGE = "image",
    AUDIO = "audio",
    DOC = "doc",
    PDF = "PDF",
    ZIP = "ZIP",
    VIDEO = "video"
}
export interface IAdminChipGroup {
    id: string;
    theme: EChipGroupTheme;
    text: string;
    subtext?: string;
    img?: string;
    iconName?: EIconName;
    iconColor?: EIconColor;
    removable?: boolean;
    selected?: boolean;
    multiline?: boolean;
    type?: EChipGroupType;
}

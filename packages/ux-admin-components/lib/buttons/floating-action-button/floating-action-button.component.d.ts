import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export interface IFloatingActionButtonOption {
    optionId: string;
    optionIcon: EIconName;
    optionColor: EButtonColor;
    optionTooltip: string;
    action?: () => void;
}
export declare enum EFloatingActionButtonMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class FloatingActionButtonComponent {
    id: string;
    mode: EFloatingActionButtonMode;
    buttonColor: EButtonColor;
    buttonTooltipEdit?: string;
    buttonTooltipClose?: string;
    options: IFloatingActionButtonOption[];
    buttonClicked: EventEmitter<string>;
    optionClicked: EventEmitter<IFloatingActionButtonOption>;
    EFloatingActionButtonMode: typeof EFloatingActionButtonMode;
    EButtonMode: typeof EButtonMode;
    EButtonButtonType: typeof EButtonButtonType;
    showOptions: boolean;
    get buttonIcon(): EIconName;
    get buttonTooltip(): string;
    handleButtonClick(): void;
    handleClick(option: IFloatingActionButtonOption): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FloatingActionButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FloatingActionButtonComponent, "admin-floating-action-button", never, { "id": { "alias": "id"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "buttonColor": { "alias": "buttonColor"; "required": false; }; "buttonTooltipEdit": { "alias": "buttonTooltipEdit"; "required": false; }; "buttonTooltipClose": { "alias": "buttonTooltipClose"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "buttonClicked": "buttonClicked"; "optionClicked": "optionClicked"; }, never, never, true, never>;
}

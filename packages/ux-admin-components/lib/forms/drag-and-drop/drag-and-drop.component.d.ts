import { EIconName } from '../../atoms/icon/icon.component';
import { EButtonButtonType, EButtonColor, EButtonMode, EButtonType } from '../../buttons/button/button.component';
import * as i0 from "@angular/core";
export declare enum EDragAndDropMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare class DragAndDropComponent {
    id: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonTooltip: string;
    icon?: EIconName;
    buttonButtonType: EButtonButtonType;
    buttonColor: EButtonColor;
    buttonType: EButtonType;
    mode: EDragAndDropMode;
    EButtonMode: typeof EButtonMode;
    EDragAndDropMode: typeof EDragAndDropMode;
    EIconName: typeof EIconName;
    isDragOver: boolean;
    buttonClicked: import("@angular/core").OutputEmitterRef<void>;
    fileDropped: import("@angular/core").OutputEmitterRef<DragEvent>;
    dragOver: import("@angular/core").OutputEmitterRef<DragEvent>;
    dragLeave: import("@angular/core").OutputEmitterRef<void>;
    onDrop(event: DragEvent): void;
    onDragOver(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragAndDropComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DragAndDropComponent, "admin-drag-and-drop", never, { "id": { "alias": "id"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "buttonText": { "alias": "buttonText"; "required": false; }; "buttonTooltip": { "alias": "buttonTooltip"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "buttonButtonType": { "alias": "buttonButtonType"; "required": false; }; "buttonColor": { "alias": "buttonColor"; "required": false; }; "buttonType": { "alias": "buttonType"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "buttonClicked": "buttonClicked"; "fileDropped": "fileDropped"; "dragOver": "dragOver"; "dragLeave": "dragLeave"; }, never, never, true, never>;
}

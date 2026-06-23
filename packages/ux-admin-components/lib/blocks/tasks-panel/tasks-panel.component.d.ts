import { EventEmitter } from '@angular/core';
import { EIconName } from '../../atoms/icon/icon.component';
import { EProgressBarColor, EProgressBarMode } from '../../atoms/progress-bar/progress-bar.component';
import { EButtonButtonType, EButtonColor, EButtonMode } from '../../buttons/button/button.component';
import { ETextButtonMode, ETextButtonType } from '../../buttons/text-button/text-button.component';
import * as i0 from "@angular/core";
export interface ITasksPanelTask {
    id: string;
    type?: ETasksPanelTaskType;
    image?: string;
    icon?: EIconName;
    title: string;
    description?: string;
    closeTaskButtonTooltip?: string;
    link?: string;
    progressBarValue?: number;
    state?: ETasksPanelTaskState;
}
export declare enum ETasksPanelTaskType {
    ELEARNING = "elearning",
    IMAGE = "image",
    AUDIO = "audio",
    DOC = "doc",
    PDF = "PDF",
    ZIP = "ZIP",
    VIDEO = "video",
    ERROR = "error"
}
export declare enum ETasksPanelMode {
    LIGHT = "light",
    DARK = "dark"
}
export declare enum ETasksPanelTaskState {
    PENDING = "pending",
    DONE = "done"
}
export declare class TasksPanelComponent {
    mode: ETasksPanelMode;
    title: string;
    closePanelButtonTooltip: string;
    stopTasksButtonTooltip: string;
    hasStopTaskButton: boolean;
    tasks: ITasksPanelTask[];
    type: ETasksPanelTaskType;
    showSkeleton: boolean;
    skeletonItems: number;
    icon: string;
    cardIconFontFamily: string;
    stopTasksButtonClicked: EventEmitter<void>;
    closePanelButtonClicked: EventEmitter<void>;
    closeTaskButtonClicked: EventEmitter<string>;
    openTaskButtonClicked: EventEmitter<string>;
    ETasksPanelMode: typeof ETasksPanelMode;
    EButtonMode: typeof EButtonMode;
    EButtonButtonType: typeof EButtonButtonType;
    EButtonColor: typeof EButtonColor;
    EIconName: typeof EIconName;
    ETextButtonMode: typeof ETextButtonMode;
    ETextButtonType: typeof ETextButtonType;
    EProgressBarMode: typeof EProgressBarMode;
    EProgressBarColor: typeof EProgressBarColor;
    ETasksPanelTaskState: typeof ETasksPanelTaskState;
    typeOptions: {
        type: ETasksPanelTaskType;
        icon: EIconName;
    }[];
    getTaskIcon(task: ITasksPanelTask): EIconName;
    oncloseTaskButtonClicked(id: string): void;
    onOpenTaskButtonClicked(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TasksPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TasksPanelComponent, "admin-tasks-panel", never, { "mode": { "alias": "mode"; "required": false; }; "title": { "alias": "title"; "required": false; }; "closePanelButtonTooltip": { "alias": "closePanelButtonTooltip"; "required": false; }; "stopTasksButtonTooltip": { "alias": "stopTasksButtonTooltip"; "required": false; }; "hasStopTaskButton": { "alias": "hasStopTaskButton"; "required": false; }; "tasks": { "alias": "tasks"; "required": false; }; "type": { "alias": "type"; "required": false; }; "showSkeleton": { "alias": "showSkeleton"; "required": false; }; "skeletonItems": { "alias": "skeletonItems"; "required": false; }; }, { "stopTasksButtonClicked": "stopTasksButtonClicked"; "closePanelButtonClicked": "closePanelButtonClicked"; "closeTaskButtonClicked": "closeTaskButtonClicked"; "openTaskButtonClicked": "openTaskButtonClicked"; }, never, never, true, never>;
}

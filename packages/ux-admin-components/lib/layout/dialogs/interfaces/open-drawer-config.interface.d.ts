import { Injector, Type } from "@angular/core";
import { BaseDrawerContent } from "../components/base-drawer-content.directive";
import { DialogProps } from "../types/dialog-props.type";
import { DrawerWidth } from "../types/drawer-width.type";
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export interface IOpenDrawerConfig<T extends BaseDrawerContent<Return>, Return = unknown> {
    component: {
        inputs: Partial<DialogProps<T>>;
        type: Type<T>;
    };
    injector?: Injector;
    title: string;
    width?: DrawerWidth;
}

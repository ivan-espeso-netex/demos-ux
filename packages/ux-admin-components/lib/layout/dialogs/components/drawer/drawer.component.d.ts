import { ElementRef, Injector, Type } from '@angular/core';
import { EToolbarPanelHeaderType } from '../../../toolbar/toolbar.component';
import { DialogProps } from '../../types/dialog-props.type';
import { BaseDrawerContent } from '../base-drawer-content.directive';
import { BaseDrawer } from '../base-drawer.directive';
import * as i0 from "@angular/core";
/**
 * @deprecated Use new layout components as GlobalPanel, Panel, PopUp and Snackbar
 * This will be removed in the next major version.
 */
export declare class DrawerComponent<Component extends BaseDrawerContent<Return>, Return = unknown> extends BaseDrawer<Return> {
    private readonly _createComponentFn;
    protected readonly _injector: Injector;
    title: import("@angular/core").InputSignal<string>;
    contentCmp: import("@angular/core").InputSignal<Type<Component>>;
    contentProps: import("@angular/core").InputSignal<Partial<DialogProps<Component>>>;
    contentHost: import("@angular/core").Signal<ElementRef<HTMLElement> | undefined>;
    cmp: import("@angular/core").Signal<import("@angular/core").ComponentRef<unknown> | undefined>;
    toolbarActions: import("@angular/core").Signal<readonly import("@netexknowledge/ux-admin-components").ToolbarActionDirective[]>;
    EToolbarPanelHeaderType: typeof EToolbarPanelHeaderType;
    constructor();
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawerComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrawerComponent<any, any>, "ng-component", never, { "title": { "alias": "title"; "required": true; "isSignal": true; }; "contentCmp": { "alias": "contentCmp"; "required": true; "isSignal": true; }; "contentProps": { "alias": "contentProps"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

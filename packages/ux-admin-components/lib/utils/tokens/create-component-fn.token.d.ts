import { ComponentRef, InjectionToken, Injector, Type } from '@angular/core';
export type createComponentFn<T = unknown> = (component: Type<T>, hostElem: HTMLElement, props: Partial<T>, injector?: Injector) => ComponentRef<T>;
export declare const CREATE_COMPONENT_FN: InjectionToken<createComponentFn<unknown>>;

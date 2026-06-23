import { OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CellWrapperComponent implements OnInit, OnDestroy {
    componentType: Type<any>;
    inputs: {
        [key: string]: any;
    };
    outputs: {
        [key: string]: (event: any) => void;
    };
    componentContainer: ViewContainerRef;
    private componentRef;
    private destroy$;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private createComponent;
    private updateInputs;
    private updateOutputs;
    private removeChildComponent;
    static ɵfac: i0.ɵɵFactoryDeclaration<CellWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CellWrapperComponent, "admin-cell-wrapper", never, { "componentType": { "alias": "componentType"; "required": false; }; "inputs": { "alias": "inputs"; "required": false; }; "outputs": { "alias": "outputs"; "required": false; }; }, {}, never, never, true, never>;
}

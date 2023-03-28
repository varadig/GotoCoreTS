export declare class CoreBaseParameterHolder implements IExecutable {
    protected params: Params;
    constructor();
    has(reference: Function): Boolean;
    addParams(params: Params): IExecutable;
    setParams(params: Params): IExecutable;
    addParam(name: String, value: Object): IExecutable;
    setParam(name: String, value: Object): IExecutable;
    execute(): any;
    notify(): void;
    send(): void;
}
export type Params = Map<String, any>;
export type Method = (params: Params) => any;

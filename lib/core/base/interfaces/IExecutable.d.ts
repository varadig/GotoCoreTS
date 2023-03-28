interface IExecutable {
    addParam(name: String, value: Object): IExecutable;
    addParams(params: Map<String, Object>): IExecutable;
    setParam(name: String, value: Object): IExecutable;
    setParams(params: Map<String, Object>): IExecutable;
    has(reference: Function): Boolean;
    execute(): any;
    notify(): void;
    send(): void;
}

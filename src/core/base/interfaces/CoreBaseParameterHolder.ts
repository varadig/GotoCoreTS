export class CoreBaseParameterHolder implements IExecutable {
    protected params: Params = new Map<String, Object>();

    constructor() {

    }
    has(reference: Function): Boolean {
        return false;
    }
    addParams(params: Params): IExecutable {

        params.forEach((value: any, key: String) => {
            this.addParam(key, value);
        });
        return this;
    }
    setParams(params: Params): IExecutable {
        params.forEach((value: any, key: String) => {
            this.setParam(key, value);
        });
        return this;
    }
    addParam(name: String, value: Object): IExecutable {
        if (!this.params.has(name))
            this.params.set(name, value);
        return this;
    }

    setParam(name: String, value: Object): IExecutable {
        this.params.set(name, value);
        return this;
    }
    public execute(): any {
        return null;
    }
    notify(): void {
    }
    send(): void {
    }
}

export type Params = Map<String, any>;
export type Method = (params: Params) => any;
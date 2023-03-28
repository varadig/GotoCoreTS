import { CoreBaseParameterHolder } from "./interfaces/CoreBaseParameterHolder";
export declare class CoreBaseFunctionWrapper extends CoreBaseParameterHolder {
    name: String;
    reference: Function;
    constructor(name: String, reference: Function);
    protected call(): any;
    has(reference: Function): Boolean;
    clone(): null;
}

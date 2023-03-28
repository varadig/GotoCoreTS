import { CoreBaseFunctionWrapper } from "../base/CoreBaseFunctionWrapper";
export declare class CoreService extends CoreBaseFunctionWrapper {
    static readonly CORE_SERVICE_NAME: String;
    constructor(name: String, reference: Function);
    execute(): any;
}

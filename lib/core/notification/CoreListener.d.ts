import { CoreBaseFunctionWrapper } from "../base/CoreBaseFunctionWrapper";
import { Method } from "../base/interfaces/CoreBaseParameterHolder";
export declare class CoreListener extends CoreBaseFunctionWrapper {
    static readonly REGISTER_LISTENER: String;
    static readonly REGISTER_LISTENERS: String;
    static readonly REMOVE_LISTENERS_BY_NAME: String;
    static readonly REMOVE_LISTENER: String;
    static readonly REMOVE_LISTENERS: String;
    static readonly REFERENCE: String;
    static readonly LISTENER: String;
    static readonly NAME: String;
    constructor(name: String, reference: Function);
    notify(): void;
    static register(name: String, callback: Method): void;
}

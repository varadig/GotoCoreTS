import { CoreBaseParameterHolder } from "./interfaces/CoreBaseParameterHolder";
export declare class CoreSender extends CoreBaseParameterHolder {
    protected name: String;
    protected collection: Array<IExecutable>;
    constructor(name: String, collection: Array<IExecutable>);
}

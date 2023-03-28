import { CoreBaseParameterHolder } from "../base/interfaces/CoreBaseParameterHolder";
import { CoreServiceContainer } from "../service/CoreServiceContainer";
export declare class CoreContext extends CoreBaseParameterHolder {
    sc: CoreServiceContainer;
    private static instance;
    static getInstance(): CoreContext;
    constructor();
}

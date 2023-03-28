import { CoreBaseParameterHolder } from "../base/interfaces/CoreBaseParameterHolder"
import { CoreServiceContainer } from "../service/CoreServiceContainer";

export class CoreContext extends CoreBaseParameterHolder {
    public sc: CoreServiceContainer

    private static instance: CoreContext;
    public static getInstance(): CoreContext {
        if (CoreContext.instance == null)
            CoreContext.instance = new CoreContext();
        return CoreContext.instance;
    }

    constructor() {
        super();
        this.sc = CoreServiceContainer.getInstance();
    }
}
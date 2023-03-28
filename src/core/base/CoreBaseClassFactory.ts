import { CoreContext } from "../context/CoreContext";
import { CoreLogger } from "../logger/CoreLogger";
import { CoreServiceContainer } from "../service/CoreServiceContainer";

export class CoreBaseClassFactory {
    static construct(_instance: any): void {
        _instance.sc = CoreServiceContainer.getInstance();
        _instance.context = CoreContext.getInstance();
    }
    public static log(_instance: any, message: Object): void {
        if (_instance.sc.hasService(CoreLogger.LOGGER_LOG)) {
            _instance.sc.getService(CoreLogger.LOGGER_LOG).addParam(CoreLogger.MESSAGE, message).execute();
        }
    }
}
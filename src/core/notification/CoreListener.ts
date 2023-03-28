import { CoreBaseFunctionWrapper } from "../base/CoreBaseFunctionWrapper";
import { Method } from "../base/interfaces/CoreBaseParameterHolder";
import { CoreServiceContainer } from "../service/CoreServiceContainer";

export class CoreListener extends CoreBaseFunctionWrapper {

    public static readonly REGISTER_LISTENER:String = "core.listener.register.listener";
    public static readonly REGISTER_LISTENERS:String = "core.listener.register.listeners";
    public static readonly REMOVE_LISTENERS_BY_NAME:String = "core.listener.remove.listeners.by.name";
    public static readonly REMOVE_LISTENER:String = "core.listener.remove.listener";
    public static readonly REMOVE_LISTENERS:String = "core.listener.remove.listeners";
    public static readonly REFERENCE:String = "reference";
    public static readonly LISTENER:String = "listener";
    public static readonly NAME:String = "name";
    constructor(name: String, reference: Function) {
        super(name, reference);
    }

    override notify(): void {
        this.call();
    }

    public static register(name:String, callback:Method):void {
        var listener:CoreListener = new CoreListener(name, callback);
        CoreServiceContainer.getInstance().getService(CoreListener.REGISTER_LISTENER)
        .addParam(CoreListener.LISTENER, listener)
        .addParam(CoreListener.NAME, name)
        .execute();
    }
}
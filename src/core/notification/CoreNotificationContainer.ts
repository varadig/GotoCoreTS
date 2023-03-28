import { CoreBaseClass } from "../base/CoreBaseClass";
import { Method, Params } from "../base/interfaces/CoreBaseParameterHolder";
import { CoreListener } from "./CoreListener";
import { CoreNotification } from "./CoreNotification";

export class CoreNotificationContainer extends CoreBaseClass {
    private mapping: Map<String, Array<IExecutable>> = new Map();


    private static instance: CoreNotificationContainer;
    public static getInstance(): CoreNotificationContainer {
        if (CoreNotificationContainer.instance == null)
            CoreNotificationContainer.instance = new CoreNotificationContainer();
        return CoreNotificationContainer.instance;
    }

    constructor() {
        super();
        this.sc.registerService(CoreListener.REGISTER_LISTENER, this.registerListener);
        this.sc.registerService(CoreListener.REGISTER_LISTENERS, this.registerListeners);
        this.sc.registerService(CoreListener.REMOVE_LISTENER, this.removeListener);
        this.sc.registerService(CoreListener.REMOVE_LISTENERS, this.removeListeners);
        this.sc.registerService(CoreListener.REMOVE_LISTENERS_BY_NAME, this.removeListenersByName);
        this.sc.registerService(CoreNotification.CREATE_NOTIFICATION, this.createNotification);
    }



    private removeListener(params: Params): void {
        var name: String = params.get(CoreListener.NAME);
        var reference: any = params.get(CoreListener.LISTENER);

        var listeners: Array<IExecutable> = this.getListenersOf(name);
        var index: number = this.getListenerBy(reference, listeners);
        if (index != -1) listeners.splice(index, 1);
    }

    private getListenerBy(reference: Method, listeners: Array<IExecutable>): number {

        for (var i: number = 0; i < listeners.length; i++)
            if (listeners[i].has(reference))
                return i;
        return -1;
    }



    private hasListener(name: String): Boolean {
        return this.mapping.has(name);
    }

    getListenersOf(name: String): Array<IExecutable> {

        return CoreNotificationContainer.instance.hasListener(name) ? this.mapping.get(name)! : new Array<IExecutable>();
    }

    private removeListenersByName(params: Params): void {
        var name: String = params.get(CoreListener.NAME);

        var listeners: Array<IExecutable> = this.getListenersOf(name);

    }

    private registerListeners(params: Params): void {

    }

    private removeListeners(params: Params): void {

    }

    private registerListener(params: Params): void {
        var name: String = params.get(CoreListener.NAME);
        var listener: CoreListener = params.get(CoreListener.LISTENER);

        if (!CoreNotificationContainer.instance.hasListener(name))
            CoreNotificationContainer.instance.mapping.set(name, new Array());

        CoreNotificationContainer.instance.getListenersOf(name).push(listener);
    }
    private createNotification(params: Params): IExecutable {
        var name: String = params.get(CoreListener.NAME);
        return new CoreNotification(name, CoreNotificationContainer.instance.getListenersOf(name));
    }
}
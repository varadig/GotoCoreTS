import { CoreBaseClass } from "../base/CoreBaseClass";
export declare class CoreNotificationContainer extends CoreBaseClass {
    private mapping;
    private static instance;
    static getInstance(): CoreNotificationContainer;
    constructor();
    private removeListener;
    private getListenerBy;
    private hasListener;
    getListenersOf(name: String): Array<IExecutable>;
    private removeListenersByName;
    private registerListeners;
    private removeListeners;
    private registerListener;
    private createNotification;
}

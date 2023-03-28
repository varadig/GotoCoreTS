"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreNotificationContainer = void 0;
const CoreBaseClass_1 = require("../base/CoreBaseClass");
const CoreListener_1 = require("./CoreListener");
const CoreNotification_1 = require("./CoreNotification");
class CoreNotificationContainer extends CoreBaseClass_1.CoreBaseClass {
    static getInstance() {
        if (CoreNotificationContainer.instance == null)
            CoreNotificationContainer.instance = new CoreNotificationContainer();
        return CoreNotificationContainer.instance;
    }
    constructor() {
        super();
        this.mapping = new Map();
        this.sc.registerService(CoreListener_1.CoreListener.REGISTER_LISTENER, this.registerListener);
        this.sc.registerService(CoreListener_1.CoreListener.REGISTER_LISTENERS, this.registerListeners);
        this.sc.registerService(CoreListener_1.CoreListener.REMOVE_LISTENER, this.removeListener);
        this.sc.registerService(CoreListener_1.CoreListener.REMOVE_LISTENERS, this.removeListeners);
        this.sc.registerService(CoreListener_1.CoreListener.REMOVE_LISTENERS_BY_NAME, this.removeListenersByName);
        this.sc.registerService(CoreNotification_1.CoreNotification.CREATE_NOTIFICATION, this.createNotification);
    }
    removeListener(params) {
        var name = params.get(CoreListener_1.CoreListener.NAME);
        var reference = params.get(CoreListener_1.CoreListener.LISTENER);
        var listeners = this.getListenersOf(name);
        var index = this.getListenerBy(reference, listeners);
        if (index != -1)
            listeners.splice(index, 1);
    }
    getListenerBy(reference, listeners) {
        for (var i = 0; i < listeners.length; i++)
            if (listeners[i].has(reference))
                return i;
        return -1;
    }
    hasListener(name) {
        return this.mapping.has(name);
    }
    getListenersOf(name) {
        return CoreNotificationContainer.instance.hasListener(name) ? this.mapping.get(name) : new Array();
    }
    removeListenersByName(params) {
        var name = params.get(CoreListener_1.CoreListener.NAME);
        var listeners = this.getListenersOf(name);
    }
    registerListeners(params) {
    }
    removeListeners(params) {
    }
    registerListener(params) {
        var name = params.get(CoreListener_1.CoreListener.NAME);
        var listener = params.get(CoreListener_1.CoreListener.LISTENER);
        if (!CoreNotificationContainer.instance.hasListener(name))
            CoreNotificationContainer.instance.mapping.set(name, new Array());
        CoreNotificationContainer.instance.getListenersOf(name).push(listener);
    }
    createNotification(params) {
        var name = params.get(CoreListener_1.CoreListener.NAME);
        return new CoreNotification_1.CoreNotification(name, CoreNotificationContainer.instance.getListenersOf(name));
    }
}
exports.CoreNotificationContainer = CoreNotificationContainer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreListener = void 0;
const CoreBaseFunctionWrapper_1 = require("../base/CoreBaseFunctionWrapper");
const CoreServiceContainer_1 = require("../service/CoreServiceContainer");
class CoreListener extends CoreBaseFunctionWrapper_1.CoreBaseFunctionWrapper {
    constructor(name, reference) {
        super(name, reference);
    }
    notify() {
        this.call();
    }
    static register(name, callback) {
        var listener = new CoreListener(name, callback);
        CoreServiceContainer_1.CoreServiceContainer.getInstance().getService(CoreListener.REGISTER_LISTENER)
            .addParam(CoreListener.LISTENER, listener)
            .addParam(CoreListener.NAME, name)
            .execute();
    }
}
CoreListener.REGISTER_LISTENER = "core.listener.register.listener";
CoreListener.REGISTER_LISTENERS = "core.listener.register.listeners";
CoreListener.REMOVE_LISTENERS_BY_NAME = "core.listener.remove.listeners.by.name";
CoreListener.REMOVE_LISTENER = "core.listener.remove.listener";
CoreListener.REMOVE_LISTENERS = "core.listener.remove.listeners";
CoreListener.REFERENCE = "reference";
CoreListener.LISTENER = "listener";
CoreListener.NAME = "name";
exports.CoreListener = CoreListener;

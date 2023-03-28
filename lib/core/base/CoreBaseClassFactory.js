"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreBaseClassFactory = void 0;
const CoreContext_1 = require("../context/CoreContext");
const CoreLogger_1 = require("../logger/CoreLogger");
const CoreServiceContainer_1 = require("../service/CoreServiceContainer");
class CoreBaseClassFactory {
    static construct(_instance) {
        _instance.sc = CoreServiceContainer_1.CoreServiceContainer.getInstance();
        _instance.context = CoreContext_1.CoreContext.getInstance();
    }
    static log(_instance, message) {
        if (_instance.sc.hasService(CoreLogger_1.CoreLogger.LOGGER_LOG)) {
            _instance.sc.getService(CoreLogger_1.CoreLogger.LOGGER_LOG).addParam(CoreLogger_1.CoreLogger.MESSAGE, message).execute();
        }
    }
}
exports.CoreBaseClassFactory = CoreBaseClassFactory;

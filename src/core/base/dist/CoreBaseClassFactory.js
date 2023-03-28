"use strict";
exports.__esModule = true;
exports.CoreBaseClassFactory = void 0;
var CoreContext_1 = require("../context/CoreContext");
var CoreLogger_1 = require("../logger/CoreLogger");
var CoreServiceContainer_1 = require("../service/CoreServiceContainer");
var CoreBaseClassFactory = /** @class */ (function () {
    function CoreBaseClassFactory() {
    }
    CoreBaseClassFactory.construct = function (_instance) {
        _instance.sc = CoreServiceContainer_1.CoreServiceContainer.getInstance();
        _instance.context = CoreContext_1.CoreContext.getInstance();
    };
    CoreBaseClassFactory.log = function (_instance, message) {
        if (_instance.sc.hasService(CoreLogger_1.CoreLogger.LOGGER_LOG)) {
            _instance.sc.getService(CoreLogger_1.CoreLogger.LOGGER_LOG).addParam(CoreLogger_1.CoreLogger.MESSAGE, message).execute();
        }
    };
    return CoreBaseClassFactory;
}());
exports.CoreBaseClassFactory = CoreBaseClassFactory;

"use strict";
exports.__esModule = true;
exports.CoreLogger = void 0;
var CoreServiceContainer_1 = require("../service/CoreServiceContainer");
var CoreLogger = /** @class */ (function () {
    function CoreLogger(loggers) {
        CoreLogger._loggers = loggers;
        CoreServiceContainer_1.CoreServiceContainer.getInstance().registerService(CoreLogger.LOGGER_LOG, this.serviceLog);
    }
    CoreLogger.getInstance = function (loggers) {
        if (loggers === void 0) { loggers = []; }
        if (CoreLogger.instance == null)
            CoreLogger.instance = new CoreLogger(loggers);
        return CoreLogger.instance;
    };
    CoreLogger.addLogger = function (logger) {
        CoreLogger.getInstance();
        if (CoreLogger._loggers == null)
            CoreLogger._loggers = [];
        CoreLogger._loggers.push(logger);
    };
    CoreLogger.prototype.serviceLog = function (params) {
        CoreLogger._loggers.forEach(function (logger) {
            logger.addLog(params.get(CoreLogger.MESSAGE));
        });
    };
    CoreLogger.LOGGER_LOG = "logger.log";
    CoreLogger.MESSAGE = "message";
    CoreLogger._loggers = [];
    return CoreLogger;
}());
exports.CoreLogger = CoreLogger;

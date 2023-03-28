"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreLogger = void 0;
const CoreServiceContainer_1 = require("../service/CoreServiceContainer");
class CoreLogger {
    static getInstance(loggers = []) {
        if (CoreLogger.instance == null)
            CoreLogger.instance = new CoreLogger(loggers);
        return CoreLogger.instance;
    }
    constructor(loggers) {
        CoreLogger._loggers = loggers;
        CoreServiceContainer_1.CoreServiceContainer.getInstance().registerService(CoreLogger.LOGGER_LOG, this.serviceLog);
    }
    static addLogger(logger) {
        CoreLogger.getInstance();
        if (CoreLogger._loggers == null)
            CoreLogger._loggers = [];
        CoreLogger._loggers.push(logger);
    }
    serviceLog(params) {
        CoreLogger._loggers.forEach((logger) => {
            logger.addLog(params.get(CoreLogger.MESSAGE));
        });
    }
}
CoreLogger.LOGGER_LOG = "logger.log";
CoreLogger.MESSAGE = "message";
CoreLogger._loggers = [];
exports.CoreLogger = CoreLogger;

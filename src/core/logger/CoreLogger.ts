import { Params } from "../base/interfaces/CoreBaseParameterHolder";
import { CoreServiceContainer } from "../service/CoreServiceContainer";

export class CoreLogger {
    public static readonly LOGGER_LOG: String = "logger.log";
    public static readonly MESSAGE: String = "message";

    private static _loggers: Array<ICoreLogger> = [];
    private static instance: CoreLogger;

    public static getInstance(loggers: ICoreLogger[] = []): CoreLogger {
        if (CoreLogger.instance == null)
            CoreLogger.instance = new CoreLogger(loggers);
        return CoreLogger.instance;
    }
    constructor(loggers: ICoreLogger[]) {
        CoreLogger._loggers = loggers;
        CoreServiceContainer.getInstance().registerService(CoreLogger.LOGGER_LOG, this.serviceLog);
    }

    public static addLogger(logger: ICoreLogger): void {
        CoreLogger.getInstance();
        if (CoreLogger._loggers == null)
            CoreLogger._loggers = [];
        CoreLogger._loggers.push(logger);
    }

    private serviceLog(params: Params): void {
        CoreLogger._loggers.forEach((logger: ICoreLogger) => {
            logger.addLog(params.get(CoreLogger.MESSAGE));
        });
    }
}
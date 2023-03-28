export declare class CoreLogger {
    static readonly LOGGER_LOG: String;
    static readonly MESSAGE: String;
    private static _loggers;
    private static instance;
    static getInstance(loggers?: ICoreLogger[]): CoreLogger;
    constructor(loggers: ICoreLogger[]);
    static addLogger(logger: ICoreLogger): void;
    private serviceLog;
}

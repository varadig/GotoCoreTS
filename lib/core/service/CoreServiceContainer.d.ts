export declare class CoreServiceContainer {
    private static instance;
    private mapping;
    static getInstance(): CoreServiceContainer;
    constructor();
    registerService(name: String, reference: Function): void;
    updateService(name: String, reference: Function): void;
    removeService(name: String): void;
    getService(name: String): IExecutable;
    hasService(name: String): Boolean;
}

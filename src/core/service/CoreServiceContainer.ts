import { CoreService } from "./CoreService";

export class CoreServiceContainer {
    private static instance: CoreServiceContainer;
    private mapping = new Map<String, Function>();
    static getInstance(): CoreServiceContainer {
        if (CoreServiceContainer.instance == null)
            CoreServiceContainer.instance = new CoreServiceContainer();
        return CoreServiceContainer.instance;
    }
    constructor() {

    }

    registerService(name: String, reference: Function): void {
        this.mapping.set(name, reference);
    }
    updateService(name: String, reference: Function): void {
        if (this.mapping.has(name))
            this.registerService(name, reference);
    }

    removeService(name: String): void {
        this.mapping.delete(name);
    }
    getService(name: String): IExecutable {
        if (!this.mapping.has(name))
            throw new Error(`No service registered with name: ${name}`);
        return new CoreService(name, this.mapping.get(name)!).addParam(CoreService.CORE_SERVICE_NAME, name);
    }
    hasService(name: String): Boolean {
        return (this.mapping.has(name));
    }
}
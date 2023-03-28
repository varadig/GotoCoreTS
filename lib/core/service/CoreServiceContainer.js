"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreServiceContainer = void 0;
const CoreService_1 = require("./CoreService");
class CoreServiceContainer {
    static getInstance() {
        if (CoreServiceContainer.instance == null)
            CoreServiceContainer.instance = new CoreServiceContainer();
        return CoreServiceContainer.instance;
    }
    constructor() {
        this.mapping = new Map();
    }
    registerService(name, reference) {
        this.mapping.set(name, reference);
    }
    updateService(name, reference) {
        if (this.mapping.has(name))
            this.registerService(name, reference);
    }
    removeService(name) {
        this.mapping.delete(name);
    }
    getService(name) {
        if (!this.mapping.has(name))
            throw new Error(`No service registered with name: ${name}`);
        return new CoreService_1.CoreService(name, this.mapping.get(name)).addParam(CoreService_1.CoreService.CORE_SERVICE_NAME, name);
    }
    hasService(name) {
        return (this.mapping.has(name));
    }
}
exports.CoreServiceContainer = CoreServiceContainer;

"use strict";
exports.__esModule = true;
exports.CoreServiceContainer = void 0;
var CoreService_1 = require("./CoreService");
var CoreServiceContainer = /** @class */ (function () {
    function CoreServiceContainer() {
        this.mapping = new Map();
    }
    CoreServiceContainer.getInstance = function () {
        if (CoreServiceContainer.instance == null)
            CoreServiceContainer.instance = new CoreServiceContainer();
        return CoreServiceContainer.instance;
    };
    CoreServiceContainer.prototype.registerService = function (name, reference) {
        this.mapping.set(name, reference);
    };
    CoreServiceContainer.prototype.updateService = function (name, reference) {
        if (this.mapping.has(name))
            this.registerService(name, reference);
    };
    CoreServiceContainer.prototype.removeService = function (name) {
        this.mapping["delete"](name);
    };
    CoreServiceContainer.prototype.getService = function (name) {
        if (!this.mapping.has(name))
            throw new Error("No service registered with name: " + name);
        return new CoreService_1.CoreService(name, this.mapping.get(name)).addParam(CoreService_1.CoreService.CORE_SERVICE_NAME, name);
    };
    CoreServiceContainer.prototype.hasService = function (name) {
        return (this.mapping.has(name));
    };
    return CoreServiceContainer;
}());
exports.CoreServiceContainer = CoreServiceContainer;

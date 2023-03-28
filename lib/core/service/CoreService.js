"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreService = void 0;
const CoreBaseFunctionWrapper_1 = require("../base/CoreBaseFunctionWrapper");
class CoreService extends CoreBaseFunctionWrapper_1.CoreBaseFunctionWrapper {
    constructor(name, reference) {
        super(name, reference);
    }
    execute() {
        return this.call();
    }
}
CoreService.CORE_SERVICE_NAME = "core.service.name";
exports.CoreService = CoreService;

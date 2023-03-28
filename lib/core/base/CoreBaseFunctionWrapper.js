"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreBaseFunctionWrapper = void 0;
const CoreBaseParameterHolder_1 = require("./interfaces/CoreBaseParameterHolder");
class CoreBaseFunctionWrapper extends CoreBaseParameterHolder_1.CoreBaseParameterHolder {
    constructor(name, reference) {
        super();
        this.name = name;
        this.reference = reference;
    }
    call() {
        return this.reference(this.params);
    }
    has(reference) {
        return (this.reference == reference);
    }
    clone() {
        return null;
    }
}
exports.CoreBaseFunctionWrapper = CoreBaseFunctionWrapper;

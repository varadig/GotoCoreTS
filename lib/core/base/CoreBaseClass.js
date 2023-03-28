"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreBaseClass = void 0;
const CoreBaseClassFactory_1 = require("./CoreBaseClassFactory");
class CoreBaseClass {
    constructor() {
        this.namePrefix = "object";
        this._name = this.generateName();
        CoreBaseClassFactory_1.CoreBaseClassFactory.construct(this);
    }
    generateName() {
        return `${this.namePrefix}${CoreBaseClass.nameIndex++}`;
    }
    log(...message) {
        CoreBaseClassFactory_1.CoreBaseClassFactory.log(this, message);
    }
}
CoreBaseClass.nameIndex = 0;
exports.CoreBaseClass = CoreBaseClass;

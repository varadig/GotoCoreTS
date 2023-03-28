"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreSender = void 0;
const CoreBaseParameterHolder_1 = require("./interfaces/CoreBaseParameterHolder");
class CoreSender extends CoreBaseParameterHolder_1.CoreBaseParameterHolder {
    constructor(name, collection) {
        super();
        this.name = name;
        this.collection = collection;
    }
}
exports.CoreSender = CoreSender;

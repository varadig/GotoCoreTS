"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreContext = void 0;
const CoreBaseParameterHolder_1 = require("../base/interfaces/CoreBaseParameterHolder");
const CoreServiceContainer_1 = require("../service/CoreServiceContainer");
class CoreContext extends CoreBaseParameterHolder_1.CoreBaseParameterHolder {
    static getInstance() {
        if (CoreContext.instance == null)
            CoreContext.instance = new CoreContext();
        return CoreContext.instance;
    }
    constructor() {
        super();
        this.sc = CoreServiceContainer_1.CoreServiceContainer.getInstance();
    }
}
exports.CoreContext = CoreContext;

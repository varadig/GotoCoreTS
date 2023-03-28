"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreLoggerDebug = void 0;
const CoreBaseClass_1 = require("../base/CoreBaseClass");
class CoreLoggerDebug extends CoreBaseClass_1.CoreBaseClass {
    addLog(...messages) {
        messages.forEach(message => console.log(message));
    }
}
exports.CoreLoggerDebug = CoreLoggerDebug;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CoreLoggerDebug = void 0;
var CoreBaseClass_1 = require("../base/CoreBaseClass");
var CoreLoggerDebug = /** @class */ (function (_super) {
    __extends(CoreLoggerDebug, _super);
    function CoreLoggerDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreLoggerDebug.prototype.addLog = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        messages.forEach(function (message) { return console.log(message); });
    };
    return CoreLoggerDebug;
}(CoreBaseClass_1.CoreBaseClass));
exports.CoreLoggerDebug = CoreLoggerDebug;

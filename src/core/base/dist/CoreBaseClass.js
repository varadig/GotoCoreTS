"use strict";
exports.__esModule = true;
exports.CoreBaseClass = void 0;
var CoreBaseClassFactory_1 = require("./CoreBaseClassFactory");
var CoreBaseClass = /** @class */ (function () {
    function CoreBaseClass() {
        this.namePrefix = "object";
        this._name = this.generateName();
        CoreBaseClassFactory_1.CoreBaseClassFactory.construct(this);
    }
    CoreBaseClass.prototype.generateName = function () {
        return "" + this.namePrefix + CoreBaseClass.nameIndex++;
    };
    CoreBaseClass.prototype.log = function () {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            message[_i] = arguments[_i];
        }
        CoreBaseClassFactory_1.CoreBaseClassFactory.log(this, message);
    };
    CoreBaseClass.nameIndex = 0;
    return CoreBaseClass;
}());
exports.CoreBaseClass = CoreBaseClass;

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
exports.CoreBaseFunctionWrapper = void 0;
var CoreBaseParameterHolder_1 = require("./interfaces/CoreBaseParameterHolder");
var CoreBaseFunctionWrapper = /** @class */ (function (_super) {
    __extends(CoreBaseFunctionWrapper, _super);
    function CoreBaseFunctionWrapper(name, reference) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.reference = reference;
        return _this;
    }
    CoreBaseFunctionWrapper.prototype.call = function () {
        return this.reference(this.params);
    };
    CoreBaseFunctionWrapper.prototype.has = function (reference) {
        return (this.reference == reference);
    };
    CoreBaseFunctionWrapper.prototype.clone = function () {
        return null;
    };
    return CoreBaseFunctionWrapper;
}(CoreBaseParameterHolder_1.CoreBaseParameterHolder));
exports.CoreBaseFunctionWrapper = CoreBaseFunctionWrapper;

"use strict";
exports.__esModule = true;
exports.CoreBaseParameterHolder = void 0;
var CoreBaseParameterHolder = /** @class */ (function () {
    function CoreBaseParameterHolder() {
        this.params = new Map();
    }
    CoreBaseParameterHolder.prototype.has = function (reference) {
        return false;
    };
    CoreBaseParameterHolder.prototype.addParams = function (params) {
        var _this = this;
        params.forEach(function (value, key) {
            _this.addParam(key, value);
        });
        return this;
    };
    CoreBaseParameterHolder.prototype.setParams = function (params) {
        var _this = this;
        params.forEach(function (value, key) {
            _this.setParam(key, value);
        });
        return this;
    };
    CoreBaseParameterHolder.prototype.addParam = function (name, value) {
        if (!this.params.has(name))
            this.params.set(name, value);
        return this;
    };
    CoreBaseParameterHolder.prototype.setParam = function (name, value) {
        this.params.set(name, value);
        return this;
    };
    CoreBaseParameterHolder.prototype.execute = function () {
        return null;
    };
    CoreBaseParameterHolder.prototype.notify = function () {
    };
    CoreBaseParameterHolder.prototype.send = function () {
    };
    return CoreBaseParameterHolder;
}());
exports.CoreBaseParameterHolder = CoreBaseParameterHolder;

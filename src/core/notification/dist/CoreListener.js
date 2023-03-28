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
exports.CoreListener = void 0;
var CoreBaseFunctionWrapper_1 = require("../base/CoreBaseFunctionWrapper");
var CoreServiceContainer_1 = require("../service/CoreServiceContainer");
var CoreListener = /** @class */ (function (_super) {
    __extends(CoreListener, _super);
    function CoreListener(name, reference) {
        return _super.call(this, name, reference) || this;
    }
    CoreListener.prototype.notify = function () {
        this.call();
    };
    CoreListener.register = function (name, callback) {
        var listener = new CoreListener(name, callback);
        CoreServiceContainer_1.CoreServiceContainer.getInstance().getService(CoreListener.REGISTER_LISTENER)
            .addParam(CoreListener.LISTENER, listener)
            .addParam(CoreListener.NAME, name)
            .execute();
    };
    CoreListener.REGISTER_LISTENER = "core.listener.register.listener";
    CoreListener.REGISTER_LISTENERS = "core.listener.register.listeners";
    CoreListener.REMOVE_LISTENERS_BY_NAME = "core.listener.remove.listeners.by.name";
    CoreListener.REMOVE_LISTENER = "core.listener.remove.listener";
    CoreListener.REMOVE_LISTENERS = "core.listener.remove.listeners";
    CoreListener.REFERENCE = "reference";
    CoreListener.LISTENER = "listener";
    CoreListener.NAME = "name";
    return CoreListener;
}(CoreBaseFunctionWrapper_1.CoreBaseFunctionWrapper));
exports.CoreListener = CoreListener;

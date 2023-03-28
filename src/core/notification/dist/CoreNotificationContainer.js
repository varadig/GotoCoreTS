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
exports.CoreNotificationContainer = void 0;
var CoreBaseClass_1 = require("../base/CoreBaseClass");
var CoreListener_1 = require("./CoreListener");
var CoreNotification_1 = require("./CoreNotification");
var CoreNotificationContainer = /** @class */ (function (_super) {
    __extends(CoreNotificationContainer, _super);
    function CoreNotificationContainer() {
        var _this = _super.call(this) || this;
        _this.mapping = new Map();
        _this.sc.registerService(CoreListener_1.CoreListener.REGISTER_LISTENER, _this.registerListener);
        _this.sc.registerService(CoreListener_1.CoreListener.REGISTER_LISTENERS, _this.registerListeners);
        _this.sc.registerService(CoreListener_1.CoreListener.REMOVE_LISTENER, _this.removeListener);
        _this.sc.registerService(CoreListener_1.CoreListener.REMOVE_LISTENERS, _this.removeListeners);
        _this.sc.registerService(CoreListener_1.CoreListener.REMOVE_LISTENERS_BY_NAME, _this.removeListenersByName);
        _this.sc.registerService(CoreNotification_1.CoreNotification.CREATE_NOTIFICATION, _this.createNotification);
        return _this;
    }
    CoreNotificationContainer.getInstance = function () {
        if (CoreNotificationContainer.instance == null)
            CoreNotificationContainer.instance = new CoreNotificationContainer();
        return CoreNotificationContainer.instance;
    };
    CoreNotificationContainer.prototype.removeListener = function (params) {
        var name = params.get(CoreListener_1.CoreListener.NAME);
        var reference = params.get(CoreListener_1.CoreListener.LISTENER);
        var listeners = this.getListenersOf(name);
        var index = this.getListenerBy(reference, listeners);
        if (index != -1)
            listeners.splice(index, 1);
    };
    CoreNotificationContainer.prototype.getListenerBy = function (reference, listeners) {
        for (var i = 0; i < listeners.length; i++)
            if (listeners[i].has(reference))
                return i;
        return -1;
    };
    CoreNotificationContainer.prototype.hasListener = function (name) {
        return this.mapping.has(name);
    };
    CoreNotificationContainer.prototype.getListenersOf = function (name) {
        return CoreNotificationContainer.instance.hasListener(name) ? this.mapping.get(name) : new Array();
    };
    CoreNotificationContainer.prototype.removeListenersByName = function (params) {
        var name = params.get(CoreListener_1.CoreListener.NAME);
        var listeners = this.getListenersOf(name);
    };
    CoreNotificationContainer.prototype.registerListeners = function (params) {
    };
    CoreNotificationContainer.prototype.removeListeners = function (params) {
    };
    CoreNotificationContainer.prototype.registerListener = function (params) {
        var name = params.get(CoreListener_1.CoreListener.NAME);
        var listener = params.get(CoreListener_1.CoreListener.LISTENER);
        if (!CoreNotificationContainer.instance.hasListener(name))
            CoreNotificationContainer.instance.mapping.set(name, new Array());
        CoreNotificationContainer.instance.getListenersOf(name).push(listener);
    };
    CoreNotificationContainer.prototype.createNotification = function (params) {
        var name = params.get(CoreListener_1.CoreListener.NAME);
        return new CoreNotification_1.CoreNotification(name, CoreNotificationContainer.instance.getListenersOf(name));
    };
    return CoreNotificationContainer;
}(CoreBaseClass_1.CoreBaseClass));
exports.CoreNotificationContainer = CoreNotificationContainer;

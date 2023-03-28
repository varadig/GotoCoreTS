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
exports.CoreNotification = void 0;
var CoreSender_1 = require("../base/CoreSender");
var CoreServiceContainer_1 = require("../service/CoreServiceContainer");
var CoreNotification = /** @class */ (function (_super) {
    __extends(CoreNotification, _super);
    function CoreNotification(name, collection) {
        return _super.call(this, name, collection) || this;
    }
    CoreNotification.prototype.send = function () {
        var _this = this;
        this.collection.forEach(function (listener) {
            listener.setParams(_this.params).addParam(CoreNotification.BASE_NAME, _this.name).notify();
        });
    };
    CoreNotification.create = function (name) {
        return CoreServiceContainer_1.CoreServiceContainer.getInstance().getService(CoreNotification.CREATE_NOTIFICATION)
            .addParam(CoreNotification.NAME, name)
            .execute();
    };
    CoreNotification.CREATE_NOTIFICATION = "create.notification";
    CoreNotification.NAME = "name";
    CoreNotification.BASE_NAME = "core.notification.name";
    return CoreNotification;
}(CoreSender_1.CoreSender));
exports.CoreNotification = CoreNotification;

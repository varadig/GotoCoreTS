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
exports.Test = void 0;
var CoreBaseClass_1 = require("./core/base/CoreBaseClass");
var CoreLogger_1 = require("./core/logger/CoreLogger");
var CoreLoggerDebug_1 = require("./core/logger/CoreLoggerDebug");
var CoreListener_1 = require("./core/notification/CoreListener");
var CoreNotification_1 = require("./core/notification/CoreNotification");
var CoreNotificationContainer_1 = require("./core/notification/CoreNotificationContainer");
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super.call(this) || this;
        CoreLogger_1.CoreLogger.getInstance([new CoreLoggerDebug_1.CoreLoggerDebug()]);
        CoreNotificationContainer_1.CoreNotificationContainer.getInstance();
        _this.sc.registerService("foo", _this.serviceFoo);
        CoreListener_1.CoreListener.register("noti1", _this.listenerNoti1);
        _this.log("ASDASD");
        _this.sc.getService("foo").addParam("bar", "BAR").execute();
        CoreNotification_1.CoreNotification.create("noti1").addParam("param1", { asd: "!@#!@#", qwe: "!@#!@#!@#%%%%%%" }).send();
        return _this;
    }
    Test.prototype.listenerNoti1 = function (params) {
        console.log(params.get("param1").asd);
    };
    Test.prototype.serviceFoo = function (params) {
        console.log(params);
    };
    return Test;
}(CoreBaseClass_1.CoreBaseClass));
exports.Test = Test;
new Test();

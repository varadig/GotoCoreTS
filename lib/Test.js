"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const CoreBaseClass_1 = require("./core/base/CoreBaseClass");
const CoreLogger_1 = require("./core/logger/CoreLogger");
const CoreLoggerDebug_1 = require("./core/logger/CoreLoggerDebug");
const CoreListener_1 = require("./core/notification/CoreListener");
const CoreNotification_1 = require("./core/notification/CoreNotification");
const CoreNotificationContainer_1 = require("./core/notification/CoreNotificationContainer");
class Test extends CoreBaseClass_1.CoreBaseClass {
    constructor() {
        super();
        CoreLogger_1.CoreLogger.getInstance([new CoreLoggerDebug_1.CoreLoggerDebug()]);
        CoreNotificationContainer_1.CoreNotificationContainer.getInstance();
        this.sc.registerService("foo", this.serviceFoo);
        CoreListener_1.CoreListener.register("noti1", this.listenerNoti1);
        this.log("ASDASD");
        this.sc.getService("foo").addParam("bar", "BAR").execute();
        CoreNotification_1.CoreNotification.create("noti1").addParam("param1", { asd: "!@#!@#", qwe: "!@#!@#!@#%%%%%%" }).send();
    }
    listenerNoti1(params) {
        console.log(params.get("param1").asd);
    }
    serviceFoo(params) {
        console.log(params);
    }
}
exports.Test = Test;
new Test();

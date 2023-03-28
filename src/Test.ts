import { CoreBaseClass } from "./core/base/CoreBaseClass";
import { Params } from "./core/base/interfaces/CoreBaseParameterHolder";
import { CoreLogger } from "./core/logger/CoreLogger";
import { CoreLoggerDebug } from "./core/logger/CoreLoggerDebug";
import { CoreListener } from "./core/notification/CoreListener";
import { CoreNotification } from "./core/notification/CoreNotification";
import { CoreNotificationContainer } from "./core/notification/CoreNotificationContainer";

export class Test extends CoreBaseClass {
    constructor() {
        super();
        CoreLogger.getInstance([new CoreLoggerDebug()])
        CoreNotificationContainer.getInstance();

        this.sc.registerService("foo",this.serviceFoo);
        CoreListener.register("noti1",this.listenerNoti1);
        this.log("ASDASD");

        this.sc.getService("foo").addParam("bar","BAR").execute();
        CoreNotification.create("noti1").addParam("param1",{asd:"!@#!@#",qwe:"!@#!@#!@#%%%%%%"}).send();
    }
    listenerNoti1(params:Params) {
        console.log(params.get("param1").asd);
    }
    public serviceFoo(params:Params) {
        console.log(params);
    }
}

new Test();

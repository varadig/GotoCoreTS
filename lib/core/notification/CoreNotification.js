"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreNotification = void 0;
const CoreSender_1 = require("../base/CoreSender");
const CoreServiceContainer_1 = require("../service/CoreServiceContainer");
class CoreNotification extends CoreSender_1.CoreSender {
    constructor(name, collection) {
        super(name, collection);
    }
    send() {
        this.collection.forEach((listener) => {
            listener.setParams(this.params).addParam(CoreNotification.BASE_NAME, this.name).notify();
        });
    }
    static create(name) {
        return CoreServiceContainer_1.CoreServiceContainer.getInstance().getService(CoreNotification.CREATE_NOTIFICATION)
            .addParam(CoreNotification.NAME, name)
            .execute();
    }
}
CoreNotification.CREATE_NOTIFICATION = "create.notification";
CoreNotification.NAME = "name";
CoreNotification.BASE_NAME = "core.notification.name";
exports.CoreNotification = CoreNotification;

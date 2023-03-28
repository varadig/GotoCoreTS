import { CoreSender } from "../base/CoreSender";
export declare class CoreNotification extends CoreSender {
    static readonly CREATE_NOTIFICATION: String;
    static readonly NAME: String;
    static readonly BASE_NAME: String;
    constructor(name: String, collection: Array<IExecutable>);
    send(): void;
    static create(name: String): CoreNotification;
}

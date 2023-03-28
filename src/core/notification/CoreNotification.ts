import { CoreSender } from "../base/CoreSender";
import { CoreServiceContainer } from "../service/CoreServiceContainer";

export class CoreNotification extends CoreSender {
    public static readonly CREATE_NOTIFICATION: String = "create.notification";
    public static readonly NAME: String = "name";
    public static readonly BASE_NAME: String = "core.notification.name";
    constructor(name: String, collection: Array<IExecutable>) {
        super(name, collection);
    }

    override send(): void {
        this.collection.forEach((listener: IExecutable) => {
            listener.setParams(this.params).addParam(CoreNotification.BASE_NAME, this.name).notify();
        })
    }

    public static create(name: String): CoreNotification {
        return CoreServiceContainer.getInstance().getService(CoreNotification.CREATE_NOTIFICATION)
            .addParam(CoreNotification.NAME, name)
            .execute();
    }
}
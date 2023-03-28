import { CoreBaseFunctionWrapper } from "../base/CoreBaseFunctionWrapper";

export class CoreService extends CoreBaseFunctionWrapper {
    public static readonly CORE_SERVICE_NAME: String = "core.service.name";

    constructor(name: String, reference: Function) {
        super(name, reference);
    }
    override execute() {
        return this.call();
    }

}
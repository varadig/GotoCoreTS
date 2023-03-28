import { CoreBaseParameterHolder } from "./interfaces/CoreBaseParameterHolder";

export class CoreSender extends CoreBaseParameterHolder {
    protected name:String;

    protected collection:Array<IExecutable>;

    constructor(name:String,collection:Array<IExecutable>) {
        super();
        this.name = name;
        this.collection = collection;
    }
}
import { CoreContext } from "../context/CoreContext";
import { CoreServiceContainer } from "../service/CoreServiceContainer";
import { CoreBaseClassFactory } from "./CoreBaseClassFactory";

export class CoreBaseClass {
    protected static nameIndex: number = 0;
    protected namePrefix:String = "object";
    private _name:String;
    public sc:CoreServiceContainer;
    public context:CoreContext;
    constructor() {
        this._name = this.generateName();
        CoreBaseClassFactory.construct(this);
        

    }
    generateName(): String {
        return `${this.namePrefix}${CoreBaseClass.nameIndex++}`;
    }

    protected log(...message:any):void {
        CoreBaseClassFactory.log(this, message);
    }
}
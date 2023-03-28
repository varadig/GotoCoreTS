import { CoreContext } from "../context/CoreContext";
import { CoreServiceContainer } from "../service/CoreServiceContainer";
export declare class CoreBaseClass {
    protected static nameIndex: number;
    protected namePrefix: String;
    private _name;
    sc: CoreServiceContainer;
    context: CoreContext;
    constructor();
    generateName(): String;
    protected log(...message: any): void;
}

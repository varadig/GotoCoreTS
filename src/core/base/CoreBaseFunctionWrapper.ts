import { CoreBaseParameterHolder } from "./interfaces/CoreBaseParameterHolder";

export class CoreBaseFunctionWrapper extends CoreBaseParameterHolder {
    name: String;
    reference: Function;
    constructor(name: String, reference: Function) {
        super();
        this.name = name;
        this.reference = reference;
    }

    protected call(): any {
        return this.reference(this.params);
    }

    override has(reference: Function): Boolean {
        return (this.reference == reference);
    }
    clone() {
        return null;
    }
}
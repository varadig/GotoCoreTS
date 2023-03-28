"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreBaseParameterHolder = void 0;
class CoreBaseParameterHolder {
    constructor() {
        this.params = new Map();
    }
    has(reference) {
        return false;
    }
    addParams(params) {
        params.forEach((value, key) => {
            this.addParam(key, value);
        });
        return this;
    }
    setParams(params) {
        params.forEach((value, key) => {
            this.setParam(key, value);
        });
        return this;
    }
    addParam(name, value) {
        if (!this.params.has(name))
            this.params.set(name, value);
        return this;
    }
    setParam(name, value) {
        this.params.set(name, value);
        return this;
    }
    execute() {
        return null;
    }
    notify() {
    }
    send() {
    }
}
exports.CoreBaseParameterHolder = CoreBaseParameterHolder;

import { CoreBaseClass } from "../base/CoreBaseClass";

export class CoreLoggerDebug extends CoreBaseClass implements ICoreLogger {
    addLog(...messages: string[]): void {
        messages.forEach(message => console.log(message));
    }
}
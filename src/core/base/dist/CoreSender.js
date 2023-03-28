"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CoreSender = void 0;
var CoreBaseParameterHolder_1 = require("./interfaces/CoreBaseParameterHolder");
var CoreSender = /** @class */ (function (_super) {
    __extends(CoreSender, _super);
    function CoreSender(name, collection) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.collection = collection;
        return _this;
    }
    return CoreSender;
}(CoreBaseParameterHolder_1.CoreBaseParameterHolder));
exports.CoreSender = CoreSender;

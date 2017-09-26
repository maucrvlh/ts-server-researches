"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, depto) {
        var _this = _super.call(this, name) || this;
        _this.departament = depto;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Ol\u00E1, me chamo " + this.name + " e trabalho no " + this.departament;
    };
    return Employee;
}(Person_1.default));
exports.default = Employee;
//# sourceMappingURL=Employee.js.map
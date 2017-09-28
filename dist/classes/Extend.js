"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
    };
    return ConsoleLogger;
}());
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var default_1 = (function () {
    function default_1() {
    }
    default_1.test = function () {
        var kim = extend(new Person("Kim"), new ConsoleLogger());
        var n = kim.name;
        kim.log();
    };
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=Extend.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clock = (function () {
    function Clock() {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (newDate) {
        return this.currentTime;
    };
    return Clock;
}());
exports.default = Clock;
//# sourceMappingURL=Clock.js.map
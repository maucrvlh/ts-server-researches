"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var testes_1 = require("./testes");
var Employee_1 = require("./classes/Employee");
var obj1 = { a: 1, b: 2, c: 3 };
var spread = __assign({}, obj1, { b: 4 });
console.log(spread);
console.log((new testes_1.default).m());
var joao = new Employee_1.default("João", "RH");
console.log(joao.getElevatorPitch());
function hello(compiler) {
    console.log("1. Hellooooo, from " + compiler);
}
function t() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, 300);
    });
}
function openFile() {
    return new Promise(function (resolve, reject) {
        var fakeFile = { fileId: Math.round(Math.random() * 999) };
        var fakeError = { code: -44, error: 'File not found' };
        setTimeout(resolve, 1000, fakeFile);
    });
}
function readFile(file) {
    return new Promise(function (resolve) {
        var attachedContentToFile = Object.assign({}, file, { content: 'blá, blá, ..' });
        setTimeout(resolve, 1000, attachedContentToFile);
    });
}
function processFile() {
    return __awaiter(this, void 0, void 0, function () {
        var fileDescriptor, fileContent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, openFile()];
                case 1:
                    fileDescriptor = _a.sent();
                    return [4, readFile(fileDescriptor)];
                case 2:
                    fileContent = _a.sent();
                    return [2, fileContent];
            }
        });
    });
}
function parallelFile() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, fileDescriptor, fileContent, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4, openFile()];
                case 1:
                    _b = [_c.sent()];
                    return [4, readFile(null)];
                case 2:
                    _a = _b.concat([_c.sent()]), fileDescriptor = _a[0], fileContent = _a[1];
                    return [2, Object.assign({}, fileDescriptor, fileContent)];
            }
        });
    });
}
//# sourceMappingURL=main.js.map
"use strict";
exports.__esModule = true;
exports.isNumber = exports.isBoolean = exports.isString = void 0;
function isString(candidate) {
    return typeof candidate === "string";
}
exports.isString = isString;
function isBoolean(candidate) {
    return typeof candidate === "boolean";
}
exports.isBoolean = isBoolean;
function isNumber(candidate) {
    return typeof candidate === "number";
}
exports.isNumber = isNumber;

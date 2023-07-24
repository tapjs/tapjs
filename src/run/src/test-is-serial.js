"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testIsSerial = void 0;
var path_1 = require("path");
var main_config_js_1 = require("./main-config.js");
var serial = undefined;
var testIsSerial = function (file) {
    if (!serial) {
        serial = (main_config_js_1.values.serial || []).map(function (s) { return (0, path_1.resolve)(s).toLowerCase() + path_1.sep; });
    }
    // tack the sep onto the end so that if the config specifies an
    // individual file, rather than a dir, it still matches.
    return serial.some(function (s) { return (file.toLowerCase() + path_1.sep).startsWith(s); });
};
exports.testIsSerial = testIsSerial;

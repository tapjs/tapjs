"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dumpConfig = void 0;
var yaml_1 = require("yaml");
var dumpConfig = function (_, config) {
    var values = config.parse().values;
    var v = Object.fromEntries(Object.entries(values).filter(function (_a) {
        var _ = _a[0], v = _a[1];
        return !Array.isArray(v) || v.length;
    }));
    console.log('# v' + 'im: set filetype=yaml :');
    console.log(yaml_1.default.stringify(v).trimEnd());
};
exports.dumpConfig = dumpConfig;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryGetVersion = void 0;
var module_1 = require("module");
var require = (0, module_1.createRequire)(import.meta.url);
// This is best-effort.  All of tap's internal packages
// export their package.json file, and the @tapjs/create-plugin
// init module will hopefully encourage others to do the same,
// if they use exports at all.
var tryGetVersion = function (pkg) {
    var _a;
    try {
        var v = (_a = require("".concat(pkg, "/package.json"))) === null || _a === void 0 ? void 0 : _a.version;
        if (v && typeof v === 'string') {
            return v;
        }
    }
    catch (_b) { }
};
exports.tryGetVersion = tryGetVersion;

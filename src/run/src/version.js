"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.version = void 0;
var yaml = require("yaml");
var try_get_version_js_1 = require("./try-get-version.js");
var test_1 = require("@tapjs/test");
var allPkgs = [
    'tap',
    '@tapjs/config',
    '@tapjs/core',
    '@tapjs/processinfo',
    '@tapjs/report',
    '@tapjs/run',
    '@tapjs/stack',
    '@tapjs/test',
    'tap-parser',
    'tap-yaml',
    'tcompare',
];
var version = function (args, config) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, config.get('versions') || args[0] === 'versions'
                ? printAllVersions()
                : printTapVersion()];
    });
}); };
exports.version = version;
var printAllVersions = function () { return __awaiter(void 0, void 0, void 0, function () {
    var versions, _i, allPkgs_1, p, v, plugs, pluginVersions, _a, plugs_1, p, v;
    return __generator(this, function (_b) {
        versions = {};
        for (_i = 0, allPkgs_1 = allPkgs; _i < allPkgs_1.length; _i++) {
            p = allPkgs_1[_i];
            v = (0, try_get_version_js_1.tryGetVersion)(p);
            if (v)
                versions[p] = v;
        }
        plugs = test_1.signature
            .split('\n')
            .sort(function (a, b) { return a.localeCompare(b, 'en'); });
        pluginVersions = {};
        for (_a = 0, plugs_1 = plugs; _a < plugs_1.length; _a++) {
            p = plugs_1[_a];
            v = (0, try_get_version_js_1.tryGetVersion)(p);
            if (v) {
                versions.plugins = pluginVersions;
                pluginVersions[p] = v;
            }
        }
        // also try to get all the plugins that aren't part of core
        console.log(yaml.stringify(versions).trimEnd());
        return [2 /*return*/];
    });
}); };
var printTapVersion = function () { return __awaiter(void 0, void 0, void 0, function () {
    var tv, cv, rv;
    return __generator(this, function (_a) {
        tv = (0, try_get_version_js_1.tryGetVersion)('tap');
        if (tv)
            return [2 /*return*/, console.log(tv)];
        cv = (0, try_get_version_js_1.tryGetVersion)('@tapjs/core');
        if (cv)
            return [2 /*return*/, console.log("@tapjs/core@".concat(cv))];
        rv = (0, try_get_version_js_1.tryGetVersion)('@tapjs/run');
        if (rv)
            return [2 /*return*/, console.log("@tapjs/run@".concat(rv))];
        throw new Error('Could not get version for tap, @tapjs/core, or @tapjs/run');
    });
}); };

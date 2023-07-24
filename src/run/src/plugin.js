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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
require("@tapjs/core");
var test_1 = require("@tapjs/test");
var foreground_child_1 = require("foreground-child");
var promises_1 = require("node:fs/promises");
var build_js_1 = require("./build.js");
var pkg_exists_js_1 = require("./pkg-exists.js");
var exists = function (f) {
    return (0, promises_1.lstat)(f).then(function () { return true; }, function () { return false; });
};
var plugin = function (args, config) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = args[0];
                switch (_a) {
                    case 'add': return [3 /*break*/, 1];
                    case 'rm': return [3 /*break*/, 2];
                    case 'remove': return [3 /*break*/, 2];
                    case 'list': return [3 /*break*/, 3];
                    case 'ls': return [3 /*break*/, 3];
                    case undefined: return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 1: return [2 /*return*/, add(args.slice(1), config)];
            case 2: return [2 /*return*/, rm(args.slice(1), config)];
            case 3: return [2 /*return*/, list(args.slice(1), config)];
            case 4: return [4 /*yield*/, list(args, config)];
            case 5:
                _b.sent();
                return [2 /*return*/, console.error("(use 'tap plugin add ...' to add plugins, or " +
                        "'tap plugin rm ...' to remove them)")];
            case 6: throw new Error("Unknown plugin command: ".concat(args[0]));
        }
    });
}); };
exports.plugin = plugin;
var quiet = ['--no-audit', '--loglevel=silent', '--no-progress'];
var install = function (pkgs) { return __awaiter(void 0, void 0, void 0, function () {
    var args;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                args = __spreadArray(__spreadArray(__spreadArray(['install'], quiet, true), ['--save-dev'], false), pkgs, true);
                return [4 /*yield*/, new Promise(function (res, rej) {
                        (0, foreground_child_1.foregroundChild)('npm', args, function (code, signal) {
                            // allow error exit to proceed
                            if (code || signal) {
                                rej(Object.assign(new Error('install failed'), { code: code, signal: signal }));
                                return;
                            }
                            res();
                            return false;
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var uninstall = function (pkgs) { return __awaiter(void 0, void 0, void 0, function () {
    var args;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                args = __spreadArray(__spreadArray(['rm'], quiet, true), pkgs, true);
                return [4 /*yield*/, new Promise(function (res) {
                        (0, foreground_child_1.foregroundChild)('npm', args, function (code, signal) {
                            // allow error exit to proceed
                            res();
                            return code || signal ? undefined : false;
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var sets = function (config) {
    /* c8 ignore start */
    var pc = new Set(config.get('plugin') || []);
    /* c8 ignore stop */
    var pl = new Set(config.pluginList);
    var def = new Set(test_1.defaultPlugins);
    return { pc: pc, pl: pl, def: def };
};
var add = function (args, config) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, pc, pl, def, added, needInstall, needCleanup, _i, args_1, plugin_1, success, installed, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!args.length)
                    throw new Error('no plugin name provided');
                _a = sets(config), pc = _a.pc, pl = _a.pl, def = _a.def;
                added = new Set();
                needInstall = new Set();
                needCleanup = new Set();
                _i = 0, args_1 = args;
                _c.label = 1;
            case 1:
                if (!(_i < args_1.length)) return [3 /*break*/, 5];
                plugin_1 = args_1[_i];
                // already present
                if (pl.has(plugin_1))
                    return [3 /*break*/, 4];
                added.add(plugin_1);
                // possibly default that was excluded
                if (pc.has("!".concat(plugin_1))) {
                    pc.delete("!".concat(plugin_1));
                    if (def.has(plugin_1))
                        return [3 /*break*/, 4];
                }
                pc.add(plugin_1);
                return [4 /*yield*/, exists(plugin_1)];
            case 2:
                if (!!(_c.sent())) return [3 /*break*/, 4];
                needInstall.add(plugin_1);
                return [4 /*yield*/, (0, pkg_exists_js_1.pkgExists)(plugin_1)];
            case 3:
                // only rollback if it wasn't there to begin with
                if (!(_c.sent())) {
                    needCleanup.add(plugin_1);
                }
                _c.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 1];
            case 5:
                if (!added.size) {
                    console.log('nothing to do, all plugins already installed');
                    return [2 /*return*/];
                }
                success = false;
                installed = false;
                _c.label = 6;
            case 6:
                _c.trys.push([6, 11, 12, 15]);
                if (!needInstall.size) return [3 /*break*/, 8];
                return [4 /*yield*/, install(__spreadArray([], needInstall, true))];
            case 7:
                _c.sent();
                installed = true;
                _c.label = 8;
            case 8:
                // ok, that succeeded, update the config
                config.values.plugin = __spreadArray([], pc, true);
                // now rebuild
                return [4 /*yield*/, (0, build_js_1.build)([], config)
                    // save the config change
                ];
            case 9:
                // now rebuild
                _c.sent();
                // save the config change
                return [4 /*yield*/, config.editConfigFile({ plugin: __spreadArray([], pc, true) }, config.configFile)];
            case 10:
                // save the config change
                _c.sent();
                console.log('successfully added plugin(s):');
                console.log(__spreadArray([], added, true).join('\n'));
                success = true;
                return [3 /*break*/, 15];
            case 11:
                _b = _c.sent();
                success = false;
                return [3 /*break*/, 15];
            case 12:
                if (!!success) return [3 /*break*/, 14];
                process.exitCode = 1;
                if (needInstall.size && !installed) {
                    console.error('install failed');
                }
                else {
                    console.error('build failed');
                }
                if (!(installed && needCleanup.size)) return [3 /*break*/, 14];
                console.error('attempting to clean up added packages');
                return [4 /*yield*/, uninstall(__spreadArray([], needCleanup, true))];
            case 13:
                _c.sent();
                _c.label = 14;
            case 14: return [7 /*endfinally*/];
            case 15: return [2 /*return*/];
        }
    });
}); };
var rm = function (args, config) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, pc, pl, def, removed, needRemove, _i, args_2, plugin_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = sets(config), pc = _a.pc, pl = _a.pl, def = _a.def;
                removed = new Set();
                needRemove = new Set();
                _i = 0, args_2 = args;
                _b.label = 1;
            case 1:
                if (!(_i < args_2.length)) return [3 /*break*/, 4];
                plugin_2 = args_2[_i];
                // not present, nothing to do
                if (!pl.has(plugin_2))
                    return [3 /*break*/, 3];
                removed.add(plugin_2);
                // possibly a default
                if (def.has(plugin_2)) {
                    pc.add("!".concat(plugin_2));
                    return [3 /*break*/, 3];
                }
                pc.delete(plugin_2);
                return [4 /*yield*/, exists(plugin_2)];
            case 2:
                // if it's not a file on disk, then we probably need to uninstall a pkg
                if (!(_b.sent()))
                    needRemove.add(plugin_2);
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                if (!removed.size) {
                    console.log('nothing to do, no specified plugins present');
                    return [2 /*return*/];
                }
                config.values.plugin = __spreadArray([], pc, true);
                // now rebuild
                return [4 /*yield*/, (0, build_js_1.build)([], config)
                    // save the config change
                ];
            case 5:
                // now rebuild
                _b.sent();
                // save the config change
                return [4 /*yield*/, config.editConfigFile({ plugin: __spreadArray([], pc, true) }, config.configFile)
                    // if not present, do nothing and exit
                    // if a default plugin, then add the !plugin to the config
                    // else, rm plugin from config
                    // if not a file on disk, and exists in nm, npm rm
                    // rebuild
                ];
            case 6:
                // save the config change
                _b.sent();
                // if not present, do nothing and exit
                // if a default plugin, then add the !plugin to the config
                // else, rm plugin from config
                // if not a file on disk, and exists in nm, npm rm
                // rebuild
                console.log('successfully removed plugin(s):');
                console.log(__spreadArray([], removed, true).join('\n'));
                if (needRemove.size) {
                    console.log('The following packages can likely be removed:');
                    console.log("npm rm ".concat(__spreadArray([], needRemove, true).map(function (p) { return JSON.stringify(p); })
                        .join(' ')));
                }
                return [2 /*return*/];
        }
    });
}); };
var list = function (_, config) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log(config.pluginList.join('\n'));
        return [2 /*return*/];
    });
}); };

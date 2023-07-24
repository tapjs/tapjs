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
exports.buildWithSpawn = void 0;
var spawn_1 = require("@tapjs/spawn");
var test_1 = require("@tapjs/test");
var foreground_child_1 = require("foreground-child");
var build_js_1 = require("./build.js");
var node = process.execPath;
var buildWithSpawn = function (t, config) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Make sure that we WANT to have the spawn plugin, otherwise
                // the runner really can't work.
                if (!config.pluginList.includes('@tapjs/spawn')) {
                    throw new Error('tap runner requires the @tapjs/spawn plugin');
                }
                if (!(config.pluginSignature !== test_1.signature)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, build_js_1.build)([], config)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                // If we didn't load with the spawn plugin, then it means that
                // it must have just been re-built.
                // if we're already in such a respawn, error out to prevent infinite
                // process bomb, because obviously it didn't work.
                // otherwise, try to respawn the runner with the same args, in the hopes
                // that the reloaded version of the test will have the spawn plugin
                // we just built.
                if (!t.pluginLoaded(spawn_1.plugin)) {
                    if (process.env._TAP_RUN_REBUILD_RESPAWN_ === '1') {
                        throw new Error('Failed to build a tap with the spawn plugin');
                    }
                    process.env._TAP_RUN_REBUILD_RESPAWN_ = '1';
                    // let fg child terminate this process
                    // we just tell run() that we did respawn, so it should no-op
                    return [2 /*return*/, new Promise(function (res) {
                            (0, foreground_child_1.foregroundChild)(node, __spreadArray(__spreadArray([], process.execArgv, true), process.argv.slice(1), true), function () {
                                res(true);
                            });
                        })];
                }
                return [2 /*return*/, false];
        }
    });
}); };
exports.buildWithSpawn = buildWithSpawn;

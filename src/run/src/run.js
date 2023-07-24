"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.run = void 0;
var core_1 = require("@tapjs/core");
var reporter_1 = require("@tapjs/reporter");
var stdin_1 = require("@tapjs/stdin");
var test_1 = require("@tapjs/test");
var glob_1 = require("glob");
var node_module_1 = require("node:module");
var node_path_1 = require("node:path");
var node_url_1 = require("node:url");
var path_1 = require("path");
var rimraf_1 = require("rimraf");
var after_js_1 = require("./after.js");
var before_js_1 = require("./before.js");
var build_with_spawn_js_1 = require("./build-with-spawn.js");
var coverage_map_js_1 = require("./coverage-map.js");
var list_js_1 = require("./list.js");
var main_config_js_1 = require("./main-config.js");
var output_dir_js_1 = require("./output-dir.js");
var output_file_js_1 = require("./output-file.js");
var report_js_1 = require("./report.js");
var save_list_js_1 = require("./save-list.js");
var test_is_serial_js_1 = require("./test-is-serial.js");
var require = (0, node_module_1.createRequire)(import.meta.url);
var piLoader = (0, node_url_1.pathToFileURL)(require.resolve('@tapjs/processinfo'));
var node = process.execPath;
var handleReporter = function (t, config) { return __awaiter(void 0, void 0, void 0, function () {
    var reporter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                reporter = config.get('reporter');
                return [4 /*yield*/, (0, reporter_1.report)(reporter, t, config)];
            case 1: 
            // TODO: if it's not in keyof reportTypes, then look it up as a module.
            return [2 /*return*/, _a.sent()];
        }
    });
}); };
var run = function (args, config) { return __awaiter(void 0, void 0, void 0, function () {
    var timeout, t, loader, testArgs, testEnv, nodeArgs, argv, files, map, env, _i, testEnv_1, e, split, k, v, hasReporter, stdio, readSaveList, saveList, testPromises, stdinOnly, _loop_1, _a, _b, f;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                timeout = (config.get('timeout') || 30) * 1000;
                t = (0, core_1.tap)({
                    // special runner context so plugins can behave differently.
                    // currently, this is only used by @tapjs/filter
                    context: Symbol.for('tap.isRunner'),
                });
                return [4 /*yield*/, (0, build_with_spawn_js_1.buildWithSpawn)(t, config)];
            case 1:
                // if we have to rebuild, then it'll re-spawn, so we do not continue
                if (_c.sent()) {
                    return [2 /*return*/];
                }
                // we don't want to time out the runner, just the subtests
                t.setTimeout(0);
                loader = String(piLoader);
                testArgs = main_config_js_1.values['test-arg'] || [];
                testEnv = main_config_js_1.values['test-env'] || [];
                nodeArgs = main_config_js_1.values['node-arg'] || [];
                argv = __spreadArray(__spreadArray(__spreadArray([
                    '--no-warnings=ExperimentalLoader'
                ], test_1.loaders.map(function (l) { return "--loader=".concat(l); }), true), [
                    '--enable-source-maps',
                    "--loader=".concat(loader)
                ], false), nodeArgs, true);
                // impossible, include has a default, but Jack's TS doesn't know that
                /* c8 ignore start */
                if (main_config_js_1.values.include === undefined) {
                    throw new Error('no include option provided');
                }
                /* c8 ignore stop */
                process.env._TAPJS_PROCESSINFO_CWD_ = config.globCwd;
                return [4 /*yield*/, (0, list_js_1.list)(args, config)];
            case 2:
                files = _c.sent();
                if (args.length && !files.length) {
                    console.error('No valid test files found matching ' +
                        args.map(function (a) { return JSON.stringify(a); }).join(' '));
                    process.exitCode = 1;
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, coverage_map_js_1.getCoverageMap)(config)];
            case 3:
                map = _c.sent();
                env = __assign({}, process.env);
                for (_i = 0, testEnv_1 = testEnv; _i < testEnv_1.length; _i++) {
                    e = testEnv_1[_i];
                    if (!e.includes('=')) {
                        delete env[e];
                    }
                    else {
                        split = e.split('=');
                        k = split[0];
                        v = split.slice(1).join('=');
                        env[k] = v;
                    }
                }
                // jobs has a default of os.availableParallelism or 1
                /* c8 ignore start */
                if (typeof main_config_js_1.values.jobs !== 'number') {
                    throw new Error('no jobs option provided');
                }
                return [4 /*yield*/, handleReporter(t, config)
                    /* c8 ignore start */
                ];
            case 4:
                hasReporter = _c.sent();
                stdio = hasReporter ? 'pipe' : 'inherit';
                /* c8 ignore end */
                t.buffered = false;
                return [4 /*yield*/, (0, save_list_js_1.readSave)(config)];
            case 5:
                readSaveList = _c.sent();
                saveList = config.get('save') && !readSaveList.length ? files : readSaveList;
                if (!(!config.get('changed') && !saveList.length)) return [3 /*break*/, 7];
                return [4 /*yield*/, (0, rimraf_1.rimraf)((0, path_1.resolve)(config.globCwd, '.tap'))];
            case 6:
                _c.sent();
                _c.label = 7;
            case 7:
                (0, before_js_1.runBefore)(t, argv, config);
                (0, after_js_1.runAfter)(t, argv, config);
                testPromises = [];
                if (config.get('save')) {
                    t.after(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Promise.all(testPromises)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, (0, save_list_js_1.writeSave)(config, saveList)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                t.jobs = Math.max(1, Math.min(main_config_js_1.values.jobs, files.length));
                stdinOnly = files.length === 1 &&
                    (files[0] === '-' || files[0] === '/dev/stdin') &&
                    t.pluginLoaded(stdin_1.plugin);
                if (!stdinOnly) {
                    t.teardown(function () { return (0, report_js_1.report)([], config); });
                    t.plan(files.length);
                }
                (0, output_file_js_1.outputFile)(t, config);
                (0, output_dir_js_1.outputDir)(t, config);
                _loop_1 = function (f) {
                    var mapped, coveredFiles, _d, _TAPJS_PROCESSINFO_COVERAGE_, _TAPJS_PROCESSINFO_COV_FILES_, file, buffered, p;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                if (f === '-' || f === '/dev/stdin') {
                                    if (t.pluginLoaded(stdin_1.plugin)) {
                                        if (files.length === 1)
                                            t.stdinOnly();
                                        else
                                            t.stdin();
                                        // too much to mock to pretend this isn't loaded
                                        /* c8 ignore start */
                                    }
                                    else {
                                        console.error('@tapjs/stdin plugin not loaded, skipping stdin');
                                    }
                                    return [2 /*return*/, "continue"];
                                }
                                mapped = map(f);
                                if (!(mapped === null)) return [3 /*break*/, 1];
                                _d = null;
                                return [3 /*break*/, 3];
                            case 1: return [4 /*yield*/, (0, glob_1.glob)(mapped, {
                                    cwd: config.globCwd,
                                    absolute: true,
                                })];
                            case 2:
                                _d = _e.sent();
                                _e.label = 3;
                            case 3:
                                coveredFiles = _d;
                                _TAPJS_PROCESSINFO_COVERAGE_ = coveredFiles === null ? '0' : '1';
                                _TAPJS_PROCESSINFO_COV_FILES_ = (coveredFiles || []).join('\n');
                                file = (0, path_1.resolve)(config.globCwd, f);
                                buffered = !(0, test_is_serial_js_1.testIsSerial)(file) && t.jobs > 1;
                                p = t.spawn(node, __spreadArray(__spreadArray(__spreadArray([], argv, true), [file], false), testArgs, true), {
                                    at: null,
                                    stack: '',
                                    buffered: buffered,
                                    timeout: timeout,
                                    stdio: stdio,
                                    env: __assign(__assign({}, env), { _TAPJS_PROCESSINFO_COVERAGE_: _TAPJS_PROCESSINFO_COVERAGE_, _TAPJS_PROCESSINFO_COV_FILES_: _TAPJS_PROCESSINFO_COV_FILES_ }),
                                    name: (0, node_path_1.relative)(config.globCwd, file),
                                    cwd: config.globCwd,
                                });
                                if (saveList.length) {
                                    testPromises.push(p.then(function (results) {
                                        if ((results === null || results === void 0 ? void 0 : results.ok) && saveList.includes(f))
                                            saveList.splice(saveList.indexOf(f), 1);
                                    }));
                                }
                                return [2 /*return*/];
                        }
                    });
                };
                _a = 0, _b = files.sort(function (a, b) { return a.localeCompare(b, 'en'); });
                _c.label = 8;
            case 8:
                if (!(_a < _b.length)) return [3 /*break*/, 11];
                f = _b[_a];
                return [5 /*yield**/, _loop_1(f)];
            case 9:
                _c.sent();
                _c.label = 10;
            case 10:
                _a++;
                return [3 /*break*/, 8];
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.run = run;

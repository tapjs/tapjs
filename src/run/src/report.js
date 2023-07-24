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
exports.report = void 0;
var core_1 = require("@tapjs/core");
var c8_1 = require("c8");
var promises_1 = require("fs/promises");
var opener_1 = require("opener");
var path_1 = require("path");
var report = function (args, config) { return __awaiter(void 0, void 0, void 0, function () {
    var rconf, reporter, tempDirectory, ok, cwd, r, write, stdout, s;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                rconf = config.get('coverage-report');
                // if there are args passed in, use that. The config is used if
                // calling this at the end of `tap run`
                if (args.length) {
                    config.jack.validate({ 'coverage-report': args });
                }
                reporter = args.length
                    ? args
                    : rconf && rconf.length
                        ? rconf
                        : ['text'];
                tempDirectory = (0, path_1.resolve)(config.globCwd, '.tap/coverage');
                return [4 /*yield*/, (0, promises_1.readdir)(tempDirectory).then(function (entries) { return !!entries.length; }, function () { return false; })];
            case 1:
                ok = _a.sent();
                if (!ok) {
                    (0, core_1.tap)().comment('No coverage generated');
                    process.exitCode = 1;
                    return [2 /*return*/];
                }
                cwd = process.cwd();
                /* c8 ignore start */
                try {
                    process.chdir(config.globCwd);
                }
                catch (_b) { }
                r = new c8_1.Report({
                    // no need to include/exclude, we already did that when we captured
                    reporter: reporter,
                    reportsDirectory: (0, path_1.resolve)(config.globCwd, '.tap/report'),
                    tempDirectory: (0, path_1.resolve)(config.globCwd, '.tap/coverage'),
                    excludeNodeModules: true,
                });
                write = process.stdout.write;
                stdout = [];
                process.stdout.write = function (c) {
                    stdout.push(String(c));
                    return true;
                };
                return [4 /*yield*/, r.run()];
            case 2:
                _a.sent();
                process.stdout.write = write;
                s = stdout.join('').trimEnd();
                if (s)
                    console.log(s);
                if (reporter.includes('html')) {
                    (0, opener_1.default)((0, path_1.resolve)(config.globCwd, '.tap/report/index.html'));
                }
                return [4 /*yield*/, checkCoverage(r, config)
                    /* c8 ignore start */
                ];
            case 3:
                _a.sent();
                /* c8 ignore start */
                try {
                    process.chdir(cwd);
                }
                catch (_c) { }
                return [2 /*return*/];
        }
    });
}); };
exports.report = report;
var checkCoverage = function (report, config) { return __awaiter(void 0, void 0, void 0, function () {
    var cr, comment, r, map, thresholds, summary, success, t, _i, thresholds_1, th, coverage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cr = config.get('coverage-report');
                comment = cr && !cr.includes('text');
                r = report;
                return [4 /*yield*/, r.getCoverageMapFromAllCoverageFiles()];
            case 1:
                map = _a.sent();
                thresholds = [
                    'statements',
                    'branches',
                    'functions',
                    'lines',
                ];
                summary = map.getCoverageSummary();
                success = true;
                t = (0, core_1.tap)();
                // if we didn't get anything, that means that even though it wrote
                // some coverage files, it didn't actually cover anything, which can
                // happen, for example if the test crashes before actually loading.
                if (Math.max.apply(Math, thresholds.map(function (th) { return Number(summary[th].pct) || 0; })) === 0) {
                    t.comment('No coverage generated');
                    process.exitCode = 1;
                    return [2 /*return*/];
                }
                // TODO: make levels configurable, just *default* to 100
                // only comment it if not using the text reporter, because that makes
                // it pretty obvious where the shortcomings are already.
                for (_i = 0, thresholds_1 = thresholds; _i < thresholds_1.length; _i++) {
                    th = thresholds_1[_i];
                    coverage = Number(summary[th].pct) || 0;
                    if (coverage < 100) {
                        if (comment) {
                            t.comment("ERROR: incomplete ".concat(th, " coverage (").concat(coverage, "%)"));
                        }
                        success = false;
                    }
                }
                if (success === false)
                    process.exitCode = 1;
                return [2 /*return*/];
        }
    });
}); };

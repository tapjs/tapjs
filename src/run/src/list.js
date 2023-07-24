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
exports.list = void 0;
var processinfo_1 = require("@tapjs/processinfo");
var glob_1 = require("glob");
var node_path_1 = require("node:path");
var main_config_js_1 = require("./main-config.js");
var save_list_js_1 = require("./save-list.js");
var alwaysExcludeNames = [
    '.tap',
    '.nyc_output',
    '.git',
    '.hg',
    'node_modules',
    'tap-snapshots',
];
var alwaysExcludePattern = "**/@(".concat(alwaysExcludeNames.join('|'), "|tap-testdir-*)/**");
var defaultInclude = '**/{' +
    '@(test?(s)|__test?(s)__)/**/*,' +
    '*.@(test?(s)|spec),' +
    'test?(s)' +
    '}.@([mc][jt]s|[jt]s?(x))';
var dirInclude = '**/*.@(?([mc])[jt]s?(x))';
// --save=<file>
//    only run the files in the list, write failures back to it.
//    If the file doesn't exist, run everything normally.
//    Otherwise, don't delete coverage history.
//    If they all pass, delete the file.
// --changed
//    Figure out which files in the suite have changed since last run,
//    and only run those. Do not delete coverage history ever.
var list = function (args, config) { return __awaiter(void 0, void 0, void 0, function () {
    var saveList, _a, ignore, g, scurry, entries, _b, _c, _d, before, after, _i, entries_1, p, foundEntries, files;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = Set.bind;
                return [4 /*yield*/, (0, save_list_js_1.readSave)(config)];
            case 1:
                saveList = new (_a.apply(Set, [void 0, _e.sent()]))();
                ignore = [alwaysExcludePattern];
                if (main_config_js_1.values.exclude)
                    ignore.push(main_config_js_1.values.exclude);
                g = new glob_1.Glob(main_config_js_1.values.include || defaultInclude, {
                    ignore: ignore,
                    cwd: config.globCwd,
                    withFileTypes: true,
                });
                scurry = g.scurry;
                _b = Set.bind;
                _d = (_c = Promise).all;
                return [4 /*yield*/, (!args.length
                        ? g.walk()
                        : Promise.all(args.map(function (a) { return __awaiter(void 0, void 0, void 0, function () {
                            var st;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (a === '-' || a === '/dev/stdin')
                                            return [2 /*return*/, a];
                                        return [4 /*yield*/, scurry.cwd
                                                .resolve((0, node_path_1.resolve)(a))
                                                .lstat()];
                                    case 1:
                                        st = _a.sent();
                                        if (st)
                                            return [2 /*return*/, st];
                                        return [2 /*return*/, (0, glob_1.glob)(a, { absolute: true })];
                                }
                            });
                        }); })))];
            case 2: return [4 /*yield*/, _d.apply(_c, [(_e.sent()).reduce(function (set, entry) {
                        // stat the glob results a second time, even though we know
                        // that they exist, because we need their stat info later.
                        if (Array.isArray(entry)) {
                            set.push.apply(set, entry.map(function (e) { return scurry.cwd.resolve(e).lstat(); }));
                        }
                        else if (entry === '-' || entry === '/dev/stdin') {
                            set.push(entry);
                        }
                        else {
                            set.push(entry);
                        }
                        return set;
                    }, [])])];
            case 3:
                entries = new (_b.apply(Set, [void 0, (_e.sent()).filter(function (p) {
                        // enoents should already be filtered out by glob, but just in case
                        /* c8 ignore start */
                        if (!p)
                            return false;
                        /* c8 ignore stop */
                        return true;
                    })]))();
                return [4 /*yield*/, expandDirectories(scurry, entries, g.ignore)];
            case 4:
                _e.sent();
                before = config.get('before');
                after = config.get('after');
                if (before) {
                    entries.delete(scurry.cwd.resolve(before));
                }
                if (after) {
                    entries.delete(scurry.cwd.resolve(after));
                }
                if (saveList.size) {
                    for (_i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                        p = entries_1[_i];
                        if (typeof p === 'string')
                            continue;
                        if (!saveList.has(p.relativePosix()))
                            entries.delete(p);
                    }
                }
                foundEntries = entries.size !== 0;
                if (!(config.get('changed') && foundEntries)) return [3 /*break*/, 6];
                return [4 /*yield*/, pruneUnchanged(scurry, entries)];
            case 5:
                _e.sent();
                _e.label = 6;
            case 6:
                files = __spreadArray([], entries, true).map(function (p) {
                    return typeof p === 'string' ? p : p.relativePosix();
                });
                if (main_config_js_1.mainCommand === 'list') {
                    if (foundEntries) {
                        // don't report an error if we found something but it's just not new
                        if (files.length)
                            console.log(files.join('\n').trimEnd());
                    }
                    else {
                        console.error('No files found.');
                        process.exitCode = 1;
                        if (args.length === 1 && /^plugins?$/.test(args[0])) {
                            console.error("(Did you mean 'tap plugin list'?)");
                        }
                    }
                }
                return [2 /*return*/, files];
        }
    });
}); };
exports.list = list;
var expandDirectories = function (scurry, entries, ignore) { return __awaiter(void 0, void 0, void 0, function () {
    var originalCwd, _i, entries_2, entry, _a, _b, s;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                originalCwd = scurry.cwd;
                _i = 0, entries_2 = entries;
                _c.label = 1;
            case 1:
                if (!(_i < entries_2.length)) return [3 /*break*/, 6];
                entry = entries_2[_i];
                if (typeof entry === 'string')
                    return [3 /*break*/, 5];
                if (!entry.isDirectory()) return [3 /*break*/, 5];
                entries.delete(entry);
                scurry.chdir(entry);
                _a = 0;
                return [4 /*yield*/, (0, glob_1.glob)(dirInclude, {
                        scurry: scurry,
                        ignore: ignore,
                        withFileTypes: true,
                    })];
            case 2:
                _b = _c.sent();
                _c.label = 3;
            case 3:
                if (!(_a < _b.length)) return [3 /*break*/, 5];
                s = _b[_a];
                entries.add(s);
                _c.label = 4;
            case 4:
                _a++;
                return [3 /*break*/, 3];
            case 5:
                _i++;
                return [3 /*break*/, 1];
            case 6:
                scurry.chdir(originalCwd);
                return [2 /*return*/];
        }
    });
}); };
// delete all the entries in the set that do not reference files
// that have changed since the last run.
var pruneUnchanged = function (scurry, entries) { return __awaiter(void 0, void 0, void 0, function () {
    var dir, db, _i, entries_3, e, pi, pie, piMtime, entryMtime, del, _a, _b, f, sources, _c, sources_1, f_1, fm;
    var _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                dir = scurry.resolve('.tap/processinfo');
                db = new processinfo_1.ProcessInfo({ dir: dir });
                return [4 /*yield*/, db.load()
                    // for each entry in the list, find relativePosix() in pi.externalIDs
                    // then compare the mtime of the pi entry json file with the mtime
                    // of all the files in its list. If none are newer, delete the entry
                ];
            case 1:
                _g.sent();
                _i = 0, entries_3 = entries;
                _g.label = 2;
            case 2:
                if (!(_i < entries_3.length)) return [3 /*break*/, 12];
                e = entries_3[_i];
                if (typeof e === 'string')
                    return [3 /*break*/, 11];
                pi = db.externalIDs.get(e.relativePosix());
                if (!pi)
                    return [3 /*break*/, 11];
                pie = scurry.cwd.resolve(".tap/processinfo/".concat(pi.uuid, ".json"));
                return [4 /*yield*/, pie.lstat()];
            case 3:
                piMtime = (_d = (_g.sent())) === null || _d === void 0 ? void 0 : _d.mtime;
                return [4 /*yield*/, e.lstat()];
            case 4:
                entryMtime = (_e = (_g.sent())) === null || _e === void 0 ? void 0 : _e.mtime;
                if (!piMtime || !entryMtime || entryMtime > piMtime) {
                    return [3 /*break*/, 11];
                }
                del = true;
                _a = 0, _b = pi.files;
                _g.label = 5;
            case 5:
                if (!(_a < _b.length)) return [3 /*break*/, 10];
                f = _b[_a];
                sources = pi.sources[f] || [f];
                _c = 0, sources_1 = sources;
                _g.label = 6;
            case 6:
                if (!(_c < sources_1.length)) return [3 /*break*/, 9];
                f_1 = sources_1[_c];
                return [4 /*yield*/, scurry.cwd.resolve(f_1).lstat()];
            case 7:
                fm = ((_f = (_g.sent())) === null || _f === void 0 ? void 0 : _f.mtime) || Infinity;
                if (fm > piMtime) {
                    del = false;
                    return [3 /*break*/, 10];
                }
                _g.label = 8;
            case 8:
                _c++;
                return [3 /*break*/, 6];
            case 9:
                _a++;
                return [3 /*break*/, 5];
            case 10:
                if (del) {
                    // either we failed to load the test, pi entry, or one of the files,
                    // or all the files are newer than the pi entry.
                    entries.delete(e);
                }
                _g.label = 11;
            case 11:
                _i++;
                return [3 /*break*/, 2];
            case 12: return [2 /*return*/];
        }
    });
}); };

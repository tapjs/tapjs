"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIfMatch = exports.deleteIfEmpty = exports.deleteAlways = exports.cleanYamlObject = void 0;
const stack = __importStar(require("@tapjs/stack"));
const diff_1 = require("diff");
const node_fs_1 = require("node:fs");
const tcompare_1 = require("tcompare");
const tryReadFile = (path) => {
    try {
        return (0, node_fs_1.readFileSync)(path, 'utf8');
    }
    catch (_) {
        return;
    }
};
const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
/**
 * Prepare an object for printing to YAML diagnostics.
 *
 * Looks up source, calculates diffs of actual/expected values, and so on.
 */
const cleanYamlObject = (object) => {
    const res = { ...object };
    if (hasOwn(res, 'stack') && !hasOwn(res, 'at')) {
        const st = Array.isArray(res.stack)
            ? res.stack.map(s => String(s).trimEnd() + '\n').join('')
            : String(res.stack);
        const p = stack.parseStack(st);
        res.at = p[0];
        res.stack = p.map(c => String(c) + '\n').join('');
    }
    if (typeof res.stack === 'string' &&
        res.stack &&
        !res.stack.endsWith('\n')) {
        res.stack = res.stack.trimEnd() + '\n';
    }
    if (res.errorOrigin && typeof res.errorOrigin === 'object') {
        res.errorOrigin = (0, exports.cleanYamlObject)(res.errorOrigin);
    }
    if (res.at &&
        res.at instanceof stack.CallSiteLike &&
        res.at.fileName &&
        res.at.absoluteFileName &&
        res.at.lineNumber &&
        !res.source) {
        const file = res.at.absoluteFileName;
        const content = tryReadFile(file);
        if (content) {
            const lines = content.split('\n');
            if (res.at.lineNumber <= lines.length) {
                const startLine = Math.max(res.at.lineNumber - 3, 0);
                const endLine = Math.min(res.at.lineNumber + 2, lines.length);
                const line = lines[res.at.lineNumber - 1];
                const caret = res.at.columnNumber &&
                    line &&
                    res.at.columnNumber <= line.length
                    ? ['-'.repeat(res.at.columnNumber - 1) + '^']
                    : [];
                const context = lines
                    .slice(startLine, res.at.lineNumber)
                    .concat(caret)
                    .concat(lines.slice(res.at.lineNumber, endLine));
                const csplit = context.join('\n').trimEnd();
                if (csplit)
                    res.source = csplit + '\n';
            }
        }
    }
    if (res.at && res.at instanceof stack.CallSiteLike) {
        res.at = res.at.toJSON();
    }
    // show a line by line string diff
    // diff the yaml, to make it more humane, especially
    // when strings or buffers are very large or multi-line
    // the shipped compare methods will generally supply
    // their own diff, which is much nicer.
    if ('found' in res &&
        'wanted' in res &&
        res.found !== res.wanted &&
        !res.diff) {
        const f = res.found;
        const w = res.wanted;
        if (typeof f === 'string' && typeof w === 'string')
            res.diff = (0, diff_1.createTwoFilesPatch)('expected', 'actual', w + '\n', f + '\n').replace(/^=+\n/, '');
        else if (f &&
            w &&
            typeof f === 'object' &&
            typeof w === 'object') {
            const s = (0, tcompare_1.strict)(f, w);
            if (!s.match) {
                res.diff = s.diff;
            }
            else {
                res.note = 'object identities differ';
            }
        }
        else {
            // some mixed stringly bits
            const ff = (0, tcompare_1.format)(f);
            const fw = (0, tcompare_1.format)(w);
            const fs = (typeof f === 'string' ? f : ff) + '\n';
            const ws = (typeof w === 'string' ? w : fw) + '\n';
            if (fw !== ff) {
                res.diff = (0, diff_1.createTwoFilesPatch)('expected', 'actual', ws, fs).replace(/^=+\n/, '');
            }
        }
        if (res.diff === '--- expected\n+++ actual\n') {
            delete res.diff;
        }
        if (res.diff) {
            delete res.found;
            delete res.wanted;
        }
    }
    for (const [key, value] of Object.entries(res)) {
        if (shouldDeleteKey(key, value)) {
            delete res[key];
        }
    }
    // if the 'message' is a string, then we print it on the
    // test point, so no need to repeat in the diags
    if (typeof res.message === 'string')
        delete res.message;
    // worker: remove inline code
    if (res.eval === true &&
        typeof res.filename === 'string' &&
        res.filename.includes('\n')) {
        res.filename = '<inline code>';
    }
    return res;
};
exports.cleanYamlObject = cleanYamlObject;
/**
 * Properties that are *always* removed from the diagnostics, either because
 * they are internal (eg, `time`), overly noisy (eg, `parent`), or captured
 * elsewhere in the TAP output (eg, `skip`).
 */
exports.deleteAlways = new Set([
    'todo',
    'time',
    'childId',
    'cb',
    'name',
    'indent',
    'skip',
    'bail',
    'diagnostic',
    'buffered',
    'parent',
    // only relevant if activated, a failedTodo or failedSkip will be added
    'failSkip',
    'failTodo',
    // TODO: keys added by plugins, but referenced here
    // How can this list be adjusted by plugins?
    'grep',
    'grepInvert',
    'only',
    'saveFixture',
    'env',
]);
/**
 * Fields on this list are removed from YAML diagnostics if they are empty
 * (ie, falsey, empty array, or object with no keys)
 */
exports.deleteIfEmpty = new Set([
    'at',
    'stack',
    'context',
    'debug',
    // TODO: keys added by plugins, but referenced here
    // How can this list be adjusted by plugins?
    'runOnly',
    'compareOptions',
]);
/**
 * Fields are removed from YAML diagnostics if they match any of these
 * patterns.
 */
exports.deleteIfMatch = [
    /^_?tapChild/,
    /^tapStream/,
    // TODO: create a @tapjs/mocha plugin
    /^tapMochaTest/,
];
const shouldDeleteKey = (key, value) => exports.deleteAlways.has(key) ||
    (exports.deleteIfEmpty.has(key) && isEmpty(value)) ||
    exports.deleteIfMatch.some(r => r.test(key));
// return true if object is empty, including inherited properties
const isEmpty = (obj) => {
    if (!obj) {
        return true;
    }
    if (typeof obj !== 'object') {
        return false;
    }
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }
    for (const _ in obj) {
        return false;
    }
    return true;
};
//# sourceMappingURL=clean-yaml-object.js.map
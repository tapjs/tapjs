import * as stack from '@tapjs/stack';
import { createTwoFilesPatch } from 'diff';
import { readFileSync } from 'node:fs';
import { format, strict } from 'tcompare';
const tryReadFile = (path) => {
    try {
        return readFileSync(path, 'utf8');
    }
    catch (_) {
        return;
    }
};
const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
export const cleanYamlObject = (object) => {
    const res = { ...object };
    if (hasOwn(res, 'stack') && !hasOwn(res, 'at')) {
        const st = Array.isArray(res.stack)
            ? res.stack.map(s => String(s).trimEnd() + '\n').join('')
            : String(res.stack);
        res.at = stack.parseStack(st)[0];
    }
    if (res.at &&
        res.at instanceof stack.CallSiteLike &&
        res.at.fileName &&
        res.at.absoluteFileName &&
        res.at.lineNumber &&
        !res.source &&
        !res.parent) {
        const file = res.at.absoluteFileName;
        const content = tryReadFile(file);
        if (content) {
            const lines = content.split('\n');
            if (res.at.lineNumber <= lines.length) {
                const startLine = Math.max(res.at.lineNumber - 3, 0);
                const endLine = Math.min(res.at.lineNumber + 2, lines.length);
                const caret = res.at.columnNumber &&
                    res.at.columnNumber <= lines[res.at.lineNumber - 1].length
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
    if (res.found &&
        res.wanted &&
        res.found !== res.wanted &&
        !res.diff) {
        const f = res.found;
        const w = res.wanted;
        if (typeof f === 'string' && typeof w === 'string')
            res.diff = createTwoFilesPatch('expected', 'actual', w + '\n', f + '\n').replace(/^=+\n/, '');
        else if (f &&
            w &&
            typeof f === 'object' &&
            typeof w === 'object') {
            const s = strict(f, w);
            if (!s.match) {
                res.diff = s.diff;
            }
            else {
                res.note = 'object identities differ';
            }
        }
        else {
            // some mixed stringly bits
            // XXX tcompare needs better string diffs
            const ff = format(f);
            const fw = format(w);
            const fs = (typeof f === 'string' ? f : ff) + '\n';
            const ws = (typeof w === 'string' ? w : fw) + '\n';
            /* istanbul ignore else - impossible without bug in tcompare */
            if (fw !== ff) {
                res.diff = createTwoFilesPatch('expected', 'actual', ws, fs).replace(/^=+\n/, '');
            }
            else {
                res.note = 'object identities differ';
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
    return res;
};
export const deleteAlways = new Set([
    'todo',
    'time',
    'childId',
    'cb',
    'name',
    'indent',
    'skip',
    'bail',
    'grep',
    'grepInvert',
    'only',
    'diagnostic',
    'buffered',
    'parent',
    'saveFixture',
    'env',
]);
export const deleteIfEmpty = new Set([
    'at',
    'stack',
    'runOnly',
    'context',
    'compareOptions',
]);
export const deleteIfMatch = [
    /^_?tapChild/,
    /^tapStream/,
    /^tapMochaTest/,
];
const shouldDeleteKey = (key, value) => deleteAlways.has(key) ||
    (deleteIfEmpty.has(key) && isEmpty(value)) ||
    deleteIfMatch.some(r => r.test(key));
// return true if object is empty, including inherited properties
const isEmpty = (obj) => {
    if (!obj) {
        return true;
    }
    if (typeof obj !== 'object') {
        return false;
    }
    for (const _ in obj) {
        return false;
    }
    return true;
};
//# sourceMappingURL=clean-yaml-object.js.map
"use strict";
// some main stuff, mostly for the index runner, but also used
// in a few other places.
// Putting it here in this module prevents a cycle that makes it
// annoying to load units in the tests for this package.
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainBin = exports.args = exports.mainCommand = exports.positionals = exports.values = exports.config = void 0;
var config_1 = require("@tapjs/config");
exports.config = await config_1.TapConfig.load();
exports.values = (_a = exports.config.parse(), _a.values), exports.positionals = _a.positionals;
exports.mainCommand = exports.positionals[0] ||
    (exports.values.help
        ? 'help'
        : exports.values.version
            ? 'version'
            : exports.values.versions
                ? 'versions'
                : 'run');
var commands = new Set([
    'help',
    'versions',
    'version',
    'run',
    'build',
    'report',
    'dump-config',
    'plugin',
    'list',
]);
if (!commands.has(exports.mainCommand))
    exports.mainCommand = 'run';
exports.args = exports.positionals[0] === exports.mainCommand ? exports.positionals.slice(1) : exports.positionals;
exports.mainBin = String(new URL('index.js', import.meta.url));

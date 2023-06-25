"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("node:os");
var tap_1 = require("tap");
var p = ((_a = os.availableParallelism) === null || _a === void 0 ? void 0 : _a.call(os)) || os.cpus().length || 1;
if (undefined === process.argv[2]) {
    tap_1.default.jobs = p;
    for (var i = 0; i < tap_1.default.jobs * 4; i++) {
        tap_1.default.spawn(process.execPath, [
            __filename,
            String(i),
        ], 'expensive computation');
    }
}
else {
    var i = +process.argv[2];
    var start = Date.now();
    while (Date.now() < start + 1000)
        ;
    tap_1.default.pass("expensive computation ".concat(i, " completed"));
}

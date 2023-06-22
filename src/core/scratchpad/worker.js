"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var os = require("node:os");
var tap_1 = require("tap");
var p = ((_a = os.availableParallelism) === null || _a === void 0 ? void 0 : _a.call(os)) || os.cpus().length || 1;
if (tap_1.default.isMainThread) {
    tap_1.default.jobs = p * 4;
    for (var i = 0; i < p * 10; i++) {
        tap_1.default.worker(__dirname + '/worker.js', { workerData: i }, 'expensive computation');
    }
}
else {
    var i = tap_1.default.workerData;
    var start = Date.now();
    while (Date.now() < start + 1000)
        ;
    tap_1.default.pass("expensive computation ".concat(i, " completed"));
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@tapjs/core");
const tap_1 = __importDefault(require("tap"));
const index_js_1 = require("../dist/cjs/index.js");
tap_1.default.matchSnapshot(index_js_1.config, 'config');
tap_1.default.equal(tap_1.default.pluginLoaded(index_js_1.plugin), false, 'plugin not loaded by default');
const originalEnv = { ...process.env };
tap_1.default.beforeEach(t => t.intercept(process, 'env', { value: { ...originalEnv } }));
tap_1.default.test('apply plugin to a test object', t => {
    const errs = t.capture(console, 'error');
    const tb = new core_1.TestBase({ name: 'esbk test' });
    const res = (0, index_js_1.plugin)(tb);
    t.strictSame(res, {}, 'just an empty object');
    t.strictSame(errs.args(), [
        [
            '\n' +
                '@tapjs/esbuild-kit may behave strangely when used along with\n' +
                'the @tapjs/typescript default plugin.\n' +
                '\n' +
                'Please run: tap plugin rm @tapjs/typescript\n',
        ],
    ]);
    t.end();
});
tap_1.default.test('only warn one time', t => {
    const errs = t.capture(console, 'error');
    const tb = new core_1.TestBase({ name: 'esbk test' });
    const res = (0, index_js_1.plugin)(tb);
    t.strictSame(res, {}, 'just an empty object');
    t.strictSame(errs.args(), []);
    t.end();
});
tap_1.default.test('set the configs from tap configs', async (t) => {
    t.capture(console, 'error');
    delete process.env.ESBK_TSCONFIG_PATH;
    delete process.env.ESBK_DISABLE_CACHE;
    process.env.TAP_ESBK_TSCONFIG_PATH = 'some-path';
    process.env.TAP_ESBK_DISABLE_CACHE = '1';
    const { plugin } = t.mockRequire('../dist/cjs/index.js');
    const tb = new core_1.TestBase({ name: 'esbk env test' });
    plugin(tb);
    t.match(process.env, {
        ESBK_TSCONFIG_PATH: 'some-path',
        ESBK_DISABLE_CACHE: '1',
    });
});
//# sourceMappingURL=index.js.map
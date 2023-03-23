"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var after_each_js_1 = require("../dist/cjs/plugin/after-each.js");
var before_each_js_1 = require("../dist/cjs/plugin/before-each.js");
var test_base_js_1 = require("../dist/cjs/test-base.js");
var opts = {
    debug: /\btap\b/.test(process.env.NODE_DEBUG || ''),
    name: 'TAP'
};
var p0 = (0, after_each_js_1.plugin)(test_base_js_1.TestBase);
var P0 = /** @class */ (function (_super) {
    __extends(P0, _super);
    function P0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return P0;
}((0, after_each_js_1.plugin)(test_base_js_1.TestBase)));
var p1 = (0, before_each_js_1.plugin)(p0);
var P1 = /** @class */ (function (_super) {
    __extends(P1, _super);
    function P1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return P1;
}((0, before_each_js_1.plugin)(test_base_js_1.TestBase)));
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // this has to be overridden to provide a default Class type
    Test.prototype.test = function (name, extra, cb) {
        return _super.prototype.test.call(this, name, extra, cb);
    };
    Test.prototype.end = function () {
        return _super.prototype.end.call(this);
    };
    return Test;
}(p1));
var t = new Test(opts);
t.stream.pipe(process.stdout);
t.runMain(function () { });
t.beforeEach(function () {
    console.log('first beforeEach');
});
t.beforeEach(function () {
    console.log('second beforeEach');
});
t.afterEach(function () {
    console.log('parent aftereach');
});
t.test('hello', {}, function (t) {
    t.pass('this is fine');
    t.beforeEach(function () {
        console.log('child beforeeach');
    });
    t.afterEach(function () {
        console.log('child aftereach');
    });
    t.test('hello child', {}, function (t) {
        t.pass('also fine');
        t.end();
    });
    t.end();
});
t.end();

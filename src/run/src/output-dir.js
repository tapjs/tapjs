"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outputDir = void 0;
var fs_1 = require("fs");
var mkdirp_1 = require("mkdirp");
var path_1 = require("path");
var outputDir = function (t, config) {
    var outputDir = config.get('output-dir');
    if (outputDir) {
        t.on('spawn', function (subtest) {
            var out = (0, path_1.resolve)(outputDir, subtest.name + '.tap');
            (0, mkdirp_1.mkdirpSync)((0, path_1.dirname)(out));
            subtest.on('process', function (proc) {
                return proc.stdout.pipe((0, fs_1.createWriteStream)(out));
            });
        });
    }
};
exports.outputDir = outputDir;

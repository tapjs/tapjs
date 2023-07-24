"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outputFile = void 0;
var minipass_1 = require("minipass");
var mkdirp_1 = require("mkdirp");
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var outputFile = function (t, config) {
    var outputFile = config.get('output-file');
    if (outputFile) {
        (0, mkdirp_1.mkdirpSync)((0, node_path_1.dirname)((0, node_path_1.resolve)(outputFile)));
        var m = new minipass_1.Minipass({ encoding: 'utf8' });
        m.pipe(process.stdout);
        m.pipe((0, node_fs_1.createWriteStream)((0, node_path_1.resolve)(outputFile)));
        t.register();
        t.pipe(m);
    }
};
exports.outputFile = outputFile;

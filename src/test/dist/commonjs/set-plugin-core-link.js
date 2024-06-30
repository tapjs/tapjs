"use strict";
/**
 * create a symlink from our @tapjs/core into the plugin dir's node_modules
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPluginCoreLink = void 0;
const fs_1 = require("fs");
const mkdirp_1 = require("mkdirp");
const path_1 = require("path");
const rimraf_1 = require("rimraf");
const readLink = (pluginCore) => {
    try {
        return (0, fs_1.readlinkSync)(pluginCore);
    }
    catch { }
};
const setPluginCoreLink = (pluginDir, core) => {
    const pluginNM = (0, path_1.resolve)(pluginDir, 'node_modules');
    const pluginCore = (0, path_1.resolve)(pluginNM, '@tapjs/core');
    const target = readLink(pluginCore);
    if (target !== core) {
        (0, rimraf_1.rimrafSync)(pluginCore);
        (0, mkdirp_1.mkdirpSync)((0, path_1.dirname)(pluginCore));
        (0, fs_1.symlinkSync)(core, pluginCore);
    }
};
exports.setPluginCoreLink = setPluginCoreLink;
//# sourceMappingURL=set-plugin-core-link.js.map
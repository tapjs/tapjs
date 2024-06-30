"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPluginPackageJson = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const getPkg = (pluginDir) => {
    try {
        const p = JSON.parse((0, fs_1.readFileSync)((0, path_1.resolve)(pluginDir, 'package.json'), 'utf8'));
        return !p || typeof p !== 'object' || Array.isArray(p) ? {} : p;
    }
    catch {
        return {};
    }
};
/**
 * call wth the pluginDir and the path to @tapjs/core
 * and it'll make sure that the plugin dir has a package.json
 * that depends on the symlink we're about to create.
 */
const setPluginPackageJson = (pluginDir, core) => {
    const pluginPJ = (0, path_1.resolve)(pluginDir, 'package.json');
    const pkg = {
        devDependencies: {
            '@tapjs/core': `file://${core}`,
        },
    };
    const pluginPkg = getPkg(pluginDir);
    if (pluginPkg.devDependencies?.['@tapjs/core'] !== `file://${core}`) {
        (0, fs_1.rmSync)((0, path_1.resolve)(pluginDir, 'package.json'), {
            recursive: true,
            force: true,
        });
        (0, fs_1.writeFileSync)(pluginPJ, JSON.stringify({
            ...pkg,
            ...pluginPkg,
            devDependencies: {
                ...pluginPkg.devDependencies,
                ...pkg.devDependencies,
            },
        }, null, 2) + '\n');
    }
};
exports.setPluginPackageJson = setPluginPackageJson;
//# sourceMappingURL=set-plugin-package-json.js.map
import { readFileSync, rmSync, writeFileSync } from 'fs';
import { resolve } from 'path';
const getPkg = (pluginDir) => {
    try {
        const p = JSON.parse(readFileSync(resolve(pluginDir, 'package.json'), 'utf8'));
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
export const setPluginPackageJson = (pluginDir, core) => {
    const pluginPJ = resolve(pluginDir, 'package.json');
    const pkg = {
        devDependencies: {
            '@tapjs/core': `file://${core}`,
        },
    };
    const pluginPkg = getPkg(pluginDir);
    if (pluginPkg.devDependencies?.['@tapjs/core'] !== `file://${core}`) {
        rmSync(resolve(pluginDir, 'package.json'), {
            recursive: true,
            force: true,
        });
        writeFileSync(pluginPJ, JSON.stringify({
            ...pkg,
            ...pluginPkg,
            devDependencies: {
                ...pluginPkg.devDependencies,
                ...pkg.devDependencies,
            },
        }, null, 2) + '\n');
    }
};
//# sourceMappingURL=set-plugin-package-json.js.map
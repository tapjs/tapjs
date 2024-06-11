import { globSync } from 'glob';
import { isConfigOption } from 'jackspeak';
import { mkdirp } from 'mkdirp';
import { spawnSync } from 'node:child_process';
import { readFileSync, symlinkSync, writeFileSync } from 'node:fs';
import { lstat } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { basename, dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { findPackageJson } from 'package-json-from-dist';
import { resolveImport } from 'resolve-import';
import { rimrafSync } from 'rimraf';
import { walkUp } from 'walk-up-path';
const cwd = process.cwd();
let projectRoot = cwd;
// try to find a .tap folder, package.json file, or .taprc
for (const dir of walkUp(cwd)) {
    const checks = await Promise.all(['.tap', '.taprc', '.git', 'package.json', 'node_modules'].map(async (x) => lstat(x).then(() => true, () => false)));
    if (checks.find(x => x)) {
        projectRoot = dir;
        break;
    }
}
const pluginDir = resolve(projectRoot, '.tap/plugins');
const pluginNM = resolve(pluginDir, 'node_modules');
if (typeof process.argv[2] !== 'string') {
    console.error('usage: generate-tap-test-class [...plugins]');
    process.exit(1);
}
const pj = findPackageJson(import.meta.url);
const scriptsDir = resolve(dirname(pj), 'scripts');
const templateFile = resolve(scriptsDir, './test-template.ts');
let template = readFileSync(templateFile, 'utf8');
const defaultTarget = resolve(scriptsDir, '../test-built');
const sortedStrings = (s) => s.sort((a, b) => a.localeCompare(b, 'en'));
const sortedMapEntries = (m) => [...m.entries()].sort(([a], [b]) => a.localeCompare(b, 'en'));
const sortedMapValues = (m) => sortedMapEntries(m).map(([_, v]) => v);
// override in testing, otherwise always the default
/* c8 ignore start */
const dir = process.env._TESTING_TEST_BUILD_TARGET_ || defaultTarget;
/* c8 ignore stop */
const require = createRequire(dir + '/x');
const dirNM = resolve(dir, 'node_modules');
// link the node_modules so it can find all installed plugins
rimrafSync(dirNM);
mkdirp.sync(dir);
mkdirp.sync(pluginNM);
symlinkSync(relative(dir, resolve(pluginDir, 'node_modules')), dirNM);
mkdirp.sync(resolve(dir, 'src'));
mkdirp.sync(resolve(dir, 'scripts'));
const out = resolve(dir, 'src/index.ts');
const copies = globSync(['LICENSE.md', 'package-template.json'], {
    cwd: scriptsDir,
});
for (const f of copies) {
    const t = f === 'package-template.json' ? 'package.json' : f;
    writeFileSync(resolve(dir, t), readFileSync(resolve(scriptsDir, f)));
}
const plugins = sortedStrings(process.argv.slice(2));
const seen = new Set();
// If a plugin does not appear in hasConfig, hasPlugin, or hasLoader,
// raise an error and do not continue.
const hasConfig = new Map();
const hasPlugin = new Map();
// has a loader, and no importLoader
const hasLoader = new Map();
// has an importLoader
const hasImport = new Map();
// the loader export, if an importLoader is present
const hasLoaderFallback = new Map();
const preloaders = new Map();
const preimports = new Map();
const testFileExtensions = new Set();
const signature = plugins.join('\n');
const signatureCode = `export const signature = \`${signature}\`
`;
const configs = new Map();
const validPlugin = (p) => !!p &&
    typeof p === 'object' &&
    !!(p.plugin || p.loader || p.importLoader || p.config) &&
    (p.plugin === undefined || typeof p.plugin === 'function') &&
    (p.config === undefined ||
        (!!p.config && typeof p.config === 'object')) &&
    (p.loader === undefined || typeof p.loader === 'string') &&
    (p.importLoader === undefined ||
        typeof p.importLoader === 'string') &&
    (p.preload === undefined || typeof p.preload === 'boolean');
const pluginNames = await Promise.all(plugins.map(async (p) => {
    // this also verifies that all plugins can be loaded, or it'll blow
    // up at this point.
    let imp;
    let req;
    try {
        req = require(p);
    }
    catch (er) {
        /* c8 ignore start */
        console.error(`'${p}' does not appear to be a tap plugin. Could not load ` +
            `module with require().`, er instanceof Error ? er.message : er);
        /* c8 ignore start */
        process.exit(1);
    }
    if (!validPlugin(req)) {
        const k = String(Object.keys(req));
        const keys = k.length < 50 ? k : k.substring(0, 40) + '...';
        console.error(`'${p}' does not appear to be a tap plugin. When ` +
            `loaded with require(), must export at least one of: ` +
            'a plugin function, config object, loader module identifier, ' +
            'or importLoader module identifier. Got: ' +
            keys);
        process.exit(1);
    }
    try {
        imp = await import(String(await resolveImport(p, dir + '/x')));
    }
    catch (er) {
        /* c8 ignore start */
        console.error(`'${p}' does not appear to be a tap plugin. Could not load ` +
            `module with import().`, er instanceof Error ? er.message : er);
        /* c8 ignore start */
        process.exit(1);
    }
    if (!validPlugin(imp)) {
        const k = String(Object.keys(req));
        const keys = k.length < 50 ? k : k.substring(0, 40) + '...';
        console.error(`'${p}' does not appear to be a tap plugin. When ` +
            `loaded with import(), must export at least one of: ` +
            'a plugin function, config object, loader module identifier, ' +
            'or importLoader module identifier. Got: ' +
            keys);
        process.exit(1);
    }
    const n = 'Plugin_' +
        basename(p)
            .replace(/\.([cm]?[jt]sx?)$/, '')
            .replace(/[-_.]+(.)/g, (_, $1) => $1.toUpperCase())
            .replace(/[^a-zA-Z0-9]+/g, ' ')
            .trim()
            .replace(' ', '_');
    let name;
    if (!seen.has(n)) {
        name = n;
    }
    else {
        let i = 0;
        while (seen.has(n + '_' + ++i)) { }
        const ni = `${n}_${i}`;
        name = ni;
    }
    seen.add(name);
    if (imp.config) {
        hasConfig.set(p, name);
        configs.set(p, imp.config);
    }
    if (typeof imp.plugin === 'function') {
        hasPlugin.set(p, name);
    }
    if (typeof imp.importLoader === 'string') {
        if (imp.preload === true)
            preimports.set(p, imp.importLoader);
        hasImport.set(p, imp.importLoader);
    }
    if (typeof imp.loader === 'string') {
        if (imp.preload === true)
            preloaders.set(p, imp.loader);
        if (!imp.importLoader)
            hasLoader.set(p, imp.loader);
        else
            hasLoaderFallback.set(p, imp.loader);
    }
    // we can't reasonably add more file types if we didn't add some
    // functionality.
    if (imp.testFileExtensions !== undefined) {
        const invalidTestFileExtensions = () => {
            console.error(`'${p}' exports an invalid testFileExtensions. Must be string[].`);
            process.exit(1);
        };
        if (!Array.isArray(imp.testFileExtensions)) {
            invalidTestFileExtensions();
        }
        else {
            for (const k of imp.testFileExtensions) {
                if (typeof k !== 'string') {
                    invalidTestFileExtensions();
                }
                testFileExtensions.add(k);
            }
        }
    }
    return name;
}));
const pluginImport = plugins
    .map((p, i) => `import * as ${pluginNames[i]} from ${JSON.stringify(p)}\n`)
    .join('');
const pluginsConfig = (() => {
    let code = `export const config = <C extends ConfigSet>(jack: Jack<C>) => `;
    if (!hasConfig.size)
        return code + 'jack\n';
    const nodeArgsHead = `export const execArgv = (\n` +
        `  values: ReturnType<ReturnType<typeof config>['parse']>['values']\n` +
        `) => {\n` +
        `  const argv = []\n`;
    const nodeArgsTail = '  return argv\n}\n\n';
    let nodeArgsDefs = '';
    let nodeArgsBody = '';
    code += '{\n';
    const hasConfigEntries = sortedMapEntries(hasConfig);
    for (const [p, name] of hasConfigEntries) {
        let c = 0;
        for (const [field, cfg] of Object.entries(configs.get(p) || {})) {
            const jf = JSON.stringify(field);
            const cn = `config_${name}_${c}`;
            const def = `  const ${cn} = ${name}.config[${jf}]\n`;
            code += def;
            const t = JSON.stringify(cfg.type);
            const m = JSON.stringify(!!cfg.multiple);
            const msg = `Invalid config option '${field}' defined in plugin: '${p}'`;
            if (!isConfigOption(cfg, cfg.type, !!cfg.multiple)) {
                console.error(msg);
                process.exit(1);
            }
            const mc = JSON.stringify(msg);
            code += `  if (!isConfigOption(${cn}, ${t}, ${m})) {\n`;
            code += `    throw new Error(${mc})\n`;
            code += '  }\n';
            if (typeof cfg.nodeArgs === 'function') {
                const cv = `${cn}_value`;
                nodeArgsDefs += def;
                nodeArgsDefs += `  const ${cv} = values[${JSON.stringify(field)}]\n`;
                nodeArgsBody +=
                    `  if (${cv} !== undefined) {\n` +
                        `    argv.push(...${cn}.nodeArgs(${cv}))\n` +
                        `  }\n`;
            }
            c++;
        }
    }
    // now ts should know that they're all legit, and we've verified
    // here as well, so the build would fail if they weren't.
    code += '  return jack\n';
    for (const [p, name] of hasConfigEntries) {
        let c = 0;
        const fp = `From plugin: ${p}`;
        code += `    .heading(${JSON.stringify(fp)})\n`;
        for (const [field, cfg] of Object.entries(configs.get(p) || {})) {
            const jf = JSON.stringify(field);
            const fn = (cfg.type === 'boolean' ? 'flag'
                : cfg.type === 'number' ? 'num'
                    : 'opt') + (cfg.multiple ? 'List' : '');
            code += `    .${fn}({ ${jf}: config_${name}_${c++} })\n`;
        }
    }
    code += '}\n';
    const nodeArgs = !nodeArgsDefs ? '' : (nodeArgsHead + nodeArgsDefs + nodeArgsBody + nodeArgsTail);
    return nodeArgs + code;
})();
const pluginsCode = `export type PluginSet = ${hasPlugin.size ?
    `[
${sortedMapValues(hasPlugin)
        .map(name => `  typeof ${name}.plugin,\n`)
        .join('')}]`
    : '(TapPlugin<any> | TapPlugin<any, TestBaseOpts>)[]'}

const plugins = () => {
  if (plugins_) return plugins_
  return (plugins_ = [
${sortedMapValues(hasPlugin)
    .map(name => `    ${name}.plugin,\n`)
    .join('')}  ])
}
`;
const pluginLoaders = `const preloaders = new Set<string>(${JSON.stringify(sortedMapValues(preloaders), null, 2)})

const preimports = new Set<string>(${JSON.stringify(sortedMapValues(preimports), null, 2)})

/**
 * The set of \`loader\` strings exported by plugins. If a plugin exports
 * \`preload = true\`, then it will be sorted to the start of this list, so
 * that Node loads it before other loaders.
 */
export const loaders: string[] = ${JSON.stringify(sortedMapValues(hasLoader), null, 2)}.sort(
  (a, b) => preloaders.has(a) && !preloaders.has(b) ? -1
    : !preloaders.has(a) && preloaders.has(b) ? 1
    : 0
)

/**
 * The set of \`importLoader\` strings exported by plugins, for use with
 * \`Module.register\` in node v20.6 and higher.
 */
export const importLoaders: string[] = ${JSON.stringify(sortedMapValues(hasImport), null, 2)}.sort(
  (a, b) => preimports.has(a) && !preimports.has(b) ? -1
    : !preimports.has(a) && preimports.has(b) ? 1
    : 0
)

/**
 * All \`loader\` strings exported by plugins, including fallbacks provided
 * for those that also export an \`importLoader\`
 */
export const loaderFallbacks: string[] = ${JSON.stringify(sortedMapValues(new Map([...hasLoaderFallback, ...hasLoader])), null, 2)}.sort(
  (a, b) => preloaders.has(a) && !preloaders.has(b) ? -1
    : !preloaders.has(a) && preloaders.has(b) ? 1
    : 0
)

`;
const testFileExtensionsCode = sortedStrings([...testFileExtensions])
    .map(ext => `testFileExtensions.add(${JSON.stringify(ext)})\n`)
    .join('');
const swapTag = (src, tag, code) => {
    const st = '//{{' + tag + ' START}}\n';
    const et = '//{{' + tag + ' END}}\n';
    const start = src.indexOf(st) + st.length;
    const end = src.indexOf(et);
    const mid = src.substring(start, end);
    return (src.substring(0, start) +
        // if it has something other than comments, include it
        (mid.replace(/\s*^\/\/.*\n/gm, '').trim() &&
            mid.trimEnd().replace(/^/gm, '// ') + '\n') +
        code +
        src.substring(end));
};
const swapTags = (src, tags) => {
    let res = src;
    for (const [tag, code] of Object.entries(tags)) {
        res = swapTag(res, tag, code);
    }
    return res;
};
writeFileSync(out, swapTags(template, {
    'HEADER COMMENT': `// This file is automatically generated, edits will be lost on rebuild\n`,
    'PLUGIN IMPORT': pluginImport,
    'PLUGINS CODE': pluginsCode,
    'PLUGINS CONFIG': pluginsConfig,
    'PLUGIN SIGNATURE': signatureCode,
    LOADERS: pluginLoaders,
    'FILE TYPES': testFileExtensionsCode,
}));
const tshy = fileURLToPath(await resolveImport('tshy', import.meta.url));
const res = spawnSync(process.execPath, [tshy], {
    cwd: dir,
    stdio: 'inherit',
});
if (res.status !== 0 || res.signal !== null) {
    console.error('tap build failed', {
        code: res.status,
        signal: res.signal,
        ...(res.error && { error: res.error }),
    });
    process.exitCode = 1;
}
//# sourceMappingURL=build.mjs.map
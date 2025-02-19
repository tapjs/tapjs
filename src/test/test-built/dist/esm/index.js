//{{HEADER COMMENT START}}
// This file is automatically generated, edits will be lost on rebuild
//{{HEADER COMMENT END}}
var _a;
import { parseTestArgs, TestBase, } from '@tapjs/core';
//{{PLUGIN IMPORT START}}
import * as Plugin_after from "@tapjs/after";
import * as Plugin_afterEach from "@tapjs/after-each";
import * as Plugin_asserts from "@tapjs/asserts";
import * as Plugin_before from "@tapjs/before";
import * as Plugin_beforeEach from "@tapjs/before-each";
import * as Plugin_chdir from "@tapjs/chdir";
import * as Plugin_filter from "@tapjs/filter";
import * as Plugin_fixture from "@tapjs/fixture";
import * as Plugin_intercept from "@tapjs/intercept";
import * as Plugin_mock from "@tapjs/mock";
import * as Plugin_nodeSerialize from "@tapjs/node-serialize";
import * as Plugin_snapshot from "@tapjs/snapshot";
import * as Plugin_spawn from "@tapjs/spawn";
import * as Plugin_stdin from "@tapjs/stdin";
import * as Plugin_typescript from "@tapjs/typescript";
import * as Plugin_worker from "@tapjs/worker";
import { isConfigOption } from 'jackspeak';
import { inspect } from 'node:util';
/**
 * The set of file extensions that the tap runner will load
 * by default. Expaned into the `include` config values if they
 * contain the token `__EXTENSIONS__`.
 *
 * If plugins export a `testFileExtensions` string array, then the
 * entries will be added to this set.
 */
export const testFileExtensions = new Set(['js', 'cjs', 'mjs', 'tap']);
//{{FILE TYPES START}}
testFileExtensions.add("cts");
testFileExtensions.add("jsx");
testFileExtensions.add("mts");
testFileExtensions.add("ts");
testFileExtensions.add("tsx");
//{{FILE TYPES END}}
const kInspect = Symbol.for('nodejs.util.inspect.custom');
const copyInspect = (v) => ({
    [kInspect]: (...args) => inspect(v, ...args),
});
const copyToString = (v) => ({
    toString: Object.assign(() => v.toString(), {
        toString: () => 'function toString() { [native code] }',
    }),
});
const copyFunction = (t, plug, v) => {
    const f = function (...args) {
        // if you do `const { method } = t` then calling `method` will
        // call it on the plugin that provided it.
        // So no need to pre-bind anything, really.
        const thisArg = this === t || this === undefined ? plug : this;
        const ret = v.apply(thisArg, args);
        // If a plugin method returns 'this', and it's the plugin,
        // then we return the extended Test instead.
        return ret === thisArg && thisArg === plug ? t : ret;
    };
    const vv = Object.assign(Object.assign(f, v), copyToString(v), copyInspect(v));
    vv.prototype = v.prototype;
    const nameProp = Reflect.getOwnPropertyDescriptor(v, 'name');
    if (nameProp) {
        Reflect.defineProperty(f, 'name', nameProp);
    }
    return vv;
};
let plugins_;
const plugins = () => {
    if (plugins_)
        return plugins_;
    return (plugins_ = [
        Plugin_after.plugin,
        Plugin_afterEach.plugin,
        Plugin_asserts.plugin,
        Plugin_before.plugin,
        Plugin_beforeEach.plugin,
        Plugin_chdir.plugin,
        Plugin_filter.plugin,
        Plugin_fixture.plugin,
        Plugin_intercept.plugin,
        Plugin_mock.plugin,
        Plugin_nodeSerialize.plugin,
        Plugin_snapshot.plugin,
        Plugin_spawn.plugin,
        Plugin_stdin.plugin,
        Plugin_typescript.plugin,
        Plugin_worker.plugin,
    ]);
};
//{{PLUGINS CODE END}}
/**
 * The combined configuration object generated by the `config`
 * objects exported by plugins.
 */
//{{PLUGINS CONFIG START}}
// // just referenced to keep prettier/tslint happy
// /* c8 ignore start */
// isConfigOption
// const c = <T extends ConfigSet>(j: Jack<T>) => j
// const cs = c as unknown as ValidValue &
//   ConfigSetFromMetaSet<'boolean', false, { x: {} }>
// c
// cs
// /* c8 ignore stop */
export const execArgv = (values) => {
    const argv = [];
    const config_Plugin_filter_0 = Plugin_filter.config["only"];
    const config_Plugin_filter_0_value = values["only"];
    const config_Plugin_filter_1 = Plugin_filter.config["grep"];
    const config_Plugin_filter_1_value = values["grep"];
    if (config_Plugin_filter_0_value !== undefined) {
        argv.push(...config_Plugin_filter_0.nodeArgs(config_Plugin_filter_0_value));
    }
    if (config_Plugin_filter_1_value !== undefined) {
        argv.push(...config_Plugin_filter_1.nodeArgs(config_Plugin_filter_1_value));
    }
    return argv;
};
export const config = (jack) => {
    const config_Plugin_filter_0 = Plugin_filter.config["only"];
    if (!isConfigOption(config_Plugin_filter_0, "boolean", false)) {
        throw new Error("Invalid config option 'only' defined in plugin: '@tapjs/filter'");
    }
    const config_Plugin_filter_1 = Plugin_filter.config["grep"];
    if (!isConfigOption(config_Plugin_filter_1, "string", true)) {
        throw new Error("Invalid config option 'grep' defined in plugin: '@tapjs/filter'");
    }
    const config_Plugin_filter_2 = Plugin_filter.config["invert"];
    if (!isConfigOption(config_Plugin_filter_2, "boolean", false)) {
        throw new Error("Invalid config option 'invert' defined in plugin: '@tapjs/filter'");
    }
    const config_Plugin_filter_3 = Plugin_filter.config["no-invert"];
    if (!isConfigOption(config_Plugin_filter_3, "boolean", false)) {
        throw new Error("Invalid config option 'no-invert' defined in plugin: '@tapjs/filter'");
    }
    const config_Plugin_filter_4 = Plugin_filter.config["filter-quietly"];
    if (!isConfigOption(config_Plugin_filter_4, "boolean", false)) {
        throw new Error("Invalid config option 'filter-quietly' defined in plugin: '@tapjs/filter'");
    }
    const config_Plugin_filter_5 = Plugin_filter.config["no-filter-quietly"];
    if (!isConfigOption(config_Plugin_filter_5, "boolean", false)) {
        throw new Error("Invalid config option 'no-filter-quietly' defined in plugin: '@tapjs/filter'");
    }
    const config_Plugin_fixture_0 = Plugin_fixture.config["save-fixture"];
    if (!isConfigOption(config_Plugin_fixture_0, "boolean", false)) {
        throw new Error("Invalid config option 'save-fixture' defined in plugin: '@tapjs/fixture'");
    }
    const config_Plugin_snapshot_0 = Plugin_snapshot.config["snapshot"];
    if (!isConfigOption(config_Plugin_snapshot_0, "boolean", false)) {
        throw new Error("Invalid config option 'snapshot' defined in plugin: '@tapjs/snapshot'");
    }
    const config_Plugin_snapshot_1 = Plugin_snapshot.config["snapshot-clean-cwd"];
    if (!isConfigOption(config_Plugin_snapshot_1, "boolean", false)) {
        throw new Error("Invalid config option 'snapshot-clean-cwd' defined in plugin: '@tapjs/snapshot'");
    }
    const config_Plugin_snapshot_2 = Plugin_snapshot.config["no-snapshot-clean-cwd"];
    if (!isConfigOption(config_Plugin_snapshot_2, "boolean", false)) {
        throw new Error("Invalid config option 'no-snapshot-clean-cwd' defined in plugin: '@tapjs/snapshot'");
    }
    const config_Plugin_typescript_0 = Plugin_typescript.config["typecheck"];
    if (!isConfigOption(config_Plugin_typescript_0, "boolean", false)) {
        throw new Error("Invalid config option 'typecheck' defined in plugin: '@tapjs/typescript'");
    }
    const config_Plugin_typescript_1 = Plugin_typescript.config["tsconfig"];
    if (!isConfigOption(config_Plugin_typescript_1, "string", false)) {
        throw new Error("Invalid config option 'tsconfig' defined in plugin: '@tapjs/typescript'");
    }
    const config_Plugin_typescript_2 = Plugin_typescript.config["type-strip-only"];
    if (!isConfigOption(config_Plugin_typescript_2, "boolean", false)) {
        throw new Error("Invalid config option 'type-strip-only' defined in plugin: '@tapjs/typescript'");
    }
    return jack
        .heading("From plugin: @tapjs/filter")
        .flag({ "only": config_Plugin_filter_0 })
        .optList({ "grep": config_Plugin_filter_1 })
        .flag({ "invert": config_Plugin_filter_2 })
        .flag({ "no-invert": config_Plugin_filter_3 })
        .flag({ "filter-quietly": config_Plugin_filter_4 })
        .flag({ "no-filter-quietly": config_Plugin_filter_5 })
        .heading("From plugin: @tapjs/fixture")
        .flag({ "save-fixture": config_Plugin_fixture_0 })
        .heading("From plugin: @tapjs/snapshot")
        .flag({ "snapshot": config_Plugin_snapshot_0 })
        .flag({ "snapshot-clean-cwd": config_Plugin_snapshot_1 })
        .flag({ "no-snapshot-clean-cwd": config_Plugin_snapshot_2 })
        .heading("From plugin: @tapjs/typescript")
        .flag({ "typecheck": config_Plugin_typescript_0 })
        .opt({ "tsconfig": config_Plugin_typescript_1 })
        .flag({ "type-strip-only": config_Plugin_typescript_2 });
};
//{{PLUGINS CONFIG END}}
//{{LOADERS START}}
// // these are always added with --loader
// export const loaders = []
// // these are added with --import, if available
// export const importLoaders = []
// // these are added with --loader, only if --import is unavailable
// export const loaderFallbacks = []
const preloaders = new Set([
    "@tapjs/typescript/esm"
]);
const preimports = new Set([
    "@tapjs/typescript/import"
]);
/**
 * The set of `loader` strings exported by plugins. If a plugin exports
 * `preload = true`, then it will be sorted to the start of this list, so
 * that Node loads it before other loaders.
 */
export const loaders = [].sort((a, b) => preloaders.has(a) && !preloaders.has(b) ? -1
    : !preloaders.has(a) && preloaders.has(b) ? 1
        : 0);
/**
 * The set of `importLoader` strings exported by plugins, for use with
 * `Module.register` in node v20.6 and higher.
 */
export const importLoaders = [
    "@tapjs/mock/import",
    "@tapjs/typescript/import"
].sort((a, b) => preimports.has(a) && !preimports.has(b) ? -1
    : !preimports.has(a) && preimports.has(b) ? 1
        : 0);
/**
 * All `loader` strings exported by plugins, including fallbacks provided
 * for those that also export an `importLoader`
 */
export const loaderFallbacks = [
    "@tapjs/mock/loader",
    "@tapjs/typescript/esm"
].sort((a, b) => preloaders.has(a) && !preloaders.has(b) ? -1
    : !preloaders.has(a) && preloaders.has(b) ? 1
        : 0);
//{{LOADERS END}}
/**
 * The string signature that lists all loaded plugins alphabetically, used
 * to determine whether a rebuild is necessary by comparing it to the `plugin`
 * config value.
 */
//{{PLUGIN SIGNATURE START}}
// export const signature = ''
export const signature = `@tapjs/after
@tapjs/after-each
@tapjs/asserts
@tapjs/before
@tapjs/before-each
@tapjs/chdir
@tapjs/filter
@tapjs/fixture
@tapjs/intercept
@tapjs/mock
@tapjs/node-serialize
@tapjs/snapshot
@tapjs/spawn
@tapjs/stdin
@tapjs/typescript
@tapjs/worker`;
const applyPlugins = (base, plugs = plugins()) => {
    const ext = plugs
        // typecast in case we have *only* option-less plugins.
        .map(p => p(base, base.options))
        .concat(base);
    const getCache = new Map();
    // extend the proxy with Object.create, and then set the toStringTag
    // to 'Test', so we don't get stack frames like `Proxy.<anonymous>`
    const t = Object.create(new Proxy(base, {
        has(_, p) {
            for (const t of ext) {
                if (Reflect.has(t, p))
                    return true;
            }
            return false;
        },
        ownKeys() {
            const k = [];
            for (const t of ext) {
                const keys = Reflect.ownKeys(t);
                k.push(...keys);
            }
            return [...new Set(k)];
        },
        set(_, p, v) {
            // check to see if there's any setters, and if so, set it there
            // otherwise, just set on the base
            let didSet = false;
            if (getCache.has(p))
                getCache.delete(p);
            for (const t of ext) {
                let o = t;
                while (o) {
                    // assign to the all plugs that can receive it
                    const prop = Reflect.getOwnPropertyDescriptor(o, p);
                    if (prop) {
                        if (prop.set || prop.writable) {
                            //@ts-ignore
                            t[p] = v;
                            didSet = true;
                        }
                        break;
                    }
                    o = Reflect.getPrototypeOf(o);
                }
            }
            if (!didSet) {
                // if nothing has that field, assign to the base
                //@ts-ignore
                base[p] = v;
            }
            return true;
        },
        get(_, p) {
            if (p === 'parent') {
                return base.parent?.t;
            }
            // cache get results so t.blah === t.blah
            // we only cache functions, so that getters aren't memoized
            // Of course, a getter that returns a function will be broken,
            // at least when accessed from outside the plugin, but that's
            // a pretty narrow caveat, and easily documented.
            if (getCache.has(p))
                return getCache.get(p);
            for (const plug of ext) {
                if (p in plug) {
                    //@ts-ignore
                    const v = plug[p];
                    // Functions need special handling so that they report
                    // the correct toString and are called on the correct object
                    // Otherwise attempting to access #private props will fail.
                    if (typeof v === 'function') {
                        if (getCache.has(v))
                            return getCache.get(v);
                        const vv = copyFunction(t, plug, v);
                        getCache.set(p, vv);
                        // aliases remain aliases
                        getCache.set(v, vv);
                        return vv;
                    }
                    else {
                        return v;
                    }
                }
            }
        },
    }));
    // assign a reference to the extended Test for use in plugin at run-time
    Object.assign(base, { t });
    // put the .t self-ref and plugin inspection on top of the stack
    const top = {
        t,
        get pluginLoaded() {
            return (plugin) => {
                return plugs.includes(plugin);
            };
        },
        get plugins() {
            return [...plugs];
        },
    };
    ext.unshift(top);
    //@ts-ignore
    const tst = base[Symbol.toStringTag];
    Object.defineProperty(t, Symbol.toStringTag, {
        value: tst,
        configurable: true,
    });
    Object.defineProperty(top, Symbol.toStringTag, {
        value: tst,
        configurable: true,
    });
    return t;
};
const kPluginSet = Symbol('@tapjs/test construction plugin set');
const kClass = Symbol('@tapjs/test construction class');
/**
 * This is the class that is extended for the root {@link @tapjs/core!tap.TAP}
 * test, and used to instantiate test objects in its child tests. It extends
 * {@link @tapjs/core!test-base.TestBase}, and implements the union of return
 * values of all loaded plugins via a Proxy.
 */
export class Test extends TestBase {
    #Class;
    #pluginSet;
    /**
     * @param opts Test options for this instance
     *
     * @param __INTERNAL Extension option used by the subclasses created in
     * {@link @tapjs/test!index.Test#applyPlugin}.
     *
     * @internal
     */
    constructor(opts, __INTERNAL = {
        [kPluginSet]: plugins(),
        [kClass]: _a,
    }) {
        super(opts);
        this.#Class = __INTERNAL[kClass];
        const pluginSet = __INTERNAL[kPluginSet];
        this.#pluginSet = pluginSet;
        // need to ignore this because it's a ctor that returns a value.
        /* c8 ignore start */
        return applyPlugins(this, pluginSet);
    }
    /* c8 ignore stop */
    /**
     * The string signature of the plugins built into this Test class
     */
    get pluginSignature() {
        return signature;
    }
    /**
     * Add a plugin at run-time.
     *
     * Creates a subclass of {@link @tapjs/test!index.Test} which has the
     * specified plugin, and which applies the plugin to all child tests it
     * creates.
     *
     * Typically, it's best to load plugins using configuration, set via the
     * `tap plugin <add|rm>` command.
     *
     * However, in some cases, for example while developing plugins or if a
     * certain plugin is only needed in a small number of tests, it can be
     * useful to apply it after the fact.
     *
     * This is best used sparingly, as it may result in poor typescript
     * compilation performance, which can manifest in slower test start-up times
     * and lag loading autocomplete in editors. If you find yourself calling
     * applyPlugin often, consider whether it'd be better to just add the plugin
     * to the entire test suite, so that it can be built up front.
     *
     * @group Plugin Management
     */
    applyPlugin(plugin) {
        if (this.printedOutput) {
            throw new Error('Plugins must be applied prior to any test output');
        }
        if (this.#pluginSet.includes(plugin)) {
            throw new Error('Plugin already applied');
        }
        const p = plugin;
        const pluginSetExtended = this.#pluginSet.concat([p]);
        const extended = this;
        class TestExtended extends _a {
            constructor(opts, __INTERNAL = {
                [kPluginSet]: pluginSetExtended,
                [kClass]: TestExtended,
            }) {
                super(opts, __INTERNAL);
            }
        }
        extended.#pluginSet = pluginSetExtended;
        extended.#Class = TestExtended;
        Object.defineProperty(TestExtended, 'name', {
            value: 'Test',
            configurable: true,
        });
        return applyPlugins(extended, pluginSetExtended);
    }
    // NB: this isn't ever actually called, because we add a pluginLoaded
    // method in the applyPlugins proxy, but it's here to establish the
    // type interface.
    /**
     * Return true if the specified plugin is loaded. Asserts that the
     * test object in question implements the return value of the plugin.
     *
     * @group Plugin Management
     */
    pluginLoaded(plugin) {
        plugin;
        return false;
    }
    /**
     * Return the set of plugins loaded by this Test
     *
     * @group Plugin Management
     */
    get plugins() {
        return [];
    }
    test(...args) {
        const extra = parseTestArgs(...args);
        return this.sub(this.#Class, extra, this.test);
    }
    todo(...args) {
        const extra = parseTestArgs(...args);
        extra.todo = true;
        return this.sub(this.#Class, extra, this.todo);
    }
    skip(...args) {
        const extra = parseTestArgs(...args);
        extra.skip = true;
        return this.sub(this.#Class, extra, this.skip);
    }
}
_a = Test;
//# sourceMappingURL=index.js.map
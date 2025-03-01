import { PromiseWithSubtest, TapPlugin, TestBase, TestBaseOpts } from '@tapjs/core';
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
import type { ConfigSet, ConfigSetFromMetaSet, Jack, ValidValue } from 'jackspeak';
/**
 * The set of file extensions that the tap runner will load
 * by default. Expaned into the `include` config values if they
 * contain the token `__EXTENSIONS__`.
 *
 * If plugins export a `testFileExtensions` string array, then the
 * entries will be added to this set.
 */
export declare const testFileExtensions: Set<string>;
/**
 * Utility type to combine the array of plugins into a single combined
 * return type.
 */
export type PluginResult<P extends ((t: TestBase, opts: any) => any)[]> = P extends ([
    infer H extends (t: TestBase, opts: any) => any,
    ...infer T extends ((t: TestBase, opts: any) => any)[]
]) ? ReturnType<H> & PluginResult<T> : {};
/**
 * Utility type to get the second parameter of a function, used to
 * get the types of all plugin options.
 */
export type SecondParam<T extends [any] | [any, any]> = T extends [any, infer S] ? S : unknown;
/**
 * The union of the second parameters of all loaded plugin methods
 */
export type PluginOpts<P extends ((t: TestBase, opts: any) => any)[]> = P extends ([
    infer H extends (t: TestBase, opts: any) => any,
    ...infer T extends ((t: TestBase, opts: any) => any)[]
]) ? SecondParam<Parameters<H>> & PluginOpts<T> : {};
/**
 * Options that may be provided to `t.test()`. Extends
 * {@link @tapjs/core!index.Extra}, {@link @tapjs/core!base.BaseOpts},
 * {@link @tapjs/core!test-base.TestBaseOpts}, and the second argument to all
 * plugin methods currently in use.
 */
export type TestOpts = TestBaseOpts & PluginOpts<PluginSet>;
/**
 * Type that is the array of all plugin functions loaded
 */
export type PluginSet = [
    typeof Plugin_after.plugin,
    typeof Plugin_afterEach.plugin,
    typeof Plugin_asserts.plugin,
    typeof Plugin_before.plugin,
    typeof Plugin_beforeEach.plugin,
    typeof Plugin_chdir.plugin,
    typeof Plugin_filter.plugin,
    typeof Plugin_fixture.plugin,
    typeof Plugin_intercept.plugin,
    typeof Plugin_mock.plugin,
    typeof Plugin_nodeSerialize.plugin,
    typeof Plugin_snapshot.plugin,
    typeof Plugin_spawn.plugin,
    typeof Plugin_stdin.plugin,
    typeof Plugin_typescript.plugin,
    typeof Plugin_worker.plugin
];
/**
 * The combined configuration object generated by the `config`
 * objects exported by plugins.
 */
export declare const execArgv: (values: ReturnType<ReturnType<typeof config>["parse"]>["values"]) => string[];
export declare const config: <C extends ConfigSet>(jack: Jack<C>) => Jack<C & ConfigSetFromMetaSet<"boolean", false, {
    only: {
        type: string;
        short: string;
        description: string;
        nodeArgs: (v: boolean) => string[];
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"string", true, {
    grep: {
        type: string;
        multiple: boolean;
        hint: string;
        short: string;
        description: string;
        nodeArgs: (value: string[]) => string[];
    } & {
        type: "string";
        short?: string | undefined;
        default?: string[] | undefined;
        description?: string;
        hint?: string | undefined;
        validate?: ((v: unknown) => v is ValidValue<"string", true>) | undefined;
        validOptions?: readonly string[] | undefined;
    } & {
        multiple: true;
        delim?: string | undefined;
    };
}> & ConfigSetFromMetaSet<"boolean", false, {
    invert: {
        type: string;
        short: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"boolean", false, {
    "no-invert": {
        type: string;
        short: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"boolean", false, {
    "filter-quietly": {
        type: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"boolean", false, {
    "no-filter-quietly": {
        type: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"boolean", false, {
    "save-fixture": {
        type: string;
        short: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"boolean", false, {
    snapshot: {
        type: string;
        short: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"boolean", false, {
    "snapshot-clean-cwd": {
        type: string;
        default: boolean;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"boolean", false, {
    "no-snapshot-clean-cwd": {
        type: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"boolean", false, {
    typecheck: {
        type: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"string", false, {
    tsconfig: {
        type: string;
        description: string;
    } & {
        type: "string";
        short?: string | undefined;
        default?: string | undefined;
        description?: string;
        hint?: string | undefined;
        validate?: ((v: unknown) => v is ValidValue<"string", false>) | undefined;
        validOptions?: readonly string[] | undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & ConfigSetFromMetaSet<"boolean", false, {
    "type-strip-only": {
        type: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string;
        hint?: undefined;
        validate?: ((v: unknown) => v is boolean) | undefined;
        validOptions?: undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}>>;
/**
 * The set of `loader` strings exported by plugins. If a plugin exports
 * `preload = true`, then it will be sorted to the start of this list, so
 * that Node loads it before other loaders.
 */
export declare const loaders: string[];
/**
 * The set of `importLoader` strings exported by plugins, for use with
 * `Module.register` in node v20.6 and higher.
 */
export declare const importLoaders: string[];
/**
 * All `loader` strings exported by plugins, including fallbacks provided
 * for those that also export an `importLoader`
 */
export declare const loaderFallbacks: string[];
/**
 * The string signature that lists all loaded plugins alphabetically, used
 * to determine whether a rebuild is necessary by comparing it to the `plugin`
 * config value.
 */
export declare const signature = "@tapjs/after\n@tapjs/after-each\n@tapjs/asserts\n@tapjs/before\n@tapjs/before-each\n@tapjs/chdir\n@tapjs/filter\n@tapjs/fixture\n@tapjs/intercept\n@tapjs/mock\n@tapjs/node-serialize\n@tapjs/snapshot\n@tapjs/spawn\n@tapjs/stdin\n@tapjs/typescript\n@tapjs/worker";
/**
 * Union of {@link @tapjs/core!test-base.TestBase} plus all plugin
 * return values
 */
export type TTest<P extends PluginSet = PluginSet> = TestBase & PluginResult<P>;
/**
 * Interface that is the assembled result of every loaded plugin.
 *
 * This is extended into an interface because otherwise the code
 * hinting is overwhelmingly extravagant.
 */
export interface BuiltPlugins extends PluginResult<PluginSet> {
}
declare const kPluginSet: unique symbol;
declare const kClass: unique symbol;
/**
 * Option object used when extending the `Test` class via
 * {@link @tapjs/test!index.Test.applyPlugin}
 *
 * @internal
 */
export type PluginExtensionOption<E extends BuiltPlugins = BuiltPlugins, O extends TestOpts = TestOpts> = {
    [kPluginSet]: TapPlugin<any, O>[];
    [kClass]?: typeof Test<E, O>;
};
/**
 * interface defining the fully extended {@link @tapjs/test!index.Test} class.
 */
export interface Test<Ext extends BuiltPlugins = BuiltPlugins, Opts extends TestOpts = TestOpts> extends TTest {
    /**
     * Explicitly mark the test as completed, outputting the TAP plan line if
     * needed.
     *
     * This is not required to be called if the test function returns a promise,
     * or if a plan is explicitly declared and eventually fulfilled.
     *
     * @group Test Lifecycle Management
     */
    end(): this;
    /**
     * Specify the number of Test Points expected by this test.
     * Outputs a TAP plan line.
     *
     * @group Test Lifecycle Management
     */
    plan(n: number, comment?: string): void;
}
/**
 * This is the class that is extended for the root {@link @tapjs/core!tap.TAP}
 * test, and used to instantiate test objects in its child tests. It extends
 * {@link @tapjs/core!test-base.TestBase}, and implements the union of return
 * values of all loaded plugins via a Proxy.
 */
export declare class Test<Ext extends BuiltPlugins = BuiltPlugins, Opts extends TestOpts = TestOpts> extends TestBase implements TTest {
    #private;
    /**
     * @param opts Test options for this instance
     *
     * @param __INTERNAL Extension option used by the subclasses created in
     * {@link @tapjs/test!index.Test#applyPlugin}.
     *
     * @internal
     */
    constructor(opts: Opts, __INTERNAL?: PluginExtensionOption<Ext, Opts>);
    /**
     * The string signature of the plugins built into this Test class
     */
    get pluginSignature(): string;
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
    applyPlugin<B extends Object, O extends unknown = unknown>(plugin: TapPlugin<B, O>): Test<Ext & B, Opts & O> & Ext & B;
    /**
     * Return true if the specified plugin is loaded. Asserts that the
     * test object in question implements the return value of the plugin.
     *
     * @group Plugin Management
     */
    pluginLoaded<T extends any = any>(plugin: (t: any, opts?: any) => T): this is TestBase & T;
    /**
     * Return the set of plugins loaded by this Test
     *
     * @group Plugin Management
     */
    get plugins(): TapPlugin<any, Opts>[];
    /**
     * Create a child Test object and parse its output as a subtest
     *
     * @group Subtest Methods
     */
    test(name: string, extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    test(name: string, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    test(extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    test(cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    /**
     * Create a subtest which is marked as `todo`
     *
     * @group Subtest Methods
     */
    todo(name: string, extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    todo(name: string, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    todo(extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    todo(cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    /**
     * Create a subtest which is marked as `skip`
     *
     * @group Subtest Methods
     */
    skip(name: string, extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    skip(name: string, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    skip(extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    skip(cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
}
export {};
//# sourceMappingURL=index.d.ts.map
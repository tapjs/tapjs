import { PromiseWithSubtest, TapPlugin, TestBase, TestBaseOpts } from '@tapjs/core';
import * as Plugin_after from "@tapjs/after";
import * as Plugin_afterEach from "@tapjs/after-each";
import * as Plugin_asserts from "@tapjs/asserts";
import * as Plugin_before from "@tapjs/before";
import * as Plugin_beforeEach from "@tapjs/before-each";
import * as Plugin_filter from "@tapjs/filter";
import * as Plugin_fixture from "@tapjs/fixture";
import * as Plugin_intercept from "@tapjs/intercept";
import * as Plugin_mock from "@tapjs/mock";
import * as Plugin_snapshot from "@tapjs/snapshot";
import * as Plugin_spawn from "@tapjs/spawn";
import * as Plugin_stdin from "@tapjs/stdin";
import * as Plugin_typescript from "@tapjs/typescript";
import * as Plugin_worker from "@tapjs/worker";
import type { ConfigSet, Jack } from 'jackspeak';
export declare const testFileExtensions: Set<string>;
export type PluginResult<P extends ((t: TestBase, opts: any) => any)[]> = P extends [
    infer H extends (t: TestBase, opts: any) => any,
    ...infer T extends ((t: TestBase, opts: any) => any)[]
] ? ReturnType<H> & PluginResult<T> : {};
export type SecondParam<T extends [any] | [any, any]> = T extends [
    any,
    infer S
] ? S : unknown;
/**
 * The union of the second parameters of all loaded plugin methods
 */
export type PluginOpts<P extends ((t: TestBase, opts: any) => any)[]> = P extends [
    infer H extends (t: TestBase, opts: any) => any,
    ...infer T extends ((t: TestBase, opts: any) => any)[]
] ? SecondParam<Parameters<H>> & PluginOpts<T> : {};
/**
 * Options that may be provided to `t.test()`. Extends
 * {@link @tapjs/core!index.Extra}, {@link @tapjs/core!base.BaseOpts},
 * {@link @tapjs/core!test-base.TestBaseOpts}, and the second argument to all
 * plugin methods currently in use.
 */
export type TestOpts = TestBaseOpts & PluginOpts<PluginSet>;
export type PluginSet = [
    typeof Plugin_after.plugin,
    typeof Plugin_afterEach.plugin,
    typeof Plugin_asserts.plugin,
    typeof Plugin_before.plugin,
    typeof Plugin_beforeEach.plugin,
    typeof Plugin_filter.plugin,
    typeof Plugin_fixture.plugin,
    typeof Plugin_intercept.plugin,
    typeof Plugin_mock.plugin,
    typeof Plugin_snapshot.plugin,
    typeof Plugin_spawn.plugin,
    typeof Plugin_stdin.plugin,
    typeof Plugin_typescript.plugin,
    typeof Plugin_worker.plugin
];
export declare const config: <C extends ConfigSet>(jack: Jack<C>) => Jack<C & import("jackspeak").ConfigSetFromMetaSet<"boolean", false, {
    only: {
        type: string;
        short: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string | undefined;
        hint?: undefined;
        validate?: ((v: any) => v is boolean) | undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & import("jackspeak").ConfigSetFromMetaSet<"string", true, {
    grep: {
        type: string;
        multiple: boolean;
        hint: string;
        short: string;
        description: string;
    } & {
        type: "string";
        short?: string | undefined;
        default?: string[] | undefined;
        description?: string | undefined;
        hint?: string | undefined;
        validate?: ((v: any) => v is string[]) | undefined;
    } & {
        multiple: true;
        delim?: string | undefined;
    };
}> & import("jackspeak").ConfigSetFromMetaSet<"boolean", false, {
    invert: {
        type: string;
        short: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string | undefined;
        hint?: undefined;
        validate?: ((v: any) => v is boolean) | undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & import("jackspeak").ConfigSetFromMetaSet<"boolean", false, {
    "no-invert": {
        type: string;
        short: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string | undefined;
        hint?: undefined;
        validate?: ((v: any) => v is boolean) | undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & import("jackspeak").ConfigSetFromMetaSet<"boolean", false, {
    "save-fixture": {
        type: string;
        short: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string | undefined;
        hint?: undefined;
        validate?: ((v: any) => v is boolean) | undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & import("jackspeak").ConfigSetFromMetaSet<"boolean", false, {
    snapshot: {
        type: string;
        short: string;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string | undefined;
        hint?: undefined;
        validate?: ((v: any) => v is boolean) | undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}> & import("jackspeak").ConfigSetFromMetaSet<"boolean", false, {
    typecheck: {
        type: string;
        default: boolean;
        description: string;
    } & {
        type: "boolean";
        short?: string | undefined;
        default?: boolean | undefined;
        description?: string | undefined;
        hint?: undefined;
        validate?: ((v: any) => v is boolean) | undefined;
    } & {
        multiple?: false | undefined;
        delim?: undefined;
    };
}>>;
export declare const loaders: string[];
export declare const signature = "@tapjs/after\n@tapjs/after-each\n@tapjs/asserts\n@tapjs/before\n@tapjs/before-each\n@tapjs/filter\n@tapjs/fixture\n@tapjs/intercept\n@tapjs/mock\n@tapjs/snapshot\n@tapjs/spawn\n@tapjs/stdin\n@tapjs/typescript\n@tapjs/worker";
/**
 * Union type of {@link @tapjs/core!test-base.TestBase} plus all plugin return
 * values
 */
export type TTest<P extends PluginSet = PluginSet> = TestBase & PluginResult<P>;
/**
 * Interface that is the assembled result of every loaded plugin.
 */
export interface BuiltPlugins extends PluginResult<PluginSet> {
}
declare const kPluginSet: unique symbol;
declare const kClass: unique symbol;
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
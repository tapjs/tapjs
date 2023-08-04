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
type PluginResult<P extends ((t: TestBase, opts: any) => any)[]> = P extends [
    infer H extends (t: TestBase, opts: any) => any,
    ...infer T extends ((t: TestBase, opts: any) => any)[]
] ? ReturnType<H> & PluginResult<T> : {};
type SecondParam<T extends [any] | [any, any]> = T extends [
    any,
    infer S
] ? S : unknown;
export type PluginOpts<P extends ((t: TestBase, opts: any) => any)[]> = P extends [
    infer H extends (t: TestBase, opts: any) => any,
    ...infer T extends ((t: TestBase, opts: any) => any)[]
] ? SecondParam<Parameters<H>> & PluginOpts<T> : {};
export type TestOpts = TestBaseOpts & PluginOpts<PluginSet>;
type PluginSet = [
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
type TTest<P extends PluginSet = PluginSet> = TestBase & PluginResult<P>;
export interface BuiltPlugins extends PluginResult<PluginSet> {
}
declare const kPluginSet: unique symbol;
declare const kClass: unique symbol;
type PluginExtensionOption<E extends BuiltPlugins = BuiltPlugins, O extends TestOpts = TestOpts> = {
    [kPluginSet]: TapPlugin<any, O>[];
    [kClass]?: typeof Test<E, O>;
};
export interface Test<Ext extends BuiltPlugins = BuiltPlugins, Opts extends TestOpts = TestOpts> extends TTest {
    end(): this;
    plan(n: number, comment?: string): void;
}
export declare class Test<Ext extends BuiltPlugins = BuiltPlugins, Opts extends TestOpts = TestOpts> extends TestBase implements TTest {
    #private;
    constructor(opts: Opts, __INTERNAL?: PluginExtensionOption<Ext, Opts>);
    get [Symbol.toStringTag](): string;
    applyPlugin<B extends Object, O extends unknown = unknown>(plugin: TapPlugin<B, O>): Test<Ext & B, Opts & O> & Ext & B;
    pluginLoaded<T extends any = any>(plugin: (t: any, opts?: any) => T): this is TestBase & T;
    get plugins(): TapPlugin<any, Opts>[];
    test(name: string, extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    test(name: string, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    test(extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    test(cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    todo(name: string, extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    todo(name: string, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    todo(extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    todo(cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    skip(name: string, extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    skip(name: string, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    skip(extra: Opts, cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
    skip(cb: (t: Test<Ext, Opts> & Ext) => any): PromiseWithSubtest<Test<Ext, Opts> & Ext>;
}
export {};
//# sourceMappingURL=index.d.ts.map
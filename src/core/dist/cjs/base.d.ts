/// <reference types="node" />
/// <reference types="node" />
import { Domain } from 'async-hook-domain';
import { AsyncResource } from 'async_hooks';
import { Minipass } from 'minipass';
import { FinalResults, Parser, TapError } from 'tap-parser';
import { Deferred } from 'trivial-deferred';
import { Counts } from './counts.js';
import type { Extra, TestBase } from './index.js';
import { Lists } from './lists.js';
export interface TapBaseEvents extends Minipass.Events<string> {
    timeout: [threw?: Extra];
    bailout: [reason?: string];
    complete: [results: FinalResults];
}
declare class TapWrap extends AsyncResource {
    test: Base;
    onDestroy?: () => void;
    constructor(test: Base);
    emitDestroy(): this;
}
export interface BaseOpts extends Extra {
    bail?: boolean;
    strict?: boolean;
    omitVersion?: boolean;
    preserveWhitespace?: boolean;
    skip?: boolean | string;
    todo?: boolean | string;
    timeout?: number;
    /**
     * track passes in the results lists, default false
     */
    passes?: boolean;
    time?: number;
    tapChildBuffer?: string;
    stack?: string;
    parent?: Base | TestBase;
    name?: string;
    childId?: number;
    context?: any;
    indent?: string;
    debug?: boolean;
    parser?: Parser;
    buffered?: boolean;
    /**
     * Setting silent:true in a subtest option makes it completely excluded
     * from test output, UNLESS it fails.
     *
     * This was used historically for a few things which are now implemented
     * with a more sophisticated promise management system, but can be handy in
     * some rare situations.
     */
    silent?: boolean;
}
export declare class Base<Events extends TapBaseEvents = TapBaseEvents> extends Minipass<string, string, Events> {
    #private;
    readyToProcess: boolean;
    options: BaseOpts;
    indent: string;
    hook: TapWrap;
    hookDomain: Domain;
    timer?: NodeJS.Timeout;
    timedOut: boolean;
    parser: Parser;
    debug: (...args: any[]) => void;
    counts: Counts;
    lists: Lists;
    name: string;
    results?: FinalResults;
    parent?: Base | TestBase;
    bail: boolean;
    strict: boolean;
    omitVersion: boolean;
    preserveWhitespace: boolean;
    errors: TapError[];
    childId: number;
    context: any;
    output: string;
    buffered: boolean;
    bailedOut: string | boolean;
    start: bigint;
    time: number;
    hrtime: bigint;
    silent: boolean;
    deferred?: Deferred<FinalResults>;
    constructor(options?: BaseOpts);
    setupParser(): void;
    setTimeout(n: number): void;
    timeout(options?: {
        expired?: string;
        message?: string;
    }): void;
    runMain(cb: () => void): void;
    get started(): boolean;
    get printedOutput(): boolean;
    main(cb: () => void): void;
    write(c: string): boolean;
    onbail(reason?: string): void;
    online(line: string): boolean;
    oncomplete(results: FinalResults): void;
    /**
     * extension point for plugins that want to be notified when the test
     * is about to end, whether explicitly or implicitly.
     */
    onbeforeend(): Promise<void> | void;
    /**
     * extension point for plugins that want to be notified when the test
     * is completely done, and terminating its parser.
     * Eg, used by Snapshot plugin to write the snapshot file.
     */
    onEOF(): Promise<void> | void;
    /**
     * extension point for TestBase to know when a child tests is done being
     * processed and it's safe to move on to the next one.
     *
     * @internal
     */
    ondone(): void;
    emit<Event extends keyof Events>(ev: Event, ...data: Events[Event]): boolean;
    end(): this;
    threw(er: any, extra?: Extra, proxy?: boolean, ended?: boolean): Extra | void | undefined;
    passing(): boolean;
}
export {};
//# sourceMappingURL=base.d.ts.map
//{{HEADER COMMENT START}}
// This is the template file used to generate the Test client
// module.  Prior to being built, it's effectively just a copy
// of the TestBase class, without any plugins applied.
//{{HEADER COMMENT END}}

import {
  parseTestArgs,
  PromiseWithSubtest,
  TapPlugin,
  TestArgs,
  TestBase,
  TestBaseOpts,
} from '@tapjs/core'

//{{PLUGIN IMPORT START}}
//{{PLUGIN IMPORT END}}

import type { ConfigSet, Jack } from 'jackspeak'
import { isConfigOption } from 'jackspeak'
import { inspect } from 'node:util'

const kInspect = Symbol.for('nodejs.util.inspect.custom')
const copyInspect = (v: Function) => ({
  [kInspect]: (...args: any[]) => inspect(v, ...args),
})

const copyToString = (v: Function) => ({
  toString: Object.assign(() => v.toString(), {
    toString: () => 'function toString() { [native code] }',
  }),
})
const copyFunction = <
  Ext extends BuiltPlugins,
  Opts extends TestOpts
>(
  t: Test<Ext, Opts>,
  plug: Plug<Opts>,
  v: Function
) => {
  const f: (this: Plug<Opts>, ...args: any) => any = function (
    ...args: any[]
  ) {
    const thisArg = this === t ? plug : this
    const ret = v.apply(thisArg, args)
    // If a plugin method returns 'this', and it's the plugin,
    // then we return the extended Test instead.
    return ret === thisArg && thisArg === plug ? t : ret
  }
  const vv = Object.assign(
    Object.assign(f, v),
    copyToString(v),
    copyInspect(v)
  )
  const nameProp = Reflect.getOwnPropertyDescriptor(v, 'name')
  if (nameProp) {
    Reflect.defineProperty(f, 'name', nameProp)
  }
  return vv
}

type PluginResult<P extends ((t: TestBase, opts: any) => any)[]> =
  P extends [
    infer H extends (t: TestBase, opts: any) => any,
    ...infer T extends ((t: TestBase, opts: any) => any)[]
  ]
    ? ReturnType<H> & PluginResult<T>
    : {}

/**
 * Union type of the return values of an array of functions
 */
type AnyReturnValue<A extends ((...a: any[]) => any)[]> = A extends [
  infer H extends (...a: any[]) => any,
  ...infer T extends ((...a: any[]) => any)[]
]
  ? ReturnType<H> | AnyReturnValue<T>
  : never

type Plug<Opt extends TestOpts> =
  | TestBase
  | {
      t: Test<BuiltPlugins>
      pluginLoaded<T extends any = any>(
        plugin: (t: any, opts?: any) => T
      ): boolean
      plugins: TapPlugin<any, Opt>[]
    }
  | AnyReturnValue<PluginSet>
type Plugged = TestBase & {
  t: Test<BuiltPlugins>
} & BuiltPlugins
type PlugKeys = keyof Plugged

// options
type SecondParam<T extends [any] | [any, any]> = T extends [
  any,
  infer S
]
  ? S
  : unknown

/**
 * The union of the second parameters of all loaded plugin methods
 */
export type PluginOpts<
  P extends ((t: TestBase, opts: any) => any)[]
> = P extends [
  infer H extends (t: TestBase, opts: any) => any,
  ...infer T extends ((t: TestBase, opts: any) => any)[]
]
  ? SecondParam<Parameters<H>> & PluginOpts<T>
  : {}

/**
 * Options that may be provided to `t.test()`. Extends
 * {@link Extra}, {@link BaseOpts},
 * {@link TestBaseOpts}, and the second argument to all plugin
 * methods currently in use.
 */
export type TestOpts = TestBaseOpts & PluginOpts<PluginSet>

let plugins_: PluginSet

//{{PLUGINS CODE START}}
const plugins = () => {
  if (plugins_) return plugins_
  return (plugins_ = [])
}
type PluginSet = (TapPlugin<any> | TapPlugin<any, TestBaseOpts>)[]
//{{PLUGINS CODE END}}

//{{PLUGINS CONFIG START}}
// just referenced to keep prettier/tslint happy
/* c8 ignore start */
isConfigOption
const c = <T extends ConfigSet>(j: Jack<T>) => j
c
/* c8 ignore stop */
//{{PLUGINS CONFIG END}}

//{{LOADERS START}}
export const loaders = []
//{{LOADERS END}}

//{{PLUGIN SIGNATURE START}}
export const signature = ''
//{{PLUGIN SIGNATURE END}}

/**
 * Union type of {@link TestBase} plus all plugin return values
 */
type TTest<P extends PluginSet = PluginSet> = TestBase &
  PluginResult<P>

/**
 * Interface that is the assembled result of every loaded plugin.
 */
export interface BuiltPlugins extends PluginResult<PluginSet> {}

const applyPlugins = <
  Ext extends BuiltPlugins,
  Opts extends TestOpts
>(
  base: Test<Ext, Opts>,
  plugs: (TapPlugin<any, Opts> | TapPlugin<any>)[] = plugins() as (
    | TapPlugin<any>
    | TapPlugin<any, Opts>
  )[]
): Test<Ext, Opts> & Ext => {
  const ext: Plug<Opts>[] = plugs
    // typecast in case we have *only* option-less plugins.
    .map(p =>
      (p as TapPlugin<Plug<Opts>, TestBaseOpts>)(base, base.options)
    )
    .concat(base)
  const getCache = new Map<any, any>()
  // extend the proxy with Object.create, and then set the toStringTag
  // to 'Test', so we don't get stack frames like `Proxy.<anonymous>`
  const t = Object.create(
    new Proxy(base, {
      has(_, p) {
        for (const t of ext) {
          if (Reflect.has(t, p)) return true
        }
        return false
      },
      ownKeys() {
        const k: PlugKeys[] = []
        for (const t of ext) {
          const keys = Reflect.ownKeys(t) as PlugKeys[]
          k.push(...keys)
        }
        return [...new Set(k)]
      },
      set(_, p, v) {
        // check to see if there's any setters, and if so, set it there
        // otherwise, just set on the base
        let didSet = false
        if (getCache.has(p)) getCache.delete(p)
        for (const t of ext) {
          let o: Object | null = t
          while (o) {
            // assign to the all plugs that can receive it
            const prop = Reflect.getOwnPropertyDescriptor(o, p)
            if (prop) {
              if (prop.set || prop.writable) {
                //@ts-ignore
                t[p] = v
                didSet = true
              }
              break
            }
            o = Reflect.getPrototypeOf(o)
          }
        }
        if (!didSet) {
          // if nothing has that field, assign to the base
          //@ts-ignore
          base[p] = v
        }
        return true
      },
      get(_, p) {
        if (p === 'parent') {
          return base.parent?.t
        }
        // cache get results so t.blah === t.blah
        // we only cache functions, so that getters aren't memoized
        // Of course, a getter that returns a function will be broken,
        // at least when accessed from outside the plugin, but that's
        // a pretty narrow caveat, and easily documented.
        if (getCache.has(p)) return getCache.get(p)
        for (const plug of ext) {
          if (p in plug) {
            //@ts-ignore
            const v = plug[p]
            // Functions need special handling so that they report
            // the correct toString and are called on the correct object
            // Otherwise attempting to access #private props will fail.
            if (typeof v === 'function') {
              const vv: Function = copyFunction<Ext, Opts>(t, plug, v)
              getCache.set(p, vv)
              return vv
            } else {
              return v
            }
          }
        }
      },
    })
  )
  Object.defineProperty(t, Symbol.toStringTag, {
    value: 'Test',
  })
  // assign a reference to the extended Test for use in plugin at run-time
  Object.assign(base, { t })
  // put the .t self-ref and plugin inspection on top of the stack
  ext.unshift({
    t,
    get pluginLoaded() {
      return <T extends any = any>(
        plugin: (t: any, opts?: any) => T
      ) => {
        return plugs.includes(plugin)
      }
    },
    get plugins() {
      return [...plugs]
    },
  })
  return t
}

const kPluginSet = Symbol('@tapjs/test construction plugin set')
const kClass = Symbol('@tapjs/test construction class')
type PluginExtensionOption<
  E extends BuiltPlugins = BuiltPlugins,
  O extends TestOpts = TestOpts
> = {
  [kPluginSet]: TapPlugin<any, O>[]
  [kClass]?: typeof Test<E, O>
}

/**
 * interface defining the fully extended {@link Test} class.
 */
export interface Test<
  Ext extends BuiltPlugins = BuiltPlugins,
  Opts extends TestOpts = TestOpts
> extends TTest {
  end(): this
  plan(n: number, comment?: string): void
}

/**
 * This is the class that is extended for the root {@link TAP} test,
 * and used to instantiate test objects in its child tests. It extends
 * {@link TestBase}, and implements the union of return values of all
 * loaded plugins via a Proxy.
 */
export class Test<
    Ext extends BuiltPlugins = BuiltPlugins,
    Opts extends TestOpts = TestOpts
  >
  extends TestBase
  implements TTest
{
  #Class: typeof Test<Ext, Opts>
  #pluginSet: TapPlugin<any, Opts>[]

  /**
   * @param opts Test options for this instance
   *
   * @param __INTERNAL Extension option used by the subclasses created in
   * {@link Test#applyPlugin}.
   *
   * @internal
   */
  constructor(
    opts: Opts,
    __INTERNAL: PluginExtensionOption<Ext, Opts> = {
      [kPluginSet]: plugins() as TapPlugin<any, Opts>[],
      [kClass]: Test,
    }
  ) {
    super(opts)
    this.#Class = __INTERNAL[kClass] as typeof Test<Ext, Opts>
    const pluginSet = __INTERNAL[kPluginSet]
    this.#pluginSet = pluginSet
    type T = Test<Ext, Opts> & Ext
    // need to ignore this because it's a ctor that returns a value.
    /* c8 ignore start */
    return applyPlugins(this, pluginSet) as T
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  get [Symbol.toStringTag]() {
    return 'Test'
  }
  /* c8 ignore stop */

  /**
   * Add a plugin at run-time.
   *
   * Creates a subclass of {@link Test} which has the specified
   * plugin, and which applies the plugin to all child tests it creates.
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
   */
  applyPlugin<B extends Object, O extends unknown = unknown>(
    plugin: TapPlugin<B, O>
  ): Test<Ext & B, Opts & O> & Ext & B {
    if (this.printedOutput) {
      throw new Error(
        'Plugins must be applied prior to any test output'
      )
    }

    if (this.#pluginSet.includes(plugin as TapPlugin<B, Opts>)) {
      throw new Error('Plugin already applied')
    }

    type ExtExt = Ext & B
    type ExtOpts = Opts & O
    const p = plugin as TapPlugin<B, ExtOpts>
    const pluginSetExtended: TapPlugin<any, ExtOpts>[] = (
      this.#pluginSet as TapPlugin<any, ExtOpts>[]
    ).concat([p])
    const extended = this as unknown as Test<ExtExt, ExtOpts> & ExtExt
    class TestExtended extends Test<ExtExt, ExtOpts> {
      constructor(
        opts: ExtOpts,
        __INTERNAL: PluginExtensionOption<ExtExt, ExtOpts> = {
          [kPluginSet]: pluginSetExtended,
          [kClass]: TestExtended,
        }
      ) {
        super(opts, __INTERNAL)
      }
    }
    extended.#pluginSet = pluginSetExtended
    extended.#Class = TestExtended
    return applyPlugins<ExtExt, ExtOpts>(extended, pluginSetExtended)
  }

  // NB: this isn't ever actually called, because we add a pluginLoaded
  // method in the applyPlugins proxy, but it's here to establish the
  // type interface.
  /**
   * Return true if the specified plugin is loaded. Asserts that the
   * test object in question implements the return value of the plugin.
   */
  pluginLoaded<T extends any = any>(
    plugin: (t: any, opts?: any) => T
  ): this is TestBase & T {
    plugin
    return false
  }
  /**
   * Return the set of plugins loaded by this Test
   */
  get plugins(): TapPlugin<any, Opts>[] {
    return []
  }

  /**
   * Create a subtest
   */
  test(
    name: string,
    extra: Opts,
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  test(
    name: string,
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  test(
    extra: Opts,
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  test(
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  test(
    ...args: TestArgs<Test<Ext, Opts> & Ext, Opts>
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext> {
    const extra = parseTestArgs<Test<Ext, Opts> & Ext, Opts>(...args)
    return this.sub(
      this.#Class,
      extra,
      this.test
    ) as PromiseWithSubtest<Test<Ext, Opts> & Ext>
  }

  /**
   * Create a subtest which is marked as `todo`
   */
  todo(
    name: string,
    extra: Opts,
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  todo(
    name: string,
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  todo(
    extra: Opts,
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  todo(
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  todo(
    ...args: TestArgs<Test<Ext, Opts> & Ext, Opts>
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext> {
    const extra = parseTestArgs<Test<Ext, Opts> & Ext, Opts>(...args)
    extra.todo = true
    return this.sub(
      this.#Class,
      extra,
      this.todo
    ) as PromiseWithSubtest<Test<Ext, Opts> & Ext>
  }

  /**
   * Create a subtest which is marked as `skip`
   */
  skip(
    name: string,
    extra: Opts,
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  skip(
    name: string,
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  skip(
    extra: Opts,
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  skip(
    cb: (t: Test<Ext, Opts> & Ext) => any
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext>
  skip(
    ...args: TestArgs<Test<Ext, Opts> & Ext, Opts>
  ): PromiseWithSubtest<Test<Ext, Opts> & Ext> {
    const extra = parseTestArgs<Test<Ext, Opts> & Ext, Opts>(...args)
    extra.skip = true
    return this.sub(
      this.#Class,
      extra,
      this.skip
    ) as PromiseWithSubtest<Test<Ext, Opts> & Ext>
  }
}

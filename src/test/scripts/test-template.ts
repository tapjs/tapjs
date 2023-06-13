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

const copyToString = (v: Function) => ({
  toString: Object.assign(() => v.toString(), {
    toString: () => 'function toString() { [native code] }',
  }),
})
const copyFunction = (t: Test, plug: Plug, v: Function) => {
  const f: (this: Plug, ...args: any) => any = function (
    ...args: any[]
  ) {
    const thisArg = this === t ? plug : this
    const ret = v.apply(thisArg, args)
    return ret === thisArg ? t : ret
  }
  const vv = Object.assign(Object.assign(f, v), copyToString(v))
  const nameProp = Reflect.getOwnPropertyDescriptor(v, 'name')
  if (nameProp) {
    Reflect.defineProperty(f, 'name', nameProp)
  }
  return vv
}

type PI<O extends TestBaseOpts | any = any> =
  | ((t: TestBase, opts: O) => Plug)
  | ((t: TestBase) => Plug)

type PluginResult<P extends ((t: TestBase, opts: any) => any)[]> =
  P extends [
    infer H extends (t: TestBase, opts: any) => any,
    ...infer T extends ((t: TestBase, opts: any) => any)[]
  ]
    ? ReturnType<H> & PluginResult<T>
    : {}

type AnyReturnValue<A extends ((...a: any[]) => any)[]> = A extends [
  infer H extends (...a: any[]) => any,
  ...infer T extends ((...a: any[]) => any)[]
]
  ? ReturnType<H> | AnyReturnValue<T>
  : never

type Plug =
  | TestBase
  | { t: Test<BuiltPlugins> }
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

export type PluginOpts<
  P extends ((t: TestBase, opts: any) => any)[]
> = P extends [
  infer H extends (t: TestBase, opts: any) => any,
  ...infer T extends ((t: TestBase, opts: any) => any)[]
]
  ? SecondParam<Parameters<H>> & PluginOpts<T>
  : {}

export type TestOpts = TestBaseOpts & PluginOpts<PluginSet>

let plugins_: PluginSet
let pluginsLoaded_: Map<string, PI>

//{{PLUGINS CODE START}}
const plugins = () => {
  if (plugins_) return plugins_
  return (plugins_ = [])
}
type PluginSet = (TapPlugin<any> | TapPlugin<any, TestBaseOpts>)[]
const pluginsLoaded = () => {
  if (pluginsLoaded_) return pluginsLoaded_
  return (pluginsLoaded_ = new Map<string, PI>())
}
//{{PLUGINS CODE END}}

//{{PLUGINS CONFIG START}}
// just referenced to keep prettier/tslint happy
isConfigOption
const c = <T extends ConfigSet>(j: Jack<T>) => j
c
//{{PLUGINS CONFIG END}}

//{{LOADERS START}}
export const loaders = []
//{{LOADERS END}}

//{{PLUGIN SIGNATURE START}}
export const signature = ''
//{{PLUGIN SIGNATURE END}}

type TTest<P extends PluginSet = PluginSet> = TestBase &
  PluginResult<P>

// Condense to interface so the inline doc isn't overwhelming
export interface BuiltPlugins extends PluginResult<PluginSet> {}

export interface Test<Ext extends BuiltPlugins = BuiltPlugins>
  extends TTest {
  end(implicit?: symbol): this
  test(
    name: string,
    extra: TestOpts,
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  test(
    name: string,
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext>>
  test(
    extra: TestOpts,
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  test(
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  test(
    ...args: TestArgs<Test<Ext> & Ext>
  ): PromiseWithSubtest<Test<Ext> & Ext>

  todo(
    name: string,
    extra: TestOpts,
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  todo(
    name: string,
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  todo(
    extra: TestOpts,
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  todo(
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  todo(...args: TestArgs<Test>): PromiseWithSubtest<Test<Ext> & Ext>

  skip(
    name: string,
    extra: TestOpts,
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  skip(
    name: string,
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  skip(
    extra: TestOpts,
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  skip(
    cb?: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  skip(...args: TestArgs<Test>): PromiseWithSubtest<Test<Ext> & Ext>

  applyPlugin<B extends Object, O extends unknown = unknown>(
    plugin: TapPlugin<B, O>
  ): Test<Ext & ReturnType<typeof plugin>> & ReturnType<typeof plugin>
}

const applyPlugins = (base: Test): Test => {
  const ext: Plug[] = plugins()
    .map(p => p(base, base.options as any))
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
      getOwnPropertyDescriptor(_, p) {
        for (const t of ext) {
          const prop = Reflect.getOwnPropertyDescriptor(t, p)
          if (prop) return prop
        }
        return undefined
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
        if (p === Symbol.toStringTag) return 'Test'
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
              const vv = copyFunction(t, plug, v)
              getCache.set(p, vv)
              return vv
            } else if (p === 'parent') {
              return v?.t
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
  Object.assign(base, { t })
  ext.unshift({ t })
  return t
}

export class Test<
  Ext extends BuiltPlugins = BuiltPlugins
> extends TestBase {
  constructor(opts: TestOpts) {
    super(opts)
    return applyPlugins(this) as Test<Ext> & Ext
  }

  applyPlugin<B extends Object, O extends unknown = unknown>(
    plugin: TapPlugin<B, O>
  ): Test<Ext & B> & B {
    if (this.parent) {
      throw new Error(
        'Plugins can only be applied at run-time to root test'
      )
    }
    if (this.printedResult) {
      throw new Error('Plugins must be applied prior to any tests')
    }
    const ps = plugins()

    // don't add to the list if already present.
    // tell TS to overlook the dynamic type sins
    //@ts-ignore
    if (!ps.includes(plugin)) {
      //@ts-ignore
      ps.push(plugin)
    }

    return applyPlugins(this) as Test<Ext & B> & B
  }

  static get plugins() {
    return pluginsLoaded()
  }

  static pluginLoaded(
    // TS gets confused if we type this as "TestBase" for some reason
    plugin: (t: any, opts?: any) => any
  ): boolean {
    return plugins().includes(plugin)
  }

  pluginLoaded<T extends any = any>(
    // TS gets confused if we type this as "TestBase" for some reason
    plugin: (t: any, opts?: any) => T
  ): this is TestBase & T {
    return Test.pluginLoaded(plugin)
  }

  get plugins() {
    return Test.plugins
  }

  test(
    name: string,
    extra: TestOpts,
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  test(
    name: string,
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  test(
    extra: TestOpts,
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  test(
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  test(
    ...args: TestArgs<Test<Ext> & Ext>
  ): PromiseWithSubtest<Test<Ext> & Ext> {
    const extra = parseTestArgs(...args)
    return this.sub(Test, extra, this.test) as PromiseWithSubtest<
      Test<Ext> & Ext
    >
  }

  todo(
    name: string,
    extra: TestOpts,
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  todo(
    name: string,
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  todo(
    extra: TestOpts,
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  todo(
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  todo(
    ...args: TestArgs<Test<Ext> & Ext>
  ): PromiseWithSubtest<Test<Ext> & Ext> {
    const extra = parseTestArgs(...args)
    extra.todo = true
    return this.sub(Test, extra, this.todo) as PromiseWithSubtest<
      Test<Ext> & Ext
    >
  }

  skip(
    name: string,
    extra: TestOpts,
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  skip(
    name: string,
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  skip(
    extra: TestOpts,
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  skip(
    cb: (t: Test<Ext> & Ext) => any
  ): PromiseWithSubtest<Test<Ext> & Ext>
  skip(
    ...args: TestArgs<Test<Ext> & Ext>
  ): PromiseWithSubtest<Test<Ext> & Ext> {
    const extra = parseTestArgs(...args)
    extra.skip = true
    return this.sub(Test, extra, this.skip) as PromiseWithSubtest<
      Test<Ext> & Ext
    >
  }
}

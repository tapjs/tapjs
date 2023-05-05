//{{HEADER COMMENT START}}
// This is the template file used to generate the Test client
// module.  Prior to being built, it's effectively just a copy
// of the TestBase class, without any plugins applied.
//{{HEADER COMMENT END}}

import {
  parseTestArgs,
  TestArgs,
  TestBase,
  TestBaseOpts,
} from '@tapjs/core'
import { FinalResults } from 'tap-parser'

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
    return v.apply(thisArg, args)
  }
  const vv = Object.assign(f, copyToString(v))
  const nameProp = Reflect.getOwnPropertyDescriptor(
    v,
    'name'
  )
  if (nameProp) {
    Reflect.defineProperty(f, 'name', nameProp)
  }
  return vv
}

//{{PLUGIN IMPORT START}}
//{{PLUGIN IMPORT END}}

type PI<O extends TestBaseOpts | any = any> =
  | ((t: TestBase, opts: O) => Plug)
  | ((t: TestBase) => Plug)

//{{PLUGINS CODE START}}
type Plug = TestBase | { t: Test }
const plugins: PI[] = []
export const pluginsLoaded = new Map<string, PI>()
type PlugKeys = keyof TestBase | 't'
//{{PLUGINS CODE END}}

//{{PLUGINS CONFIG START}}
isConfigOption // just referenced to keep prettier from removing it
type T = ConfigSet
export const config = (jack: Jack) => jack
//{{PLUGINS CONFIG END}}

//{{LOADERS START}}
export const loaders = []
//{{LOADERS END}}

//{{PLUGIN SIGNATURE START}}
export const signature = ''
//{{PLUGIN SIGNATURE END}}

//{{OPTS START}}
export type TestOpts = TestBaseOpts
//{{OPTS END}}

//{{TEST INTERFACE START}}
type TTest = TestBase
//{{TEST INTERFACE END}}

export interface Test extends TTest {
  end(): this
  test(
    name: string,
    extra: TestOpts,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  test(
    name: string,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  test(
    extra: TestOpts,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  test(cb?: (t: Test) => any): Promise<FinalResults | null>
  test(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null>

  todo(
    name: string,
    extra: TestOpts,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(
    name: string,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(
    extra: TestOpts,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(cb?: (t: Test) => any): Promise<FinalResults | null>
  todo(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null>

  skip(
    name: string,
    extra: TestOpts,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(
    name: string,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(
    extra: TestOpts,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(cb?: (t: Test) => any): Promise<FinalResults | null>
  skip(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null>
}

const applyPlugins = (
  base: Test,
  ext: Plug[] = [
    ...plugins.map(p => p(base, base.options)),
    base,
  ]
): Test => {
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
          const prop = Reflect.getOwnPropertyDescriptor(
            t,
            p
          )
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
            const prop = Reflect.getOwnPropertyDescriptor(
              o,
              p
            )
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

export class Test extends TestBase {
  constructor(opts: TestOpts) {
    super(opts)
    return applyPlugins(this)
  }

  static get plugins() {
    return pluginsLoaded
  }

  static pluginLoaded(
    // TS gets confused if we type this as "TestBase" for some reason
    plugin: (t: any, opts?: any) => any
  ): boolean {
    return plugins.includes(plugin)
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
    cb: (t: Test) => any
  ): Promise<FinalResults | null>
  test(
    name: string,
    cb: (t: Test) => any
  ): Promise<FinalResults | null>
  test(
    extra: TestOpts,
    cb: (t: Test) => any
  ): Promise<FinalResults | null>
  test(cb: (t: Test) => any): Promise<FinalResults | null>
  test(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null> {
    const extra = parseTestArgs(...args)
    return this.sub(Test, extra, this.test)
  }

  todo(
    name: string,
    extra: TestOpts,
    cb: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(
    name: string,
    cb: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(
    extra: TestOpts,
    cb: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(cb: (t: Test) => any): Promise<FinalResults | null>
  todo(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null> {
    const extra = parseTestArgs(...args)
    extra.todo = true
    return this.sub(Test, extra, this.todo)
  }

  skip(
    name: string,
    extra: TestOpts,
    cb: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(
    name: string,
    cb: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(
    extra: TestOpts,
    cb: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(cb: (t: Test) => any): Promise<FinalResults | null>
  skip(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null> {
    const extra = parseTestArgs(...args)
    extra.skip = true
    return this.sub(Test, extra, this.skip)
  }
}

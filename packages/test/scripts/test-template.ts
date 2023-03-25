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

const copyToString = (v: Function) => ({
  toString: Object.assign(() => v.toString(), {
    toString: () => 'function toString() { [native code] }',
  }),
})

//{{PLUGIN IMPORT START}}
//{{PLUGIN IMPORT END}}

interface ClassOf<T> {
  new (opts: any): T
}

type PI<O extends TestBaseOpts | any = any> =
  | ((t: TestBase, opts: O) => Plug)
  | ((t: TestBase) => Plug)

//{{PLUGINS CODE START}}
type Plug = TestBase | { t: Test }
const plugins: PI[] = []
export const pluginsLoaded = new Map<string, PI>()
type PlugKeys = keyof TestBase | 't'
//{{PLUGINS CODE END}}

//{{OPTS START}}
export type TestOpts = TestBaseOpts
//{{OPTS END}}

//{{TEST INTERFACE START}}
type TTest = TestBase
//{{TEST INTERFACE END}}

export interface Test extends TTest {
  end(): this
  t: this
  test(
    name: string,
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  test(
    name: string,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  test(
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  test(cb?: (t: Test) => any): Promise<FinalResults | null>
  test(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null>

  todo(
    name: string,
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(
    name: string,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(cb?: (t: Test) => any): Promise<FinalResults | null>
  todo(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null>

  skip(
    name: string,
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(
    name: string,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(cb?: (t: Test) => any): Promise<FinalResults | null>
  skip(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null>
}

const applyPlugins = <T extends Test>(
  base: T,
  ext: Plug[] = [
    ...plugins.map(p => p(base, base.options)),
    base,
  ]
): Test => {
  const getCache = new Map<any, any>()
  const t = new Proxy(base, {
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
      for (const t of ext) {
        let o: Object | null = t
        while (o) {
          if (Reflect.getOwnPropertyDescriptor(o, p)?.set) {
            //@ts-ignore
            t[p] = v
            return true
          }
          o = Reflect.getPrototypeOf(o)
        }
      }
      //@ts-ignore
      base[p as keyof TestBase] = v
      return true
    },
    get(_, p) {
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
            const f: (this: Plug, ...args: any) => any =
              function (...args: any[]) {
                const thisArg = this === t ? plug : this
                return v.apply(thisArg, args)
              }
            const vv = Object.assign(f, copyToString(v))
            const nameProp =
              Reflect.getOwnPropertyDescriptor(v, 'name')
            if (nameProp) {
              Reflect.defineProperty(f, 'name', nameProp)
            }
            getCache.set(p, vv)
            return vv
          } else {
            getCache.set(p, v)
            return v
          }
        }
      }
    },
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
    plugin: (t: TestBase, opts?: any) => any
  ): boolean {
    return plugins.includes(plugin)
  }

  test(
    name: string,
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  test(
    name: string,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  test(
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  test(cb?: (t: Test) => any): Promise<FinalResults | null>
  test(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null> {
    const extra = parseTestArgs(...args)
    extra.todo = true
    const Class = this.constructor as ClassOf<Test>
    return this.sub(Class, extra, this.test)
  }

  todo(
    name: string,
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(
    name: string,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  todo(cb?: (t: Test) => any): Promise<FinalResults | null>
  todo(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null> {
    const extra = parseTestArgs(...args)
    extra.todo = true
    const Class = this.constructor as ClassOf<Test>
    return this.sub(Class, extra, this.test)
  }

  skip(
    name: string,
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(
    name: string,
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(
    extra: { [k: string]: any },
    cb?: (t: Test) => any
  ): Promise<FinalResults | null>
  skip(cb?: (t: Test) => any): Promise<FinalResults | null>
  skip(
    ...args: TestArgs<Test>
  ): Promise<FinalResults | null> {
    const extra = parseTestArgs(...args)
    extra.skip = true
    const Class = this.constructor as ClassOf<Test>
    return this.sub(Class, extra, this.test)
  }
}

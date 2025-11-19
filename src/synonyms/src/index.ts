import { Assertions } from '@tapjs/asserts'
import { TapPlugin, TestBase } from '@tapjs/core'
import { synonyms } from './synonyms.js'
export { synonyms }

type Syn = typeof synonyms
type Deref<K extends keyof Syn> = Syn[K]
type Synonymized = {
  [k in keyof typeof synonyms]: Deref<k> extends keyof Assertions ?
    Assertions[Deref<k>]
  : Deref<k> extends keyof TestBase ? TestBase[Deref<k>]
  : true
}

export interface Synonyms extends Synonymized {}
export class Synonyms {
  constructor(t: TestBase) {
    const methods = new Map<keyof Syn, PropertyDescriptor>()
    const rev = new Map<string, keyof Syn>()
    for (const [k, v] of Object.entries(synonyms)) {
      const s = k as keyof Syn
      const f = rev.get(v)
      const seen = f && methods.get(f)
      if (seen) {
        methods.set(s, seen)
        continue
      }
      rev.set(v, s)
      const value = (...args: any[]) => {
        t.currentAssert = value
        //@ts-ignore
        return t.t[v](...args)
      }

      const og = //@ts-ignore
        (Assertions.prototype[v] || TestBase.prototype[v]) as Function

      if (og && og.toString) {
        Object.defineProperty(value, 'toString', {
          value: () => og.toString(),
          enumerable: false,
          configurable: false,
        })
      }
      methods.set(s, {
        value,
        enumerable: false,
        configurable: true,
        writable: true,
      })
    }
    Object.defineProperties(this, Object.fromEntries(methods.entries()))
  }
}

export const plugin: TapPlugin<Synonyms> = (t: TestBase) => new Synonyms(t)

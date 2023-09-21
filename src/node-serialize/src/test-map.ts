// A map of test objects, but make sure that we don't get confused
// if we get the Test proxy or the underlying TestBase.

import type { Base, TestBase } from '@tapjs/core'

export class TestMap<T extends {}> extends Map<Base, T> {
  get(t: Base): T | undefined {
    const tt = (t as TestBase).t
    if (tt !== undefined && tt !== t) {
      let vt = super.get((t as TestBase).t)
      if (vt === undefined) {
        const v = super.get(t)
        if (v !== undefined) {
          super.set(tt, v)
          super.delete(t)
          return v
        }
      }
      return vt
    }
    return super.get(t)
  }
  has(t: Base) {
    const tt = (t as TestBase).t
    return super.has(t) || super.has(tt)
  }
  set(t: Base, v: T) {
    const tt = (t as TestBase).t
    if (tt !== undefined && tt !== t) {
      super.delete(t)
      super.set(tt, v)
    } else {
      super.set(t, v)
    }
    return this
  }
}

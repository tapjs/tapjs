// A map of test objects, but make sure that we don't get confused
// if we get the Test proxy or the underlying TestBase.

import { Base } from '@tapjs/core'

const kSerializationKey = Symbol.for('@tapjs/node-serialize.key')
const getKey = (
  t: Base & { [kSerializationKey]?: string },
): string => {
  const k = t[kSerializationKey]
  if (k) return k
  const n = String(Math.random())
  Object.defineProperty(t, kSerializationKey, {
    value: n,
    writable: false,
    configurable: true,
    enumerable: false,
  })
  return n
}

export class TestMap<T extends {}> extends Map<Base, T> {
  constructor(items?: [Base, T][]) {
    super()
    if (items) {
      for (const [t, v] of items) {
        this.set(t, v)
      }
    }
  }
  get(t: Base): T | undefined {
    return super.get(getKey(t) as unknown as Base)
  }
  has(t: Base) {
    return super.has(getKey(t) as unknown as Base)
  }
  set(t: Base, v: T) {
    return super.set(getKey(t) as unknown as Base, v)
  }
}

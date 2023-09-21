// This module is more or less a direct port of the serialization logic
// from node's lib/internal/error_serdes module, with primordials removed.
import {
  errorCtorNames,
  kCustomInspect,
  kCustomInspectedObject,
  kInspectedError,
  kInspectedSymbol,
  kSerializedError,
  kSerializedObject,
} from './constants.js'

import { inspect } from 'node:util'
import { serialize } from 'v8'

const getAllProps = (obj: any, target = obj) => {
  const all = Object.create(null)
  if (obj === null) return all
  Object.assign(all, getAllProps(Object.getPrototypeOf(obj), target))
  const keys = Object.getOwnPropertyNames(obj)
  for (const key of keys) {
    const desc = Object.getOwnPropertyDescriptor(obj, key)
    /* c8 ignore start */
    if (!desc) continue
    /* c8 ignore stop */
    const getter = desc.get
    if (getter) {
      try {
        delete desc.get
        delete desc.set
        desc.value = getter.call(target)
      } catch {}
    }
    if (key === 'cause') {
      desc.value = serializeError(desc.value)
      all.cause = desc
    } else if (
      'value' in desc &&
      typeof desc.value !== 'function' &&
      typeof desc.value !== 'symbol'
    ) {
      all[key] = desc
    }
  }
  return all
}

const isError = (obj: any): obj is Error =>
  typeof obj === 'object' &&
  Object.prototype.toString.call(obj) === '[object Error]'

const getCtors = (obj: any) => {
  const ctors: Function[] = []
  for (
    let cur = obj;
    cur !== null;
    cur = Object.getPrototypeOf(cur)
  ) {
    const desc = Object.getOwnPropertyDescriptor(cur, 'constructor')
    const value = desc?.value
    if (typeof value === 'function') {
      ctors.push(value)
    }
  }
  return ctors
}

const getName = (f: Function): string | undefined => {
  const n = Object.getOwnPropertyDescriptor(f, 'name')?.value
  if (typeof n === 'string') return n
}

export const serializeError = (er: unknown) => {
  if (typeof er === 'symbol') {
    return Buffer.from(
      String.fromCharCode(kInspectedSymbol) + String(er),
      'utf8'
    )
  }
  try {
    if (isError(er)) {
      const ctors = getCtors(er)
      for (const c of ctors) {
        const name = getName(c)
        if (name && errorCtorNames.has(name)) {
          const serialized = serialize({
            constructor: name,
            properties: getAllProps(er),
          })
          return Buffer.concat([
            Buffer.from([kSerializedError]),
            serialized,
          ])
        }
      }
      /* c8 ignore start */
    }
  } catch {}
  /* c8 ignore stop */
  try {
    if (
      er !== null &&
      er !== undefined &&
      kCustomInspect in (er as {})
    ) {
      return Buffer.from(
        String.fromCharCode(kCustomInspectedObject) + inspect(er),
        'utf8'
      )
    }
  } catch {}
  try {
    const serialized = serialize(er)
    return Buffer.concat([
      Buffer.from([kSerializedObject]),
      serialized,
    ])
  } catch {}
  return Buffer.from(
    String.fromCharCode(kInspectedError) + inspect(er),
    'utf8'
  )
}

import type { Base, BaseOpts } from './base.js'

import { TestOpts } from '@tapjs/test'

type Opts = Exclude<BaseOpts, 'parent'> & { parent?: any }

export type TestArgs<T extends Base, O extends Opts = Opts> =
  | []
  | [name: string]
  | [cb: ((t: T) => any) | false]
  | [extra: O]
  | [name: string | number, cb: ((t: T) => any) | false]
  | [name: string | number, extra: O]
  | [extra: O, cb: ((t: T) => any) | false]
  | [
      name: string | number,
      extra: O,
      cb: false | ((t: T) => any),
      defaultName?: string
    ]

export const parseTestArgs = <T extends Base, O extends Opts = Opts>(
  ...args: TestArgs<T, O>
): O => {
  let name: string | null | undefined = undefined
  let extra: O | null | undefined = undefined
  let cb: ((t: T) => any) | null | undefined = undefined

  // this only works if it's literally the 4th argument.
  // used internally.
  const defaultName = args[3] || ''

  for (let i = 0; i < 3 && i < args.length; i++) {
    const arg = args[i]
    if (
      name === undefined &&
      (typeof arg === 'string' || typeof arg === 'number')
    ) {
      name = '' + arg
    } else if (arg && typeof arg === 'object') {
      extra = arg
      if (name === undefined) name = null
    } else if (typeof arg === 'function') {
      if (extra === undefined) extra = {} as O
      if (name === undefined) name = null
      cb = arg as (t: T) => any
    } else if (arg === false) {
      // it's handy while developing to put a ! in front of a
      // function to temporarily make a test todo
      continue
    } else if (typeof arg !== 'undefined') {
      throw new TypeError('invalid test argument: ' + typeof arg)
    }
  }

  if (!extra) extra = {} as O

  const bex = extra as BaseOpts
  if (!cb && defaultName !== '/dev/stdin') {
    bex.todo = bex.todo || true
  }

  if (!name && bex.name) name = bex.name

  if (!name && cb && cb.name) name = cb.name

  name = name || defaultName
  bex.name = name
  const opts = extra as TestOpts
  opts.cb = cb || todoCb
  return opts as O
}

const todoCb = () => {
  throw new Error('callback called for TODO test')
}

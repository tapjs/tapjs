import type { Base, BaseOpts } from './base.js'

import { TestOpts } from '@tapjs/test'

export type TestArgs<T extends Base> =
  | [
      name?: string | number,
      extra?: TestOpts | BaseOpts,
      cb?: false | ((t: T) => any),
      defaultName?: string
    ]
  | [extra: TestOpts | BaseOpts, cb?: ((t: T) => any) | false]
  | [name: string | number, cb?: ((t: T) => any) | false]
  | [cb?: ((t: T) => any) | false]
  | [name: string]
  | [extra: TestOpts | BaseOpts]

export const parseTestArgs = <T extends Base>(
  ...args: TestArgs<T>
): TestOpts => {
  let name: string | null | undefined = undefined
  let extra: TestOpts | BaseOpts | null | undefined = undefined
  let cb: ((t: T) => any) | null | undefined = undefined

  // this only works if it's literally the 4th argument.
  // used internally.
  const defaultName = args[3] || ''

  for (let i = 0; i < 3 && i < args.length; i++) {
    const arg = args[i]
    if (
      name === undefined &&
      (typeof arg === 'string' || typeof arg === 'number')
    )
      name = '' + arg
    else if (arg && typeof arg === 'object') {
      extra = arg
      if (name === undefined) name = null
    } else if (typeof arg === 'function') {
      if (extra === undefined) extra = {}
      if (name === undefined) name = null
      cb = arg
    } else if (arg === false) {
      // it's handy while developing to put a ! in front of a
      // function to temporarily make a test todo
      continue
    } else if (typeof arg !== 'undefined')
      throw new TypeError(
        'unknown argument passed to parseTestArgs: ' + typeof arg
      )
  }

  if (!extra) extra = {}

  if (!cb && defaultName !== '/dev/stdin') {
    extra.todo = extra.todo || true
  }

  if (!name && extra.name) name = extra.name

  if (!name && cb && cb.name) name = cb.name

  name = name || defaultName
  extra.name = name
  const opts = extra as TestOpts
  opts.cb = cb || todoCb
  return opts
}

const todoCb = () => {
  throw new Error('callback called for TODO test')
}

import * as stack from '@tapjs/stack'
import { randomBytes } from 'crypto'
import { dirname, resolve } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import type { Mocks } from './mocks.js'

const loaderSymbol = Symbol.for('__tapmockLoader')
declare var global: {
  [loaderSymbol]: string
  [k: `__tapmock${string}`]: Mocks
}

//@ts-ignore
import loader from './loader-url.js'

export const mockImport: (
  module: string,
  mocks?: undefined | { [k: string]: any },
  caller?: Function | ((...a: any[]) => any)
) => Promise<any> = async (module, mocks = {}, caller = mockImport) => {
  const at = Object.freeze(stack.at(caller))
  const { fileName: file } = at || { fileName: undefined }
  if (!file) {
    throw new Error('could not get current call site')
  }

  const path = file.startsWith('file:///')
    ? fileURLToPath(file)
    : resolve(file)
  const dir = dirname(path)
  const url = file.startsWith('file:///')
    ? file
    : pathToFileURL(resolve(file))

  // TODO this shouldn't be a restriction, actually. I can just use
  // different keys for each @tapjs/mock module in play
  if (global[loaderSymbol] !== loader) {
    const msg = `Cannot mock ESM. Run with --loader=@tapjs/mock/loader to enable. (Are multiple @tapjs/mock modules in use?)`
    const er = Object.assign(new Error(msg), {
      found: global.__tapmockLoader,
      wanted: loader,
    })
    Error.captureStackTrace(er, caller)
    throw er
  }

  const key = randomBytes(8).toString('hex')

  mocks = Object.entries(mocks || {})
    .map(([k, m]) => {
      m = m && typeof m === 'object' ? m : { default: m }
      if (/^(node:|file:\/\/\/|https?:\/\/)/.test(k)) {
        return [k, m]
      } else if (/^\.\.?\//.test(k)) {
        return [pathToFileURL(resolve(dir, k)), m]
      }
    })
    .reduce((o, kv) => {
      if (kv) {
        o[kv[0]] = kv[1]
      }
      return o
    }, Object.create(null))

  Object.defineProperty(global, `__tapmock${key}`, {
    value: Object.freeze({
      unmock: () => (mocks = undefined),
      mocks,
      key,
      caller: Object.freeze({
        path,
        dir,
        url,
        at,
        stack: stack.captureString(caller),
      }),
    }),
    enumerable: false,
    configurable: false,
    writable: false,
  })

  const start = new URL(module, url)
  start.searchParams.set('tapmock', key)
  return await import(`${start}`)
}

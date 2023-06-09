import * as stack from '@tapjs/stack'
import { dirname, resolve } from 'path'
import { pathToFileURL } from 'url'
import { Mocks } from './mocks.js'

import { randomBytes } from 'crypto'
import { builtinModules } from 'module'
import loader from './loader-url.js'

const isWindows =
  typeof process === 'object' &&
  process &&
  process.platform === 'win32'

const loaderSymbol = Symbol.for('__tapmockLoader')
declare var global: {
  [loaderSymbol]: string
  [k: `__tapmock${string}`]: Mocks
}

const builtinSet = new Set([
  ...builtinModules,
  ...builtinModules.map(m => `node:${m}`),
])

// turn all the mocks we get into either the exports provided,
// if it's an object, or { default: <value> } otherwise.
const mungeMocks = (
  mocksInput: undefined | { [k: string]: any },
  dir: string
): { [k: string]: { [j: string]: any } } => {
  if (!mocksInput) return {}
  const mocks = Object.create(null)
  for (const [k, v] of Object.entries(mocksInput)) {
    const m = v && typeof v === 'object' ? v : { default: v }
    if (builtinSet.has(k)) {
      mocks[k] = m
      if (k.startsWith('node:')) {
        const bare = k.substring('node:'.length)
        if (!(bare in mocksInput)) {
          mocks[bare] = m
        }
      } else {
        const prefixed = `node:${k}`
        if (!(prefixed in mocksInput)) {
          mocks[prefixed] = m
        }
      }
    } else if (/^(node:|file:\/\/\/|https?:\/\/)/.test(k)) {
      mocks[k] = m
    } else if (
      /^\.\.?\//.test(k) ||
      (isWindows && /^\.\.?\\/.test(k))
    ) {
      mocks[String(pathToFileURL(resolve(dir, k)))] = m
    } else {
      // absolute package name
      mocks[k] = m
    }
  }
  return mocks
}

export const mockImport: (
  module: string,
  mocks?: undefined | { [k: string]: any },
  caller?: Function | ((...a: any[]) => any)
) => [string, () => Promise<any>] = (
  module,
  mocks = {},
  caller = mockImport
) => {
  const needIgnoreTap = !stack.getIgnoredPackages().includes('@tapjs')
  if (needIgnoreTap) stack.addIgnoredPackage('@tapjs')
  const at = stack.at(caller)
  if (needIgnoreTap) stack.removeIgnoredPackage('@tapjs')

  const path = at?.absoluteFileName
  if (!path) {
    throw new Error('could not get current call site')
  }

  const dir = dirname(path)
  const url = pathToFileURL(path)

  // TODO this shouldn't be a restriction, actually. I can just use
  // different keys for each @tapjs/mock module in play
  if (global[loaderSymbol] !== loader) {
    const msg = `Cannot mock ESM. Run with --loader=@tapjs/mock to enable. (Are multiple @tapjs/mock modules in use?)`
    const er = Object.assign(new Error(msg), {
      found: global.__tapmockLoader,
      wanted: loader,
    })
    Error.captureStackTrace(er, caller)
    throw er
  }

  const key = randomBytes(8).toString('hex')

  mocks = mungeMocks(mocks, dir)

  const m: Mocks = {
    mocks,
    unmock: () => {
      m.mocks = mocks = undefined
    },
    key,
    caller: {
      path,
      dir,
      url,
      at,
      stack: stack.captureString(caller),
    },
  }
  Object.defineProperty(global, `__tapmock${key}`, {
    value: m,
    enumerable: false,
    configurable: false,
    writable: false,
  })

  const start = new URL(module, url)
  start.searchParams.set('tapmock', key)
  return [key, () => import(`${start}`)]
}

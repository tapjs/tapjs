import { createRequire } from 'module'
import { isAbsolute } from 'path'
import { pathToFileURL } from 'url'
import type { Mocks } from './mocks.js'
export { plugin } from './index.js'

export * from './index.js'
export { mockImport } from './mock-import.js'
export { mockRequire } from './mock-require.js'

const loaderSymbol = Symbol.for('__tapmockLoader')
declare var global: {
  [loaderSymbol]: string
  [k: `__tapmock${string}`]: Mocks
}

try {
  Object.defineProperty(global, loaderSymbol, {
    value: import.meta.url,
    writable: false,
    configurable: false,
    enumerable: false,
  })
} catch (er) {
  if (
    typeof global[loaderSymbol] === 'string' &&
    global[loaderSymbol] !== import.meta.url
  ) {
    throw Object.assign(
      new Error('Multiple tapMock loaders detected'),
      {
        found: global[loaderSymbol],
        wanted: import.meta.url,
      }
    )
  }
}

const { hasOwnProperty } = Object.prototype
const hasOwn = (o: any, k: PropertyKey) => hasOwnProperty.call(o, k)
const [_, ...version] = (
  process.version.match(/v([0-9]+)\.([0-9]+)\.([0-9]+)/) || [
    '',
    '0',
    '0',
    '0',
  ]
).map(n => +n)

if (version[0] < 14) {
  throw new Error('this loader requires node v14 or higher')
}

const stringExports = version[0] >= 16

type MocksWithMocks = Omit<Mocks, 'mocks'> & {
  mocks: Exclude<Mocks['mocks'], undefined>
}
const hasMocks = (m: any): m is MocksWithMocks => !!m && !!m.mocks

const buildSrc = (m: MocksWithMocks, key: string, url: string) => {
  const mock = m.mocks[url]
  let hasDefault = false
  const keySrc = `__tapmock${key}`
  const mockSrc = `global.${keySrc}.mocks[${JSON.stringify(url)}]`
  let i = 0
  const src = Object.keys(mock || {}).map(k => {
    if (k === 'default') {
      hasDefault = true
      return `const defExp = ${mockSrc}.default
export default defExp\n`
    } else {
      const kSrc = JSON.stringify(k)
      // older node versions can't rename exports, oh well.
      // means mock keys must all be valid identifiers.
      if (stringExports) {
        return `const exp${i} = ${mockSrc}[${kSrc}]
export {exp${i++} as ${kSrc}}\n`
      } else {
        try {
          new Function(`let ${k}`)
        } catch (_) {
          // make it throw from where the user actually called this
          const er = new Error(
            `invalid identifier in mock object: ${kSrc}`
          )
          er.stack = er.message + '\n' + m.caller.stack
          throw er
        }
        return `export const ${k} = ${mockSrc}[${kSrc}]\n`
      }
    }
  })
  if (!hasDefault) {
    src.push(`const defExp = ${mockSrc}
export default defExp\n`)
  }
  return src.join('\n')
}

interface Context {
  importAssertions: { [k: string]: string }
  conditions: string[]
  parentURL?: string
}
interface ResolveResult {
  format?: null | 'builtin' | 'commonjs' | 'json' | 'module' | 'wasm'
  importAssertions?: { [k: string]: string }
  shortCircuit?: boolean
  url: string
}
interface LoadResult {
  format: string
  shortCircuit?: boolean
  source: string | ArrayBuffer | Uint8Array
}
type NextResolveFunction = (
  url: string,
  context: Context
) => Promise<ResolveResult>
type ResolveFunction = (
  url: string,
  context: Context,
  nextResolve: NextResolveFunction
) => Promise<ResolveResult>
type LoadFunction = (
  url: string,
  context: Context,
  nextLoad: NextLoadFunction
) => Promise<LoadResult>
type NextLoadFunction = (
  url: string,
  context: Context
) => Promise<LoadResult>

// for node 14
export const getFormat: ResolveFunction = async (
  url,
  context,
  nextResolve
) =>
  url.startsWith('tapmock://')
    ? { url, format: 'module' }
    : nextResolve(url, context)

export const getSource: LoadFunction = async (
  url,
  context,
  nextLoad
) => load(url, context, nextLoad)

export const load: LoadFunction = async (url, context, nextLoad) => {
  if (url.startsWith('tapmock://')) {
    const u = new URL(url)
    const key = u.host
    const mockURL = u.searchParams.get('url')
    if (!key || !mockURL) {
      return nextLoad(url, context)
    }

    const m = global[`__tapmock${key}`]
    if (!hasMocks(m) || !hasOwn(m.mocks, mockURL)) {
      return nextLoad(mockURL, context)
    }

    const source = buildSrc(m, key, mockURL)
    return {
      format: 'module',
      source,
      shortCircuit: true,
    }
  }
  return nextLoad(url, context)
}

export const resolve: ResolveFunction = async (
  url,
  context,
  nextResolve
) => {
  if (!context.parentURL) {
    return nextResolve(url, context)
  }
  const p = new URL(context.parentURL)
  const key = p.searchParams.get('tapmock')
  if (!key) {
    return nextResolve(url, context)
  }
  const m = global[`__tapmock${key}`]
  if (
    !m ||
    !m.mocks ||
    typeof m.mocks !== 'object' ||
    m.key !== key
  ) {
    return nextResolve(url, context)
  }

  const resolvedURL = hasOwn(m.mocks, url)
    ? url
    : String(new URL(url, context.parentURL))
  if (!hasOwn(m.mocks, resolvedURL)) {
    // parent is mocked, but this module isn't, so the things IT loads
    // should be loaded from the mock, even though it isn't. Need to
    // call require.resolve() here so that it doesn't get confused when
    // loading deps out of node_modules.
    const { resolve } = createRequire(context.parentURL)
    const mocker = new URL(
      url.startsWith('file://')
        ? url
        : pathToFileURL(isAbsolute(url) ? url : resolve(url))
    )
    mocker.searchParams.set('tapmock', key)
    return nextResolve(String(mocker), context)
  }

  const mockRes = new URL(`tapmock://${key}/`)
  mockRes.searchParams.set('url', resolvedURL)
  return {
    url: `${mockRes}`,
    format: 'module',
    shortCircuit: true,
  }
}

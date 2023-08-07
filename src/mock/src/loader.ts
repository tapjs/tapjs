import { isAbsolute } from 'node:path'
import { pathToFileURL } from 'node:url'
import { resolveImport } from 'resolve-import'
import { isRelativeRequire } from 'resolve-import/is-relative-require'
import { exportLine } from './export-line.js'
import type { Mocks } from './mocks.js'
export * from './index.js'
export { plugin } from './index.js'
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
      new Error('Multiple @tapjs/mock loaders detected'),
      {
        found: global[loaderSymbol],
        wanted: import.meta.url,
      }
    )
  }
}

const { hasOwnProperty } = Object.prototype
const hasOwn = (o: any, k: PropertyKey) => hasOwnProperty.call(o, k)

/**
 * Mocks that have mock data attached
 */
export type MocksWithMocks = Mocks & {
  mocks: Exclude<Mocks['mocks'], undefined>
}
const hasMocks = (m: any): m is MocksWithMocks => !!m && !!m.mocks

const buildSrc = (m: MocksWithMocks, key: string, url: string) => {
  /* c8 ignore start */
  const mock = m.mocks[url] || {}
  /* c8 ignore stop */
  const keySrc = `__tapmock${key}`
  const mockSrc = `global.${keySrc}.mocks[${JSON.stringify(url)}]`
  const src = Object.keys(mock).map(k =>
    exportLine(k, mockSrc, m.caller.stack)
  )
  if (!Object.keys(mock).includes('default')) {
    src.push(`const defExp = ${mockSrc}
export default defExp\n`)
  }
  return src.join('\n')
}

/**
 * Context information passed to loader methods
 *
 * @internal
 * @group Node Loader API
 */
export interface Context {
  importAssertions: { [k: string]: string }
  conditions: string[]
  parentURL?: string
}

/**
 * Result returned by a `resolve()` method
 *
 * @internal
 * @group Node Loader API
 */
export interface ResolveResult {
  format?: null | 'builtin' | 'commonjs' | 'json' | 'module' | 'wasm'
  importAssertions?: { [k: string]: string }
  shortCircuit?: boolean
  url: string
}

/**
 * Result returned by a `load()` method
 *
 * @internal
 * @group Node Loader API
 */
export interface LoadResult {
  format: string
  shortCircuit?: boolean
  source: string | ArrayBuffer | Uint8Array
}

/**
 * The next `resolve()` function in the list *
 *
 * @internal
 * @group Node Loader API
 */
export type NextResolveFunction = (
  url: string,
  context: Context
) => Promise<ResolveResult>

/**
 * A `resolve()` function in a loader
 *
 * @internal
 * @group Node Loader API
 */
export type ResolveFunction = (
  url: string,
  context: Context,
  nextResolve: NextResolveFunction
) => Promise<ResolveResult>

/**
 * A `load()` function exported by a loader
 *
 * @internal
 * @group Node Loader API
 */
export type LoadFunction = (
  url: string,
  context: Context,
  nextLoad: NextLoadFunction
) => Promise<LoadResult>

/**
 * The next `load()` function in the chain
 *
 * @internal
 * @group Node Loader API
 */
export type NextLoadFunction = (
  url: string,
  context: Context
) => Promise<LoadResult>

// TODO: node 14 isn't supported, maybe delete these?
/**
 * Legacy loader API
 *
 * @internal
 * @group Node Loader API
 */
export const getFormat: ResolveFunction = async (
  url,
  context,
  nextResolve
) =>
  url.startsWith('tapmock://')
    ? { url, format: 'module' }
    : resolve(url, context, nextResolve)

/**
 * Legacy loader API
 *
 * @internal
 * @group Node Loader API
 */
export const getSource: LoadFunction = async (
  url,
  context,
  nextLoad
) => load(url, context, nextLoad)

/**
 * Tell node how to load our `tapmock://` fake modules
 *
 * @internal
 * @group Node Loader API
 */
export const load: LoadFunction = async (url, context, nextLoad) => {
  if (url.startsWith('tapmock://')) {
    const u = new URL(url)
    const key = u.host
    const mockURL = u.searchParams.get('url')
    // very strange and unlikely
    /* c8 ignore start */
    if (!key || !mockURL) {
      return nextLoad(url, context)
    }
    /* c8 ignore stop */

    const m = global[`__tapmock${key}`]
    /* c8 ignore start */
    if (!hasMocks(m) || !hasOwn(m.mocks, mockURL)) {
      return nextLoad(mockURL, context)
    }
    /* c8 ignore stop */

    const source = buildSrc(m, key, mockURL)
    return {
      format: 'module',
      source,
      shortCircuit: true,
    }
  }
  return nextLoad(url, context)
}

/**
 * Tell node how to resolve our `tapmock://...` synthetic modules,
 * and their mocks.
 *
 * @internal
 * @group Node Loader API
 */
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
  // it would be very strange to get here, would indicate that there
  // was a literal ?tapmock=... on the import url, but not one we put there
  /* c8 ignore start */
  if (
    !m ||
    !m.mocks ||
    typeof m.mocks !== 'object' ||
    m.key !== key
  ) {
    return nextResolve(url, context)
  }
  /* c8 ignore stop */

  const resolvedURL = hasOwn(m.mocks, url)
    ? url
    : isRelativeRequire(url)
    ? String(new URL(url, context.parentURL))
    : isAbsolute(url)
    ? String(pathToFileURL(url))
    : url

  if (!hasOwn(m.mocks, resolvedURL)) {
    // parent is mocked, but this module isn't, so the things IT loads
    // should be loaded from the mock, even though it isn't. Need to
    // call require.resolve() here so that it doesn't get confused when
    // loading deps out of node_modules.
    // If a node builtin is mocked, and another builtin references it, then
    // the builtin will get the original builtin, not the mock. This is a
    // shortcoming owing to the fact that there's no way here to tack a
    // search param on the "url" for an internal module. If it causes problems,
    // then the solution could be to swap out internal modules with a known
    // url type like tapmockBuiltin://node:fs or something, and use that as
    // the indicator that its builtin deps might need to be mocked. For now,
    // it's just a known design limitation, because that's a bit tricky to
    // get just right.
    let mocker = await resolveImport(url, context.parentURL)
    if (typeof mocker === 'object')
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

// This is the machinery that supports the load() and resolve()
// methods used by the loader, returning the appropriate urls
// and source.
// It runs on the main thread, not the loader thread.
//
// The globalPreload/initialize inits the port and grabs a reference to it
// in the loader thread.
// Then the loader asks the service over that port for the mocked url and
// source code, which is sent back.
//
// The mock-import module creates a MockService instance when t.mockImport
// is called, giving it a key and setting up its mocks, and calls
// import(startURL) as the return value.
//
// There should be at most 1 MockService instance for a given tap test,
// with its own unique key that's used for loading.
//
// There are some weird lines ignored for coverage in this file, owing to the
// fact that it is loaded as part of tap's initial startup, prior to
// instrumenting coverage, and loaded very differently in node 20 vs prior
// versions that ran loaders on the main thread..

import type { CallSiteLike, CallSiteLikeJSON } from '@tapjs/stack'
import * as stack from '@tapjs/stack'
import { randomBytes } from 'crypto'
import { dirname, isAbsolute } from 'path'
import { resolveImport } from 'resolve-import'
import { isRelativeRequire } from 'resolve-import/is-relative-require'
import { pathToFileURL } from 'url'
import { MessagePort } from 'worker_threads'
import { exportLine } from './export-line.js'
import { mungeMocks } from './munge-mocks.js'
import { resolveMockEntryPoint } from './resolve-mock-entry-point.js'
import { serviceKey } from './service-key.js'

const { hasOwnProperty } = Object.prototype
const hasOwn = (o: any, k: PropertyKey) => hasOwnProperty.call(o, k)
const getKey = () => randomBytes(8).toString('hex')

/**
 * Build the source code for a mocked module.
 */
const buildSrc = (m: MockService, url: string) => {
  const mock = m?.mocks?.[url]
  /* c8 ignore start */
  if (!mock) return
  /* c8 ignore stop */

  const { key } = m

  const keySrc = `__tapmock${serviceKey}$${key}`
  const mockSrc = `global[${keySrc}].mocks[${JSON.stringify(url)}]`
  const src = Object.keys(mock).map(k => exportLine(k, mockSrc))
  if (!Object.keys(mock).includes('default')) {
    src.push(`const defExp = ${mockSrc}
export default defExp\n`)
  }
  const symFor = JSON.stringify(keySrc)
  return `const ${keySrc} = Symbol.for(${symFor})\n${src.join('\n')}`
}

export type MockServiceLoadRequest = {
  action: 'load'
  url: string
  id: string
}
export type MockServiceResolveRequest = {
  action: 'resolve'
  url: string
  parentURL: string
  id: string
}

export type MockServiceRequest =
  | MockServiceLoadRequest
  | MockServiceResolveRequest

export type MockServiceResponse = MockServiceRequest & {
  // a false response means "not a mocked module"
  response: string | undefined
}

export const isMockServiceResponse = (
  m: any
): m is MockServiceResponse =>
  isMockServiceRequest(m) &&
  Object.keys(m).includes('response') &&
  (typeof (m as MockServiceResponse).response === 'string' ||
    typeof (m as MockServiceResponse).response === 'undefined')

export const isMockServiceRequest = (
  m: any
): m is MockServiceRequest =>
  !!m &&
  typeof m === 'object' &&
  ((m.action === 'resolve' && typeof m.parentURL === 'string') ||
    (m.action === 'load' && m.parentURL === undefined)) &&
  typeof m.url === 'string' &&
  typeof m.id === 'string'

// keys and instances across dialects, so we get the right one when
// it's loaded from the commonjs globalPreload, or just a cjs test
const kInstances = Symbol.for(`${serviceKey}.instances`)
const g = globalThis as typeof globalThis & {
  [kInstances]?: Map<string, MockService>
}

// this gets called at startup before coverage is initiated,
// so it never covers the second case where it isn't already set.
/* c8 ignore start */
const instances = g[kInstances] || new Map<string, MockService>()
/* c8 ignore stop */
g[kInstances] = instances

const mockServiceCtorSymbol = Symbol('private')
export class MockService {
  key: string = getKey()
  module?: string | Promise<string>
  mocks?: Record<string, Record<string, any>>
  caller?: {
    path: string
    dir: string
    url: URL
    at: CallSiteLike | CallSiteLikeJSON
    stack?: string
  }

  constructor(priv: typeof mockServiceCtorSymbol) {
    if (priv !== mockServiceCtorSymbol) {
      throw new Error('create MockService with MockService.get()')
    }
    instances.set(this.key, this)
  }

  // pass in the main-thread end of the loader port set, and respond
  // appropriately to messages we can handle
  /* c8 ignore start */
  static async listen(port: MessagePort) {
    port.on('message', async msg => {
      /* c8 ignore stop */
      /* c8 ignore start */
      if (!isMockServiceRequest(msg)) return
      /* c8 ignore stop */
      const r = await this.handle(msg).catch(e => console.error(e))
      // typescript handles 'void' weirdly
      const response = r === undefined ? undefined : r
      const msr: MockServiceResponse = { ...msg, response }
      port.postMessage(msr)
      /* c8 ignore start */
    })
    port.unref()
  }
  /* c8 ignore stop */

  static async handle(msg: any) {
    if (!isMockServiceRequest(msg)) return
    return msg.action === 'resolve'
      ? this.resolve(msg)
      : this.load(msg)
  }

  static async resolve(req: MockServiceResolveRequest) {
    const { parentURL } = req
    const p = new URL(parentURL)
    const [sk, k] = (p.searchParams.get('tapmock') || '').split('.')
    if (sk !== serviceKey || !k) return
    return this.get(k).resolve(req)
  }
  async resolve({ url, parentURL }: MockServiceResolveRequest) {
    const resolvedURL = hasOwn(this.mocks, url)
      ? url
      : isRelativeRequire(url)
      ? String(new URL(url, parentURL))
      : isAbsolute(url)
      ? String(pathToFileURL(url))
      : url

    if (!hasOwn(this.mocks, resolvedURL)) {
      // parent is mocked, but this module isn't, so the things IT loads
      // should be loaded from the mock, even though it isn't. Need to
      // resolveImport() here so that it doesn't get confused when
      // loading deps out of node_modules.
      //
      // If a node builtin is mocked, and another builtin references it, then
      // the builtin will get the original builtin, not the mock. This is a
      // shortcoming owing to the fact that there's no way here to tack a
      // search param on the "url" for an internal module. If it causes
      // problems, then the solution could be to swap out internal modules with
      // a known url type like tapmockBuiltin://node:fs or something, and use
      // that as the indicator that its builtin deps might need to be mocked.
      // For now, it's just a known design limitation, because that's a bit
      // tricky to get right.
      let mocker = await resolveImport(url, parentURL).catch(() => {})
      // we can't resolve it, but maybe someone else can.
      // if RI gives us a string, then it's a builtin, do nothing
      if (!mocker || typeof mocker !== 'object') return
      mocker.searchParams.set('tapmock', `${serviceKey}.${this.key}`)
      return String(mocker)
    }

    const mockRes = new URL(`tapmock://${serviceKey}.${this.key}/`)
    mockRes.searchParams.set('url', resolvedURL)
    return String(mockRes)
  }

  static async load(req: MockServiceLoadRequest) {
    const { url } = req
    if (!url.startsWith(`tapmock://${serviceKey}.`)) return
    /* c8 ignore start */
    const u = new URL(url)
    /* c8 ignore stop */
    const [_, key] = u.host.split('.')
    /* c8 ignore start */
    if (!key) return
    /* c8 ignore stop */
    return this.get(key).load(req)
  }
  async load({ url }: MockServiceLoadRequest) {
    if (!url.startsWith('tapmock://')) return
    const u = new URL(url)
    const key = u.host
    const mockURL = u.searchParams.get('url')
    if (key !== `${serviceKey}.${this.key}` || !mockURL) return
    return buildSrc(this, mockURL)
  }

  static create(
    module: string,
    mocks: Record<string, any> = {},
    caller: Function | ((...a: any[]) => any) = MockService.create
  ): MockService & { module: string | Promise<string> } {
    const ms = new MockService(mockServiceCtorSymbol)

    /* c8 ignore start */
    const needIgnoreTap = !stack
      .getIgnoredPackages()
      .includes('@tapjs')
    if (needIgnoreTap) stack.addIgnoredPackage('@tapjs')
    const at = stack.at(caller)
    if (needIgnoreTap) stack.removeIgnoredPackage('@tapjs')
    /* c8 ignore stop */

    const path = at?.absoluteFileName
    if (!path) {
      throw new Error('could not get current call site')
    }

    const dir = dirname(path)
    const url = pathToFileURL(path)

    const resolved = resolveMockEntryPoint(
      url,
      module,
      serviceKey,
      ms.key,
      caller
    )
    resolved.then(s => (ms.module = s))

    ms.mocks = mungeMocks(mocks, dir)
    ms.caller = {
      path,
      dir,
      url,
      at,
      stack: stack.captureString(caller),
    }
    const sym = Symbol.for(`__tapmock${serviceKey}$${ms.key}`)
    const g = globalThis as typeof globalThis & {
      [sym]?: MockService
    }
    return (g[sym] = Object.assign(ms, { module: resolved }))
  }

  unmock() {
    const sym = Symbol.for(`__tapmock${serviceKey}$${this.key}`)
    const g = globalThis as typeof globalThis & {
      [sym]?: MockService
    }
    delete g[sym]
    instances.delete(this.key)
    this.mocks = undefined
  }

  static get(key: string) {
    const i = instances.get(key)
    if (!i) {
      throw new Error('mock service instance key not found')
    }
    return i
  }
}

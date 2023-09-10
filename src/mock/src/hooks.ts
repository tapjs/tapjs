// hooks for legacy-loader.ts and loader.ts

import { GlobalPreloadHook, LoadHook, ResolveHook } from 'node:module'
import { fileURLToPath } from 'node:url'
import { MessagePort } from 'node:worker_threads'
import { MockServiceClient } from './mock-service-client.js'

let client: MockServiceClient

export const globalPreload: GlobalPreloadHook = ({ port }) => {
  // loader thread. connect client
  client = new MockServiceClient(port)
  const serviceModuleCJS = JSON.stringify(
    fileURLToPath(new URL('../cjs/mock-service.js', import.meta.url))
  )
  const base = JSON.stringify(fileURLToPath(import.meta.url))
  return `
// main thread, start service and listen for connections
const { createRequire } = getBuiltin('module')
const require = createRequire(${base})
const { fileURLToPath } = getBuiltin('url')
const { MockService } = require(${serviceModuleCJS})
MockService.listen(port)
port.unref()
`
}

export const initialize = ({ port }: { port: MessagePort }): void => {
  client = new MockServiceClient(port)
}

export const load: LoadHook = async (url, context, nextLoad) => {
  if (!client) {
    throw new Error(
      'initialize() or globalPreload() must be run prior to ' +
        'running the load() hook. Did you --loader when you meant ' +
        '--import or vice versa?'
    )
  }
  const source = await client.load(url)
  return source
    ? {
        format: 'module',
        source: `${source}`,
        shortCircuit: true,
      }
    : nextLoad(url, context)
}

export const resolve: ResolveHook = async (
  url,
  context,
  nextResolve
) => {
  if (!client) {
    throw new Error(
      'initialize() or globalPreload() must be run prior to ' +
        'running the resolve() hook. Did you --loader when you meant ' +
        '--import or vice versa?'
    )
  }
  const response = await client.resolve(url, context.parentURL)
  return response && response.startsWith('tapmock://')
    ? {
        url: response,
        format: 'module',
        shortCircuit: true,
      }
    : nextResolve(response || url, context)
}

import { MessageChannel } from 'node:worker_threads'
import { MockService } from './mock-service.js'

import * as MODULE from 'node:module'

const { register, registerHooks } = MODULE as {
  register: typeof MODULE.register
  registerHooks?: typeof MODULE.registerHooks
}

if (registerHooks) {
  // instantiate MockService, and create load/resolve sync hooks that
  // use the service directly, not through a client.
  registerHooks({
    load(url, context, nextLoad) {
      const source = MockService.load({
        action: 'load',
        url,
      })
      return source ?
          {
            format: 'module',
            source,
            shortCircuit: true,
          }
        : nextLoad(url, context)
    },
    resolve(url, context, nextResolve) {
      const { parentURL } = context
      if (!parentURL) return nextResolve(url, context)

      const response = MockService.resolve({
        action: 'resolve',
        url,
        parentURL,
      })

      return response ?
          {
            url: response,
            shortCircuit: true,
          }
        : nextResolve(url, context)
    },
  })
} else {
  const { port1, port2 } = new MessageChannel()
  MockService.listen(port1)
  register(String(new URL('./loader.mjs', import.meta.url)), {
    parentURL: import.meta.url,
    data: { port: port2 },
    transferList: [port2],
  })
}

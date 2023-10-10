// uncomment the 'export importLoader = ...' line in index.ts to use this.

// import Module from 'node:module'
// import { Serializable } from 'node:worker_threads'
//
// const { register } = Module as {
//   register?: (
//     url: string | URL,
//     initData?: {
//       parentURL?: string
//       data?: Serializable
//       transferList?: Transferable[]
//     }
//   ) => void
// }
//
// register?.(new URL('./loader.js', import.meta.url))
//
// Or:
//
// import { MessagePort } from 'node:worker_threads'
// const { port1, port2 } = new MessagePort()
// register?.(new URL('./loader.js', import.meta.url), {
//   parentURL: import.meta.url,
//   data: {
//     some: 'init',
//     data: { port: port2 },
//     transferList: [port2],
//   }
// })
//
// Then you can pass messages to the loader thread over the ports.

//@ts-ignore - not yet in @types/node
import { register } from 'node:module'

// This is the main thread, do whatever setup needs to be done here.
// This triggers a call to initialize() to be run in the loader thread,
// which is defined in ./hooks.mts
//@ts-ignore
register(String(new URL('./loader.mjs', import.meta.url)), {
  parentURL: import.meta.url,
  // to communicate with loader thread, pass MessagePort as shown
  // in the comment above.
})

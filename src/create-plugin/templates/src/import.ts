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

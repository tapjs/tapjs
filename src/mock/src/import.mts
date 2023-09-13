import { MessageChannel } from 'node:worker_threads'
import { MockService } from './mock-service.js'

//@ts-ignore
import { register } from 'node:module'

const { port1, port2 } = new MessageChannel()

MockService.listen(port1)

register(new URL('./loader.mjs', import.meta.url), {
  parentURL: import.meta.url,
  data: { port: port2 },
  transferList: [port2],
})

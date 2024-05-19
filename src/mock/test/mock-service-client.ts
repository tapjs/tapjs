import t from 'tap'
import { MessageChannel } from 'worker_threads'
import { MockServiceClient } from '../dist/esm/mock-service-client.js'
import { MockServiceRequest } from '../dist/esm/mock-service.js'

const { port1, port2 } = new MessageChannel()
port1.unref()
port2.unref()

const client = new MockServiceClient(port2)

port1.on('message', msg => {
  requests.push(msg)
  // shuffle response times, and unref to test port refs
  setTimeout(
    () => {
      port1.postMessage({
        ...msg,
        response: 'response',
      })
    },
    Math.floor(Math.random() * 50),
  ).unref()
})
const requests: MockServiceRequest[] = [
  { id: '1', action: 'resolve', url: 'blah', parentURL: 'bloo' },
  { id: '2', action: 'resolve', url: 'x', parentURL: 'y' },
  { id: '3', action: 'load', url: 'x' },
  { id: '4', action: 'load', url: 'x' },
]

port1.unref()

t.test('ignore requests before starting', async t => {
  t.plan(requests.length)
  port1.postMessage({ noise: 'just some junk' })
  await Promise.all(
    requests.map(async req => {
      const response = await (req.action === 'resolve' ?
        client.resolve(req.url, req.parentURL)
      : client.load(req.url))
      t.strictSame(response, null)
    }),
  )
})

t.test('handling requests once started', async t => {
  t.plan(requests.length)
  port2.emit('message', { start: true })
  port1.postMessage({ noise: 'just some junk' })
  await Promise.all(
    requests.map(async req => {
      const response = await (req.action === 'resolve' ?
        client.resolve(req.url, req.parentURL)
      : client.load(req.url))
      t.strictSame(response, 'response')
    }),
  )
})

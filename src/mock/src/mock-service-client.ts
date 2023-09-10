// Created in the loader thread to communicate with the MockService over
// the message port.
import { randomBytes } from 'crypto'
import { MessagePort } from 'worker_threads'
import {
  isMockServiceResponse,
  MockServiceRequest,
  MockServiceResponse,
} from './mock-service.js'

const getId = () => randomBytes(8).toString('hex')

export class MockServiceClient {
  #port: MessagePort
  #requests: Map<string, (res: MockServiceResponse) => void> =
    new Map()
  constructor(port: MessagePort) {
    this.#port = port
    this.#port.on('message', msg => this.#receive(msg))
    this.#port.unref()
  }
  #receive(msg: any) {
    if (!isMockServiceResponse(msg)) return
    const resolve = this.#requests.get(msg.id)
    // unpossible
    /* c8 ignore start */
    if (!resolve) return
    /* c8 ignore stop */
    this.#requests.delete(msg.id)
    if (this.#requests.size === 0) {
      this.#port.unref()
    }
    resolve(msg)
  }
  async #fetch(msg: MockServiceRequest) {
    return new Promise<MockServiceResponse>(resolve => {
      this.#requests.set(msg.id, resolve)
      this.#port.ref()
      this.#port.postMessage(msg)
    })
  }
  async load(url: string) {
    const res = await this.#fetch({
      action: 'load',
      url,
      id: getId(),
    })
    return res.response
  }
  async resolve(url: string, parentURL?: string) {
    return (
      parentURL &&
      (
        await this.#fetch({
          action: 'resolve',
          url,
          parentURL,
          id: getId(),
        })
      ).response
    )
  }
}

import { Minipass } from 'minipass'
import { DefaultSerializer } from 'v8'
import {
  kSerializedSizeHeader,
  kV8HeaderLength,
} from './constants.js'
import {
  FailData,
  isMessageFail,
  Message,
  MessageFail,
  NamedNestedLocation,
  PassData,
  PlanData,
  StringData,
} from './messages.js'
import { serializeError } from './serialize.js'
export * from './messages.js'

export class TestStreamSerialize extends Minipass<Buffer> {
  #serializer: DefaultSerializer = new DefaultSerializer()

  constructor() {
    super()
    this.writable = false
  }

  diagnostic(data: DiagnosticData) {
    this.#write({ type: 'test:diagnostic', data })
  }
  dequeue(data: NamedNestedLocation) {
    this.#write({ type: 'test:dequeue', data })
  }
  enqueue(data: NamedNestedLocation) {
    this.#write({ type: 'test:enqueue', data })
  }
  fail(data: FailData) {
    this.#write({ type: 'test:fail', data })
  }
  pass(data: PassData) {
    this.#write({ type: 'test:pass', data })
  }
  plan(data: PlanData) {
    this.#write({ type: 'test:plan', data })
  }
  start(data: NamedNestedLocation) {
    this.#write({ type: 'test:start', data })
  }
  stderr(data: StringData) {
    this.#write({ type: 'test:stderr', data })
  }
  stdout(data: StringData) {
    this.#write({ type: 'test:stdout', data })
  }

  #write(item: Message) {
    let originalError: undefined | (Error & { cause?: any })
    if (
      isMessageFail(item) &&
      item.data.details.error !== undefined
    ) {
      originalError = item.data.details.error
      Object.assign(item.data.details, {
        error: serializeError(originalError),
      })
    }

    this.#serializer.writeHeader()
    // Add 4 bytes, to later populate with message length
    this.#serializer.writeRawBytes(Buffer.allocUnsafe(4))
    this.#serializer.writeHeader()
    this.#serializer.writeValue(item)

    if (originalError !== undefined) {
      Object.assign((item as MessageFail).data.details, {
        error: originalError,
      })
    }
    const serializedMessage = this.#serializer.releaseBuffer()
    const serializedMessageLength =
      serializedMessage.length - kSerializedSizeHeader

    serializedMessage.set(
      [
        (serializedMessageLength >> 24) & 0xff,
        (serializedMessageLength >> 16) & 0xff,
        (serializedMessageLength >> 8) & 0xff,
        serializedMessageLength & 0xff,
      ],
      kV8HeaderLength,
    )
    super.write(serializedMessage)
  }

  //@ts-ignore
  write() {
    throw new Error('not directly writable, use message methods')
  }
}

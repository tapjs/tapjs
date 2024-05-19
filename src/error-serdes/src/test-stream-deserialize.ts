import { Minipass } from 'minipass'
import { DefaultDeserializer } from 'v8'
import {
  kSerializedSizeHeader,
  kV8HeaderLength,
} from './constants.js'
import { deserializeError } from './deserialize.js'
import { Message } from './messages.js'
export * from './messages.js'

export class TestStreamDeserialize extends Minipass<
  Message,
  Minipass.ContiguousData
> {
  #buffer?: Buffer

  constructor() {
    super({ objectMode: true })
  }

  write(chunk: Minipass.ContiguousData, cb?: () => void): boolean
  write(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding,
    cb?: () => void,
  ): boolean
  write(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding | (() => void),
    cb?: () => void,
  ): boolean {
    // stream.write types boilerplate
    /* c8 ignore start */
    if (typeof encoding === 'function') {
      cb = encoding
      encoding = undefined
    }
    if (encoding === 'buffer') encoding = undefined
    if (typeof chunk === 'string') {
      chunk = Buffer.from(chunk, encoding ?? 'utf8')
    } else if (!Buffer.isBuffer(chunk)) {
      chunk = Buffer.from(chunk as ArrayBuffer)
    }
    /* c8 ignore stop */

    let buf =
      this.#buffer?.length ?
        Buffer.concat([this.#buffer, chunk as Buffer])
      : (chunk as Buffer)
    this.#buffer = undefined

    while (buf.length >= kSerializedSizeHeader) {
      const size = readSize(buf, kV8HeaderLength)
      if (buf.length < size + kSerializedSizeHeader) {
        break
      }
      const des = new DefaultDeserializer(
        buf.subarray(
          kSerializedSizeHeader,
          size + kSerializedSizeHeader,
        ),
      )
      buf = buf.subarray(size + kSerializedSizeHeader)
      des.readHeader()
      const item = des.readValue()
      if (item?.data?.details?.error) {
        item.data.details.error = deserializeError(
          item.data.details.error,
        )
      }

      //@ts-ignore
      super.write(item as Message)
    }

    if (buf.length) this.#buffer = buf

    /* c8 ignore start */
    if (cb) {
      if (this.flowing) cb()
      else this.once('drain', cb)
    }
    /* c8 ignore stop */
    return this.flowing
  }

  end(cb?: () => void): this
  end(chunk: Minipass.ContiguousData, cb?: () => void): this
  end(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding,
    cb?: () => void,
  ): this
  end(
    chunk?: Minipass.ContiguousData | (() => void),
    encoding?: Minipass.Encoding | (() => void),
    cb?: () => void,
  ) {
    // just affordance for TS's persnicketiness
    /* c8 ignore start */
    const ret =
      chunk === undefined || typeof chunk === 'function' ?
        super.end(chunk)
      : typeof encoding === 'function' ? super.end(chunk, encoding)
      : super.end(chunk, encoding, cb)
    /* c8 ignore stop */
    if (this.#buffer) {
      this.emit('error', new Error('deserialize ended mid-message'))
    }
    return ret
  }
}

const readSize = (buf: Buffer, offset: number) => {
  const a = buf[offset]
  const b = buf[offset + 1]
  const c = buf[offset + 2]
  const d = buf[offset + 3]

  // not possible, we check the length
  /* c8 ignore start */
  if (
    a === undefined ||
    b === undefined ||
    c === undefined ||
    d === undefined
  ) {
    throw new Error('Invalid buffer, not long enough to readSize')
  }
  /* c8 ignore stop */

  return (a << 24) | (b << 16) | (c << 8) | d
}

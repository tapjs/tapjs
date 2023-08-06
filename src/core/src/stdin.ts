import { Minipass } from 'minipass'
import { Base, BaseOpts, TapBaseEvents } from './base.js'

/**
 * Options that may be provided to the {@link Stdin} class
 */
export interface StdinOpts extends BaseOpts {
  tapStream?: NodeJS.ReadableStream | Minipass<Buffer> | Minipass<string>
}

export interface StdinEvents extends TapBaseEvents {}

/**
 * Class representing standard input as a TAP stream
 *
 * Instantiated by `t.stdin()`, typically.
 *
 * @internal
 */
export class Stdin extends Base<StdinEvents> {
  inputStream: NodeJS.ReadableStream | Minipass<Buffer> | Minipass<string>
  constructor(options: StdinOpts) {
    super({
      ...options,
      name: options.name || '/dev/stdin',
    })
    this.inputStream = options.tapStream || process.stdin
    this.inputStream.pause()
  }

  main(cb: () => void) {
    this.inputStream.on('error', er => {
      er.tapCaught = 'stdinError'
      this.threw(er)
    })
    if (this.options.timeout) {
      this.setTimeout(this.options.timeout)
    }
    const s = this.inputStream as Minipass
    s.pipe(this.parser)
    if (this.parent) {
      this.parent.emit('stdin', this)
    }
    this.inputStream.resume()
    s.once('end', cb)
  }

  threw(er: any, extra?: any, proxy?: boolean) {
    extra = super.threw(er, extra, proxy)
    Object.assign(this.options, extra)
    this.parser.abort(er.message, extra)
    this.parser.end()
  }
}

import { Minipass } from 'minipass'
import { Base, BaseOpts } from './base.js'

export interface StdinOpts extends BaseOpts {
  tapStream?: NodeJS.ReadableStream | Minipass
}

export class Stdin extends Base {
  inputStream: NodeJS.ReadableStream | Minipass<string | Buffer>
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
    this.once('end', cb)
  }

  threw(er: any, extra?: any, proxy?: boolean) {
    extra = super.threw(er, extra, proxy)
    Object.assign(this.options, extra)
    this.parser.abort(er.message, extra)
    this.parser.end()
  }
}

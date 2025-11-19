/**
 * This is not very useful in many cases outside of the tap runner itself,
 * where it's used to replay previous stored test results.
 *
 * @module
 */
import { Minipass } from 'minipass'
import { createReadStream } from 'node:fs'
import { relative, sep } from 'node:path'
import { Base, BaseOpts, TapBaseEvents } from './base.js'
import { cwd as procCwd } from './proc.js'
import { throwToParser } from './throw-to-parser.js'

/**
 * Options that may be provided to the {@link @tapjs/core!tap-file.TapFile}
 * class
 */
export interface TapFileOpts extends BaseOpts {
  /**
   * Optionally provide a stream of content to treat as the file's TAP data
   */
  tapStream?: NodeJS.ReadableStream | Minipass<Buffer> | Minipass<string>
  /**
   * The file to read, required if tapStream not provided
   */
  filename?: string
  /**
   * just used to calculate the default name from the filename
   * ignored otherwise
   */
  cwd?: string
}

export interface TapFileEvents extends TapBaseEvents {}

/**
 * Class representing a file as a TAP stream
 *
 * @internal
 */
export class TapFile extends Base<TapFileEvents> {
  caughtName: string = 'tapFileError'
  emitName: string = 'tapFile'
  cwd?: string
  filename?: string
  tapStream?: NodeJS.ReadableStream | Minipass<Buffer> | Minipass<string>
  constructor(options: TapFileOpts) {
    const { filename, tapStream, cwd = procCwd } = options
    const name = TapFile.getName(options.name, filename, cwd)
    super({ ...options, name })

    this.filename = filename
    this.cwd = cwd
    this.tapStream = tapStream
    this.tapStream?.pause()
  }

  static getName(name?: string, filename?: string, cwd: string = procCwd) {
    if (name) return name
    if (!filename) return 'file input'
    const rel = relative(cwd, filename)
    return (rel.startsWith('..' + sep) ? filename : rel).replace(
      /\.tap$/,
      '',
    )
  }

  main(cb: () => void) {
    const { tapStream, filename } = this
    if (filename && !tapStream) {
      this.tapStream = createReadStream(filename)
    } else if (!this.tapStream) {
      throw new Error('either tapStream or filename must be provided')
    }
    ;(this.tapStream as Minipass<Buffer>).on('error', er => {
      ;(er as Error & { tapCaught: string }).tapCaught = this.caughtName
      this.threw(er)
    })
    if (this.options.timeout) {
      this.setTimeout(this.options.timeout)
    }
    const s = this.tapStream as Minipass
    s.pipe(this.parser)
    if (this.parent) {
      this.parent.emit(this.emitName, this)
    }
    s.once('end', cb)
    s.once('error', cb)
    this.tapStream.resume()
  }

  threw(er: any, extra?: any) {
    return throwToParser(this.parser, super.threw(er, extra))
  }
}

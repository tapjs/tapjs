import { OPEN_BRACE_EOL } from './brace-patterns.js'
import { Parser } from './index.js'
import { Directive, parseDirective } from './parse-directive.js'
import { Plan } from './plan.js'

/**
 * An indication that a violation of the TAP specification has occurred
 *
 * This can indicate a test point that exceeds the plan, a test point
 * encountered after a trailing plan, or in the case of `pragma +strict`,
 * any non-TAP data.
 */
export type TapError = Result | { tapError: string; [k: string]: any }

/**
 * A representation of a TestPoint result, with diagnostics if present.
 */
export class Result {
  public ok: boolean
  public name: string = ''
  public id: number = 0
  public buffered: boolean = false
  public tapError: string | null = null
  public skip: boolean | string = false
  public todo: boolean | string = false
  public previous: Result | null = null
  public plan: Plan | null = null
  public diag: any | null = null
  public time: number | null = null
  public fullname: string = ''
  public closingTestPoint: boolean = false

  constructor(parsed: string[], parser: Parser) {
    const ok = !parsed[1]
    const id = +(parsed[2] || 0)
    let buffered = parsed[4]
    this.ok = ok
    if (parsed[2]) this.id = id

    let rest = parsed[3] || ''
    let name: string
    // We know at this point the parsed result cannot contain \n,
    // so we can leverage that as a placeholder.
    // first, replace any PAIR of \ chars with \n
    // then, split on any # that is not preceeded by \
    // the first of these is definitely the description
    // the rest is the directive, if recognized, otherwise
    // we just lump it onto the description, but escaped.
    // then any \n chars in either are turned into \ (just one)

    // escape \ with \
    // swap out escaped \ with \n, then swap back
    rest = rest.replace(/(\\\\)/g, '\n')
    const [h, ...r] = rest.split(/(?<=\s|^)(?<!\\)#/g)
    name = (h || '').replace(/\\#/g, '#').replace(/\n/g, '\\')
    rest = r.join('#').replace(/\\#/g, '#').replace(/\n/g, '\\')

    // now, let's see if there's a directive in there.
    const dir = parseDirective(rest.trim())
    if (!dir) name += (rest ? '#' + rest : '') + buffered
    else {
      // handle buffered subtests with todo/skip on them, like
      // ok 1 - bar # todo foo {\n
      const dirKey: Directive = dir[0]
      const dirValue = dir[1]
      if (dirKey === 'todo' || dirKey === 'skip') {
        this[dirKey] = dirValue
      } else {
        if (dirKey === 'time') {
          this.time = parseFloat(dirValue)
          /* c8 ignore start */
        }
        /* c8 ignore stop */
      }
    }

    if (OPEN_BRACE_EOL.test(name)) {
      name = name.replace(OPEN_BRACE_EOL, '')
      buffered = '{'
    }

    if (buffered === '{') this.buffered = true

    if (name) this.name = name.trim()
    const n: string[] = []
    if (parser.fullname) n.push(parser.fullname)
    if (this.name) n.push(this.name)
    this.fullname = n.join(' > ').trim()
  }
}

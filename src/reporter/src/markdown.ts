// markdown representation of the test run

import { Minipass } from 'minipass'
import { parse } from 'path'
import { Parser } from 'tap-parser'
import { stringify } from 'tap-yaml'
import { Case, Suite, Suites } from './json.js'

export class MarkdownStream extends Minipass<string> {
  parser: Parser = new Parser()
  constructor() {
    super({ encoding: 'utf8' })
    const suites = new Suites(this.parser)
    suites.on('suite', s => this.suiteStart(s))
    suites.on('case', c => this.onCase(c))
    suites.on('suiteEnd', s => this.suiteEnd(s))
    this.suiteStart(suites)
    this.parser.on('complete', () => {
      this.suiteEnd(suites)
      super.end()
    })
  }

  onCase(c: Case) {
    const { name, id, diag, ok, skip, todo } = c.result
    const t =
      skip !== false ? 'skip'
      : todo !== false ? 'todo'
      : ok ? 'pass'
      : 'fail'
    const color =
      t === 'skip' ? 'cyan'
      : t === 'todo' ? 'magenta'
      : t === 'pass' ? 'green'
      : 'red'

    const msg =
      typeof skip === 'string' ? `<span color="cyan">${skip}</span>`
      : typeof todo === 'string' ? `<span color="magenta">${todo}</span>`
      : ''

    const { source, diff, ...extra } = diag || {}
    /* c8 ignore start */
    const file = diag?.at?.fileName || diag?.at?.file || diag?.file
    /* c8 ignore stop */
    const srcLang = file ? parse(file).ext.substring(1) : ''
    const srcPre =
      source ? `\n\n\`\`\`${srcLang}\n${source.trimEnd()}\n\`\`\`` : ''
    const ymlExtra = stringify(extra).trimEnd()
    const preExtra =
      ymlExtra === '{}' ? '' : `\n\n\`\`\`yaml\n${ymlExtra}\n\`\`\``
    const preDiff = diff ? `\n\n\`\`\`diff\n${diff.trimEnd()}\n\`\`\`` : ''
    const b = (preDiff + srcPre + preExtra)
      .replace(/^/gm, '    ')
      .replace(/\n    \n/g, '\n\n')
    const body = b.trim() ? '\n\n    ' + b.trimStart() : '\n'
    super.write(
      `${id}. <b style="color:${color}">${t}</b> ${name}${msg}${body}\n`,
    )
  }

  suiteStart(s: Suite) {
    const h = Math.min(6, s.parser.level + 1)
    super.write(`${'#'.repeat(h)} ${s.name.replace(/\n/g, ' ')}\n\n`)
  }

  suiteEnd(s: Suite) {
    const summary = {
      ...s.toJSON(),
      suites: undefined,
      cases: undefined,
    } as Record<string, any>
    const { source, ...diag } = summary.diag || {}
    if (summary.diag) delete summary.diag.source
    /* c8 ignore start */
    const file = diag.at?.fileName || diag.at?.file || diag.file
    /* c8 ignore stop */
    const srcLang = file ? parse(file).ext.substring(1) : ''
    const srcPre = source ? `\n\n\`\`\`${srcLang}\n${source}\n\`\`\`` : ''
    const fn = summary.fullname || summary.name
    delete summary.fullname
    delete summary.name
    super.write(
      `\n----\n\n**${fn}**${srcPre}\n\n\`\`\`yaml\n${stringify(
        summary,
      ).trimEnd()}\n\`\`\`\n\n`,
    )
  }

  write(
    chunk: Minipass.ContiguousData,
    cb?: (() => void) | undefined,
  ): boolean
  write(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding | undefined,
    cb?: (() => void) | undefined,
  ): boolean
  write(chunk: any, encoding?: any, cb?: any): boolean {
    return this.parser.write(chunk, encoding, cb)
  }

  end(cb?: (() => void) | undefined): this
  end(chunk: Minipass.ContiguousData, cb?: (() => void) | undefined): this
  end(
    chunk: Minipass.ContiguousData,
    encoding?: Minipass.Encoding | undefined,
    cb?: (() => void) | undefined,
  ): this
  end(chunk?: any, encoding?: any, cb?: any): this {
    this.parser.end(chunk, encoding, cb)
    return this
  }
}

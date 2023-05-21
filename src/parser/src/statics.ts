import etoa from 'events-to-array'
type EventLog = ReturnType<typeof etoa>
import { Parser, ParserOptions } from './index.js'
import { esc } from './escape.js'
import yaml from 'tap-yaml'
import { SPACE_OPEN_BRACE_EOL } from './brace-patterns.js'

// used in flattening mode
const getId = (): { (): number; current: number } => {
  const id = () => id.current++
  id.current = 1
  return id
}

export const parse = (str: string, options: ParserOptions): EventLog => {
  const { flat = false } = options
  const ignore = ['line', 'pass', 'fail', 'todo', 'skip', 'result']
  if (flat) ignore.push('assert', 'child', 'plan', 'complete')
  const parser = new Parser(options)
  const events = etoa(parser, ignore)
  if (flat) {
    const id = getId()
    parser.on('result', res => {
      const name = []
      if (res.fullname) name.push(res.fullname)
      if (res.name) name.push(res.name)
      res.name = name.join(' > ').trim()
      res.fullname = ''
      res.id = id()
      events.push(['assert', res])
    })
    parser.on('complete', res => {
      if (!res.bailout) events.push(['plan', { end: id.current - 1, start: 1 }])
      events.push(['complete', res])
    })
  }

  parser.end(str)
  return events
}

export const stringify = (
  msg: EventLog,
  { flat = false, indent = '', id = getId() }
) => {
  const ind = flat ? '' : indent
  return (
    ind +
    msg
      .map(item => {
        switch (item[0]) {
          case 'child':
            const comment = item[1][0]
            const child = item[1].slice(1)
            return (
              Parser.stringify([comment], { flat, indent: '', id }) +
              Parser.stringify(child, { flat, indent: '    ', id })
            )

          case 'version':
            return 'TAP version ' + item[1] + '\n'

          case 'plan':
            if (flat) {
              if (indent !== '') return ''
              item[1].start = 1
              item[1].end = id.current - 1
            }
            return (
              item[1].start +
              '..' +
              item[1].end +
              (item[1].comment ? ' # ' + esc(item[1].comment) : '') +
              '\n'
            )

          case 'pragma':
            return 'pragma ' + (item[2] ? '+' : '-') + item[1] + '\n'

          case 'bailout':
            return 'Bail out!' + (item[1] ? ' ' + esc(item[1]) : '') + '\n'

          case 'assert':
            const res = item[1]
            if (flat) {
              res.id = id()
              const name = []
              if (res.fullname) name.push(res.fullname)
              if (res.name) name.push(res.name)
              res.name = name.join(' > ').trim()
            }
            return (
              (res.ok ? '' : 'not ') +
              'ok' +
              (res.id ? ' ' + res.id : '') +
              (res.name
                ? ' - ' + esc(res.name).replace(SPACE_OPEN_BRACE_EOL, '')
                : '') +
              (res.skip
                ? ' # SKIP' + (res.skip === true ? '' : ' ' + esc(res.skip))
                : '') +
              (res.todo
                ? ' # TODO' + (res.todo === true ? '' : ' ' + esc(res.todo))
                : '') +
              (res.time ? ' # time=' + res.time + 'ms' : '') +
              '\n' +
              (res.diag
                ? '  ---\n  ' +
                  yaml.stringify(res.diag).split('\n').join('\n  ').trim() +
                  '\n  ...\n'
                : '')
            )

          case 'extra':
          case 'comment':
            return item[1]
        }
      })
      .join('')
      .split('\n')
      .join('\n' + ind)
      .trim() +
    '\n'
  )
}

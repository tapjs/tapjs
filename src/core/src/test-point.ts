import { diags } from './diags.js'
import { esc } from './esc.js'
import { Extra } from './index.js'

/**
 * Very simple result object, just indicating pass/fail status,
 * message, and the {@link Extra} object provided to the assertion method.
 */
export interface Result {
  ok: boolean
  message: string
  extra: Extra
}

/**
 * Object representing a single test point `ok` / `not ok` line
 */
export class TestPoint {
  ok: 'ok ' | 'not ok '
  name: string
  message: string
  extra: { [key: string]: any }
  res: Result

  constructor(
    ok: boolean,
    message: string,
    extra?: { [key: string]: any }
  ) {
    this.ok = ok ? 'ok ' : 'not ok '
    extra = extra || {}
    message = message
      .trim()
      .replace(/[\n\r]/g, ' ')
      .replace(/\t/g, '  ')
    this.res = { ok, message, extra }
    this.extra = extra
    this.name = message
    this.message = tpMessage(esc(this.name), extra)
  }
}

const tpMessage = (
  description: string,
  extra: { [k: string]: any }
): string => {
  let message = description ? ` - ${description}` : ''

  if (extra.skip) {
    message += ' # SKIP'
    if (typeof extra.skip === 'string') {
      message += ' ' + esc(extra.skip)
    }
  } else if (extra.todo) {
    message += ' # TODO'
    if (typeof extra.todo === 'string') {
      message += ' ' + esc(extra.todo)
    }
  } else if (extra.time) {
    message += ' # time=' + extra.time + 'ms'
  }

  const diagYaml = extra.diagnostic ? '\n' + diags(extra) : ''
  message += diagYaml + '\n'

  return message
}

import { LoadedConfig } from '@tapjs/config'
import { TAP, TestBase } from '@tapjs/core'
import { render } from 'ink'
import { isStream, Minipass } from 'minipass'
import React, { FC } from 'react'
import { Writable } from 'stream'
import { WriteStream } from 'tty'
import { Base } from './base.js'
import * as components from './components.js'
import { Dot } from './dot.js'
import * as hooks from './hooks.js'
import { JSONReport, JSONStream } from './json.js'
import { JUnit } from './junit.js'
import { MarkdownStream } from './markdown.js'
import { Min } from './min.js'
import { Terse } from './terse.js'
import * as utils from './utils.js'

export {
  Base,
  Terse,
  Min,
  Dot,
  JSONReport,
  JSONStream,
  MarkdownStream,
  JUnit,
  hooks,
  components,
  utils,
}

export interface TapReportOpts {
  test: TestBase
  config: LoadedConfig
}

export type Reporter = FC<TapReportOpts>
export const types: Record<
  string,
  Reporter | typeof Minipass<string>
> = {}
export const addType = (
  name: string,
  report: Reporter | typeof Minipass<string>,
) => {
  types[name] = report
}
addType('base', Base)
addType('terse', Terse)
addType('min', Min)
addType('dot', Dot)
addType('jsonstream', JSONStream)
addType('json', JSONReport)
addType('junit', JUnit)
addType('markdown', MarkdownStream)

export const report = async (
  Type: string | Reporter | typeof Minipass<string>,
  tap: TAP,
  config: LoadedConfig,
  stdout: Writable = process.stdout,
) => {
  if (typeof Type === 'string') {
    if (types.hasOwnProperty(Type)) {
      Type = types[Type] as Reporter | typeof Minipass<string>
    } else {
      throw new TypeError(`unknown report type: ${Type}`)
    }
  }
  tap.register()
  if (isStream(Type.prototype)) {
    const reporter = new (Type as typeof Minipass)()
    tap.pipe(reporter).pipe(stdout)
  } else {
    // always show the cursor when we finish
    tap.on('complete', () => process.stdout.write('\x1b[?25h'))
    const T = Type as Reporter
    const opts =
      stdout === process.stdout ?
        { patchConsole: false }
      : (stdout as WriteStream)
    render(<T test={tap} config={config}></T>, opts)
  }
  return true
}

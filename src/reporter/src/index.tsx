import { LoadedConfig } from '@tapjs/config'
import { TAP, TestBase } from '@tapjs/core'
import { render } from 'ink'
import React, { FC } from 'react'
import { Base } from './base.js'
import * as components from './components.js'
import * as hooks from './hooks.js'
import { Terse } from './terse.js'
import * as utils from './utils.js'

export { Base, Terse, hooks, components, utils }

export interface TapReportOpts {
  test: TestBase
  config: LoadedConfig
}

export type Reporter = FC<TapReportOpts>
export const types: Record<string, Reporter> = {}
export const addType = (name: string, report: Reporter) => {
  types[name] = report
}
addType('base', Base)
addType('terse', Terse)

export const report = async (
  Type: string | Reporter,
  tap: TAP,
  config: LoadedConfig
) => {
  if (typeof Type === 'string') {
    if (types.hasOwnProperty(Type)) {
      Type = types[Type] as Reporter
    } else {
      throw new TypeError(`unknown report type: ${Type}`)
    }
  }
  tap.register()
  // always show the cursor when we finish
  tap.on('complete', () => process.stdout.write('\x1b[?25h'))
  render(<Type test={tap} config={config}></Type>, {
    patchConsole: false,
  })
  return true
}

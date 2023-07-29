import { LoadedConfig } from '@tapjs/config'
import { TAP, TestBase } from '@tapjs/core'
import { render } from 'ink'
import React from 'react'

export interface TapReportOpts {
  test: TestBase
  config: LoadedConfig
}

import { Base } from './base/index.js'
import { Terse } from './terse/index.js'
export const types = {
  base: Base,
  terse: Terse,
}

export const report = async (
  Type: 'tap' | keyof typeof types | React.FC<TapReportOpts>,
  tap: TAP,
  config: LoadedConfig
): Promise<boolean> => {
  if (Type === 'tap' || process.env.TAP === '1') {
    // just show the tap.
    tap.pipe(process.stdout)
    return false
  }
  // TODO: look up report as a module if not a builtin?
  if (typeof Type === 'string') {
    if (!types.hasOwnProperty(Type)) {
      throw new TypeError(`unknown report type: ${Type}`)
    }
    Type = types[Type]
  }
  tap.register()
  // always show the cursor when we finish
  tap.on('complete', () => process.stdout.write('\x1b[?25h'))
  render(<Type test={tap} config={config}></Type>, {
    patchConsole: false,
  })
  return true
}

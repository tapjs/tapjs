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
  Type: keyof typeof types | React.FC<TapReportOpts>,
  tap: TAP,
  config: LoadedConfig
): Promise<boolean> => {
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

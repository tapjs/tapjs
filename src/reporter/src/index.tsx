import { TAP } from '@tapjs/core'
import { Config } from '@tapjs/run'
import { render } from 'ink'
import React from 'react'

export interface TapReportOpts {
  tap: TAP
  config: Config
}

import { Base } from './reports/base/index.js'
export const types = {
  base: Base,
}

export const report = async (
  Type: 'tap' | keyof typeof types | React.FC<TapReportOpts>,
  tap: TAP,
  config: Config
): Promise<boolean> => {
  if (Type === 'tap' || process.env.TAP === '1') {
    // just show the tap.
    tap.pipe(process.stdout)
    return false
  }
  // TODO: look up report as a module if not a builtin
  if (typeof Type === 'string') {
    if (!types.hasOwnProperty(Type)) {
      throw new TypeError(`unknown report type: ${Type}`)
    }
    Type = types[Type]
  }
  tap.register()
  render(<Type tap={tap} config={config}></Type>, { patchConsole: false })
  return true
}

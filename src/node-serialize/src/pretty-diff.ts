// This is a WAY less advanced version of the diff highlighting
// that the reporter does.
//
// We use this when serializing the diagnostics for node --test,
// because it all has to be concatenated into one big string.

const theme = {
  end: '\x1B[39m\x1B[49m\x1b[m',
  green: '\x1B[48;2;58;117;0m\x1B[38;2;242;255;229m',
  red: '\x1B[48;2;172;62;163m\x1B[38;2;255;229;241m',
  ctx: '\x1B[48;2;34;34;34m\x1B[38;2;117;158;239m',
  white: '\x1B[48;2;51;51;51m\x1B[38;2;204;204;204m',
} as const

import { proc } from '@tapjs/core'

const cols = Math.max(25, Math.min(proc?.stdout.columns || 75, 75))

export const prettyDiff = (diff: any) => {
  if (!diff || typeof diff !== 'string') return ''
  return diff
    .trimEnd()
    .replace(/^.*$/gm, s => s.trimEnd().padEnd(cols))
    .replace(/^\-.+$/gm, s => theme.red + s + theme.end)
    .replace(/^\+.+$/gm, s => theme.green + s + theme.end)
    .replace(/^\@.+$/gm, s => theme.ctx + s + theme.end)
    .replace(/^ .+$/gm, s => theme.white + s + theme.end)
}

import { TestBase } from '@tapjs/core'
import { LogEntry } from '../../dist/esm/hooks/use-log.js'

export const logs: LogEntry[] = [
  { test: { name: 'zro', parser: {} } as TestBase },
  { test: { name: 'one', parser: {} } as TestBase },
  { text: 'hello console' },
  { text: 'moar consule!' },
  { name: 'zro', fd: 1, text: 'zro stdout' },
  { name: 'zro', fd: 1, text: 'zro moar stdout' },
  { name: 'zro', fd: 2, text: 'zro stderr' },
  { name: 'zro', fd: 2, text: 'zro moar stderr' },
  { name: 'one', fd: 2, text: 'one stderr' },
  { name: 'one', fd: 2, text: 'one moar stderr' },
  { name: 'one', fd: 1, text: 'one stdout' },
  { name: 'one', fd: 1, text: 'one moar stdout' },
]

logs.push(...logs)

for (let i = 1; i < logs.length; i++) {
  const l = logs[i]
  if (!l) continue
  l.previous = logs[i - 1]
}

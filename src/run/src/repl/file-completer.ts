import { readdirSync, statSync } from 'node:fs'
import { dirname, sep } from 'node:path'
import { filterCompletions } from './filter-completions.js'

export const fileCompleter = (args: string[], input: string) => {
  const lw = args.pop() || ''
  const d = dirname(lw)
  const dir =
    lw.endsWith(sep) ? lw
    : d === '.' ? ''
    : d + sep
  const stem = input.substring(0, input.length - lw.length)
  try {
    const matches = filterCompletions(
      readdirSync(dir || '.')
        // non-deterministic
        /* c8 ignore start */
        .sort((a, b) => a.localeCompare(b, 'en'))
        /* c8 ignore stop */
        .map(f => (statSync(dir + f).isDirectory() ? f + sep : f))
        .map(f => stem + dir + f),
      input,
    )
    if (matches.length === 1 && !matches[0]?.endsWith(sep)) {
      matches[0] += ' '
    }
    return [matches, input]
  } catch {
    return [[], input]
  }
}

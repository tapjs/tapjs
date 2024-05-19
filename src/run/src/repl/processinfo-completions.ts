import type { ProcessInfo } from '@tapjs/processinfo'
import { filterCompletions } from './filter-completions.js'

export const processinfoCompletions = (
  pi: ProcessInfo,
  args: string[],
  input: string,
) => {
  const lw = args.pop() || ''
  const stem = input.substring(0, input.length - lw.length)
  const ids = (
    lw === '' ?
      [...pi.externalIDs.keys()]
    : [...pi.externalIDs.keys(), ...pi.uuids.keys()]).filter(
    id => !args.includes(id),
  )
  const matches = filterCompletions(
    ids.map(id => stem + id),
    input,
  )
  if (matches.length === 1) {
    matches[0] += ' '
  }
  return [matches, input]
}

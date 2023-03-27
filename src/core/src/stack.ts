import StackUtils, { CallSiteLike } from 'stack-utils'
import { tapDir } from './tap-dir.js'

const regExpEscape = (s: string) =>
  s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

const stack = new StackUtils({
  internals: [
    ...StackUtils.nodeInternals(),
    new RegExp(regExpEscape(tapDir)),
  ],
  ignoredPackages: [
    '@tapjs/core',
    'ts-node',
    '@tapjs/.test-built',
    'function-loop',
  ],
})

const origStackAt = stack.at
stack.at = (fn: (...a: any[]) => any): CallSiteLike => {
  const st = stack.captureString(5, fn).split(/\n/)
  for (const line of st) {
    const p = stack.parseLine(line)
    if (!p) continue
    return p
  }
  return origStackAt.call(stack, fn)
}

export default stack

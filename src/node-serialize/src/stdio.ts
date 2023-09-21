import { TestStreamSerialize } from '@tapjs/error-serdes'
import { locFromAt } from './loc-from-at.js'

export const serializeStdio = (
  stream: TestStreamSerialize,
  process: NodeJS.Process,
  which: 'stdout' | 'stderr'
) => {
  const write = (m: Buffer | string) => {
    const message = String(m)
    stream[which]({ ...locFromAt(write), message })
  }
  const orig = process[which]
  Object.defineProperty(process, which, {
    configurable: true,
    enumerable: true,
    writable: true,
    // create a new object that inherits from the original, but has
    // a write() method that captures a test:stderr/test:stdout message
    value: Object.defineProperties(Object.create(orig), {
      write: { value: write },
    }),
  })
}

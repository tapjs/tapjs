import { randomBytes } from 'crypto'

const kServiceKey = Symbol.for('@tapjs/mock.ServiceKey')
const g = globalThis as typeof globalThis & {
  [kServiceKey]: string
}
export const serviceKey = (g[kServiceKey] =
  g[kServiceKey] ?? randomBytes(8).toString('hex'))

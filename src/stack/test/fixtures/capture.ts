import {
  at as stackAt,
  capture as stackCapture,
} from '../../dist/esm/index.js'

const getError = () =>
  new Error('test error') as Error & { stack: string }
export const error = getError()

const getCapture = () => stackCapture()
export const capture = getCapture()

const getAt = () => stackAt()
export const at = getAt()

const getStack = () => {
  const { prepareStackTrace } = Error
  Error.prepareStackTrace = (_, c) => c
  const obj: { stack: NodeJS.CallSite[] } = { stack: [] }
  Error.captureStackTrace(obj)
  const { stack } = obj
  Object.assign(Error, { prepareStackTrace })
  return stack
}
export const stack = getStack()

import { DefaultSerializer } from 'node:v8'

export const kSerializedError = 0
export const kSerializedObject = 1
export const kInspectedError = 2
export const kInspectedSymbol = 3
export const kCustomInspectedObject = 4
export const kCustomInspect = Symbol.for('nodejs.util.inspect.custom')
export const errors = {
  Error,
  TypeError,
  RangeError,
  URIError,
  SyntaxError,
  ReferenceError,
  EvalError,
}
export const errorCtorNames = new Set(Object.keys(errors))

// get the header length that v8 uses
const serializer = new DefaultSerializer()
serializer.writeHeader()
const v8Header = serializer.releaseBuffer()
export const kV8HeaderLength = v8Header.length
// add space for the Uint32 message size
export const kSerializedSizeHeader = 4 + kV8HeaderLength

// This module is more or less a direct port of the deserialization logic
// from node's lib/internal/error_serdes module, with primordials removed.
import { deserialize } from 'v8'
import {
  errors,
  kCustomInspectedObject,
  kInspectedError,
  kInspectedSymbol,
  kSerializedError,
  kSerializedObject,
} from './constants.js'

export const deserializeError = (error: Buffer) => {
  switch (error[0]) {
    case kSerializedError: {
      // serialized Error
      const { properties, constructor } = deserialize(
        error.subarray(1)
      )
      const ctor = errors[constructor as keyof typeof errors]
      if ('cause' in properties && 'value' in properties.cause) {
        properties.cause.value = deserializeError(
          properties.cause.value
        )
      }
      return Object.create(ctor.prototype, properties)
    }
    case kSerializedObject: {
      return deserialize(error.subarray(1))
    }
    case kInspectedError: {
      return error.subarray(1).toString('utf8')
    }
    case kInspectedSymbol: {
      return Symbol.for(
        error
          .subarray(1 + 'Symbol('.length, error.length - 1)
          .toString()
      )
    }
    case kCustomInspectedObject: {
      const s = error.subarray(1).toString()
      return Object.assign(Object.create(null), {
        [Symbol.for('nodejs.util.inspect.custom')]: () => s,
      })
    }
  }
}

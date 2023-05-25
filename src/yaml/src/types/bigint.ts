import type { Scalar, ScalarTag } from 'yaml'
import { StringifyContext, stringifyString } from 'yaml/util'

const identify = (value: any) => {
  return typeof value === 'bigint' || value instanceof BigInt
}

/**
 * `!bigint` BigInt
 *
 * [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) values,
 * using their conventional `123n` representation.
 */
export const bigint = {
  identify,
  tag: '!bigint',
  resolve(str: string) {
    const match = str.match(/^([1-9][0-9]*|0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+)n?$/)
    if (!match) throw new Error('Invalid BigInt value')
    return BigInt(match[1])
  },
  stringify(item: Scalar, ctx: StringifyContext, onComment, onChompKeep) {
    /* c8 ignore start */
    if (!identify(item.value)) {
      throw new TypeError(`${item.value} is not a bigint`)
    }
    /* c8 ignore stop */
    const value = (item.value as BigInt).toString() + 'n'
    return stringifyString({ value }, ctx, onComment, onChompKeep)
  }
} satisfies ScalarTag

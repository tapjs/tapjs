//@ts-ignore
import * as TsNode from '@isaacs/ts-node-temp-fork-for-pr-2009/esm.mjs'

const stripOnly = process.env.TAP_TYPE_STRIP_ONLY === '1'
export const getFormat = stripOnly ? undefined : TsNode.getFormat
export const globalPreload =
  stripOnly ? undefined : TsNode.globalPreload
export const load = stripOnly ? undefined : TsNode.load
export const resolve = stripOnly ? undefined : TsNode.resolve
export const transformSource =
  stripOnly ? undefined : TsNode.transformSource

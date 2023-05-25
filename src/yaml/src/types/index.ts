import { Tags } from 'yaml'

import {
  classTag,
  error,
  functionTag,
  nullobject,
  regexp,
  sharedSymbol,
  symbol,
} from 'yaml-types'

import { date } from './date.js'
import { timestamp } from './timestamp.js'
import { bigint } from './bigint.js'

// prepend our custom tags so that they take priority over anything
// enabled by default in the schema.
const t: Tags = [
  regexp,
  sharedSymbol,
  symbol,
  bigint,
  nullobject,
  error,
  classTag,
  functionTag,
  timestamp,
  date,
  'omap',
  'set',
  'binary',
]
export const customTags = (tags: Tags) => [
  ...new Set(t.concat(tags)),
]

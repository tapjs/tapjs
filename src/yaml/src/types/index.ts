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

export const customTags: Tags = [
  regexp,
  sharedSymbol,
  symbol,
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

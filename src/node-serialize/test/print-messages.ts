import t from 'tap'
import { printMessagesFn } from '../src/print-messages.js'
import { diagsMap, subsMap, tap } from './fixtures/subtests.js'

t.cleanSnapshot = s =>
  s
    .replace(/"file": ".*",$/gm, '"file": "{FILE}",')
    .replace(/"line": [0-9]+,$/gm, '"line": ##,')
    .replace(/"column": [0-9]+,$/gm, '"column": ##,')
    .replace(/"duration_ms": [0-9.]+,$/gm, '"duration_ms": ##,')

import {
  TestStreamDeserialize,
  TestStreamSerialize,
} from '@tapjs/error-serdes'

const ser = new TestStreamSerialize()
const des = new TestStreamDeserialize()
ser.pipe(des)

await tap.concat()
const printMessages = printMessagesFn(tap, ser, subsMap, diagsMap)
printMessages(tap)
ser.end()
t.matchSnapshot(await des.collect())

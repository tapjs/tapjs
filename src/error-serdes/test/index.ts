import t from 'tap'
import * as index from '../src/index.js'
import * as ser from '../src/serialize.js'
import * as des from '../src/deserialize.js'
import * as tsSer from '../src/test-stream-serialize.js'
import * as tsDes from '../src/test-stream-deserialize.js'
import * as messages from '../src/messages.js'
import * as constants from '../src/constants.js'

t.strictSame(
  index,
  Object.assign(Object.create(null), {
    ...ser,
    ...des,
    ...tsSer,
    ...tsDes,
    ...messages,
    constants,
  })
)

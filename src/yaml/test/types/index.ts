import t from 'tap'
import * as types from '../../dist/cjs/types/index.js'
t.matchSnapshot(types, 'types are there')

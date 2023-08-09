import t from 'tap'
import { customTags } from '../../src/types/index.js'
t.matchSnapshot(customTags([]), 'types are there')

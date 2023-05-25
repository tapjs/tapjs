import t from 'tap'
import { customTags } from '../../dist/cjs/types/index.js'
t.matchSnapshot(customTags([]), 'types are there')

import t from 'tap'
import { defaultPlugins } from '../dist/cjs/index.js'

t.match(defaultPlugins, Array)
for (const d of defaultPlugins) t.type(d, 'string')

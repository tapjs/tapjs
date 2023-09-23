// ensure that all the builtin plugins are deps of the tap pkg
import t from '../dist/esm/index.js'

import { defaultPlugins } from '@tapjs/test'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const pj = fileURLToPath(new URL('../package.json', import.meta.url))
const { dependencies } = JSON.parse(readFileSync(pj, 'utf8')) as {
  dependencies: Record<string, string>
}

t.match(new Set(Object.keys(dependencies)), new Set(defaultPlugins))

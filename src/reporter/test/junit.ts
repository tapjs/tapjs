import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const tapData = readFileSync(
  fileURLToPath(
    new URL('./fixtures/example-tap.tap', import.meta.url)
  ),
  'utf8'
)

import { JUnit } from '../src/junit.js'

import t from 'tap'

t.cleanSnapshot = s => s.replace(/"[0-9]{8}_[0-9]{9}"/, '"{ID}"')

const m = new JUnit()

m.write(tapData)
m.end()

t.matchSnapshot(await m.concat(), 'junit')

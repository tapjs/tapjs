import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const tapData = readFileSync(
  fileURLToPath(
    new URL('./fixtures/example-tap.tap', import.meta.url)
  ),
  'utf8'
)

import { MarkdownStream } from '../src/markdown.js'

import t from 'tap'

const m = new MarkdownStream()

m.write(tapData)
m.end()

t.matchSnapshot(await m.concat(), 'markdown')

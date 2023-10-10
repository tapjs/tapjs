import t, { Test } from 'tap'
import { describe, it, mount } from '../dist/esm/index.js'

import { dirname } from 'node:path'
const CWD = dirname(process.cwd().toUpperCase())
t.cleanSnapshot = s => {
  s = s.replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')
  let i = -1
  while ((i = s.toUpperCase().indexOf(CWD)) !== -1) {
    s = s.substring(0, i) + '{}' + s.substring(i + CWD.length)
  }
  return s
    .replace(/([^:]+):[0-9]+:[0-9]+(\)?)\n/g, '$1:#:#$2\n')
    .replace(/(\n +)<anonymous> \(([^\)]+)\)/g, '$1$2')
    .replace(/lineNumber: [0-9]+/g, 'lineNumber: ##')
    .replace(/columnNumber: [0-9]+/g, 'columnNumber: ##')
}

const tt = new Test({ name: 'macchiatto' })
tt.runMain(() => {})
mount(tt)

describe(() => {
  it(done => {
    setTimeout(() => done(new Error('yolo')))
  })
})

tt.end()
t.matchSnapshot(await tt.concat())

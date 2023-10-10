import t, { Test } from 'tap'
import { mount, describe, it, tt as c } from '../dist/esm/index.js'

import { dirname } from 'node:path'
const CWD = dirname(process.cwd().toUpperCase())
t.cleanSnapshot = s => {
  s = s.replace(/# time=[0-9\.]+m?s/g, '# time={TIME}')
  let i = -1
  while ((i = s.toUpperCase().indexOf(CWD)) !== -1) {
    s = s.substring(0, i) + '{}' + s.substring(i + CWD.length)
  }
  return s.replace(/([^:]+):[0-9]+:[0-9]+(\)?)\n/g, '$1:#:#$2\n')
}

const tt = new Test({ name: 'macchiatto' })
tt.runMain(() => {})
mount(tt)

describe(() => {
  it(() => {
    c().pass('has no name')
  })
})

tt.end()
t.matchSnapshot(await tt.concat())

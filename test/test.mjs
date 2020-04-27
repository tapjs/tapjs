import {createRequire} from 'module'

import * as tap from 'tap'

const require = createRequire(import.meta.url);

const cjs = require('tap');

const t = cjs

t.test('tap', async t => {
  t.matchSnapshot(Object.keys(tap).sort())

  for (const key of Object.keys(tap)) {
    t.equal(tap[key], key === 'default' ? cjs : cjs[key], key)
  }
})

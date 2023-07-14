import { LoadedConfig } from '@tapjs/config'
import t from 'tap'
import { help } from '../dist/help.js'
let usageCalled = false
const config = {
  jack: {
    usage: () => {
      usageCalled = true
      return 'usage info'
    },
  },
} as LoadedConfig

const logs = t.capture(console, 'log')

help([], config)
t.equal(usageCalled, true)
t.match(logs(), [{ args: ['usage info'] }])

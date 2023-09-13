import { LoadedConfig } from '@tapjs/config'
import t from 'tap'
import { help } from '../dist/esm/help.js'
let usageCalled = false
let usageMarkdownCalled = false
const config = {
  jack: {
    usage: () => {
      usageCalled = true
      return 'usage text'
    },
    usageMarkdown: () => {
      usageMarkdownCalled = true
      return '# Usage Markdown\n'
    },
  },
} as LoadedConfig

const logs = t.capture(console, 'log')

help([], config)
t.equal(usageCalled, true)
t.match(logs(), [{ args: ['usage text'] }])
process.env.TAP_HELP_MARKDOWN = '1'
help([], config)
t.equal(usageCalled, true)
t.match(logs(), [{ args: ['# Usage Markdown\n'] }])

import { LoadedConfig } from '@tapjs/config'
import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import { Minipass } from 'minipass'
import React, { FC } from 'react'
import t from 'tap'
import {
  isConsoleLog,
  isStdioLog,
  isTestLog,
  LogEntry,
  useLog,
} from '../../dist/esm/hooks/use-log.js'
import { reduce } from '../fixtures/reduce.js'

const Tag: FC<{
  test: Minimal
  config: LoadedConfig
  includeTests: boolean
}> = ({ test, config, includeTests = true }) => {
  const log = useLog(test, config, includeTests).map(entry => {
    if (isTestLog(entry))
      return { type: 'test', text: entry.test.name }
    else if (isStdioLog(entry))
      return {
        type: entry.fd ? 'stdio' : 'comment',
        fd: entry.fd,
        text: entry.text,
      }
    else if (isConsoleLog(entry))
      return { type: 'console', text: entry.text }
    else {
      const { previous, ...fields } = entry as LogEntry
      throw new Error('unknown log type: ' + JSON.stringify(fields))
    }
  })
  return (
    <Box flexDirection="column">
      <Text>{JSON.stringify(log, null, 2)}</Text>
    </Box>
  )
}

t.test('log some stuff, with a process, no comments', async t => {
  const tb = new Minimal({ name: 'logger' })
  // put a pretend process on it
  const proc = {
    stderr: new Minipass<string>({ encoding: 'utf8' }),
  }
  const app = render(
    <Tag
      test={tb}
      config={{ get: () => false } as unknown as LoadedConfig}
      includeTests
    />
  )
  tb.pass('this is fine')
  tb.comment('before child test')
  tb.test('child test', async tb => {
    Object.assign(tb, { proc })
    tb.pass('this is fine')
    proc.stderr.write('hello from stderr\n')
    tb.parser.write('\nThis is not tap\n')
    tb.fail('not quite as fine')
    console.log('a console.log')
    tb.comment('child comment')
    tb.pass('will be fine', { todo: true })
    tb.pass('dont care if its fine', { skip: true })
    tb.pass('this is fine also')
    console.error('a console error')
    tb.fail('second fail')
  })
  tb.comment('after child test')
  tb.end()
  await tb.concat()

  // re-render so that we trigger the useEffect cleanup functions
  app.rerender(<Box></Box>)
  app.unmount()

  const result = reduce(app.frames)
    .filter(f => f.trim())
    .map(j => JSON.parse(j))

  for (let i = 1; i < result.length; i++) {
    t.strictSame(
      result[i - 1],
      result[i].slice(0, result[i - 1].length),
      'logs not overwritten'
    )
  }

  t.strictSame(result[result.length - 1], [
    { type: 'stdio', fd: 1, text: 'This is not tap\n' },
    { type: 'stdio', fd: 2, text: 'hello from stderr\n' },
    { type: 'console', text: 'a console.log\n' },
    { type: 'console', text: 'a console error\n' },
    { type: 'test', text: 'child test' },
  ])
})

t.test(
  'log some stuff, without a process, with comments',
  async t => {
    const tb = new Minimal({ name: 'logger' })
    const app = render(
      <Tag
        test={tb}
        config={{ get: () => true } as unknown as LoadedConfig}
        includeTests
      />
    )
    tb.pass('this is fine')
    tb.comment('before child test')
    tb.test('child test', async tb => {
      tb.pass('this is fine')
      tb.parser.write('\nThis is not tap\n')
      tb.fail('not quite as fine')
      console.log('a console.log')
      tb.comment('child comment')
      tb.pass('will be fine', { todo: true })
      tb.pass('dont care if its fine', { skip: true })
      tb.pass('this is fine also')
      console.error('a console error')
      tb.fail('second fail')
    })
    tb.comment('after child test')
    tb.end()
    await tb.concat()

    // re-render so that we trigger the useEffect cleanup functions
    app.rerender(<Box></Box>)
    app.unmount()

    const result = reduce(app.frames)
      .filter(f => f.trim())
      .map(j => JSON.parse(j))

    for (let i = 1; i < result.length; i++) {
      t.strictSame(
        result[i - 1],
        result[i].slice(0, result[i - 1].length),
        'logs not overwritten'
      )
    }

    t.strictSame(result[result.length - 1], [
      { type: 'stdio', fd: 1, text: 'This is not tap\n' },
      { type: 'console', text: 'a console.log\n' },
      { type: 'comment', fd: 0, text: '# child comment\n' },
      { type: 'console', text: 'a console error\n' },
      { type: 'test', text: 'child test' },
    ])
  }
)

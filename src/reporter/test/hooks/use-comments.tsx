import { Minimal } from '@tapjs/core'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React, { FC } from 'react'
import t from 'tap'
import { promisify } from 'util'
import { useComments } from '../../dist/hooks/use-comments.js'
const sleep = promisify(setTimeout)

const Tag: FC<{ test: Minimal }> = ({ test }) => {
  const comments = useComments(test)
  return (
    <Box flexDirection="column">
      {comments.map((c, i) => (
        <Box key={i}>
          <Text>{c}</Text>
        </Box>
      ))}
    </Box>
  )
}

t.test('show comments', async t => {
  const tb = new Minimal({ name: 'commenter' })
  const app = render(<Tag test={tb} />)
  await sleep(64)
  tb.pass('this is fine')
  tb.comment('before child test')
  tb.test('child test', async tb => {
    tb.pass('this is fine')
    tb.fail('not quite as fine')
    tb.comment('child comment')
    tb.parent?.comment('comment while occupied')
    tb.pass('will be fine', { todo: true })
    tb.pass('dont care if its fine', { skip: true })
    tb.pass('this is fine also')
    tb.fail('second fail')
  })
  tb.comment('after child test')
  tb.end()
  await tb.concat()
  app.unmount()

  const red = (list: string[]) =>
    list.reduce((list: string[], entry) => {
      if (entry !== list[list.length - 1]) list.push(entry)
      return list
    }, [])

  t.strictSame(red(app.frames), [
    '',
    '# before child test',
    '# before child test\n# comment while occupied',
    '# before child test\n# comment while occupied\n# after child test',
  ])
})

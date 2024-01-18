import t from 'tap'

const { testMessageData } = await t.mockImport<
  typeof import('../src/test-message-data.js')
>('../src/test-message-data.js', {
  '../src/test-nested-location.js': {
    testNestedLocation: () => ({ nested: 'location' }),
  },
})

t.strictSame(testMessageData(t), { name: 'TAP', nested: 'location' })

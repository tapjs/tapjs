import t from 'tap'

const { testMessageData } = (await t.mockImport(
  '../src/test-message-data.js',
  {
    '../src/test-nested-location.js': {
      testNestedLocation: () => ({ nested: 'location' }),
    },
  }
)) as typeof import('../src/test-message-data.js')

t.strictSame(testMessageData(t), { name: 'TAP', nested: 'location' })

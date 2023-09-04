import t, {matchSnapshot} from 'tap'
import {
  globalize,
  mount,
  currentTest,
} from '../dist/mjs/index.js'

globalize()
mount(t)

type mg = typeof import('../dist/mjs/index.js')
declare var describe: mg['describe']
declare var it: mg['it']
declare var before: mg['before']
declare var beforeEach: mg['beforeEach']
declare var after: mg['after']
declare var afterEach: mg['afterEach']

const logs: string[] = []

before(() => logs.push('root before'))
after(() => logs.push('root after'))
beforeEach(() => logs.push('root beforeEach'))
afterEach(() => logs.push('root afterEach'))

describe(function functionNameForSuite() {
  before('suite before', async () => logs.push('suite before'))
  after('suite after', async () => logs.push('suite after'))
  beforeEach('suite beforeEach', async () => logs.push('suite beforeEach'))
  afterEach('suite afterEach', async () => logs.push('suite afterEach'))

  it(function has_a_name() {
    logs.push(currentTest()?.name as string)
  })
  it(async function is_async() {
    logs.push(currentTest()?.name as string)
  })
  it('comes after async', (done) => {
    logs.push(currentTest()?.name as string)
    return setTimeout(done)
  })
  it('comes last', () => {
    logs.push(currentTest()?.name as string)
  })
})

describe('check the logs', () => {
  matchSnapshot(logs)
})

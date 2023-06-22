import t from 'tap'
import { esc } from '../dist/cjs/esc.js'

t.equal(esc('hello \\world # hashtag'), 'hello \\\\world \\# hashtag')

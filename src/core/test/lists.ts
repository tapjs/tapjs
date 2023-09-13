import t from 'tap'
import { Parser, Result } from 'tap-parser'
import { Lists } from '../dist/esm/lists.js'
const lists = new Lists()
t.same(lists, {
  fail: [],
  todo: [],
  skip: [],
  pass: [],
})

// Just ensure that it has to be a result object
//@ts-expect-error
lists.fail.push({ asdf: 1 })
lists.todo.push(new Result(['ok 1'], new Parser()))

'use strict'
exports[`todo_0`] = `TAP version 13
not ok 1 - i will do this later # TODO
  ---
  at:
    line: 22
    column: 10
    file: unit/test.js
    function: todo
  source: |
    tt.fail('i will do this later', { todo: true })
  ...

ok 2 - i will do this later # TODO
not ok 3 - this is fine # SKIP
ok 4 - i did not do this later # SKIP
1..4
# todo: 2
# skip: 2
`

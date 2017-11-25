t = require '../..'

t.test 'gp', (t) ->
  t.plan 1
  t.test 'parent', (t) ->
    t.plan 1
    t.fail 'fail'
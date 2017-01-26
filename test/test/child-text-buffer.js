if (process.argv[2] === 'buffer') {
  console.log(function () { /*
TAP version 13
not ok 1 - parent {
    not ok 1 - child {
        not ok 1 - grandchild {
            ok 1 - this is fine
            not ok 2 - burn
            1..2
            # failed 1 of 2 tests
        }
        1..1
        # failed 1 of 1 tests
    }
    1..1
    # failed 1 of 1 tests
}
1..1
# failed 1 of 1 tests
*/}.toString().split('\n').slice(1, -1).join('\n'))
} else {
  var t = require('../..')
  var extra = { diagnostic: false }
  t.spawn(process.execPath, [__filename, 'buffer'], extra)
}

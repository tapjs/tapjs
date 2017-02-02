if (process.argv[2] === 'indentsub') {
  console.log(function () { /*
TAP version 13
    # Subtest: parent
        # Subtest: child
            # Subtest: grandchild
            ok 1 - this is fine
            not ok 2 - burn
            1..2
            # failed 1 of 2 tests
        not ok 1 - grandchild
        1..1
        # failed 1 of 1 tests
    not ok 1 - child
    1..1
    # failed 1 of 1 tests
not ok 1 - parent
1..1
# failed 1 of 1 tests
*/}.toString().split('\n').slice(1, -1).join('\n'))
} else {
  var t = require('../..')
  var extra = { diagnostic: false }
  t.spawn(process.execPath, [__filename, 'indentsub'], extra)
}

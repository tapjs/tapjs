'use strict'
exports[`test/run.js TAP basic > ok.js output 1`] = `
TAP version 13
# Subtest: test/cli-tests/ok.js
    ok 1 - this is fine
    1..1
    # {time}
ok 1 - test/cli-tests/ok.js # {time}

1..1
# {time}

`

exports[`test/run.js TAP stdin with file > undefined 1`] = `
TAP version 13
ok 1 - foo.js # {time} {
    ok 1 - child # {time} {
        ok 1 - this is fine
        1..1
    }
    
    1..1
    # {time}
}

ok 2 - /dev/stdin # {time} {
    1..1
    ok
}

1..2
# {time}

`

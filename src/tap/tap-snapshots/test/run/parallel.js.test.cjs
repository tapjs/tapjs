/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/run/parallel.js TAP > output 1`] = `
TAP version 13
# Subtest: p/y/1.js
    ok 1 - one
    1..1
    # {time}
ok 1 - p/y/1.js # {time}

# Subtest: p/y/2.js
    ok 1 - 2
    1..1
    # {time}
ok 2 - p/y/2.js # {time}

# Subtest: q/b/f1.js
    ok 1 - a/b
    1..1
    # {time}
ok 3 - q/b/f1.js # {time}

# Subtest: q/b/f2.js
    ok 1 - c/d
    1..1
    # {time}
ok 4 - q/b/f2.js # {time}

# Subtest: r/y/1.js
    ok 1 - one
    1..1
    # {time}
ok 5 - r/y/1.js # {time}

# Subtest: r/y/2.js
    ok 1 - 2
    1..1
    # {time}
ok 6 - r/y/2.js # {time}

# Subtest: z/y/1.js
    ok 1 - one
    1..1
    # {time}
ok 7 - z/y/1.js # {time}

# Subtest: z/y/2.js
    ok 1 - 2
    1..1
    # {time}
ok 8 - z/y/2.js # {time}

1..8
# {time}

`

exports[`test/run/parallel.js TAP > stderr 1`] = `
start
start
end
end
f1
f2
ry1
ry1
ry2
ry2
start
start
end
end

`

/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts > TAP > cli runner runs everything no matter what > must match snapshot 1`] = `
TAP version 14
# Subtest: cat
    # Subtest: hiss
        ok 1 - sssss
        1..1
    ok 1 - hiss # time={TIME}
    
    # Subtest: purr
        ok 1 - rrrrr
        1..1
    ok 2 - purr # time={TIME}
    
    ok 3 - meow
    1..3
ok 1 - cat # time={TIME}

# "unicorn" has \`only\` set but all tests run
# Subtest: unicorn
    ok 1 - this is fine
    1..1
ok 2 - unicorn # time={TIME}

# Subtest: dog
    # Subtest: growl
        ok 1 - grrr
        1..1
    ok 1 - growl # time={TIME}
    
    # Subtest: howl
        ok 1 - howww
        1..1
    ok 2 - howl # time={TIME}
    
    ok 3 - woof
    1..3
ok 3 - dog # time={TIME}

1..3

`

exports[`test/index.ts > TAP > get defaults from env > grep > must match snapshot 1`] = `
TAP version 14
# Subtest: cat
    ok 1 - hiss # SKIP filter: /meow/
    ok 2 - purr # SKIP filter: /meow/
    ok 3 - meow
    1..3
ok 1 - cat # time={TIME}

ok 2 - unicorn # SKIP filter: /cAt/i
ok 3 - dog # SKIP filter: /cAt/i
1..3

`

exports[`test/index.ts > TAP > get defaults from env > grep invert > must match snapshot 1`] = `
TAP version 14
# Subtest: cat
    # Subtest: hiss
        ok 1 - sssss
        1..1
    ok 1 - hiss # time={TIME}
    
    # Subtest: purr
        ok 1 - rrrrr
        1..1
    ok 2 - purr # time={TIME}
    
    ok 3 - meow
    1..3
ok 1 - cat # time={TIME}

ok 2 - unicorn # SKIP filter out: /unicorn|dog/
ok 3 - dog # SKIP filter out: /unicorn|dog/
1..3

`

exports[`test/index.ts > TAP > get defaults from env > only > must match snapshot 1`] = `
TAP version 14
ok 1 - cat # SKIP filter: only
# Subtest: unicorn
    ok 1 - this is fine
    1..1
ok 2 - unicorn # time={TIME}

ok 3 - dog # SKIP filter: only
1..3

`

exports[`test/index.ts > TAP > grep > must match snapshot 1`] = `
TAP version 14
# Subtest: cat
    ok 1 - hiss # SKIP filter: purr
    # Subtest: purr
        ok 1 - rrrrr
        1..1
    ok 2 - purr # time={TIME}
    
    ok 3 - meow
    1..3
ok 1 - cat # time={TIME}

ok 2 - unicorn # SKIP filter: cat
ok 3 - dog # SKIP filter: cat
1..3

`

exports[`test/index.ts > TAP > grep invert > must match snapshot 1`] = `
TAP version 14
# Subtest: cat
    # Subtest: hiss
        ok 1 - sssss
        1..1
    ok 1 - hiss # time={TIME}
    
    # Subtest: purr
        ok 1 - rrrrr
        1..1
    ok 2 - purr # time={TIME}
    
    ok 3 - meow
    1..3
ok 1 - cat # time={TIME}

ok 2 - unicorn # SKIP filter out: /unicorn|dog/
ok 3 - dog # SKIP filter out: /unicorn|dog/
1..3

`

exports[`test/index.ts > TAP > only > must match snapshot 1`] = `
TAP version 14
ok 1 - cat # SKIP filter: only
# Subtest: unicorn
    ok 1 - this is fine
    1..1
ok 2 - unicorn # time={TIME}

ok 3 - dog # SKIP filter: only
1..3

`

exports[`test/index.ts > TAP > warn if using only() unnecessarily > must match snapshot 1`] = `
TAP version 14
# Subtest: cat
    # Subtest: hiss
        ok 1 - sssss
        1..1
    ok 1 - hiss # time={TIME}
    
    # Subtest: purr
        ok 1 - rrrrr
        1..1
    ok 2 - purr # time={TIME}
    
    ok 3 - meow
    1..3
ok 1 - cat # time={TIME}

# "unicorn" has \`only\` set but all tests run
# Subtest: unicorn
    ok 1 - this is fine
    1..1
ok 2 - unicorn # time={TIME}

# Subtest: dog
    # Subtest: growl
        ok 1 - grrr
        1..1
    ok 1 - growl # time={TIME}
    
    # Subtest: howl
        ok 1 - howww
        1..1
    ok 2 - howl # time={TIME}
    
    ok 3 - woof
    1..3
ok 3 - dog # time={TIME}

1..3

`

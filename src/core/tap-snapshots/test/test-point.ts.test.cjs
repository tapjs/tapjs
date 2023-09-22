/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/test-point.ts > TAP > ok=false > basic test point 1`] = `
TestPoint {
  "extra": Object {},
  "message": " - name\\n",
  "name": "name",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {},
    "message": "name",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > diags 1`] = `
TestPoint {
  "extra": Object {
    "diagnostic": true,
    "some": "diags",
  },
  "message": String(
     - name
      ---
      some: diags
      ...
    
    
  ),
  "name": "name",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {
      "diagnostic": true,
      "some": "diags",
    },
    "message": "name",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > escape/trim 1`] = `
TestPoint {
  "extra": Object {},
  "message": " - a b  \\\\# c \\\\\\\\\\n",
  "name": "a b  # c \\\\",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {},
    "message": "a b  # c \\\\",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > skip 1`] = `
TestPoint {
  "extra": Object {
    "skip": true,
  },
  "message": " - name # SKIP\\n",
  "name": "name",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {
      "skip": true,
    },
    "message": "name",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > skip msg 1`] = `
TestPoint {
  "extra": Object {
    "skip": "msg",
  },
  "message": " - name # SKIP msg\\n",
  "name": "name",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {
      "skip": "msg",
    },
    "message": "name",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > skip msg noname 1`] = `
TestPoint {
  "extra": Object {
    "skip": "msg",
  },
  "message": " # SKIP msg\\n",
  "name": "",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {
      "skip": "msg",
    },
    "message": "",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > skip noname 1`] = `
TestPoint {
  "extra": Object {
    "skip": true,
  },
  "message": " # SKIP\\n",
  "name": "",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {
      "skip": true,
    },
    "message": "",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > time 1`] = `
TestPoint {
  "extra": Object {
    "time": 1234,
  },
  "message": " - name # time=1234ms\\n",
  "name": "name",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {
      "time": 1234,
    },
    "message": "name",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > todo 1`] = `
TestPoint {
  "extra": Object {
    "todo": true,
  },
  "message": " - name # TODO\\n",
  "name": "name",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {
      "todo": true,
    },
    "message": "name",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > todo msg 1`] = `
TestPoint {
  "extra": Object {
    "todo": "msg",
  },
  "message": " - name # TODO msg\\n",
  "name": "name",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {
      "todo": "msg",
    },
    "message": "name",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > todo msg noname 1`] = `
TestPoint {
  "extra": Object {
    "todo": "msg",
  },
  "message": " # TODO msg\\n",
  "name": "",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {
      "todo": "msg",
    },
    "message": "",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=false > todo noname 1`] = `
TestPoint {
  "extra": Object {
    "todo": true,
  },
  "message": " # TODO\\n",
  "name": "",
  "ok": "not ok ",
  "res": Object {
    "extra": Object {
      "todo": true,
    },
    "message": "",
    "ok": false,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > basic test point 1`] = `
TestPoint {
  "extra": Object {},
  "message": " - name\\n",
  "name": "name",
  "ok": "ok ",
  "res": Object {
    "extra": Object {},
    "message": "name",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > diags 1`] = `
TestPoint {
  "extra": Object {
    "diagnostic": true,
    "some": "diags",
  },
  "message": String(
     - name
      ---
      some: diags
      ...
    
    
  ),
  "name": "name",
  "ok": "ok ",
  "res": Object {
    "extra": Object {
      "diagnostic": true,
      "some": "diags",
    },
    "message": "name",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > escape/trim 1`] = `
TestPoint {
  "extra": Object {},
  "message": " - a b  \\\\# c \\\\\\\\\\n",
  "name": "a b  # c \\\\",
  "ok": "ok ",
  "res": Object {
    "extra": Object {},
    "message": "a b  # c \\\\",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > skip 1`] = `
TestPoint {
  "extra": Object {
    "skip": true,
  },
  "message": " - name # SKIP\\n",
  "name": "name",
  "ok": "ok ",
  "res": Object {
    "extra": Object {
      "skip": true,
    },
    "message": "name",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > skip msg 1`] = `
TestPoint {
  "extra": Object {
    "skip": "msg",
  },
  "message": " - name # SKIP msg\\n",
  "name": "name",
  "ok": "ok ",
  "res": Object {
    "extra": Object {
      "skip": "msg",
    },
    "message": "name",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > skip msg noname 1`] = `
TestPoint {
  "extra": Object {
    "skip": "msg",
  },
  "message": " # SKIP msg\\n",
  "name": "",
  "ok": "ok ",
  "res": Object {
    "extra": Object {
      "skip": "msg",
    },
    "message": "",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > skip noname 1`] = `
TestPoint {
  "extra": Object {
    "skip": true,
  },
  "message": " # SKIP\\n",
  "name": "",
  "ok": "ok ",
  "res": Object {
    "extra": Object {
      "skip": true,
    },
    "message": "",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > time 1`] = `
TestPoint {
  "extra": Object {
    "time": 1234,
  },
  "message": " - name # time=1234ms\\n",
  "name": "name",
  "ok": "ok ",
  "res": Object {
    "extra": Object {
      "time": 1234,
    },
    "message": "name",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > todo 1`] = `
TestPoint {
  "extra": Object {
    "todo": true,
  },
  "message": " - name # TODO\\n",
  "name": "name",
  "ok": "ok ",
  "res": Object {
    "extra": Object {
      "todo": true,
    },
    "message": "name",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > todo msg 1`] = `
TestPoint {
  "extra": Object {
    "todo": "msg",
  },
  "message": " - name # TODO msg\\n",
  "name": "name",
  "ok": "ok ",
  "res": Object {
    "extra": Object {
      "todo": "msg",
    },
    "message": "name",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > todo msg noname 1`] = `
TestPoint {
  "extra": Object {
    "todo": "msg",
  },
  "message": " # TODO msg\\n",
  "name": "",
  "ok": "ok ",
  "res": Object {
    "extra": Object {
      "todo": "msg",
    },
    "message": "",
    "ok": true,
  },
}
`

exports[`test/test-point.ts > TAP > ok=true > todo noname 1`] = `
TestPoint {
  "extra": Object {
    "todo": true,
  },
  "message": " # TODO\\n",
  "name": "",
  "ok": "ok ",
  "res": Object {
    "extra": Object {
      "todo": true,
    },
    "message": "",
    "ok": true,
  },
}
`

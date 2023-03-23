/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/format.ts TAP error without name/message {"hello":"world"} js > must match snapshot 1`] = `
Object.assign(new Object(), {
  "hello": "world",
})
`

exports[`test/format.ts TAP error without name/message {"hello":"world"} pretty > must match snapshot 1`] = `
(no name): (no message) {
  "hello": "world",
}
`

exports[`test/format.ts TAP error without name/message {"hello":"world"} tight > must match snapshot 1`] = `
Object.assign(new Object(), {"hello":"world",})
`

exports[`test/format.ts TAP error without name/message {} js > must match snapshot 1`] = `
new Object()
`

exports[`test/format.ts TAP error without name/message {} pretty > must match snapshot 1`] = `
(no name): (no message)
`

exports[`test/format.ts TAP error without name/message {} tight > must match snapshot 1`] = `
new Object(undefined)
`

exports[`test/format.ts TAP format iterable > must match snapshot 1`] = `
And [
  And [
    1,
    2,
  ],
  And [
    3,
    4,
  ],
]
`

exports[`test/format.ts TAP gnarly object, many points of view > 3 space 1`] = `
Object {
   "o": true,
}
`

exports[`test/format.ts TAP gnarly object, many points of view > js 1`] = `
&ref_1 {
  "a": 1,
  "b": 2,
  "extra": true,
  "c": 3,
  "d": 4,
  "more": false,
  "e": {
    "f": {
      "g": 1,
    },
    "a": [
      2,
      3,
      4,
    ],
    "h": "asdf",
    "multilineString": String(
      "this is a line\\n" +
      "this is a line\\n" +
      "this is a line\\n" +
      "this is a line\\n" +
      "\\n"
    ),
    "emptyString": "",
  },
  "nullObject": {
    "x": {},
    "y": {},
    "z": {
      "zed": true,
    },
  },
  "p": new Set([
    {
      "x": "y",
      "z": true,
    },
    {
      "a": 1,
    },
    {
      "b": 2,
    },
  ]),
  "s": new Set([
    {
      "b": 2,
    },
    {
      "c": 3,
    },
    *ref_1,
  ]),
  "m": new Map([
    [&ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    }, 1],
    [{
      "b": 2,
    }, 2],
    [{
      "c": "d",
    }, {
      "re": /ef/g,
    }],
    [1, &ref_4 {
      "c": {
        "c": *ref_4,
        "b": {
          "b": 1,
          "d": *ref_4,
        },
      },
      "a": &ref_5 [
        1,
        *ref_4,
        *ref_5,
      ],
      "k": &ref_2 {
        "a": 1,
        "k": &ref_3 {
          "k": *ref_2,
          "i": {
            "i": 1,
            "k": *ref_3,
          },
        },
        "f": *ref_1,
        "c": *ref_4,
      },
      "f": *ref_1,
    }],
    [*ref_1, &ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    }],
  ]),
  "ak": [
    &ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    },
    &ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    },
    [
      &ref_2 {
        "a": 1,
        "k": &ref_3 {
          "k": *ref_2,
          "i": {
            "i": 1,
            "k": *ref_3,
          },
        },
        "f": *ref_1,
        "c": &ref_4 {
          "c": {
            "c": *ref_4,
            "b": {
              "b": 1,
              "d": *ref_4,
            },
          },
          "a": &ref_5 [
            1,
            *ref_4,
            *ref_5,
          ],
          "k": *ref_2,
          "f": *ref_1,
        },
      },
      &ref_2 {
        "a": 1,
        "k": &ref_3 {
          "k": *ref_2,
          "i": {
            "i": 1,
            "k": *ref_3,
          },
        },
        "f": *ref_1,
        "c": &ref_4 {
          "c": {
            "c": *ref_4,
            "b": {
              "b": 1,
              "d": *ref_4,
            },
          },
          "a": &ref_5 [
            1,
            *ref_4,
            *ref_5,
          ],
          "k": *ref_2,
          "f": *ref_1,
        },
      },
    ],
  ],
  "ao": [
    {
      "o": true,
    },
    {
      "o": true,
    },
    [
      {
        "o": true,
      },
      {
        "o": true,
      },
    ],
  ],
  "om": new Map([
    [{
      "o": true,
    }, &ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    }],
    [&ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    }, {
      "o": true,
    }],
  ]),
  "args": [
    1,
    2,
    3,
    {
      "o": true,
    },
  ],
  "buf": Buffer.from("686f776479", "hex") /* howdy */,
  "longBuf": Buffer.from(
    "68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c"  /* hello,.world!.hello,.world!.hell */ +
    "6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c2077"  /* o,.world!.hello,.world!.hello,.w */ +
    "6f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64"  /* orld!.hello,.world!.hello,.world */ +
    "210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a6865"  /* !.hello,.world!.hello,.world!.he */ +
    "6c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c"  /* llo,.world!.hello,.world!.hello, */ +
    "20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f72"  /* .world!.hello,.world!.hello,.wor */ +
    "6c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a"  /* ld!.hello,.world!.hello,.world!. */ +
    "68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c"  /* hello,.world!.hello,.world!.hell */ +
    "6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c2077"  /* o,.world!.hello,.world!.hello,.w */ +
    "6f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64"  /* orld!.hello,.world!.hello,.world */ +
    "210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a6865"  /* !.hello,.world!.hello,.world!.he */ +
    "6c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c"  /* llo,.world!.hello,.world!.hello, */ +
    "20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f72"  /* .world!.hello,.world!.hello,.wor */ +
    "6c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a"  /* ld!.hello,.world!.hello,.world!. */ +
    "68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c"  /* hello,.world!.hello,.world!.hell */ +
    "6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c2077"  /* o,.world!.hello,.world!.hello,.w */ +
    "6f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64"  /* orld!.hello,.world!.hello,.world */ +
    "210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a6865"  /* !.hello,.world!.hello,.world!.he */ +
    "6c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c"  /* llo,.world!.hello,.world!.hello, */ +
    "20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f72"  /* .world!.hello,.world!.hello,.wor */ +
    "6c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a"  /* ld!.hello,.world!.hello,.world!. */ +
    "68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c"  /* hello,.world!.hello,.world!.hell */ +
    "6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c2077"  /* o,.world!.hello,.world!.hello,.w */ +
    "6f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64"  /* orld!.hello,.world!.hello,.world */ +
    "210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a6865"  /* !.hello,.world!.hello,.world!.he */ +
    "6c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c"  /* llo,.world!.hello,.world!.hello, */ +
    "20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f72"  /* .world!.hello,.world!.hello,.wor */ +
    "6c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a"  /* ld!.hello,.world!.hello,.world!. */ +
    "68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c"  /* hello,.world!.hello,.world!.hell */ +
    "6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c2077"  /* o,.world!.hello,.world!.hello,.w */ +
    "6f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64"  /* orld!.hello,.world!.hello,.world */ +
    "210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a6865"  /* !.hello,.world!.hello,.world!.he */ +
    "6c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c"  /* llo,.world!.hello,.world!.hello, */ +
    "20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f72"  /* .world!.hello,.world!.hello,.wor */ +
    "6c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a"  /* ld!.hello,.world!.hello,.world!. */ +
    "68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c"  /* hello,.world!.hello,.world!.hell */ +
    "6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c2077"  /* o,.world!.hello,.world!.hello,.w */ +
    "6f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64"  /* orld!.hello,.world!.hello,.world */ +
    "210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a6865"  /* !.hello,.world!.hello,.world!.he */ +
    "6c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c"  /* llo,.world!.hello,.world!.hello, */ +
    "20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f72"  /* .world!.hello,.world!.hello,.wor */ +
    "6c64210a68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a"  /* ld!.hello,.world!.hello,.world!. */ +
    "68656c6c6f2c20776f726c64210a68656c6c6f2c20776f726c64210a68656c6c"  /* hello,.world!.hello,.world!.hell */ +
    "6f2c20776f726c64210a"                                              /* o,.world!. */
  , "hex"),
  "emp": {
    "b": Buffer.alloc(0),
    "a": [],
    "o": {},
    "m": new Map(),
    "s": new Set(),
  },
  "fns": {
    "name": function foo() { },
    "anon": function () { },
    "arr": () => { },
    "identity": (x) => x,
    "nameless": () => { },
  },
  "sym": Symbol(prince),
  "date": 2019-02-14T07:13:44.100Z,
  "n": null,
  "undef": undefined,
  "classy": {},
  "err": new Error("just an error"),
  "emptyErr": new Error(),
  "fancyErr": Object.assign(new Error("fancy pantsy"), {
    "fancy": "pantsy",
  }),
  "assert": Object.assign(new AssertionError(<contents elided for testing>), {
    "generatedMessage": true,
    "code": "ERR_ASSERTION",
    "actual": &ref_2 {
      "a": 1,
      "k": &ref_3 {
        "k": *ref_2,
        "i": {
          "i": 1,
          "k": *ref_3,
        },
      },
      "f": *ref_1,
      "c": &ref_4 {
        "c": {
          "c": *ref_4,
          "b": {
            "b": 1,
            "d": *ref_4,
          },
        },
        "a": &ref_5 [
          1,
          *ref_4,
          *ref_5,
        ],
        "k": *ref_2,
        "f": *ref_1,
      },
    },
    "expected": {
      "o": true,
    },
    "operator": "==",
  }),
}
`

exports[`test/format.ts TAP gnarly object, many points of view > pretty 1`] = `
&ref_1 Object {
  "a": 1,
  "b": 2,
  "extra": true,
  "c": 3,
  "d": 4,
  "more": false,
  "e": Object {
    "f": Object {
      "g": 1,
    },
    "a": Array [
      2,
      3,
      4,
    ],
    "h": "asdf",
    "multilineString": String(
      this is a line
      this is a line
      this is a line
      this is a line
      
    ),
    "emptyString": "",
  },
  "nullObject": Null Object {
    "x": Null Object {},
    "y": Object {},
    "z": Object {
      "zed": true,
    },
  },
  "p": Set {
    Object {
      "x": "y",
      "z": true,
    },
    Object {
      "a": 1,
    },
    Object {
      "b": 2,
    },
  },
  "s": Set {
    Object {
      "b": 2,
    },
    Object {
      "c": 3,
    },
    <*ref_1>,
  },
  "m": Map {
    &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    } => 1,
    Object {
      "b": 2,
    } => 2,
    Object {
      "c": "d",
    } => Object {
      "re": /ef/g,
    },
    1 => &ref_4 Object {
      "c": Object {
        "c": <*ref_4>,
        "b": Object {
          "b": 1,
          "d": <*ref_4>,
        },
      },
      "a": &ref_5 Array [
        1,
        <*ref_4>,
        <*ref_5>,
      ],
      "k": &ref_2 Object {
        "a": 1,
        "k": &ref_3 Object {
          "k": <*ref_2>,
          "i": Object {
            "i": 1,
            "k": <*ref_3>,
          },
        },
        "f": <*ref_1>,
        "c": <*ref_4>,
      },
      "f": <*ref_1>,
    },
    <*ref_1> => &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    },
  },
  "ak": Array [
    &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    },
    &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    },
    Array [
      &ref_2 Object {
        "a": 1,
        "k": &ref_3 Object {
          "k": <*ref_2>,
          "i": Object {
            "i": 1,
            "k": <*ref_3>,
          },
        },
        "f": <*ref_1>,
        "c": &ref_4 Object {
          "c": Object {
            "c": <*ref_4>,
            "b": Object {
              "b": 1,
              "d": <*ref_4>,
            },
          },
          "a": &ref_5 Array [
            1,
            <*ref_4>,
            <*ref_5>,
          ],
          "k": <*ref_2>,
          "f": <*ref_1>,
        },
      },
      &ref_2 Object {
        "a": 1,
        "k": &ref_3 Object {
          "k": <*ref_2>,
          "i": Object {
            "i": 1,
            "k": <*ref_3>,
          },
        },
        "f": <*ref_1>,
        "c": &ref_4 Object {
          "c": Object {
            "c": <*ref_4>,
            "b": Object {
              "b": 1,
              "d": <*ref_4>,
            },
          },
          "a": &ref_5 Array [
            1,
            <*ref_4>,
            <*ref_5>,
          ],
          "k": <*ref_2>,
          "f": <*ref_1>,
        },
      },
    ],
  ],
  "ao": Array [
    Object {
      "o": true,
    },
    Object {
      "o": true,
    },
    Array [
      Object {
        "o": true,
      },
      Object {
        "o": true,
      },
    ],
  ],
  "om": Map {
    Object {
      "o": true,
    } => &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    },
    &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    } => Object {
      "o": true,
    },
  },
  "args": Arguments [
    1,
    2,
    3,
    Object {
      "o": true,
    },
  ],
  "buf": Buffer <686f 7764 79  howdy>,
  "longBuf": Buffer <
    0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
    0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
    0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
    0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
    0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
    00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
    00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
    00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
    0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
    0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
    0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
    0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
    0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
    01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
    01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
    01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
    0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
    0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
    0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
    0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
    0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
    02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
    02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
    02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
    0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
    0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
    0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
    0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
    0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
    03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
    03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
    03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
    0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
    0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
    0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
    0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
    0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
    04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
    04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
    04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
    0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
    0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
    0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
    0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
  >,
  "emp": Object {
    "b": Buffer <>,
    "a": Array [],
    "o": Object {},
    "m": Map {},
    "s": Set {},
  },
  "fns": Object {
    "name": Function foo(),
    "anon": Function anon(),
    "arr": Function arr(),
    "identity": Function identity(x),
    "nameless": Function (),
  },
  "sym": Symbol(prince),
  "date": 2019-02-14T07:13:44.100Z,
  "n": null,
  "undef": undefined,
  "classy": Foo {},
  "err": Error: just an error,
  "emptyErr": Error,
  "fancyErr": Error: fancy pantsy {
    "fancy": "pantsy",
  },
  "assert": AssertionError {
    "generatedMessage": true,
    "code": "ERR_ASSERTION",
    "actual": &ref_2 Object {
      "a": 1,
      "k": &ref_3 Object {
        "k": <*ref_2>,
        "i": Object {
          "i": 1,
          "k": <*ref_3>,
        },
      },
      "f": <*ref_1>,
      "c": &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_2>,
        "f": <*ref_1>,
      },
    },
    "expected": Object {
      "o": true,
    },
    "operator": "==",
  },
}
`

exports[`test/format.ts TAP gnarly object, many points of view > tab 1`] = `
Object {
	"o": true,
}
`

exports[`test/format.ts TAP gnarly object, many points of view > tight 1`] = `
&1 {"a":1,"b":2,"extra":true,"c":3,"d":4,"more":false,"e":{"f":{"g":1,},"a":[2,3,4,],"h":"asdf","multilineString":"this is a line\\n"+"this is a line\\n"+"this is a line\\n"+"this is a line\\n"+"\\n","emptyString":"",},"nullObject":{"x":{},"y":{},"z":{"zed":true,},},"p":new Set([{"x":"y","z":true,},{"a":1,},{"b":2,},]),"s":new Set([{"b":2,},{"c":3,},*1,]),"m":new Map([[&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},},1],[{"b":2,},2],[{"c":"d",},{"re":/ef/g,}],[1,&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":*4,},"f":*1,}],[*1,&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},}],]),"ak":[&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},},&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},},[&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},},&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},},],],"ao":[{"o":true,},{"o":true,},[{"o":true,},{"o":true,},],],"om":new Map([[{"o":true,},&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},}],[&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},},{"o":true,}],]),"args":[1,2,3,{"o":true,},],"buf":Buffer.from("aG93ZHk=","base64"),"longBuf":Buffer.from("aGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEKaGVsbG8sIHdvcmxkIQpoZWxsbywgd29ybGQhCmhlbGxvLCB3b3JsZCEK","base64"),"emp":{"b":Buffer.alloc(0),"a":[],"o":{},"m":new Map(),"s":new Set(),},"fns":{"name":function foo() { },"anon":function () { },"arr":() => { },"identity":(x) => x,"nameless":() => { },},"sym":Symbol(prince),"date":2019-02-14T07:13:44.100Z,"n":null,"undef":undefined,"classy":{},"err":new Error("just an error"),"emptyErr":new Error(""),"fancyErr":Object.assign(new Error("fancy pantsy"), {"fancy":"pantsy",}),"assert":Object.assign(new AssertionError(<contents elided for testing>), {"generatedMessage":true,"code":"ERR_ASSERTION","actual":&2 {"a":1,"k":&3 {"k":*2,"i":{"i":1,"k":*3,},},"f":*1,"c":&4 {"c":{"c":*4,"b":{"b":1,"d":*4,},},"a":&5 [1,*4,*5,],"k":*2,"f":*1,},},"expected":{"o":true,},"operator":"==",}),}
`

exports[`test/format.ts TAP gnarly object, many points of view different points of view > c 1`] = `
&ref_1 Object {
  "c": Object {
    "c": <*ref_1>,
    "b": Object {
      "b": 1,
      "d": <*ref_1>,
    },
  },
  "a": &ref_2 Array [
    1,
    <*ref_1>,
    <*ref_2>,
  ],
  "k": &ref_3 Object {
    "a": 1,
    "k": &ref_4 Object {
      "k": <*ref_3>,
      "i": Object {
        "i": 1,
        "k": <*ref_4>,
      },
    },
    "f": &ref_5 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
        "multilineString": String(
          this is a line
          this is a line
          this is a line
          this is a line
          
        ),
        "emptyString": "",
      },
      "nullObject": Null Object {
        "x": Null Object {},
        "y": Object {},
        "z": Object {
          "zed": true,
        },
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_5>,
      },
      "m": Map {
        <*ref_3> => 1,
        Object {
          "b": 2,
        } => 2,
        Object {
          "c": "d",
        } => Object {
          "re": /ef/g,
        },
        1 => <*ref_1>,
        <*ref_5> => <*ref_3>,
      },
      "ak": Array [
        <*ref_3>,
        <*ref_3>,
        Array [
          <*ref_3>,
          <*ref_3>,
        ],
      ],
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => <*ref_3>,
        <*ref_3> => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <686f 7764 79  howdy>,
      "longBuf": Buffer <
        0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
      >,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": Function foo(),
        "anon": Function anon(),
        "arr": Function arr(),
        "identity": Function identity(x),
        "nameless": Function (),
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
      "err": Error: just an error,
      "emptyErr": Error,
      "fancyErr": Error: fancy pantsy {
        "fancy": "pantsy",
      },
      "assert": AssertionError {
        "generatedMessage": true,
        "code": "ERR_ASSERTION",
        "actual": <*ref_3>,
        "expected": Object {
          "o": true,
        },
        "operator": "==",
      },
    },
    "c": <*ref_1>,
  },
  "f": &ref_5 Object {
    "a": 1,
    "b": 2,
    "extra": true,
    "c": 3,
    "d": 4,
    "more": false,
    "e": Object {
      "f": Object {
        "g": 1,
      },
      "a": Array [
        2,
        3,
        4,
      ],
      "h": "asdf",
      "multilineString": String(
        this is a line
        this is a line
        this is a line
        this is a line
        
      ),
      "emptyString": "",
    },
    "nullObject": Null Object {
      "x": Null Object {},
      "y": Object {},
      "z": Object {
        "zed": true,
      },
    },
    "p": Set {
      Object {
        "x": "y",
        "z": true,
      },
      Object {
        "a": 1,
      },
      Object {
        "b": 2,
      },
    },
    "s": Set {
      Object {
        "b": 2,
      },
      Object {
        "c": 3,
      },
      <*ref_5>,
    },
    "m": Map {
      &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      } => 1,
      Object {
        "b": 2,
      } => 2,
      Object {
        "c": "d",
      } => Object {
        "re": /ef/g,
      },
      1 => <*ref_1>,
      <*ref_5> => &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      },
    },
    "ak": Array [
      &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      },
      &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      },
      Array [
        &ref_3 Object {
          "a": 1,
          "k": &ref_4 Object {
            "k": <*ref_3>,
            "i": Object {
              "i": 1,
              "k": <*ref_4>,
            },
          },
          "f": <*ref_5>,
          "c": <*ref_1>,
        },
        &ref_3 Object {
          "a": 1,
          "k": &ref_4 Object {
            "k": <*ref_3>,
            "i": Object {
              "i": 1,
              "k": <*ref_4>,
            },
          },
          "f": <*ref_5>,
          "c": <*ref_1>,
        },
      ],
    ],
    "ao": Array [
      Object {
        "o": true,
      },
      Object {
        "o": true,
      },
      Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
      ],
    ],
    "om": Map {
      Object {
        "o": true,
      } => &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      },
      &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      } => Object {
        "o": true,
      },
    },
    "args": Arguments [
      1,
      2,
      3,
      Object {
        "o": true,
      },
    ],
    "buf": Buffer <686f 7764 79  howdy>,
    "longBuf": Buffer <
      0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
    >,
    "emp": Object {
      "b": Buffer <>,
      "a": Array [],
      "o": Object {},
      "m": Map {},
      "s": Set {},
    },
    "fns": Object {
      "name": Function foo(),
      "anon": Function anon(),
      "arr": Function arr(),
      "identity": Function identity(x),
      "nameless": Function (),
    },
    "sym": Symbol(prince),
    "date": 2019-02-14T07:13:44.100Z,
    "n": null,
    "undef": undefined,
    "classy": Foo {},
    "err": Error: just an error,
    "emptyErr": Error,
    "fancyErr": Error: fancy pantsy {
      "fancy": "pantsy",
    },
    "assert": AssertionError {
      "generatedMessage": true,
      "code": "ERR_ASSERTION",
      "actual": &ref_3 Object {
        "a": 1,
        "k": &ref_4 Object {
          "k": <*ref_3>,
          "i": Object {
            "i": 1,
            "k": <*ref_4>,
          },
        },
        "f": <*ref_5>,
        "c": <*ref_1>,
      },
      "expected": Object {
        "o": true,
      },
      "operator": "==",
    },
  },
}
`

exports[`test/format.ts TAP gnarly object, many points of view different points of view > f.m 1`] = `
&ref_4 Map {
  &ref_1 Object {
    "a": 1,
    "k": &ref_2 Object {
      "k": <*ref_1>,
      "i": Object {
        "i": 1,
        "k": <*ref_2>,
      },
    },
    "f": &ref_3 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
        "multilineString": String(
          this is a line
          this is a line
          this is a line
          this is a line
          
        ),
        "emptyString": "",
      },
      "nullObject": Null Object {
        "x": Null Object {},
        "y": Object {},
        "z": Object {
          "zed": true,
        },
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_3>,
      },
      "m": <*ref_4>,
      "ak": Array [
        <*ref_1>,
        <*ref_1>,
        Array [
          <*ref_1>,
          <*ref_1>,
        ],
      ],
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => <*ref_1>,
        <*ref_1> => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <686f 7764 79  howdy>,
      "longBuf": Buffer <
        0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
      >,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": Function foo(),
        "anon": Function anon(),
        "arr": Function arr(),
        "identity": Function identity(x),
        "nameless": Function (),
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
      "err": Error: just an error,
      "emptyErr": Error,
      "fancyErr": Error: fancy pantsy {
        "fancy": "pantsy",
      },
      "assert": AssertionError {
        "generatedMessage": true,
        "code": "ERR_ASSERTION",
        "actual": <*ref_1>,
        "expected": Object {
          "o": true,
        },
        "operator": "==",
      },
    },
    "c": &ref_5 Object {
      "c": Object {
        "c": <*ref_5>,
        "b": Object {
          "b": 1,
          "d": <*ref_5>,
        },
      },
      "a": &ref_6 Array [
        1,
        <*ref_5>,
        <*ref_6>,
      ],
      "k": <*ref_1>,
      "f": &ref_3 Object {
        "a": 1,
        "b": 2,
        "extra": true,
        "c": 3,
        "d": 4,
        "more": false,
        "e": Object {
          "f": Object {
            "g": 1,
          },
          "a": Array [
            2,
            3,
            4,
          ],
          "h": "asdf",
          "multilineString": String(
            this is a line
            this is a line
            this is a line
            this is a line
            
          ),
          "emptyString": "",
        },
        "nullObject": Null Object {
          "x": Null Object {},
          "y": Object {},
          "z": Object {
            "zed": true,
          },
        },
        "p": Set {
          Object {
            "x": "y",
            "z": true,
          },
          Object {
            "a": 1,
          },
          Object {
            "b": 2,
          },
        },
        "s": Set {
          Object {
            "b": 2,
          },
          Object {
            "c": 3,
          },
          <*ref_3>,
        },
        "m": <*ref_4>,
        "ak": Array [
          <*ref_1>,
          <*ref_1>,
          Array [
            <*ref_1>,
            <*ref_1>,
          ],
        ],
        "ao": Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
          Array [
            Object {
              "o": true,
            },
            Object {
              "o": true,
            },
          ],
        ],
        "om": Map {
          Object {
            "o": true,
          } => <*ref_1>,
          <*ref_1> => Object {
            "o": true,
          },
        },
        "args": Arguments [
          1,
          2,
          3,
          Object {
            "o": true,
          },
        ],
        "buf": Buffer <686f 7764 79  howdy>,
        "longBuf": Buffer <
          0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
        >,
        "emp": Object {
          "b": Buffer <>,
          "a": Array [],
          "o": Object {},
          "m": Map {},
          "s": Set {},
        },
        "fns": Object {
          "name": Function foo(),
          "anon": Function anon(),
          "arr": Function arr(),
          "identity": Function identity(x),
          "nameless": Function (),
        },
        "sym": Symbol(prince),
        "date": 2019-02-14T07:13:44.100Z,
        "n": null,
        "undef": undefined,
        "classy": Foo {},
        "err": Error: just an error,
        "emptyErr": Error,
        "fancyErr": Error: fancy pantsy {
          "fancy": "pantsy",
        },
        "assert": AssertionError {
          "generatedMessage": true,
          "code": "ERR_ASSERTION",
          "actual": <*ref_1>,
          "expected": Object {
            "o": true,
          },
          "operator": "==",
        },
      },
    },
  } => 1,
  Object {
    "b": 2,
  } => 2,
  Object {
    "c": "d",
  } => Object {
    "re": /ef/g,
  },
  1 => &ref_5 Object {
    "c": Object {
      "c": <*ref_5>,
      "b": Object {
        "b": 1,
        "d": <*ref_5>,
      },
    },
    "a": &ref_6 Array [
      1,
      <*ref_5>,
      <*ref_6>,
    ],
    "k": &ref_1 Object {
      "a": 1,
      "k": &ref_2 Object {
        "k": <*ref_1>,
        "i": Object {
          "i": 1,
          "k": <*ref_2>,
        },
      },
      "f": &ref_3 Object {
        "a": 1,
        "b": 2,
        "extra": true,
        "c": 3,
        "d": 4,
        "more": false,
        "e": Object {
          "f": Object {
            "g": 1,
          },
          "a": Array [
            2,
            3,
            4,
          ],
          "h": "asdf",
          "multilineString": String(
            this is a line
            this is a line
            this is a line
            this is a line
            
          ),
          "emptyString": "",
        },
        "nullObject": Null Object {
          "x": Null Object {},
          "y": Object {},
          "z": Object {
            "zed": true,
          },
        },
        "p": Set {
          Object {
            "x": "y",
            "z": true,
          },
          Object {
            "a": 1,
          },
          Object {
            "b": 2,
          },
        },
        "s": Set {
          Object {
            "b": 2,
          },
          Object {
            "c": 3,
          },
          <*ref_3>,
        },
        "m": <*ref_4>,
        "ak": Array [
          <*ref_1>,
          <*ref_1>,
          Array [
            <*ref_1>,
            <*ref_1>,
          ],
        ],
        "ao": Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
          Array [
            Object {
              "o": true,
            },
            Object {
              "o": true,
            },
          ],
        ],
        "om": Map {
          Object {
            "o": true,
          } => <*ref_1>,
          <*ref_1> => Object {
            "o": true,
          },
        },
        "args": Arguments [
          1,
          2,
          3,
          Object {
            "o": true,
          },
        ],
        "buf": Buffer <686f 7764 79  howdy>,
        "longBuf": Buffer <
          0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
        >,
        "emp": Object {
          "b": Buffer <>,
          "a": Array [],
          "o": Object {},
          "m": Map {},
          "s": Set {},
        },
        "fns": Object {
          "name": Function foo(),
          "anon": Function anon(),
          "arr": Function arr(),
          "identity": Function identity(x),
          "nameless": Function (),
        },
        "sym": Symbol(prince),
        "date": 2019-02-14T07:13:44.100Z,
        "n": null,
        "undef": undefined,
        "classy": Foo {},
        "err": Error: just an error,
        "emptyErr": Error,
        "fancyErr": Error: fancy pantsy {
          "fancy": "pantsy",
        },
        "assert": AssertionError {
          "generatedMessage": true,
          "code": "ERR_ASSERTION",
          "actual": <*ref_1>,
          "expected": Object {
            "o": true,
          },
          "operator": "==",
        },
      },
      "c": <*ref_5>,
    },
    "f": &ref_3 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
        "multilineString": String(
          this is a line
          this is a line
          this is a line
          this is a line
          
        ),
        "emptyString": "",
      },
      "nullObject": Null Object {
        "x": Null Object {},
        "y": Object {},
        "z": Object {
          "zed": true,
        },
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_3>,
      },
      "m": <*ref_4>,
      "ak": Array [
        &ref_1 Object {
          "a": 1,
          "k": &ref_2 Object {
            "k": <*ref_1>,
            "i": Object {
              "i": 1,
              "k": <*ref_2>,
            },
          },
          "f": <*ref_3>,
          "c": <*ref_5>,
        },
        &ref_1 Object {
          "a": 1,
          "k": &ref_2 Object {
            "k": <*ref_1>,
            "i": Object {
              "i": 1,
              "k": <*ref_2>,
            },
          },
          "f": <*ref_3>,
          "c": <*ref_5>,
        },
        Array [
          &ref_1 Object {
            "a": 1,
            "k": &ref_2 Object {
              "k": <*ref_1>,
              "i": Object {
                "i": 1,
                "k": <*ref_2>,
              },
            },
            "f": <*ref_3>,
            "c": <*ref_5>,
          },
          &ref_1 Object {
            "a": 1,
            "k": &ref_2 Object {
              "k": <*ref_1>,
              "i": Object {
                "i": 1,
                "k": <*ref_2>,
              },
            },
            "f": <*ref_3>,
            "c": <*ref_5>,
          },
        ],
      ],
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => &ref_1 Object {
          "a": 1,
          "k": &ref_2 Object {
            "k": <*ref_1>,
            "i": Object {
              "i": 1,
              "k": <*ref_2>,
            },
          },
          "f": <*ref_3>,
          "c": <*ref_5>,
        },
        &ref_1 Object {
          "a": 1,
          "k": &ref_2 Object {
            "k": <*ref_1>,
            "i": Object {
              "i": 1,
              "k": <*ref_2>,
            },
          },
          "f": <*ref_3>,
          "c": <*ref_5>,
        } => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <686f 7764 79  howdy>,
      "longBuf": Buffer <
        0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
      >,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": Function foo(),
        "anon": Function anon(),
        "arr": Function arr(),
        "identity": Function identity(x),
        "nameless": Function (),
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
      "err": Error: just an error,
      "emptyErr": Error,
      "fancyErr": Error: fancy pantsy {
        "fancy": "pantsy",
      },
      "assert": AssertionError {
        "generatedMessage": true,
        "code": "ERR_ASSERTION",
        "actual": &ref_1 Object {
          "a": 1,
          "k": &ref_2 Object {
            "k": <*ref_1>,
            "i": Object {
              "i": 1,
              "k": <*ref_2>,
            },
          },
          "f": <*ref_3>,
          "c": <*ref_5>,
        },
        "expected": Object {
          "o": true,
        },
        "operator": "==",
      },
    },
  },
  &ref_3 Object {
    "a": 1,
    "b": 2,
    "extra": true,
    "c": 3,
    "d": 4,
    "more": false,
    "e": Object {
      "f": Object {
        "g": 1,
      },
      "a": Array [
        2,
        3,
        4,
      ],
      "h": "asdf",
      "multilineString": String(
        this is a line
        this is a line
        this is a line
        this is a line
        
      ),
      "emptyString": "",
    },
    "nullObject": Null Object {
      "x": Null Object {},
      "y": Object {},
      "z": Object {
        "zed": true,
      },
    },
    "p": Set {
      Object {
        "x": "y",
        "z": true,
      },
      Object {
        "a": 1,
      },
      Object {
        "b": 2,
      },
    },
    "s": Set {
      Object {
        "b": 2,
      },
      Object {
        "c": 3,
      },
      <*ref_3>,
    },
    "m": <*ref_4>,
    "ak": Array [
      &ref_1 Object {
        "a": 1,
        "k": &ref_2 Object {
          "k": <*ref_1>,
          "i": Object {
            "i": 1,
            "k": <*ref_2>,
          },
        },
        "f": <*ref_3>,
        "c": &ref_5 Object {
          "c": Object {
            "c": <*ref_5>,
            "b": Object {
              "b": 1,
              "d": <*ref_5>,
            },
          },
          "a": &ref_6 Array [
            1,
            <*ref_5>,
            <*ref_6>,
          ],
          "k": <*ref_1>,
          "f": <*ref_3>,
        },
      },
      &ref_1 Object {
        "a": 1,
        "k": &ref_2 Object {
          "k": <*ref_1>,
          "i": Object {
            "i": 1,
            "k": <*ref_2>,
          },
        },
        "f": <*ref_3>,
        "c": &ref_5 Object {
          "c": Object {
            "c": <*ref_5>,
            "b": Object {
              "b": 1,
              "d": <*ref_5>,
            },
          },
          "a": &ref_6 Array [
            1,
            <*ref_5>,
            <*ref_6>,
          ],
          "k": <*ref_1>,
          "f": <*ref_3>,
        },
      },
      Array [
        &ref_1 Object {
          "a": 1,
          "k": &ref_2 Object {
            "k": <*ref_1>,
            "i": Object {
              "i": 1,
              "k": <*ref_2>,
            },
          },
          "f": <*ref_3>,
          "c": &ref_5 Object {
            "c": Object {
              "c": <*ref_5>,
              "b": Object {
                "b": 1,
                "d": <*ref_5>,
              },
            },
            "a": &ref_6 Array [
              1,
              <*ref_5>,
              <*ref_6>,
            ],
            "k": <*ref_1>,
            "f": <*ref_3>,
          },
        },
        &ref_1 Object {
          "a": 1,
          "k": &ref_2 Object {
            "k": <*ref_1>,
            "i": Object {
              "i": 1,
              "k": <*ref_2>,
            },
          },
          "f": <*ref_3>,
          "c": &ref_5 Object {
            "c": Object {
              "c": <*ref_5>,
              "b": Object {
                "b": 1,
                "d": <*ref_5>,
              },
            },
            "a": &ref_6 Array [
              1,
              <*ref_5>,
              <*ref_6>,
            ],
            "k": <*ref_1>,
            "f": <*ref_3>,
          },
        },
      ],
    ],
    "ao": Array [
      Object {
        "o": true,
      },
      Object {
        "o": true,
      },
      Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
      ],
    ],
    "om": Map {
      Object {
        "o": true,
      } => &ref_1 Object {
        "a": 1,
        "k": &ref_2 Object {
          "k": <*ref_1>,
          "i": Object {
            "i": 1,
            "k": <*ref_2>,
          },
        },
        "f": <*ref_3>,
        "c": &ref_5 Object {
          "c": Object {
            "c": <*ref_5>,
            "b": Object {
              "b": 1,
              "d": <*ref_5>,
            },
          },
          "a": &ref_6 Array [
            1,
            <*ref_5>,
            <*ref_6>,
          ],
          "k": <*ref_1>,
          "f": <*ref_3>,
        },
      },
      &ref_1 Object {
        "a": 1,
        "k": &ref_2 Object {
          "k": <*ref_1>,
          "i": Object {
            "i": 1,
            "k": <*ref_2>,
          },
        },
        "f": <*ref_3>,
        "c": &ref_5 Object {
          "c": Object {
            "c": <*ref_5>,
            "b": Object {
              "b": 1,
              "d": <*ref_5>,
            },
          },
          "a": &ref_6 Array [
            1,
            <*ref_5>,
            <*ref_6>,
          ],
          "k": <*ref_1>,
          "f": <*ref_3>,
        },
      } => Object {
        "o": true,
      },
    },
    "args": Arguments [
      1,
      2,
      3,
      Object {
        "o": true,
      },
    ],
    "buf": Buffer <686f 7764 79  howdy>,
    "longBuf": Buffer <
      0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
    >,
    "emp": Object {
      "b": Buffer <>,
      "a": Array [],
      "o": Object {},
      "m": Map {},
      "s": Set {},
    },
    "fns": Object {
      "name": Function foo(),
      "anon": Function anon(),
      "arr": Function arr(),
      "identity": Function identity(x),
      "nameless": Function (),
    },
    "sym": Symbol(prince),
    "date": 2019-02-14T07:13:44.100Z,
    "n": null,
    "undef": undefined,
    "classy": Foo {},
    "err": Error: just an error,
    "emptyErr": Error,
    "fancyErr": Error: fancy pantsy {
      "fancy": "pantsy",
    },
    "assert": AssertionError {
      "generatedMessage": true,
      "code": "ERR_ASSERTION",
      "actual": &ref_1 Object {
        "a": 1,
        "k": &ref_2 Object {
          "k": <*ref_1>,
          "i": Object {
            "i": 1,
            "k": <*ref_2>,
          },
        },
        "f": <*ref_3>,
        "c": &ref_5 Object {
          "c": Object {
            "c": <*ref_5>,
            "b": Object {
              "b": 1,
              "d": <*ref_5>,
            },
          },
          "a": &ref_6 Array [
            1,
            <*ref_5>,
            <*ref_6>,
          ],
          "k": <*ref_1>,
          "f": <*ref_3>,
        },
      },
      "expected": Object {
        "o": true,
      },
      "operator": "==",
    },
  } => &ref_1 Object {
    "a": 1,
    "k": &ref_2 Object {
      "k": <*ref_1>,
      "i": Object {
        "i": 1,
        "k": <*ref_2>,
      },
    },
    "f": &ref_3 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
        "multilineString": String(
          this is a line
          this is a line
          this is a line
          this is a line
          
        ),
        "emptyString": "",
      },
      "nullObject": Null Object {
        "x": Null Object {},
        "y": Object {},
        "z": Object {
          "zed": true,
        },
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_3>,
      },
      "m": <*ref_4>,
      "ak": Array [
        <*ref_1>,
        <*ref_1>,
        Array [
          <*ref_1>,
          <*ref_1>,
        ],
      ],
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => <*ref_1>,
        <*ref_1> => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <686f 7764 79  howdy>,
      "longBuf": Buffer <
        0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
      >,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": Function foo(),
        "anon": Function anon(),
        "arr": Function arr(),
        "identity": Function identity(x),
        "nameless": Function (),
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
      "err": Error: just an error,
      "emptyErr": Error,
      "fancyErr": Error: fancy pantsy {
        "fancy": "pantsy",
      },
      "assert": AssertionError {
        "generatedMessage": true,
        "code": "ERR_ASSERTION",
        "actual": <*ref_1>,
        "expected": Object {
          "o": true,
        },
        "operator": "==",
      },
    },
    "c": &ref_5 Object {
      "c": Object {
        "c": <*ref_5>,
        "b": Object {
          "b": 1,
          "d": <*ref_5>,
        },
      },
      "a": &ref_6 Array [
        1,
        <*ref_5>,
        <*ref_6>,
      ],
      "k": <*ref_1>,
      "f": &ref_3 Object {
        "a": 1,
        "b": 2,
        "extra": true,
        "c": 3,
        "d": 4,
        "more": false,
        "e": Object {
          "f": Object {
            "g": 1,
          },
          "a": Array [
            2,
            3,
            4,
          ],
          "h": "asdf",
          "multilineString": String(
            this is a line
            this is a line
            this is a line
            this is a line
            
          ),
          "emptyString": "",
        },
        "nullObject": Null Object {
          "x": Null Object {},
          "y": Object {},
          "z": Object {
            "zed": true,
          },
        },
        "p": Set {
          Object {
            "x": "y",
            "z": true,
          },
          Object {
            "a": 1,
          },
          Object {
            "b": 2,
          },
        },
        "s": Set {
          Object {
            "b": 2,
          },
          Object {
            "c": 3,
          },
          <*ref_3>,
        },
        "m": <*ref_4>,
        "ak": Array [
          <*ref_1>,
          <*ref_1>,
          Array [
            <*ref_1>,
            <*ref_1>,
          ],
        ],
        "ao": Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
          Array [
            Object {
              "o": true,
            },
            Object {
              "o": true,
            },
          ],
        ],
        "om": Map {
          Object {
            "o": true,
          } => <*ref_1>,
          <*ref_1> => Object {
            "o": true,
          },
        },
        "args": Arguments [
          1,
          2,
          3,
          Object {
            "o": true,
          },
        ],
        "buf": Buffer <686f 7764 79  howdy>,
        "longBuf": Buffer <
          0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
        >,
        "emp": Object {
          "b": Buffer <>,
          "a": Array [],
          "o": Object {},
          "m": Map {},
          "s": Set {},
        },
        "fns": Object {
          "name": Function foo(),
          "anon": Function anon(),
          "arr": Function arr(),
          "identity": Function identity(x),
          "nameless": Function (),
        },
        "sym": Symbol(prince),
        "date": 2019-02-14T07:13:44.100Z,
        "n": null,
        "undef": undefined,
        "classy": Foo {},
        "err": Error: just an error,
        "emptyErr": Error,
        "fancyErr": Error: fancy pantsy {
          "fancy": "pantsy",
        },
        "assert": AssertionError {
          "generatedMessage": true,
          "code": "ERR_ASSERTION",
          "actual": <*ref_1>,
          "expected": Object {
            "o": true,
          },
          "operator": "==",
        },
      },
    },
  },
}
`

exports[`test/format.ts TAP gnarly object, many points of view different points of view > k 1`] = `
&ref_1 Object {
  "a": 1,
  "k": &ref_2 Object {
    "k": <*ref_1>,
    "i": Object {
      "i": 1,
      "k": <*ref_2>,
    },
  },
  "f": &ref_3 Object {
    "a": 1,
    "b": 2,
    "extra": true,
    "c": 3,
    "d": 4,
    "more": false,
    "e": Object {
      "f": Object {
        "g": 1,
      },
      "a": Array [
        2,
        3,
        4,
      ],
      "h": "asdf",
      "multilineString": String(
        this is a line
        this is a line
        this is a line
        this is a line
        
      ),
      "emptyString": "",
    },
    "nullObject": Null Object {
      "x": Null Object {},
      "y": Object {},
      "z": Object {
        "zed": true,
      },
    },
    "p": Set {
      Object {
        "x": "y",
        "z": true,
      },
      Object {
        "a": 1,
      },
      Object {
        "b": 2,
      },
    },
    "s": Set {
      Object {
        "b": 2,
      },
      Object {
        "c": 3,
      },
      <*ref_3>,
    },
    "m": Map {
      <*ref_1> => 1,
      Object {
        "b": 2,
      } => 2,
      Object {
        "c": "d",
      } => Object {
        "re": /ef/g,
      },
      1 => &ref_4 Object {
        "c": Object {
          "c": <*ref_4>,
          "b": Object {
            "b": 1,
            "d": <*ref_4>,
          },
        },
        "a": &ref_5 Array [
          1,
          <*ref_4>,
          <*ref_5>,
        ],
        "k": <*ref_1>,
        "f": <*ref_3>,
      },
      <*ref_3> => <*ref_1>,
    },
    "ak": Array [
      <*ref_1>,
      <*ref_1>,
      Array [
        <*ref_1>,
        <*ref_1>,
      ],
    ],
    "ao": Array [
      Object {
        "o": true,
      },
      Object {
        "o": true,
      },
      Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
      ],
    ],
    "om": Map {
      Object {
        "o": true,
      } => <*ref_1>,
      <*ref_1> => Object {
        "o": true,
      },
    },
    "args": Arguments [
      1,
      2,
      3,
      Object {
        "o": true,
      },
    ],
    "buf": Buffer <686f 7764 79  howdy>,
    "longBuf": Buffer <
      0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
      04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
      04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
      04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
      0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
      0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
      0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
      0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
    >,
    "emp": Object {
      "b": Buffer <>,
      "a": Array [],
      "o": Object {},
      "m": Map {},
      "s": Set {},
    },
    "fns": Object {
      "name": Function foo(),
      "anon": Function anon(),
      "arr": Function arr(),
      "identity": Function identity(x),
      "nameless": Function (),
    },
    "sym": Symbol(prince),
    "date": 2019-02-14T07:13:44.100Z,
    "n": null,
    "undef": undefined,
    "classy": Foo {},
    "err": Error: just an error,
    "emptyErr": Error,
    "fancyErr": Error: fancy pantsy {
      "fancy": "pantsy",
    },
    "assert": AssertionError {
      "generatedMessage": true,
      "code": "ERR_ASSERTION",
      "actual": <*ref_1>,
      "expected": Object {
        "o": true,
      },
      "operator": "==",
    },
  },
  "c": &ref_4 Object {
    "c": Object {
      "c": <*ref_4>,
      "b": Object {
        "b": 1,
        "d": <*ref_4>,
      },
    },
    "a": &ref_5 Array [
      1,
      <*ref_4>,
      <*ref_5>,
    ],
    "k": <*ref_1>,
    "f": &ref_3 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
        "multilineString": String(
          this is a line
          this is a line
          this is a line
          this is a line
          
        ),
        "emptyString": "",
      },
      "nullObject": Null Object {
        "x": Null Object {},
        "y": Object {},
        "z": Object {
          "zed": true,
        },
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_3>,
      },
      "m": Map {
        <*ref_1> => 1,
        Object {
          "b": 2,
        } => 2,
        Object {
          "c": "d",
        } => Object {
          "re": /ef/g,
        },
        1 => <*ref_4>,
        <*ref_3> => <*ref_1>,
      },
      "ak": Array [
        <*ref_1>,
        <*ref_1>,
        Array [
          <*ref_1>,
          <*ref_1>,
        ],
      ],
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => <*ref_1>,
        <*ref_1> => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <686f 7764 79  howdy>,
      "longBuf": Buffer <
        0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
      >,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": Function foo(),
        "anon": Function anon(),
        "arr": Function arr(),
        "identity": Function identity(x),
        "nameless": Function (),
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
      "err": Error: just an error,
      "emptyErr": Error,
      "fancyErr": Error: fancy pantsy {
        "fancy": "pantsy",
      },
      "assert": AssertionError {
        "generatedMessage": true,
        "code": "ERR_ASSERTION",
        "actual": <*ref_1>,
        "expected": Object {
          "o": true,
        },
        "operator": "==",
      },
    },
  },
}
`

exports[`test/format.ts TAP gnarly object, many points of view different points of view > k.k 1`] = `
&ref_1 Object {
  "k": &ref_3 Object {
    "a": 1,
    "k": <*ref_1>,
    "f": &ref_2 Object {
      "a": 1,
      "b": 2,
      "extra": true,
      "c": 3,
      "d": 4,
      "more": false,
      "e": Object {
        "f": Object {
          "g": 1,
        },
        "a": Array [
          2,
          3,
          4,
        ],
        "h": "asdf",
        "multilineString": String(
          this is a line
          this is a line
          this is a line
          this is a line
          
        ),
        "emptyString": "",
      },
      "nullObject": Null Object {
        "x": Null Object {},
        "y": Object {},
        "z": Object {
          "zed": true,
        },
      },
      "p": Set {
        Object {
          "x": "y",
          "z": true,
        },
        Object {
          "a": 1,
        },
        Object {
          "b": 2,
        },
      },
      "s": Set {
        Object {
          "b": 2,
        },
        Object {
          "c": 3,
        },
        <*ref_2>,
      },
      "m": Map {
        <*ref_3> => 1,
        Object {
          "b": 2,
        } => 2,
        Object {
          "c": "d",
        } => Object {
          "re": /ef/g,
        },
        1 => &ref_4 Object {
          "c": Object {
            "c": <*ref_4>,
            "b": Object {
              "b": 1,
              "d": <*ref_4>,
            },
          },
          "a": &ref_5 Array [
            1,
            <*ref_4>,
            <*ref_5>,
          ],
          "k": <*ref_3>,
          "f": <*ref_2>,
        },
        <*ref_2> => <*ref_3>,
      },
      "ak": Array [
        <*ref_3>,
        <*ref_3>,
        Array [
          <*ref_3>,
          <*ref_3>,
        ],
      ],
      "ao": Array [
        Object {
          "o": true,
        },
        Object {
          "o": true,
        },
        Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
        ],
      ],
      "om": Map {
        Object {
          "o": true,
        } => <*ref_3>,
        <*ref_3> => Object {
          "o": true,
        },
      },
      "args": Arguments [
        1,
        2,
        3,
        Object {
          "o": true,
        },
      ],
      "buf": Buffer <686f 7764 79  howdy>,
      "longBuf": Buffer <
        0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
        04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
        04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
        04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
        0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
        0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
        0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
        0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
      >,
      "emp": Object {
        "b": Buffer <>,
        "a": Array [],
        "o": Object {},
        "m": Map {},
        "s": Set {},
      },
      "fns": Object {
        "name": Function foo(),
        "anon": Function anon(),
        "arr": Function arr(),
        "identity": Function identity(x),
        "nameless": Function (),
      },
      "sym": Symbol(prince),
      "date": 2019-02-14T07:13:44.100Z,
      "n": null,
      "undef": undefined,
      "classy": Foo {},
      "err": Error: just an error,
      "emptyErr": Error,
      "fancyErr": Error: fancy pantsy {
        "fancy": "pantsy",
      },
      "assert": AssertionError {
        "generatedMessage": true,
        "code": "ERR_ASSERTION",
        "actual": <*ref_3>,
        "expected": Object {
          "o": true,
        },
        "operator": "==",
      },
    },
    "c": &ref_4 Object {
      "c": Object {
        "c": <*ref_4>,
        "b": Object {
          "b": 1,
          "d": <*ref_4>,
        },
      },
      "a": &ref_5 Array [
        1,
        <*ref_4>,
        <*ref_5>,
      ],
      "k": <*ref_3>,
      "f": &ref_2 Object {
        "a": 1,
        "b": 2,
        "extra": true,
        "c": 3,
        "d": 4,
        "more": false,
        "e": Object {
          "f": Object {
            "g": 1,
          },
          "a": Array [
            2,
            3,
            4,
          ],
          "h": "asdf",
          "multilineString": String(
            this is a line
            this is a line
            this is a line
            this is a line
            
          ),
          "emptyString": "",
        },
        "nullObject": Null Object {
          "x": Null Object {},
          "y": Object {},
          "z": Object {
            "zed": true,
          },
        },
        "p": Set {
          Object {
            "x": "y",
            "z": true,
          },
          Object {
            "a": 1,
          },
          Object {
            "b": 2,
          },
        },
        "s": Set {
          Object {
            "b": 2,
          },
          Object {
            "c": 3,
          },
          <*ref_2>,
        },
        "m": Map {
          <*ref_3> => 1,
          Object {
            "b": 2,
          } => 2,
          Object {
            "c": "d",
          } => Object {
            "re": /ef/g,
          },
          1 => <*ref_4>,
          <*ref_2> => <*ref_3>,
        },
        "ak": Array [
          <*ref_3>,
          <*ref_3>,
          Array [
            <*ref_3>,
            <*ref_3>,
          ],
        ],
        "ao": Array [
          Object {
            "o": true,
          },
          Object {
            "o": true,
          },
          Array [
            Object {
              "o": true,
            },
            Object {
              "o": true,
            },
          ],
        ],
        "om": Map {
          Object {
            "o": true,
          } => <*ref_3>,
          <*ref_3> => Object {
            "o": true,
          },
        },
        "args": Arguments [
          1,
          2,
          3,
          Object {
            "o": true,
          },
        ],
        "buf": Buffer <686f 7764 79  howdy>,
        "longBuf": Buffer <
          0000: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0020: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0040: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0060: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0080: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          00a0: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          00c0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          00e0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0100: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0120: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0140: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0160: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0180: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          01a0: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          01c0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          01e0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          0200: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0220: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0240: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0260: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0280: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          02a0: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          02c0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          02e0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          0300: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0320: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0340: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0360: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0380: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          03a0: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          03c0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          03e0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          0400: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0420: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0440: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0460: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0480: 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077  o,.world!.hello,.world!.hello,.w
          04a0: 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64  orld!.hello,.world!.hello,.world
          04c0: 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865  !.hello,.world!.hello,.world!.he
          04e0: 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c  llo,.world!.hello,.world!.hello,
          0500: 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72  .world!.hello,.world!.hello,.wor
          0520: 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a  ld!.hello,.world!.hello,.world!.
          0540: 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c 6f2c 2077 6f72 6c64 210a 6865 6c6c  hello,.world!.hello,.world!.hell
          0560: 6f2c 2077 6f72 6c64 210a                                                         o,.world!.
        >,
        "emp": Object {
          "b": Buffer <>,
          "a": Array [],
          "o": Object {},
          "m": Map {},
          "s": Set {},
        },
        "fns": Object {
          "name": Function foo(),
          "anon": Function anon(),
          "arr": Function arr(),
          "identity": Function identity(x),
          "nameless": Function (),
        },
        "sym": Symbol(prince),
        "date": 2019-02-14T07:13:44.100Z,
        "n": null,
        "undef": undefined,
        "classy": Foo {},
        "err": Error: just an error,
        "emptyErr": Error,
        "fancyErr": Error: fancy pantsy {
          "fancy": "pantsy",
        },
        "assert": AssertionError {
          "generatedMessage": true,
          "code": "ERR_ASSERTION",
          "actual": <*ref_3>,
          "expected": Object {
            "o": true,
          },
          "operator": "==",
        },
      },
    },
  },
  "i": Object {
    "i": 1,
    "k": <*ref_1>,
  },
}
`

exports[`test/format.ts TAP hidden props and getters > all enumerable properties shown 1`] = `
Hidden {
  "raw": 1,
  "value": 1,
  "baseValue": 0,
}
`

exports[`test/format.ts TAP hidden props and getters > all enumerable properties shown 2`] = `
Null Object {
  "isNullObject": true,
}
`

exports[`test/format.ts TAP hidden props and getters > enumerable inherited getters shown 1`] = `
Hidden {
  "raw": 1,
  "value": 1,
}
`

exports[`test/format.ts TAP hidden props and getters > enumerable inherited getters shown 2`] = `
Null Object {
  "isNullObject": true,
}
`

exports[`test/format.ts TAP hidden props and getters > own props only 1`] = `
Hidden {
  "raw": 1,
}
`

exports[`test/format.ts TAP hidden props and getters > own props only 2`] = `
Null Object {
  "isNullObject": true,
}
`

exports[`test/format.ts TAP invalid iterator > must match snapshot 1`] = `
Object {}
`

exports[`test/format.ts TAP locale sorting > must match snapshot 1`] = `
Object {
  "cat": "meow",
  "chai": "blub",
  "dog": "woof",
}
`

exports[`test/format.ts TAP other misc > faked out seen() method 1`] = `
&ref_1 Object {
  "a": Object {
    "t": <*ref_1>,
  },
}
`

exports[`test/format.ts TAP other misc > must match snapshot 1`] = `
true
`

exports[`test/format.ts TAP sorting > sort it 1`] = `
Object {
  "a": 2,
  "b": 1,
}
`

exports[`test/format.ts TAP streams are not arrays > must match snapshot 1`] = `
Minipass {
  "_events": Null Object {},
  "_eventsCount": 0,
  "_maxListeners": undefined,
  "pipes": Array [],
  "buffer": Array [
    Buffer <6865 6c6c 6f  hello>,
  ],
  "writable": false,
  "readable": true,
}
`

exports[`test/format.ts TAP streams are not arrays > must match snapshot 2`] = `
Minipass {
  "_events": Null Object {},
  "_eventsCount": 0,
  "_maxListeners": undefined,
  "pipes": Array [],
  "buffer": Array [],
  "writable": true,
  "readable": true,
  "pipe": null,
}
`

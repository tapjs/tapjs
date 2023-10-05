/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/plugin.ts > TAP > adding plugins > add a plugin that is a file on disk > must match snapshot 1`] = `
Array [
  Array [
    "successfully added plugin(s):",
  ],
  Array [
    "{CWD}/.tap/fixtures/test-plugin.ts-adding-plugins-add-a-plugin-that-is-a-file-on-disk/my-plugin",
  ],
]
`

exports[`test/plugin.ts > TAP > adding plugins > add a plugin that is a file on disk > must match snapshot 2`] = `
Array [
  Array [
    "adding plugins:",
    Array [
      "{CWD}/.tap/fixtures/test-plugin.ts-adding-plugins-add-a-plugin-that-is-a-file-on-disk/my-plugin",
    ],
  ],
]
`

exports[`test/plugin.ts > TAP > adding plugins > add plugin as a dev dep > must match snapshot 1`] = `
Array [
  Array [
    "successfully added plugin(s):",
  ],
  Array [
    "dep-plugin",
  ],
]
`

exports[`test/plugin.ts > TAP > adding plugins > add plugin as a dev dep > must match snapshot 2`] = `
Array [
  Array [
    "adding plugins:",
    Array [
      "dep-plugin",
    ],
  ],
  Array [
    "installing:",
    Array [
      "dep-plugin@1.2.3",
    ],
  ],
]
`

exports[`test/plugin.ts > TAP > adding plugins > add previously removed default plugin > must match snapshot 1`] = `
Array [
  Array [
    "successfully added plugin(s):",
  ],
  Array [
    "@tapjs/mock",
  ],
]
`

exports[`test/plugin.ts > TAP > adding plugins > add previously removed default plugin > must match snapshot 2`] = `
Array [
  Array [
    "adding plugins:",
    Array [
      "@tapjs/mock",
    ],
  ],
]
`

exports[`test/plugin.ts > TAP > adding plugins > fail to build installed plugin, no cleanup > must match snapshot 1`] = `
Array []
`

exports[`test/plugin.ts > TAP > adding plugins > fail to build installed plugin, no cleanup > must match snapshot 2`] = `
Array [
  Array [
    "adding plugins:",
    Array [
      "dep-plugin",
    ],
  ],
  Array [
    "installing:",
    Array [
      "dep-plugin@1.2.3",
    ],
  ],
  Array [
    "build fail in test",
  ],
  Array [
    "build failed",
  ],
]
`

exports[`test/plugin.ts > TAP > adding plugins > fail to build installed plugin, with cleanup > must match snapshot 1`] = `
Array []
`

exports[`test/plugin.ts > TAP > adding plugins > fail to build installed plugin, with cleanup > must match snapshot 2`] = `
Array [
  Array [
    "adding plugins:",
    Array [
      "dep-plugin",
    ],
  ],
  Array [
    "installing:",
    Array [
      "dep-plugin@1.2.3",
    ],
  ],
  Array [
    "build fail in test",
  ],
  Array [
    "build failed",
  ],
  Array [
    "attempting to clean up added packages",
  ],
]
`

exports[`test/plugin.ts > TAP > adding plugins > fail to install plugin > must match snapshot 1`] = `
Array []
`

exports[`test/plugin.ts > TAP > adding plugins > fail to install plugin > must match snapshot 2`] = `
Array [
  Array [
    "adding plugins:",
    Array [
      "dep-plugin",
    ],
  ],
  Array [
    "installing:",
    Array [
      "dep-plugin@1.2.3",
    ],
  ],
  Array [
    "install fail in test",
  ],
  Array [
    "install failed",
  ],
]
`

exports[`test/plugin.ts > TAP > adding plugins > fail uninstall after build fail > must match snapshot 1`] = `
Array [
  Array [
    "adding plugins:",
    Array [
      "dep-plugin",
    ],
  ],
  Array [
    "installing:",
    Array [
      "dep-plugin@1.2.3",
    ],
  ],
  Array [
    "build fail in test",
  ],
  Array [
    "build failed",
  ],
  Array [
    "attempting to clean up added packages",
  ],
  Array [
    "uninstall failed",
  ],
]
`

exports[`test/plugin.ts > TAP > list plugins > no args > must match snapshot 1`] = `
Array [
  Array [
    String(
      a
      b
      c
    ),
  ],
]
`

exports[`test/plugin.ts > TAP > list plugins > no args > must match snapshot 2`] = `
Array [
  Array [
    "(use 'tap plugin add ...' to add plugins, or 'tap plugin rm ...' to remove them)",
  ],
]
`

exports[`test/plugin.ts > TAP > print warning if not running in project > must match snapshot 1`] = `
Object {
  "errs": Array [
    Array [
      String(
        global/local mixup!
        
        The tap plugin command must be run by the locally installed tap executable,
        and this appears to be running in a global install location at
        /global/
        
        This will likely fail. Try:
        
            npm exec tap plugin "list"
        
      ),
    ],
  ],
  "logs": Array [
    Array [
      String(
        a
        b
        c
      ),
    ],
  ],
}
`

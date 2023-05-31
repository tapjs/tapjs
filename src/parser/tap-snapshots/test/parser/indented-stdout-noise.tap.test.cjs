/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts TAP indented-stdout-noise.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: index.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "line",
        "# Subtest: boom\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "line",
            "# Subtest: npm install package line\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "line",
                "$ npm install package\\n",
              ],
              Array [
                "line",
                "var package = require('package')(); // contains package.json data.\\n",
              ],
              Array [
                "line",
                "var yourAwesomeModule = {};\\n",
              ],
              Array [
                "line",
                "yourAwesomeModule.version = package.version;\\n",
              ],
              Array [
                "line",
                "1..0 # no tests found\\n",
              ],
              Array [
                "plan",
                Plan {
                  "comment": "no tests found",
                  "end": 0,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 0,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 0,
                  "passes": undefined,
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "skips": Array [],
                  "time": null,
                  "todo": 0,
                  "todos": Array [],
                },
              ],
              Array [
                "close",
              ],
            ],
          ],
          Array [
            "line",
            "    $ npm install package\\n",
          ],
          Array [
            "line",
            "    var package = require('package')(); // contains package.json data.\\n",
          ],
          Array [
            "line",
            "    var yourAwesomeModule = {};\\n",
          ],
          Array [
            "line",
            "    yourAwesomeModule.version = package.version;\\n",
          ],
          Array [
            "line",
            "1..0\\n",
          ],
          Array [
            "line",
            "    1..0 # no tests found\\n",
          ],
          Array [
            "line",
            "1..0 # no tests found\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "no tests found",
              "end": 0,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 0,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 0,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 5.26,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "line",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "line",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "line",
        "This module provides an easy way to export package.json data.\\n",
      ],
      Array [
        "line",
        "It contains auto-discovery functionality, which means that it will\\n",
      ],
      Array [
        "line",
        "find your package.json file automatically. Cool, ugh?\\n",
      ],
      Array [
        "line",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "line",
        "    # Subtest: npm install package line\\n",
      ],
      Array [
        "line",
        "        $ npm install package\\n",
      ],
      Array [
        "line",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "line",
        "        var package = require('package')(); // contains package.json data.\\n",
      ],
      Array [
        "line",
        "        var yourAwesomeModule = {};\\n",
      ],
      Array [
        "line",
        "        yourAwesomeModule.version = package.version;\\n",
      ],
      Array [
        "line",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "line",
        "Bug fixes and features are welcomed.\\n",
      ],
      Array [
        "line",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "line",
        "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
      ],
      Array [
        "line",
        "- JSON.parse + fs.readFile\\n",
      ],
      Array [
        "line",
        "## License\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "line",
        "MIT License\\n",
      ],
      Array [
        "line",
        "Copyright (C) 2011 Veselin Todorov\\n",
      ],
      Array [
        "line",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
      ],
      Array [
        "line",
        "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
      ],
      Array [
        "line",
        "the Software without restriction, including without limitation the rights to\\n",
      ],
      Array [
        "line",
        "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
      ],
      Array [
        "line",
        "of the Software, and to permit persons to whom the Software is furnished to do\\n",
      ],
      Array [
        "line",
        "so, subject to the following conditions:\\n",
      ],
      Array [
        "line",
        "The above copyright notice and this permission notice shall be included in all\\n",
      ],
      Array [
        "line",
        "copies or substantial portions of the Software.\\n",
      ],
      Array [
        "line",
        "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
      ],
      Array [
        "line",
        "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
      ],
      Array [
        "line",
        "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
      ],
      Array [
        "line",
        "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
      ],
      Array [
        "line",
        "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
      ],
      Array [
        "line",
        "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
      ],
      Array [
        "line",
        "SOFTWARE.\\n",
      ],
      Array [
        "line",
        "    1..0\\n",
      ],
      Array [
        "line",
        "        1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "    1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "ok 1 - boom # time=5.26ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "index.js boom",
          "id": 1,
          "name": "boom",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 5.26,
          "todo": false,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 201.609,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: boom\\n",
  ],
  Array [
    "line",
    "    # package - Easy package.json exports.\\n",
  ],
  Array [
    "line",
    "    ## Intro\\n",
  ],
  Array [
    "line",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "line",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "line",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "line",
    "    ## Installation\\n",
  ],
  Array [
    "line",
    "        # Subtest: npm install package line\\n",
  ],
  Array [
    "line",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "line",
    "    ## Usage\\n",
  ],
  Array [
    "line",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "line",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "line",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "line",
    "    ## Contribution\\n",
  ],
  Array [
    "line",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "line",
    "    ## Other similar modules\\n",
  ],
  Array [
    "line",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "line",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "line",
    "    ## License\\n",
  ],
  Array [
    "line",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "line",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "line",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "line",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "line",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "line",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "line",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "line",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "line",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "line",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "line",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "line",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "line",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "line",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "line",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "line",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "line",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "line",
    "        1..0\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "line",
    "            1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "        1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "    ok 1 - boom # time=5.26ms\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "index.js boom",
      "id": 1,
      "name": "boom",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 5.26,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "index.js boom",
      "id": 1,
      "name": "boom",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 5.26,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # time=12.555ms\\n",
  ],
  Array [
    "line",
    "not ok 1 - index.js # time=201.609ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  arguments:\\n",
  ],
  Array [
    "line",
    "    - index.js\\n",
  ],
  Array [
    "line",
    "  timeout: 30000\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 1\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "  command: /usr/local/bin/iojs\\n",
  ],
  Array [
    "line",
    "  file: index.js\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "index.js",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 201.609,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "index.js",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 201.609,
      "todo": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": false,
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "index.js",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 201.609,
      "todo": false,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "line",
    "# time=209.666ms\\n",
  ],
  Array [
    "comment",
    "# time=209.666ms\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
            "results": Object {
              "count": 1,
              "ok": false,
              "pass": 1,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
            },
            "timeout": 30000,
          },
          "fullname": "index.js",
          "id": 1,
          "name": "index.js",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 201.609,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": 209.666,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

exports[`test/parser.ts TAP indented-stdout-noise.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: index.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "line",
        "# Subtest: boom\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "line",
            "# Subtest: npm install package line\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "line",
                "$ npm install package\\n",
              ],
              Array [
                "line",
                "var package = require('package')(); // contains package.json data.\\n",
              ],
              Array [
                "line",
                "var yourAwesomeModule = {};\\n",
              ],
              Array [
                "line",
                "yourAwesomeModule.version = package.version;\\n",
              ],
              Array [
                "line",
                "1..0 # no tests found\\n",
              ],
              Array [
                "plan",
                Plan {
                  "comment": "no tests found",
                  "end": 0,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 0,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 0,
                  "passes": undefined,
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "skips": Array [],
                  "time": null,
                  "todo": 0,
                  "todos": Array [],
                },
              ],
              Array [
                "close",
              ],
            ],
          ],
          Array [
            "line",
            "    $ npm install package\\n",
          ],
          Array [
            "line",
            "    var package = require('package')(); // contains package.json data.\\n",
          ],
          Array [
            "line",
            "    var yourAwesomeModule = {};\\n",
          ],
          Array [
            "line",
            "    yourAwesomeModule.version = package.version;\\n",
          ],
          Array [
            "line",
            "1..0\\n",
          ],
          Array [
            "line",
            "    1..0 # no tests found\\n",
          ],
          Array [
            "line",
            "1..0 # no tests found\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "no tests found",
              "end": 0,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 0,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 0,
              "passes": undefined,
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "skips": Array [],
              "time": 5.26,
              "todo": 0,
              "todos": Array [],
            },
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "line",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "line",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "line",
        "This module provides an easy way to export package.json data.\\n",
      ],
      Array [
        "line",
        "It contains auto-discovery functionality, which means that it will\\n",
      ],
      Array [
        "line",
        "find your package.json file automatically. Cool, ugh?\\n",
      ],
      Array [
        "line",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "line",
        "    # Subtest: npm install package line\\n",
      ],
      Array [
        "line",
        "        $ npm install package\\n",
      ],
      Array [
        "line",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "line",
        "        var package = require('package')(); // contains package.json data.\\n",
      ],
      Array [
        "line",
        "        var yourAwesomeModule = {};\\n",
      ],
      Array [
        "line",
        "        yourAwesomeModule.version = package.version;\\n",
      ],
      Array [
        "line",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "line",
        "Bug fixes and features are welcomed.\\n",
      ],
      Array [
        "line",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "line",
        "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
      ],
      Array [
        "line",
        "- JSON.parse + fs.readFile\\n",
      ],
      Array [
        "line",
        "## License\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "line",
        "MIT License\\n",
      ],
      Array [
        "line",
        "Copyright (C) 2011 Veselin Todorov\\n",
      ],
      Array [
        "line",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
      ],
      Array [
        "line",
        "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
      ],
      Array [
        "line",
        "the Software without restriction, including without limitation the rights to\\n",
      ],
      Array [
        "line",
        "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
      ],
      Array [
        "line",
        "of the Software, and to permit persons to whom the Software is furnished to do\\n",
      ],
      Array [
        "line",
        "so, subject to the following conditions:\\n",
      ],
      Array [
        "line",
        "The above copyright notice and this permission notice shall be included in all\\n",
      ],
      Array [
        "line",
        "copies or substantial portions of the Software.\\n",
      ],
      Array [
        "line",
        "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
      ],
      Array [
        "line",
        "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
      ],
      Array [
        "line",
        "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
      ],
      Array [
        "line",
        "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
      ],
      Array [
        "line",
        "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
      ],
      Array [
        "line",
        "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
      ],
      Array [
        "line",
        "SOFTWARE.\\n",
      ],
      Array [
        "line",
        "    1..0\\n",
      ],
      Array [
        "line",
        "        1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "    1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "ok 1 - boom # time=5.26ms\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "index.js boom",
          "id": 1,
          "name": "boom",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 5.26,
          "todo": false,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "skips": Array [],
          "time": 201.609,
          "todo": 0,
          "todos": Array [],
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: boom\\n",
  ],
  Array [
    "line",
    "    # package - Easy package.json exports.\\n",
  ],
  Array [
    "line",
    "    ## Intro\\n",
  ],
  Array [
    "line",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "line",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "line",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "line",
    "    ## Installation\\n",
  ],
  Array [
    "line",
    "        # Subtest: npm install package line\\n",
  ],
  Array [
    "line",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "line",
    "    ## Usage\\n",
  ],
  Array [
    "line",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "line",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "line",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "line",
    "    ## Contribution\\n",
  ],
  Array [
    "line",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "line",
    "    ## Other similar modules\\n",
  ],
  Array [
    "line",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "line",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "line",
    "    ## License\\n",
  ],
  Array [
    "line",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "line",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "line",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "line",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "line",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "line",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "line",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "line",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "line",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "line",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "line",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "line",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "line",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "line",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "line",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "line",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "line",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "line",
    "        1..0\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "line",
    "            1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "        1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "    ok 1 - boom # time=5.26ms\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "index.js boom",
      "id": 1,
      "name": "boom",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 5.26,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "index.js boom",
      "id": 1,
      "name": "boom",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 5.26,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # time=12.555ms\\n",
  ],
  Array [
    "line",
    "not ok 1 - index.js # time=201.609ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  arguments:\\n",
  ],
  Array [
    "line",
    "    - index.js\\n",
  ],
  Array [
    "line",
    "  timeout: 30000\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 1\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "  command: /usr/local/bin/iojs\\n",
  ],
  Array [
    "line",
    "  file: index.js\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "index.js",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 201.609,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "index.js",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 201.609,
      "todo": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": false,
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "index.js",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 201.609,
      "todo": false,
    },
  ],
  Array [
    "line",
    "Bail out! index.js\\n",
  ],
  Array [
    "bailout",
    "index.js",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "index.js",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
            "results": Object {
              "count": 1,
              "ok": false,
              "pass": 1,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
            },
            "timeout": 30000,
          },
          "fullname": "index.js",
          "id": 1,
          "name": "index.js",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 201.609,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
]
`

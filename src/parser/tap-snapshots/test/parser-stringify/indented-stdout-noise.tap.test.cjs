/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
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
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "time": null,
                  "todo": 0,
                },
              ],
              Array [
                "finish",
              ],
              Array [
                "close",
              ],
            ],
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
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "time": 5.26,
              "todo": 0,
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "index.js",
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
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 201.609,
          "todo": 0,
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
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
      "fullname": "",
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
          "fullname": "",
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
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap bail > stringified 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
        1..0 # no tests found
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
Bail out! index.js

`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap bail > stringified flat 1`] = `
TAP version 13
# Subtest: index.js
# Subtest: boom
# Subtest: npm install package line
# package - Easy package.json exports.
## Intro
## Installation
## Usage
## Contribution
## Other similar modules
## License
ok 1 - index.js > boom # time=5.26ms
# time=12.555ms
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 2 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
Bail out! index.js

`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
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
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "time": null,
                  "todo": 0,
                },
              ],
              Array [
                "finish",
              ],
              Array [
                "close",
              ],
            ],
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
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "time": 5.26,
              "todo": 0,
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "index.js",
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
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
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
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 201.609,
          "todo": 0,
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
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
      "fullname": "",
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
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# time=209.666ms\\n",
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
          "fullname": "",
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
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 209.666,
      "todo": 0,
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "index.js > boom",
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
      "fullname": "",
      "id": 2,
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
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# time=209.666ms\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
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
          "fullname": "",
          "id": 2,
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
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 209.666,
      "todo": 0,
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap default settings > stringified 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
        1..0 # no tests found
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
1..1
# failed 1 of 1 tests
# time=209.666ms
# failed 1 test

`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap default settings > stringified flat 1`] = `
TAP version 13
# Subtest: index.js
# Subtest: boom
# Subtest: npm install package line
# package - Easy package.json exports.
## Intro
## Installation
## Usage
## Contribution
## Other similar modules
## License
ok 1 - index.js > boom # time=5.26ms
# time=12.555ms
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 2 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
1..2
# failed 1 of 1 tests
# time=209.666ms
# failed 1 test

`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
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
                "comment",
                "# failed 4 test\\n",
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 0,
                  "fail": 4,
                  "failures": Array [
                    Object {
                      "data": "$ npm install package\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "var package = require('package')(); // contains package.json data.\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "var yourAwesomeModule = {};\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "yourAwesomeModule.version = package.version;\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                  ],
                  "ok": false,
                  "pass": 0,
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "time": null,
                  "todo": 0,
                },
              ],
              Array [
                "finish",
              ],
              Array [
                "close",
              ],
            ],
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
            "comment",
            "# failed 5 test\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 0,
              "fail": 5,
              "failures": Array [
                Object {
                  "data": "$ npm install package\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "var package = require('package')(); // contains package.json data.\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "var yourAwesomeModule = {};\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "yourAwesomeModule.version = package.version;\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "1..0\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
              ],
              "ok": false,
              "pass": 0,
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "time": 5.26,
              "todo": 0,
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "index.js",
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
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# failed 24 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 24,
          "failures": Array [
            Object {
              "data": "This module provides an easy way to export package.json data.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "It contains auto-discovery functionality, which means that it will\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "find your package.json file automatically. Cool, ugh?\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Bug fixes and features are welcomed.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "- JSON.parse + fs.readFile\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "MIT License\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Copyright (C) 2011 Veselin Todorov\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "the Software without restriction, including without limitation the rights to\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "of the Software, and to permit persons to whom the Software is furnished to do\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "so, subject to the following conditions:\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "The above copyright notice and this permission notice shall be included in all\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "copies or substantial portions of the Software.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "SOFTWARE.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "1..0\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 201.609,
          "todo": 0,
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
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
      "fullname": "",
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
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# time=209.666ms\\n",
  ],
  Array [
    "comment",
    "# failed 24 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 24,
      "failures": Array [
        Object {
          "data": "This module provides an easy way to export package.json data.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "It contains auto-discovery functionality, which means that it will\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "find your package.json file automatically. Cool, ugh?\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Bug fixes and features are welcomed.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "- JSON.parse + fs.readFile\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "MIT License\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Copyright (C) 2011 Veselin Todorov\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "the Software without restriction, including without limitation the rights to\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "of the Software, and to permit persons to whom the Software is furnished to do\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "so, subject to the following conditions:\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "The above copyright notice and this permission notice shall be included in all\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "copies or substantial portions of the Software.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "SOFTWARE.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
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
          "fullname": "",
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
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 209.666,
      "todo": 0,
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap strict > stringified 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
            # failed 4 test
        1..0 # no tests found
        # failed 5 test
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    # failed 24 test
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
1..1
# failed 1 of 1 tests
# time=209.666ms
# failed 24 test

`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap strict > stringified flat 1`] = `
TAP version 13
# Subtest: index.js
# Subtest: boom
# Subtest: npm install package line
# failed 4 test
# failed 5 test
# package - Easy package.json exports.
## Intro
## Installation
## Usage
## Contribution
## Other similar modules
## License
ok 1 - index.js > boom # time=5.26ms
# time=12.555ms
# failed 24 test
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 2 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
1..2
# failed 1 of 1 tests
# time=209.666ms
# failed 24 test

`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
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
                "comment",
                "# failed 4 test\\n",
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 0,
                  "fail": 4,
                  "failures": Array [
                    Object {
                      "data": "$ npm install package\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "var package = require('package')(); // contains package.json data.\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "var yourAwesomeModule = {};\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "yourAwesomeModule.version = package.version;\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                  ],
                  "ok": false,
                  "pass": 0,
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "time": null,
                  "todo": 0,
                },
              ],
              Array [
                "finish",
              ],
              Array [
                "close",
              ],
            ],
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
            "comment",
            "# failed 5 test\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 0,
              "fail": 5,
              "failures": Array [
                Object {
                  "data": "$ npm install package\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "var package = require('package')(); // contains package.json data.\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "var yourAwesomeModule = {};\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "yourAwesomeModule.version = package.version;\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "1..0\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
              ],
              "ok": false,
              "pass": 0,
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "time": 5.26,
              "todo": 0,
            },
          ],
          Array [
            "finish",
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "index.js",
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
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# failed 24 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 24,
          "failures": Array [
            Object {
              "data": "This module provides an easy way to export package.json data.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "It contains auto-discovery functionality, which means that it will\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "find your package.json file automatically. Cool, ugh?\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Bug fixes and features are welcomed.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "- JSON.parse + fs.readFile\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "MIT License\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Copyright (C) 2011 Veselin Todorov\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "the Software without restriction, including without limitation the rights to\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "of the Software, and to permit persons to whom the Software is furnished to do\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "so, subject to the following conditions:\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "The above copyright notice and this permission notice shall be included in all\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "copies or substantial portions of the Software.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "SOFTWARE.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "1..0\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 201.609,
          "todo": 0,
        },
      ],
      Array [
        "finish",
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
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
      "fullname": "",
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
    "bailout",
    "index.js",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "index.js",
      "count": 1,
      "fail": 24,
      "failures": Array [
        Object {
          "data": "This module provides an easy way to export package.json data.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "It contains auto-discovery functionality, which means that it will\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "find your package.json file automatically. Cool, ugh?\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Bug fixes and features are welcomed.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "- JSON.parse + fs.readFile\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "MIT License\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Copyright (C) 2011 Veselin Todorov\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "the Software without restriction, including without limitation the rights to\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "of the Software, and to permit persons to whom the Software is furnished to do\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "so, subject to the following conditions:\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "The above copyright notice and this permission notice shall be included in all\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "copies or substantial portions of the Software.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "SOFTWARE.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
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
          "fullname": "",
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
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap strictBail > stringified 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
            # failed 4 test
        1..0 # no tests found
        # failed 5 test
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    # failed 24 test
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
Bail out! index.js

`

exports[`test/parse-stringify.ts TAP indented-stdout-noise.tap strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: index.js
# Subtest: boom
# Subtest: npm install package line
# failed 4 test
# failed 5 test
# package - Easy package.json exports.
## Intro
## Installation
## Usage
## Contribution
## Other similar modules
## License
ok 1 - index.js > boom # time=5.26ms
# time=12.555ms
# failed 24 test
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 2 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
Bail out! index.js

`

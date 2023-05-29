/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "extra",
    String(
      ---
        this is not yaml
        "In fact, it": : : :%%% <@!<
        is not 
                      anything
            but a peaceful
              Sea Turtle
                            _,.---.---.---.--.._ 
                        _.-' \`--.\`---.\`---'-. _,\`--.._
                       /\`--._ .'.     \`.     \`,\`-.\`-._\\\\
                      ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/
                 _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.
              ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.
             (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\
              \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\
                        /_, ,  _..-'                    \`-._\\\\
                        \\\\_, \\\\/ ._(
                         \\\\_, \\\\/ ._\\\\
                          \`._,\\\\/ ._\\\\
                            \`._// ./\`-._
                     LGB      \`-._-_-_.-'
                         http://www.ascii-art.de/ascii/t/turtle.txt
      ...
      
    ),
  ],
  Array [
    "bailout",
    "expected yaml, got a sea turtle",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "expected yaml, got a sea turtle",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "diag": Object {
            "but": "this",
            "is": "yaml",
          },
          "fullname": "",
          "id": 1,
          "name": "expected yaml, got a sea turtle",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap bail > stringified 1`] = `
TAP version 13
not ok 1 - expected yaml, got a sea turtle
  ---
  but: this
  is: yaml
  ...
---
  this is not yaml
  "In fact, it": : : :%%% <@!<
  is not 
                anything
      but a peaceful
        Sea Turtle
                      _,.---.---.---.--.._ 
                  _.-' \`--.\`---.\`---'-. _,\`--.._
                 /\`--._ .'.     \`.     \`,\`-.\`-._\\
                ||   \\  \`.\`---.__\`__..-\`. ,'\`-._/
           _  ,\`\\ \`-._\\   \\    \`.    \`_.-\`-._,\`\`-.
        ,\`   \`-_ \\/ \`-.\`--.\\    _\\_.-'\\__.-\`-.\`-._\`.
       (_.o> ,--. \`._/'--.-\`,--\`  \\_.-'       \\\`-._ \\
        \`---'    \`._ \`---._/__,----\`           \`-. \`-\\
                  /_, ,  _..-'                    \`-._\\
                  \\_, \\/ ._(
                   \\_, \\/ ._\\
                    \`._,\\/ ._\\
                      \`._// ./\`-._
               LGB      \`-._-_-_.-'
                   http://www.ascii-art.de/ascii/t/turtle.txt
...
Bail out! expected yaml, got a sea turtle

`

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap bail > stringified flat 1`] = `
TAP version 13
not ok 1 - expected yaml, got a sea turtle
  ---
  but: this
  is: yaml
  ...
---
  this is not yaml
  "In fact, it": : : :%%% <@!<
  is not 
                anything
      but a peaceful
        Sea Turtle
                      _,.---.---.---.--.._ 
                  _.-' \`--.\`---.\`---'-. _,\`--.._
                 /\`--._ .'.     \`.     \`,\`-.\`-._\\
                ||   \\  \`.\`---.__\`__..-\`. ,'\`-._/
           _  ,\`\\ \`-._\\   \\    \`.    \`_.-\`-._,\`\`-.
        ,\`   \`-_ \\/ \`-.\`--.\\    _\\_.-'\\__.-\`-.\`-._\`.
       (_.o> ,--. \`._/'--.-\`,--\`  \\_.-'       \\\`-._ \\
        \`---'    \`._ \`---._/__,----\`           \`-. \`-\\
                  /_, ,  _..-'                    \`-._\\
                  \\_, \\/ ._(
                   \\_, \\/ ._\\
                    \`._,\\/ ._\\
                      \`._// ./\`-._
               LGB      \`-._-_-_.-'
                   http://www.ascii-art.de/ascii/t/turtle.txt
...
Bail out! expected yaml, got a sea turtle

`

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "extra",
    String(
      ---
        this is not yaml
        "In fact, it": : : :%%% <@!<
        is not 
                      anything
            but a peaceful
              Sea Turtle
                            _,.---.---.---.--.._ 
                        _.-' \`--.\`---.\`---'-. _,\`--.._
                       /\`--._ .'.     \`.     \`,\`-.\`-._\\\\
                      ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/
                 _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.
              ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.
             (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\
              \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\
                        /_, ,  _..-'                    \`-._\\\\
                        \\\\_, \\\\/ ._(
                         \\\\_, \\\\/ ._\\\\
                          \`._,\\\\/ ._\\\\
                            \`._// ./\`-._
                     LGB      \`-._-_-_.-'
                         http://www.ascii-art.de/ascii/t/turtle.txt
      ...
      
    ),
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
            "but": "this",
            "is": "yaml",
          },
          "fullname": "",
          "id": 1,
          "name": "expected yaml, got a sea turtle",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
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
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "extra",
    String(
      ---
        this is not yaml
        "In fact, it": : : :%%% <@!<
        is not 
                      anything
            but a peaceful
              Sea Turtle
                            _,.---.---.---.--.._ 
                        _.-' \`--.\`---.\`---'-. _,\`--.._
                       /\`--._ .'.     \`.     \`,\`-.\`-._\\\\
                      ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/
                 _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.
              ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.
             (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\
              \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\
                        /_, ,  _..-'                    \`-._\\\\
                        \\\\_, \\\\/ ._(
                         \\\\_, \\\\/ ._\\\\
                          \`._,\\\\/ ._\\\\
                            \`._// ./\`-._
                     LGB      \`-._-_-_.-'
                         http://www.ascii-art.de/ascii/t/turtle.txt
      ...
      
    ),
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
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
            "but": "this",
            "is": "yaml",
          },
          "fullname": "",
          "id": 1,
          "name": "expected yaml, got a sea turtle",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
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
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap default settings > stringified 1`] = `
TAP version 13
not ok 1 - expected yaml, got a sea turtle
  ---
  but: this
  is: yaml
  ...
---
  this is not yaml
  "In fact, it": : : :%%% <@!<
  is not 
                anything
      but a peaceful
        Sea Turtle
                      _,.---.---.---.--.._ 
                  _.-' \`--.\`---.\`---'-. _,\`--.._
                 /\`--._ .'.     \`.     \`,\`-.\`-._\\
                ||   \\  \`.\`---.__\`__..-\`. ,'\`-._/
           _  ,\`\\ \`-._\\   \\    \`.    \`_.-\`-._,\`\`-.
        ,\`   \`-_ \\/ \`-.\`--.\\    _\\_.-'\\__.-\`-.\`-._\`.
       (_.o> ,--. \`._/'--.-\`,--\`  \\_.-'       \\\`-._ \\
        \`---'    \`._ \`---._/__,----\`           \`-. \`-\\
                  /_, ,  _..-'                    \`-._\\
                  \\_, \\/ ._(
                   \\_, \\/ ._\\
                    \`._,\\/ ._\\
                      \`._// ./\`-._
               LGB      \`-._-_-_.-'
                   http://www.ascii-art.de/ascii/t/turtle.txt
...
1..1
# failed 1 test

`

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap default settings > stringified flat 1`] = `
TAP version 13
not ok 1 - expected yaml, got a sea turtle
  ---
  but: this
  is: yaml
  ...
---
  this is not yaml
  "In fact, it": : : :%%% <@!<
  is not 
                anything
      but a peaceful
        Sea Turtle
                      _,.---.---.---.--.._ 
                  _.-' \`--.\`---.\`---'-. _,\`--.._
                 /\`--._ .'.     \`.     \`,\`-.\`-._\\
                ||   \\  \`.\`---.__\`__..-\`. ,'\`-._/
           _  ,\`\\ \`-._\\   \\    \`.    \`_.-\`-._,\`\`-.
        ,\`   \`-_ \\/ \`-.\`--.\\    _\\_.-'\\__.-\`-.\`-._\`.
       (_.o> ,--. \`._/'--.-\`,--\`  \\_.-'       \\\`-._ \\
        \`---'    \`._ \`---._/__,----\`           \`-. \`-\\
                  /_, ,  _..-'                    \`-._\\
                  \\_, \\/ ._(
                   \\_, \\/ ._\\
                    \`._,\\/ ._\\
                      \`._// ./\`-._
               LGB      \`-._-_-_.-'
                   http://www.ascii-art.de/ascii/t/turtle.txt
...
1..1
# failed 1 test

`

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "extra",
    String(
      ---
        this is not yaml
        "In fact, it": : : :%%% <@!<
        is not 
                      anything
            but a peaceful
              Sea Turtle
                            _,.---.---.---.--.._ 
                        _.-' \`--.\`---.\`---'-. _,\`--.._
                       /\`--._ .'.     \`.     \`,\`-.\`-._\\\\
                      ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/
                 _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.
              ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.
             (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\
              \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\
                        /_, ,  _..-'                    \`-._\\\\
                        \\\\_, \\\\/ ._(
                         \\\\_, \\\\/ ._\\\\
                          \`._,\\\\/ ._\\\\
                            \`._// ./\`-._
                     LGB      \`-._-_-_.-'
                         http://www.ascii-art.de/ascii/t/turtle.txt
      ...
      
    ),
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
    "# failed 2 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 2,
      "failures": Array [
        Object {
          "data": String(
            ---
              this is not yaml
              "In fact, it": : : :%%% <@!<
              is not 
                            anything
                  but a peaceful
                    Sea Turtle
                                  _,.---.---.---.--.._ 
                              _.-' \`--.\`---.\`---'-. _,\`--.._
                             /\`--._ .'.     \`.     \`,\`-.\`-._\\\\
                            ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/
                       _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.
                    ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.
                   (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\
                    \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\
                              /_, ,  _..-'                    \`-._\\\\
                              \\\\_, \\\\/ ._(
                               \\\\_, \\\\/ ._\\\\
                                \`._,\\\\/ ._\\\\
                                  \`._// ./\`-._
                           LGB      \`-._-_-_.-'
                               http://www.ascii-art.de/ascii/t/turtle.txt
            ...
            
          ),
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "buffered": false,
          "diag": Object {
            "but": "this",
            "is": "yaml",
          },
          "fullname": "",
          "id": 1,
          "name": "expected yaml, got a sea turtle",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
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
      "time": null,
      "todo": 0,
      "todos": Array [],
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

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap strict > stringified 1`] = `
TAP version 13
not ok 1 - expected yaml, got a sea turtle
  ---
  but: this
  is: yaml
  ...
---
  this is not yaml
  "In fact, it": : : :%%% <@!<
  is not 
                anything
      but a peaceful
        Sea Turtle
                      _,.---.---.---.--.._ 
                  _.-' \`--.\`---.\`---'-. _,\`--.._
                 /\`--._ .'.     \`.     \`,\`-.\`-._\\
                ||   \\  \`.\`---.__\`__..-\`. ,'\`-._/
           _  ,\`\\ \`-._\\   \\    \`.    \`_.-\`-._,\`\`-.
        ,\`   \`-_ \\/ \`-.\`--.\\    _\\_.-'\\__.-\`-.\`-._\`.
       (_.o> ,--. \`._/'--.-\`,--\`  \\_.-'       \\\`-._ \\
        \`---'    \`._ \`---._/__,----\`           \`-. \`-\\
                  /_, ,  _..-'                    \`-._\\
                  \\_, \\/ ._(
                   \\_, \\/ ._\\
                    \`._,\\/ ._\\
                      \`._// ./\`-._
               LGB      \`-._-_-_.-'
                   http://www.ascii-art.de/ascii/t/turtle.txt
...
1..1
# failed 2 test

`

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap strict > stringified flat 1`] = `
TAP version 13
not ok 1 - expected yaml, got a sea turtle
  ---
  but: this
  is: yaml
  ...
---
  this is not yaml
  "In fact, it": : : :%%% <@!<
  is not 
                anything
      but a peaceful
        Sea Turtle
                      _,.---.---.---.--.._ 
                  _.-' \`--.\`---.\`---'-. _,\`--.._
                 /\`--._ .'.     \`.     \`,\`-.\`-._\\
                ||   \\  \`.\`---.__\`__..-\`. ,'\`-._/
           _  ,\`\\ \`-._\\   \\    \`.    \`_.-\`-._,\`\`-.
        ,\`   \`-_ \\/ \`-.\`--.\\    _\\_.-'\\__.-\`-.\`-._\`.
       (_.o> ,--. \`._/'--.-\`,--\`  \\_.-'       \\\`-._ \\
        \`---'    \`._ \`---._/__,----\`           \`-. \`-\\
                  /_, ,  _..-'                    \`-._\\
                  \\_, \\/ ._(
                   \\_, \\/ ._\\
                    \`._,\\/ ._\\
                      \`._// ./\`-._
               LGB      \`-._-_-_.-'
                   http://www.ascii-art.de/ascii/t/turtle.txt
...
1..1
# failed 2 test

`

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "extra",
    String(
      ---
        this is not yaml
        "In fact, it": : : :%%% <@!<
        is not 
                      anything
            but a peaceful
              Sea Turtle
                            _,.---.---.---.--.._ 
                        _.-' \`--.\`---.\`---'-. _,\`--.._
                       /\`--._ .'.     \`.     \`,\`-.\`-._\\\\
                      ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/
                 _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.
              ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.
             (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\
              \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\
                        /_, ,  _..-'                    \`-._\\\\
                        \\\\_, \\\\/ ._(
                         \\\\_, \\\\/ ._\\\\
                          \`._,\\\\/ ._\\\\
                            \`._// ./\`-._
                     LGB      \`-._-_-_.-'
                         http://www.ascii-art.de/ascii/t/turtle.txt
      ...
      
    ),
  ],
  Array [
    "bailout",
    "expected yaml, got a sea turtle",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "expected yaml, got a sea turtle",
      "count": 1,
      "fail": 2,
      "failures": Array [
        Object {
          "data": String(
            ---
              this is not yaml
              "In fact, it": : : :%%% <@!<
              is not 
                            anything
                  but a peaceful
                    Sea Turtle
                                  _,.---.---.---.--.._ 
                              _.-' \`--.\`---.\`---'-. _,\`--.._
                             /\`--._ .'.     \`.     \`,\`-.\`-._\\\\
                            ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/
                       _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.
                    ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.
                   (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\
                    \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\
                              /_, ,  _..-'                    \`-._\\\\
                              \\\\_, \\\\/ ._(
                               \\\\_, \\\\/ ._\\\\
                                \`._,\\\\/ ._\\\\
                                  \`._// ./\`-._
                           LGB      \`-._-_-_.-'
                               http://www.ascii-art.de/ascii/t/turtle.txt
            ...
            
          ),
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "buffered": false,
          "diag": Object {
            "but": "this",
            "is": "yaml",
          },
          "fullname": "",
          "id": 1,
          "name": "expected yaml, got a sea turtle",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
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
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap strictBail > stringified 1`] = `
TAP version 13
not ok 1 - expected yaml, got a sea turtle
  ---
  but: this
  is: yaml
  ...
---
  this is not yaml
  "In fact, it": : : :%%% <@!<
  is not 
                anything
      but a peaceful
        Sea Turtle
                      _,.---.---.---.--.._ 
                  _.-' \`--.\`---.\`---'-. _,\`--.._
                 /\`--._ .'.     \`.     \`,\`-.\`-._\\
                ||   \\  \`.\`---.__\`__..-\`. ,'\`-._/
           _  ,\`\\ \`-._\\   \\    \`.    \`_.-\`-._,\`\`-.
        ,\`   \`-_ \\/ \`-.\`--.\\    _\\_.-'\\__.-\`-.\`-._\`.
       (_.o> ,--. \`._/'--.-\`,--\`  \\_.-'       \\\`-._ \\
        \`---'    \`._ \`---._/__,----\`           \`-. \`-\\
                  /_, ,  _..-'                    \`-._\\
                  \\_, \\/ ._(
                   \\_, \\/ ._\\
                    \`._,\\/ ._\\
                      \`._// ./\`-._
               LGB      \`-._-_-_.-'
                   http://www.ascii-art.de/ascii/t/turtle.txt
...
Bail out! expected yaml, got a sea turtle

`

exports[`test/parse-stringify.ts TAP yamlish-that-is-not-yaml.tap strictBail > stringified flat 1`] = `
TAP version 13
not ok 1 - expected yaml, got a sea turtle
  ---
  but: this
  is: yaml
  ...
---
  this is not yaml
  "In fact, it": : : :%%% <@!<
  is not 
                anything
      but a peaceful
        Sea Turtle
                      _,.---.---.---.--.._ 
                  _.-' \`--.\`---.\`---'-. _,\`--.._
                 /\`--._ .'.     \`.     \`,\`-.\`-._\\
                ||   \\  \`.\`---.__\`__..-\`. ,'\`-._/
           _  ,\`\\ \`-._\\   \\    \`.    \`_.-\`-._,\`\`-.
        ,\`   \`-_ \\/ \`-.\`--.\\    _\\_.-'\\__.-\`-.\`-._\`.
       (_.o> ,--. \`._/'--.-\`,--\`  \\_.-'       \\\`-._ \\
        \`---'    \`._ \`---._/__,----\`           \`-. \`-\\
                  /_, ,  _..-'                    \`-._\\
                  \\_, \\/ ._(
                   \\_, \\/ ._\\
                    \`._,\\/ ._\\
                      \`._// ./\`-._
               LGB      \`-._-_-_.-'
                   http://www.ascii-art.de/ascii/t/turtle.txt
...
Bail out! expected yaml, got a sea turtle

`

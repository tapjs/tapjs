/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/jack.ts > TAP > must match snapshot 1`] = `
Object {
  "after": Object {
    "description": String(
      A node program to be executed after tests are finished.
      
      This will be run even if a test in the series fails with a bailout, but it will *not* be run if a --before script fails.
      
      Exiting with a non-zero status code or a signal will fail the test run and exit the process in error.
      
      Relative \`after\` paths are resolved against the project config root, even if specified on the cli.
    ),
    "hint": "module",
    "type": "string",
  },
  "allow-empty-coverage": Object {
    "description": String(
      Suppress the error exit if the test run produces no coverage whatsoever.
      
      The \`# No coverage generated\` message will still be printed.
      
      If coverage is generated, but incomplete, then the process will exit in error, unless \`allow-incomplete-coverage\` is also set.
      
      WARNING: tests that do not produce coverage are untrustworthy. This should only be used when coverage is being generated and tracked by some other mechanism.
    ),
    "type": "boolean",
  },
  "allow-incomplete-coverage": Object {
    "description": String(
      Suppress the error exit if the test run produces incomplete coverage information.
      
      The coverage report showing missing coverage will still be generated.
      
      If no coverage is generated, then the process will exit in error, unless \`allow-empty-coverage\` is also set.
      
      WARNING: tests that produce incomplete coverage are untrustworthy. This should only be used when coverage is being generated and tracked by some other mechanism.
    ),
    "type": "boolean",
  },
  "bail": Object {
    "description": "Bail out on first failure",
    "short": "b",
    "type": "boolean",
  },
  "before": Object {
    "description": String(
      A node program to be run before test files are executed.
      
      Exiting with a non-zero status code or a signal will fail the test run and exit the process in error.
      
      Relative \`before\` paths are resolved against the project config root, even if specified on the cli.
    ),
    "hint": "module",
    "type": "string",
  },
  "branches": Object {
    "default": 100,
    "description": "what % of branches must be covered?",
    "hint": "n",
    "type": "number",
    "validate": Function validate(n),
  },
  "browser": Object {
    "default": true,
    "description": String(
      Open the coverage report in the system's web browser when an html report is generated (ie, when \`--coverage-report\` is either \`lcov\` or \`html\`).
      
      If set to false, then the html files will be generated, but not opened in a web browser automatically.
    ),
    "type": "boolean",
  },
  "changed": Object {
    "description": String(
      Only run tests for files that have changed since the last run.
      
      If no prior test run data exists, then all default files are run, as if --changed was not specified.
    ),
    "short": "n",
    "type": "boolean",
  },
  "color": Object {
    "description": "Use colors (Default for TTY)",
    "short": "c",
    "type": "boolean",
  },
  "comments": Object {
    "description": "Print all tap comments to process.stderr",
    "type": "boolean",
  },
  "coverage-map": Object {
    "description": String(
      Provide a path to a node module (esm or cjs) that default exports a single function. That function takes a test file as an argument, and returns an array of files to instrument with coverage when that file is run.
      
      This is useful in cases where a unit test should cover a single portion of the system under test, or where you wish to avoid tracking "accidental coverage" by integration tests.
      
      Return \`null\` to not cover any files by this test.
      
      Return an empty array [] to cover the set that would be pulled in by default. Ie, returning [] is equivalent to not using a coverage map at all.
    ),
    "hint": "module",
    "type": "string",
  },
  "coverage-report": Object {
    "default": Array [
      "text",
    ],
    "description": String(
      Output coverage information using the specified istanbul coverage reporter type.
      
      Default is \`text\`.
      
      If \`html\` or \`lcov\` is used, then the HTML report will be opened in a web browser after running.
      
      This can be run on its own at any time after a test run that included coverage.
      
      Built-in coverage reporters:
      
      - clover
      - cobertura
      - html
      - json
      - json-summary
      - lcov
      - lcovonly
      - none
      - teamcity
      - text
      - text-lcov
      - text-summary
    ),
    "hint": "type",
    "multiple": true,
    "type": "string",
  },
  "debug": Object {
    "description": "Turn on debug mode (very noisy)",
    "type": "boolean",
  },
  "diag": Object {
    "description": "Set to show diagnostics by default for both passing and failing tests. If not set, then diagnostics are printed by default for failing tests, and not for passing tests.",
    "type": "boolean",
  },
  "disable-coverage": Object {
    "description": String(
      Do not generate code coverage information for the test run.
      
      This will always result in a \`# No coverage generated\` message being printed. If this flag is set, then \`--allow-empty-coverage\` will default to \`true\`, because we do not expect to get any coverage.
      
      WARNING: tests that do not produce coverage are untrustworthy. This should only be used when coverage is being generated and tracked by some other mechanism.
    ),
    "type": "boolean",
  },
  "exclude": Object {
    "default": Array [
      "**/@(fixture*(s)|dist)/**",
    ],
    "description": String(
      A glob pattern indicating which filenames should NEVER be run as tests. This overrides the \`include\` option.
      
      Defaults to excluding any folders named dist, fixture, or fixtures.
      
      Note: folders named tap-snapshots, node_modules, or .git are ALWAYS excluded from the default test file set. If you wish to run tests in these folders, then name the test files on the command line as positional arguments.
    ),
    "hint": "pattern",
    "multiple": true,
    "type": "string",
  },
  "fail-only": Object {
    "description": String(
      Fail any tests marked with \`{only: true }\`, for CI and other environments where you want to ensure that tests are not being skipped.
      
      Only relevant when the @tapjs/filter plugin is enabled.
    ),
    "type": "boolean",
  },
  "fail-skip": Object {
    "description": "Treat \`# SKIP\` assertions as failures",
    "type": "boolean",
  },
  "fail-todo": Object {
    "description": "Treat \`# TODO\` tests as failures",
    "type": "boolean",
  },
  "files": Object {
    "description": "Alternative way to specify test set rather than using positional arguments. Supported as an option so that test file arguments can be specified in .taprc and package.json files.",
    "hint": "filename",
    "multiple": true,
    "type": "string",
  },
  "functions": Object {
    "default": 100,
    "description": "what % of functions must be covered?",
    "hint": "n",
    "type": "number",
    "validate": Function validate(n),
  },
  "help": Object {
    "description": "show this help banner",
    "short": "h",
    "type": "boolean",
  },
  "include": Object {
    "default": Array [
      "**/@(test?(s)|__test?(s)__)/**/*.__EXTENSIONS__",
      "**/*.@(test?(s)|spec).__EXTENSIONS__",
      "**/test?(s).__EXTENSIONS__",
    ],
    "description": String(
      A glob expression pattern indicating tests to run if no positional arguments are provided to the \`tap run\` command.
      
      The special token \`__EXTENSIONS__\` will expand to the list of known file type extensions that tap knows how to process. When the \`@tapjs/typescript\` plugin is loaded (default), this will be:
      
      - js
      - cjs
      - mjs
      - jsx
      - ts
      - cts
      - mts
      - tsx
      
      Without the typescript plugin, this will be just the file extensions known to Node:
      
      - js
      - cjs
      - mjs
      
      By default, tap will search for all files ending in these known file type extensions in the following ways:
      
      - a top-level folder named \`test\`, \`tests\`, or \`__tests__\`
      - any file ending in \`.spec.\` or \`.test.\` before a supported extension, or
      - a top-level file named \`test.(js,jsx,...)\` or \`tests.(js,jsx,...)\`
      
      No files excluded by the \`exclude\` option will be loaded, meaning that dependencies, build artifacts in \`dist\`, test fixtures, snapshots, and source control metadata will be ignored.
      
      The glob patterns are expanded without the \`dot\` option, so any file starting with a . will be ignored.
    ),
    "hint": "pattern",
    "multiple": true,
    "type": "string",
  },
  "jobs": Object {
    "default": 16,
    "description": String(
      Run up to \`n\` test files in parallel.
      
      By default, this will be set based on the number of CPUs on the system.
      
      Set --jobs=1 to disable parallelization entirely.
    ),
    "hint": "n",
    "short": "j",
    "type": "number",
  },
  "lines": Object {
    "default": 100,
    "description": "what % of lines must be covered?",
    "hint": "n",
    "type": "number",
    "validate": Function validate(n),
  },
  "no-bail": Object {
    "description": "Do not bail out on first failure (default)",
    "short": "B",
    "type": "boolean",
  },
  "no-browser": Object {
    "description": "Do not automatically open html coverage reports in the system default web browser",
    "type": "boolean",
  },
  "no-color": Object {
    "description": "Do not use colors (Default for non-TTY)",
    "short": "C",
    "type": "boolean",
  },
  "no-diag": Object {
    "description": "Do not show diagnostics by default for passing or failing tests. If not set, then diagnostics are printed by default for failing tests, and not for passing tests.",
    "type": "boolean",
  },
  "no-omit-whitespace": Object {
    "description": "Preserve extra empty lines in the output.",
    "type": "boolean",
  },
  "node-arg": Object {
    "default": Array [],
    "description": "Pass an argument to Node binary in all child processes. Run \`node --help\` to see a list of all relevant arguments. This can be specified multiple times to pass multiple args to Node.",
    "hint": "arg",
    "multiple": true,
    "type": "string",
  },
  "omit-version": Object {
    "description": "Do not print the \`TAP version 14\` line. (This may be needed for compapatibility with some older TAP parsers.)",
    "type": "boolean",
  },
  "omit-whitespace": Object {
    "description": "Prune empty lines out of the output from child tests",
    "type": "boolean",
  },
  "output-dir": Object {
    "description": String(
      Send the raw TAP output to the specified directory. A separate .tap file will be created for each test file that is run. Reporter output will still be printed to stdout, but the files will contain the raw TAP for later replay or analysis.
      
      Files will be created to match the folder structure and filenames of test files run, but with \`.tap\` appended to the filenames.
    ),
    "hint": "dir",
    "short": "d",
    "type": "string",
  },
  "output-file": Object {
    "description": "Send the raw TAP output to the specified file. Reporter output will still be printed to stdout, but the file will contain the raw TAP for later replay or analysis.",
    "hint": "filename",
    "short": "o",
    "type": "string",
  },
  "passes": Object {
    "description": String(
      Include passing tests in assertion summary reports.
      
      Has no effect on TAP output if a reporter is not used, but will cause passing assertions to be included in the \`Test.lists\` collection by default.
      
      Note: this usually makes test output QUITE noisy.
    ),
    "type": "boolean",
  },
  "plugin": Object {
    "default": Array [],
    "description": String(
      Configure the tap Test class with the specified plugin.
      
      Typically this is set in a .taprc file, not on the command line, and can be managed using the \`tap plugin <add|rm>\` command.
      
      If the set of plugins does not match that which tap was built with previously, then it will rebuild the Test class prior to running tests.
      
      To *exclude* a plugin which has been previously included (perhaps by being part of tap's default set), add it to this list prefixed by a \`!\` character.
      
      The default plugin set that ships with tap is:
      
      - @tapjs/after
      - @tapjs/after-each
      - @tapjs/asserts
      - @tapjs/before
      - @tapjs/before-each
      - @tapjs/chdir
      - @tapjs/filter
      - @tapjs/fixture
      - @tapjs/intercept
      - @tapjs/mock
      - @tapjs/node-serialize
      - @tapjs/snapshot
      - @tapjs/spawn
      - @tapjs/stdin
      - @tapjs/typescript
      - @tapjs/worker
      
      Even if excluded, the runner will use some of these plugins in its own operation.
    ),
    "hint": "module",
    "multiple": true,
    "type": "string",
  },
  "reporter": Object {
    "description": String(
      Use the specified reporter. Defaults to \`base\` when colors are in use, or \`tap\` when colors are disabled.
      
      In addition to the built-in reporters provided by the \`@tapjs/reporter\` module, the reporter option can also specify a command-line program or a module to load via \`import()\`.
      
      Command-line programs receive the raw TAP output on their stdin.
      
      Modules loaded via import() must default export a writable stream class, \`React\` function component, or a \`React.Component\` subclass.
      
      Writable streams are instantiated and piped into.
      
      React components are rendered using Ink, with \`tap={tap}\` and \`config={loadedConfig}\` as their properties.
      
      Built-in test reporters:
      
      - base
      - terse
      - min
      - dot
      - silent
      - json
      - jsonstream
      - markdown
      - junit
      - tap
    ),
    "hint": "reporter",
    "short": "R",
    "type": "string",
  },
  "reporter-arg": Object {
    "description": "Args to pass to command-line reporters. Ignored when using built-in reporters or module reporters.",
    "hint": "arg",
    "multiple": true,
    "short": "r",
    "type": "string",
  },
  "reporter-file": Object {
    "description": String(
      Write the test report to the specified file, instead of stdout. Useful for reports such as junit, json, etc.
      
      To save the raw TAP data to a file, the \`--output-file\` or \`--output-dir\` options are usually more appropriate.
      
      If \`TAP=1\` is set in the environment, then raw TAP output is always written to stdout, because this is how test files communicate with the runner.
    ),
    "hint": "file",
    "short": "f",
    "type": "string",
  },
  "save": Object {
    "description": String(
      If <file> exists, then it should be a line- delimited list of test files to run. If <file> is not present, then all command-line positional arguments are run.
      
      After the set of test files are run, any failed test files are written back to the save file.
      
      This way, repeated runs with -s<file> will re-run failures until all the failures are passing, and then once again run all tests.
      
      Its a good idea to .gitignore the file used for this purpose, as it will churn a lot.
    ),
    "hint": "file",
    "short": "s",
    "type": "string",
  },
  "serial": Object {
    "description": "Mark all test files anywhere within the specified directory as serial tests, not to be run in parallel with any other test files.",
    "hint": "dir",
    "multiple": true,
    "type": "string",
  },
  "show-full-coverage": Object {
    "description": String(
      Show the \`100\` lines in the default \`text\` coverage reporter for every file that has full coverage. Defaults to false for all commands other than \`tap report\`. Has no effect on any other coverage report styles.
      
      If not set, and the test suite has full coverage, then no text coverage report will be generated when running tests. It can be assumed in this case that no news is good news, and a zero-exit test process means full coverage was generated. When generating any other test report styles, files with full coverage are still reported.
      
      When running \`tap report\`, this defaults to true, because presumably you do want to see something if explicitly requesting a coverage report, even if it's just a list of green 100s.
      
      When running \`tap report --no-show-full-coverage\`, with this config explicitly set false, it will omit the default text report on full coverage, and behave like running \`tap report none\` (ie, print nothing).
      
      When running \`tap report text --no-show-full-coverage\`, explicitly requesting a text report and also explicitly requesting that full coverage text report *not* be shown, then a summary report will be printed instead of the full text report.
    ),
    "type": "boolean",
  },
  "statements": Object {
    "default": 100,
    "description": "what % of statements must be covered?",
    "hint": "n",
    "type": "number",
    "validate": Function validate(n),
  },
  "test-arg": Object {
    "default": Array [],
    "description": "Pass an argument to test files spawned by the tap command line executable. This can be specified multiple times to pass multiple args to test scripts.",
    "hint": "arg",
    "multiple": true,
    "type": "string",
  },
  "test-env": Object {
    "default": Array [],
    "description": String(
      Pass a key=value (ie, --test-env=key=value) to set an environment variable in the process where tests are run.
      
      If a value is not provided, such as \`--test-env=key\`, then the key is ensured to not be set in the environment. To set a key to the empty string, use --test-env=key=
    ),
    "hint": "key=value",
    "multiple": true,
    "type": "string",
  },
  "timeout": Object {
    "default": 30,
    "description": String(
      Time out test files after <n> seconds. Defaults to 30. Setting to 0 allows tests to run forever.
      
      When a test process calls t.setTimeout(n) on the top-level tap object, it also updates this value for that specific process.
    ),
    "hint": "n",
    "short": "t",
    "type": "number",
  },
  "version": Object {
    "description": "Show the version of this program.",
    "short": "v",
    "type": "boolean",
  },
  "versions": Object {
    "description": "Show the version of tap and relevant tap libraries in use.",
    "short": "V",
    "type": "boolean",
  },
}
`

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
      
                          This will be run even if a test in the series fails with
                          a bailout, but it will *not* be run if a --before script
                          fails.
      
                          Exiting with a non-zero status code or a signal will fail
                          the test run and exit the process in error.
    ),
    "type": "string",
  },
  "bail": Object {
    "description": "Bail out on first failure",
    "short": "b",
    "type": "boolean",
  },
  "before": Object {
    "description": String(
      A node program to be run before test files are executed.
      
                          Exiting with a non-zero status code or a signal will fail
                          the test run and exit the process in error.
    ),
    "type": "string",
  },
  "changed": Object {
    "description": String(
      Only run tests for files that have changed since the last
                          run.
      
                          If no prior test run data exists, then all default files
                          are run, as if --changed was not specified.
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
      Provide a path to a node module (esm or cjs) that default
                          exports a single function.  That function takes a test
                          file as an argument, and returns an array of files to
                          instrument with coverage when that file is run.
      
                          This is useful in cases where a unit test should cover a
                          single portion of the system under test, or where you wish
                          to avoid tracking "accidental coverage" by integration
                          tests.
      
                          Return 'null' to not cover any files by this test.
      
                          Return an empty array [] to cover the set that would be
                          pulled in by default.  Ie, returning [] is equivalent to
                          not using a coverage map at all.
    ),
    "type": "string",
  },
  "coverage-reporter": Object {
    "description": String(
      Output coverage information using the specified
                          istanbul coverage reporter type.
      
                          Default is 'text' when running on the command line, or
                          'text-lcov' when piping to coveralls.
      
                          If 'html' is used, then the report will be opened in a web
                          browser after running.
      
                          This can be run on its own at any time after a test run
                          that included coverage.
      
                          Available coverage reporters:
      
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
    "multiple": true,
    "type": "string",
    "validate": Function validate(s),
  },
  "debug": Object {
    "description": "Turn on debug mode",
    "type": "boolean",
  },
  "diag": Object {
    "description": String(
      Set to show diagnostics by default for both passing and
                          failing tests. If not set, then diagnostics are printed by
                          default for failing tests, and not for passing tests.
    ),
    "type": "boolean",
  },
  "exclude": Object {
    "default": "**/@(fixture*(s)|dist)/**",
    "description": String(
      A glob pattern indicating which filenames should NEVER
                          be run as tests.  This overrides the 'include' option.
      
                          Defaults to excluding any folders named dist, fixture, or
                          fixtures.
      
                          Note: folders named tap-snapshots, node_modules, .git, and
                          .hg are ALWAYS excluded from the default test file set.  If
                          you wish to run tests in these folders, then name the test
                          files on the command line as positional arguments.
    ),
    "type": "string",
  },
  "files": Object {
    "description": String(
      Alternative way to specify test set rather than using
                          positional arguments.  Supported as an option so that
                          test file arguments can be specified in .taprc and
                          package.json files.
    ),
    "multiple": true,
    "type": "string",
  },
  "help": Object {
    "description": "show this help banner",
    "short": "h",
    "type": "boolean",
  },
  "include": Object {
    "default": "**/{@(test?(s)|__test?(s)__)/**/*,*.@(test?(s)|spec),test?(s)}.@([mc][jt]s|[jt]s?(x))",
    "description": String(
      A glob expression pattern indicating tests to run if no
                          positional arguments are provided to the 'tap run' command.
      
                          By default, tap will search for all files ending in .ts,
                          .tsx, .cts, .mts, .js, .jsx, .cjs, or .mjs, in a top-level
                          folder named test, tests, or __tests__, or any file ending
                          in '.spec.' or '.test.' before a supported extension, or a
                          top-level file named 'test.(js,jsx,...)' or
                          'tests.(js,jsx,...)'
      
                          No files excluded by the 'exclude' option will be loaded,
                          meaning so dependencies, build artifacts in 'dist', and
                          test fixtures and snapshots will be ignored.
    ),
    "type": "string",
  },
  "jobs": Object {
    "default": 16,
    "description": String(
      Run up to <n> test files in parallel.
      
                          By default, this will be set to the number of CPUs on
                          the system (16).
      
                          Set --jobs=1 to disable parallelization entirely.
    ),
    "short": "j",
    "type": "number",
  },
  "no-bail": Object {
    "description": "Do not bail out on first failure (default)",
    "short": "B",
    "type": "boolean",
  },
  "no-color": Object {
    "description": "Do not use colors (Default for non-TTY)",
    "short": "C",
    "type": "boolean",
  },
  "no-diag": Object {
    "description": String(
      Do not show diagnostics by default for passing or failing
                          tests. If not set, then diagnostics are printed by default
                          for failing tests, and not for passing tests.
    ),
    "type": "boolean",
  },
  "no-omit-whitespace": Object {
    "description": "Preserve extra empty lines in the output.",
    "type": "boolean",
  },
  "node-arg": Object {
    "default": Array [],
    "description": String(
      Pass an argument to Node binary in all child processes.
                          Run 'node --help' to see a list of all relevant arguments.
                          This can be specified multiple times to pass multiple args
                          to Node.
    ),
    "multiple": true,
    "type": "string",
  },
  "omit-version": Object {
    "description": String(
      Do not print the 'TAP version 14' line. (This may be needed
                          for compapatibility with some older TAP parsers.)
    ),
    "type": "boolean",
  },
  "omit-whitespace": Object {
    "description": "Prune empty lines out of the output from child tests",
    "type": "boolean",
  },
  "output-dir": Object {
    "description": String(
      Send the raw TAP output to the specified directory.  A
                          separate .tap file will be created for each test file that
                          is run.  Reporter output will still be printed to stdout,
                          but the files will contain the raw TAP for later replay or
                          analysis.
      
                          Files will be created to match the folder structure and
                          filenames of test files run, but with '.tap' appended to
                          the filenames.
    ),
    "short": "d",
    "type": "string",
  },
  "output-file": Object {
    "description": String(
      Send the raw TAP output to the specified file.  Reporter
                          output will still be printed to stdout, but the file will
                          contain the raw TAP for later replay or analysis.
    ),
    "short": "o",
    "type": "string",
  },
  "plugin": Object {
    "default": Array [],
    "description": String(
      Configure the tap Test class with the specified plugin.
      
                          Typically this is set in a .taprc file, not on the command
                          line, and can be managed using the 'tap plugin <add|rm>'
                          command.
      
                          If the set of plugins does not match that which tap was
                          built with previously, then it will rebuild the Test class
                          prior to running tests.
      
                          To *exclude* a plugin which has been previously included
                          (perhaps by being part of tap's default set), add it to
                          this list prefixed by a '!' character.
      
                          The default plugin set that ships with tap is:
      
                          - @tapjs/after
      - @tapjs/after-each
      - @tapjs/asserts
      - @tapjs/before
      - @tapjs/before-each
      - @tapjs/filter
      - @tapjs/fixture
      - @tapjs/intercept
      - @tapjs/mock
      - @tapjs/snapshot
      - @tapjs/spawn
      - @tapjs/stdin
      - @tapjs/typescript
      - @tapjs/worker
      
                          The tap runner requires the @tapjs/spawn plugin to run
                          tests. If removed, you'll have to run test files some other
                          way.
        
    ),
    "multiple": true,
    "type": "string",
  },
  "reporter": Object {
    "description": String(
      Use the specified reporter.  Defaults to 'base' when colors
                          are in use, or 'tap' when colors are disabled.
      
                          In addition to the built-in reporters provided by
                          the @tapjs/reporter module, the reporter option can also
                          specify a command-line program or a module to load via
                          require().
      
                          Command-line programs receive the raw TAP output
                          on their stdin.
      
                          Modules loaded via require() must export either a
                          writable stream class or a React.Component subclass.
                          Writable streams are instantiated and piped into.
                          React components are rendered using Ink, with tap={tap}
                          and config={loadedConfig} as their properties.
      
                          Built-in test reporters:
      
                          - base
      - terse
    ),
    "short": "R",
    "type": "string",
  },
  "reporter-arg": Object {
    "description": String(
      Args to pass to command-line reporters.  Ignored when using
                          built-in reporters or module reporters.
    ),
    "multiple": true,
    "short": "r",
    "type": "string",
  },
  "save": Object {
    "description": String(
      If <file> exists, then it should be a line- delimited list
                          of test files to run.  If <file> is not present, then all
                          command-line positional arguments are run.
      
                          After the set of test files are run, any failed test files
                          are written back to the save file.
      
                          This way, repeated runs with -s<file> will re-run failures
                          until all the failures are passing, and then once again run
                          all tests.
      
                          Its a good idea to .gitignore the file used for this
                          purpose, as it will churn a lot.
    ),
    "short": "s",
    "type": "string",
  },
  "serial": Object {
    "description": String(
      Mark all test files anywhere within the specified
                          directory as serial tests, not to be run in parallel with
                          any other test files.
    ),
    "multiple": true,
    "type": "string",
  },
  "test-arg": Object {
    "default": Array [],
    "description": String(
      Pass an argument to test files spawned by the tap command
                          line executable. This can be specified multiple times to
                          pass multiple args to test scripts.
    ),
    "multiple": true,
    "type": "string",
  },
  "test-env": Object {
    "default": Array [],
    "description": String(
      Pass a key=value (ie, --test-env=key=value) to set an
                          environment variable in the process where tests are run.
      
                          If a value is not provided, such as '--test-env=key', then
                          the key is ensured to not be set in the environment.  To
                          set a key to the empty string, use --test-env=key=
    ),
    "multiple": true,
    "type": "string",
  },
  "timeout": Object {
    "default": 30,
    "description": String(
      Time out test files after <n> seconds. Defaults to 30.
                          Setting to 0 allows tests to run forever.
      
                          When a test process calls t.setTimeout(n) on the top-level
                          tap object, it also updates this value for that specific
                          process.
    ),
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
  "watch": Object {
    "description": String(
      Watch for changes in the test suite or covered program.
      
                          Runs the suite normally one time, and from then on, re-run
                          just the portions of the suite that are required whenever a
                          file changes.
      
                          Opens a REPL to trigger tests and perform various
                          actions.
    ),
    "short": "w",
    "type": "boolean",
  },
}
`

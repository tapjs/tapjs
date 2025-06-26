/**
 * The definition for all TAP configuration that is not provided by plugins
 *
 * @module
 */
import { env } from '@tapjs/core'
import { defaultPlugins } from '@tapjs/test'
import { jack } from 'jackspeak'

import { jobs } from './jobs.js'

const coverageReporters = [
  'clover',
  'cobertura',
  'html',
  'json',
  'json-summary',
  'lcov',
  'lcovonly',
  'none',
  'teamcity',
  'text',
  'text-lcov',
  'text-summary',
]

// Can't pull this directly out of @tapjs/reporter because
// reporter is ESM only because ink is ESM only.
const testReporters = [
  'base',
  'terse',
  'min',
  'dot',
  'silent',
  'json',
  'jsonstream',
  'markdown',
  'junit',
  'tap',
]

/**
 * Configuration options for TAP core.
 *
 * Documentation available via `tap -h`
 *
 * @see {@link https://npmjs.com/jackspeak}
 */
export default jack({
  envPrefix: 'TAP',
  allowPositionals: true,
  env,
  usage: 'tap [<options>] [<cmd> [<args> ...]]',
})
  .heading('TAP - Test Anything Protocol library for JavaScript')
  .description(
    `Short options are parsed gnu-style, so for example \`-bCRterse\` would be
     equivalent to \`--bail --no-color --reporter=terse\`

     Much more documentation available at: <https://www.node-tap.org/>`,
  )

  .heading('Subcommands')
  .heading('tap run [test files...]', 3, { pre: true })
  .description(
    `(default) Run the files if specified, or search for test files
    according to the \`include\` and \`exclude\` glob expressions.

    If the first argument to the tap cli is not one of these subcommands,
    then it will be treated as a test file to run.`,
  )

  .heading('tap plugin [add <plugin> | rm <plugin> | list]', 3, {
    pre: true,
  })
  .description(`Manage plugins`)
  .heading('tap plugin add <plugin>', 4, { pre: true })
  .description(
    `Add the specified plugin to the tap project config.

    If the plugin is one of tap's builtin plugins that was previously
    disabled, then it will simply be re-enabled.

    If the plugin is not a module on disk, then tap will attempt to install
    the plugin package as a dev dependency by running
    \`npm install --save-dev <plugin>\`.

    Specifying a version or range is supported. For example,
    \`tap plugin add my-plugin@1.x\` will try to install a version that
    satisfies the semver range. It will be saved in the configuration without
    the version. If the plugin is updated in node_modules, it _may_ require
    running \`tap build\`, if the types or interfaces change between versions.`,
  )
  .heading('tap plugin rm <plugin>', 4, { pre: true })
  .description(
    `Remove the specified plugin.

    If the plugin is one of tap's builtin plugins, then it will be disabled
    by adding \`!<plugin>\` to the \`plugin\` tap config.

    Node-tap will *not* automatically uninstall plugin dependencies when
    removed.`,
  )
  .heading('tap plugin list', 4, { pre: true })
  .description('List the plugins in use')

  .heading('tap report', 3, { pre: true })
  .description(
    `Print a coverage report using the \`coverage-report\` config.

    Coverage reporters can also be specified as positional arguments,
    for example \`tap report html\`.
    `,
  )

  .heading('tap replay', 3, { pre: true })
  .description(
    `Replay the results of the last test run, optionally specifying
    reporter, test files to filter, and so on.

    This does *not* run the actual tests again, it just pipes their
    TAP standard output through the reporter, but it can be useful to
    view the results of the previous test run.`,
  )

  .heading('tap repl', 3, { pre: true })
  .description(
    `Open a REPL for interacting with the test suite. This can be used to
    watch files for changes, print coverage reports, or interact with the
    saved process info of past runs.

    Run \`tap repl help\` for a list of REPL commands, or run \`help\` in
    the REPL itself.`,
  )

  .heading('tap build', 3, { pre: true })
  .description(
    `Rebuild tap with the configured plugins. This is done automatically when
    running tests if the set of plugins does not match what tap was previously
    built with.`,
  )

  .heading('tap version', 3, { pre: true })
  .description(
    `Print the version of tap in use

    This is also run if the -v --version flag is set`,
  )
  .heading('tap versions', 3, { pre: true })
  .description(
    `Print the versions of tap and its components and plugins.

    This is also run if the -V --versions flag is set`,
  )

  .heading('tap config [get | list | dump | set | edit]', 3, {
    pre: true,
  })
  .description('Print or edit configuration in YAML format.')

  .heading('tap config get <key> [<key> ...]', 4, { pre: true })
  .description(
    `Print the resolved values of the keys specified.

    If any keys are undefined (because they have no default and are not
    set), they are omitted.`,
  )

  .heading('tap config list [<key> ...]', 4, { pre: true })
  .description(
    `Print the configuration from the config file, and from all environment
    variables, command-line options, and defaults.

    Items are sorted, and keys are highlighted.

    If one or more key names are provided, then the results will be filtered
    to only show those configuration keys.`,
  )

  .heading('tap config dump', 4, { pre: true })
  .description(
    `Current effect configuration is dumped in YAML format, without
    any highlighting or sorting.`,
  )

  .heading('tap config set <key=val> [<key=val> ...]', 4, {
    pre: true,
  })
  .description(
    `Set the specified keys and values.

    Boolean values must be set to literal 'true' or 'false'.

    Array values can be set multiple times.

    To delete a value, set it with \`key=\` (ie, provide an empty value).
    This can be used for example to clear out an array field and then
    fill it, rather than appending to it.`,
  )

  .heading('tap config edit', 4, { pre: true })
  .description(
    `Open the tap configuration in YAML format in your editor. Upon
    saving and quitting, if the configuration has changed, and is valid,
    then it will be written to the relevant config file. That is, if your
    tap configs are coming from a "tap" section in package.json, then
    they'll be written there, in JSON format. If they're coming from a
    .taprc file in the project root, then they'll be written there in
    YAML format.

    All comments and empty lines in the file will be removed.`,
  )

  .heading('tap list', 3, { pre: true })
  .description(
    `Print the test files that will be run, according to the configuration
    and positional arguments.`,
  )

  .heading('tap debug', 3, { pre: true })
  .description(
    `Output various debugging information, useful when posting issues
    on <https://github.com/tapjs/tapjs/issues>.`,
  )

  .heading('tap help', 3, { pre: true })
  .description(
    `Print usage information

    This is also run if the -h --help flag is set.`,
  )

  .heading('Configuration')
  .description(
    `If a \`TAP_RCFILE\` value is set in the process environment, then that
     will be the initial location that tap looks for configuration values.

     If that's not set, then tap will look for configuration data first in a
     .taprc file in the project root, and then in the "tap" object in the
     project package.json file. ('Project root' means the nearest folder at or
     above the current working directory containing package.json, .taprc, or
     .git.)

     The config object may set any of the following fields, as well as the
     special "extends" field, which may specify either a package name or
     file name, relative to the config file that references it.

     If the "extends" field resolves to a file on disk, then that will be read
     as the base configuration object. (It may also extend yet another config
     file, and so on.)

     If the "extends" field specifies a package name, then it must be
     resolveable in the node_modules folder of the file extending it. That
     package must contain either a .taprc file, or a package.json file
     with a "tap" object.

     To see the format used in a .taprc file, run the \`tap dump-config\`
     command with the desired options specified on the command line.

     Additionally, all config options that are modified from their defaults
     will be set in the environment with the \`TAP_\` prefix, and will be read
     from the environment if so specified. For example, specifying
     \`--omit-version\` on the command line, or \`omit-version: true\` in a
     .taprc file, will set \`TAP_OMIT_VERSION=1\` in the environment.

     Environment and CLI options take priority over any config files.
    `,
  )

  .heading('Basic Options')
  .optList({
    plugin: {
      hint: 'module',
      description: `Configure the tap Test class with the specified plugin.

                    Typically this is set in a .taprc file, not on the command
                    line, and can be managed using the \`tap plugin <add|rm>\`
                    command.

                    If the set of plugins does not match that which tap was
                    built with previously, then it will rebuild the Test class
                    prior to running tests.

                    To *exclude* a plugin which has been previously included
                    (perhaps by being part of tap's default set), add it to
                    this list prefixed by a \`!\` character.

                    The default plugin set that ships with tap is:

                    ${defaultPlugins
                      .sort((a, b) => a.localeCompare(b, 'en'))
                      .map(s => `- ${s}`)
                      .join('\n')}

                    Even if excluded, the runner will use some of these plugins
                    in its own operation.
  `,
      default: [] as string[],
    },
  })

  .opt({
    reporter: {
      short: 'R',
      hint: 'reporter',
      description: `Use the specified reporter. Defaults to \`base\` when
                    colors are in use, or \`tap\` when colors are disabled.

                    In addition to the built-in reporters provided by
                    the \`@tapjs/reporter\` module, the reporter option can
                    also specify a command-line program or a module to load
                    via \`import()\`.

                    Command-line programs receive the raw TAP output on their
                    stdin.

                    Modules loaded via import() must default export a writable
                    stream class, \`React\` function component, or a
                    \`React.Component\` subclass.

                    Writable streams are instantiated and piped into.

                    React components are rendered using Ink, with \`tap={tap}\`
                    and \`config={loadedConfig}\` as their properties.

                    Built-in test reporters:

                    ${testReporters.map(r => `- ${r}`).join('\n')}`,
    },

    'reporter-file': {
      short: 'f',
      hint: 'file',
      description: `Write the test report to the specified file, instead of
                    stdout. Useful for reports such as junit, json, etc.

                    To save the raw TAP data to a file, the
                    \`--output-file\` or \`--output-dir\` options are usually
                    more appropriate.

                    If \`TAP=1\` is set in the environment, then raw TAP
                    output is always written to stdout, because this is how
                    test files communicate with the runner.`,
    },
  })

  .optList({
    'reporter-arg': {
      hint: 'arg',
      short: 'r',
      description: `Args to pass to command-line reporters. Ignored when using
                    built-in reporters or module reporters.`,
    },
  })

  .optList({
    'coverage-report': {
      hint: 'type',
      default: ['text'],
      description: `Output coverage information using the specified
                    istanbul coverage reporter type.

                    Default is \`text\`.

                    If \`html\` or \`lcov\` is used, then the HTML report will
                    be opened in a web browser after running.

                    This can be run on its own at any time after a test run
                    that included coverage.

                    Built-in coverage reporters:

                    ${coverageReporters
                      .map(r => `- ${r}`)
                      .join('\n')}`,
    },
  })

  .flag({
    browser: {
      description: `Open the coverage report in the system's web browser when
                    an html report is generated (ie, when \`--coverage-report\`
                    is either \`lcov\` or \`html\`).

                    If set to false, then the html files will be generated, but
                    not opened in a web browser automatically.`,
      default: true,
    },
    'no-browser': {
      description: `Do not automatically open html coverage reports in the
                    system default web browser`,
    },
    'show-full-coverage': {
      description: `Show the \`100\` lines in the default \`text\` coverage
                    reporter for every file that has full coverage. Defaults to
                    false for all commands other than \`tap report\`. Has no
                    effect on any other coverage report styles.

                    If not set, and the test suite has full coverage, then no
                    text coverage report will be generated when running tests.
                    It can be assumed in this case that no news is good news,
                    and a zero-exit test process means full coverage was
                    generated. When generating any other test report styles,
                    files with full coverage are still reported.

                    When running \`tap report\`, this defaults to true, because
                    presumably you do want to see something if explicitly
                    requesting a coverage report, even if it's just a list of
                    green 100s.

                    When running \`tap report --no-show-full-coverage\`, with
                    this config explicitly set false, it will omit the default
                    text report on full coverage, and behave like running \`tap
                    report none\` (ie, print nothing).

                    When running \`tap report text --no-show-full-coverage\`,
                    explicitly requesting a text report and also explicitly
                    requesting that full coverage text report *not* be shown,
                    then a summary report will be printed instead of the full
                    text report.`,
    },
  })

  .opt({
    'coverage-map': {
      hint: 'module',
      description: `Provide a path to a node module (esm or cjs) that default
                    exports a single function. That function takes a test
                    file as an argument, and returns an array of files to
                    instrument with coverage when that file is run.

                    This is useful in cases where a unit test should cover a
                    single portion of the system under test, or where you wish
                    to avoid tracking "accidental coverage" by integration
                    tests.

                    Return \`null\` to not cover any files by this test.

                    Return an empty array [] to cover the set that would be
                    pulled in by default. Ie, returning [] is equivalent to
                    not using a coverage map at all.`,
    },
  })

  .flag({
    'allow-empty-coverage': {
      description: `Suppress the error exit if the test run produces no
                    coverage whatsoever.

                    The \`# No coverage generated\` message will still be
                    printed.

                    If coverage is generated, but incomplete, then the process
                    will exit in error, unless \`allow-incomplete-coverage\`
                    is also set.

                    WARNING: tests that do not produce coverage are
                    untrustworthy. This should only be used when coverage is
                    being generated and tracked by some other mechanism.`,
    },
    'allow-incomplete-coverage': {
      description: `Suppress the error exit if the test run produces incomplete
                    coverage information.

                    The coverage report showing missing coverage will still be
                    generated.

                    If no coverage is generated, then the process will exit in
                    error, unless \`allow-empty-coverage\` is also set.

                    WARNING: tests that produce incomplete coverage are
                    untrustworthy. This should only be used when coverage is
                    being generated and tracked by some other mechanism.`,
    },
    'disable-coverage': {
      description: `Do not generate code coverage information for the test run.

                    This will always result in a \`# No coverage generated\`
                    message being printed. If this flag is set, then
                    \`--allow-empty-coverage\` will default to \`true\`,
                    because we do not expect to get any coverage.

                    WARNING: tests that do not produce coverage are
                    untrustworthy. This should only be used when coverage is
                    being generated and tracked by some other mechanism.`,
    },
  })

  .num({
    statements: {
      description: `what % of statements must be covered?`,
      hint: 'n',
      validate: (n: unknown) => { 
        if ((n as number) < 0 || (n as number) > 100) {
          throw new Error('Coverage percentage must be between 0 and 100')
        }
        return true
      },
      default: 100
    },
    branches: {
      description: `what % of branches must be covered?`,
      hint: 'n',
      validate: (n: unknown) => { 
        if ((n as number) < 0 || (n as number) > 100) {
          throw new Error('Coverage percentage must be between 0 and 100')
        }
        return true
      },
      default: 100
    },
    lines: {
      description: `what % of lines must be covered?`,
      hint: 'n',
      validate: (n: unknown) => { 
        if ((n as number) < 0 || (n as number) > 100) {
          throw new Error('Coverage percentage must be between 0 and 100')
        }
        return true
      },
      default: 100
    },
    functions: {
      description: `what % of functions must be covered?`,
      hint: 'n',
      validate: (n: unknown) => { 
        if ((n as number) < 0 || (n as number) > 100) {
          throw new Error('Coverage percentage must be between 0 and 100')
        }
        return true
      },
      default: 100
    }
  })

  .flag({
    bail: {
      short: 'b',
      description: 'Bail out on first failure',
    },
    'no-bail': {
      short: 'B',
      description: 'Do not bail out on first failure (default)',
    },

    comments: {
      description: 'Print all tap comments to process.stderr',
    },

    passes: {
      description: `Include passing tests in assertion summary reports.

      Has no effect on TAP output if a reporter is not used, but will
      cause passing assertions to be included in the \`Test.lists\` collection
      by default.

      Note: this usually makes test output QUITE noisy.`,
    },

    'fail-todo': {
      description: `Treat \`# TODO\` tests as failures`,
    },

    'fail-skip': {
      description: `Treat \`# SKIP\` assertions as failures`,
    },

    'fail-only': {
      description: `Fail any tests marked with \`{only: true }\`, for CI and
                    other environments where you want to ensure that tests are
                    not being skipped.

                    Only relevant when the @tapjs/filter plugin is enabled.`,
    },

    color: {
      short: 'c',
      description: 'Use colors (Default for TTY)',
    },
    'no-color': {
      short: 'C',
      description: 'Do not use colors (Default for non-TTY)',
    },

    changed: {
      short: 'n',
      description: `Only run tests for files that have changed since the last
                    run.

                    If no prior test run data exists, then all default files
                    are run, as if --changed was not specified.`,
    },
  })

  .opt({
    save: {
      short: 's',
      hint: 'file',
      description: `If <file> exists, then it should be a line- delimited list
                    of test files to run. If <file> is not present, then all
                    command-line positional arguments are run.

                    After the set of test files are run, any failed test files
                    are written back to the save file.

                    This way, repeated runs with -s<file> will re-run failures
                    until all the failures are passing, and then once again run
                    all tests.

                    Its a good idea to .gitignore the file used for this
                    purpose, as it will churn a lot.`,
    },
  })

  .flag({
    diag: {
      description: `Set to show diagnostics by default for both passing and
                    failing tests. If not set, then diagnostics are printed by
                    default for failing tests, and not for passing tests.`,
    },
    'no-diag': {
      description: `Do not show diagnostics by default for passing or failing
                    tests. If not set, then diagnostics are printed by default
                    for failing tests, and not for passing tests.`,
    },
  })

  .num({
    timeout: {
      hint: 'n',
      short: 't',
      default: 30,
      description: `Time out test files after <n> seconds. Defaults to 30.
                    Setting to 0 allows tests to run forever.

                    When a test process calls t.setTimeout(n) on the top-level
                    tap object, it also updates this value for that specific
                    process.`,
    },
  })

  .optList({
    files: {
      hint: 'filename',
      description: `Alternative way to specify test set rather than using
                    positional arguments. Supported as an option so that
                    test file arguments can be specified in .taprc and
                    package.json files.`,
    },
  })

  .heading('Test Running Options')
  .description(
    `Tap runs multiple test files in parallel. This generally
     results in a speedier test run, but can also cause problems if
     your test files are not designed to be independent from one
     another.

     The \`before\` module, if specified, will always run before any tests,
     and the \`after\` module will be loaded after the entire test run is
     complete.
    `,
  )

  .num({
    jobs: {
      hint: 'n',
      short: 'j',
      default: jobs,
      description: `Run up to \`n\` test files in parallel.

                    By default, this will be set based on the number of CPUs
                    on the system.

                    Set --jobs=1 to disable parallelization entirely.`,
    },
  })

  .opt({
    before: {
      hint: 'module',
      description: `A node program to be run before test files are executed.

                    Exiting with a non-zero status code or a signal will fail
                    the test run and exit the process in error.

                    Relative \`before\` paths are resolved against the project
                    config root, even if specified on the cli.`,
    },

    after: {
      hint: 'module',
      description: `A node program to be executed after tests are finished.

                    This will be run even if a test in the series fails with
                    a bailout, but it will *not* be run if a --before script
                    fails.

                    Exiting with a non-zero status code or a signal will fail
                    the test run and exit the process in error.

                    Relative \`after\` paths are resolved against the project
                    config root, even if specified on the cli.`,
    },

    'output-file': {
      hint: 'filename',
      short: 'o',
      description: `Send the raw TAP output to the specified file. Reporter
                    output will still be printed to stdout, but the file will
                    contain the raw TAP for later replay or analysis.`,
    },

    'output-dir': {
      hint: 'dir',
      short: 'd',
      description: `Send the raw TAP output to the specified directory. A
                    separate .tap file will be created for each test file that
                    is run. Reporter output will still be printed to stdout,
                    but the files will contain the raw TAP for later replay or
                    analysis.

                    Files will be created to match the folder structure and
                    filenames of test files run, but with \`.tap\` appended to
                    the filenames.`,
    },
  })

  .optList({
    include: {
      hint: 'pattern',
      default: [
        // any js/ts/jsx program in a test folder
        '**/@(test?(s)|__test?(s)__)/**/*.__EXTENSIONS__',
        // any js/ts/jsx file named .test.ext or .spec.ext
        '**/*.@(test?(s)|spec).__EXTENSIONS__',
        // any js/ts/jsx file named test.ext or tests.ext
        '**/test?(s).__EXTENSIONS__',
      ],
      description: `A glob expression pattern indicating tests to run if no
                    positional arguments are provided to the \`tap run\`
                    command.

                    The special token \`__EXTENSIONS__\` will expand to the
                    list of known file type extensions that tap knows how to
                    process. When the \`@tapjs/typescript\` plugin is loaded
                    (default), this will be:

                    - js
                    - cjs
                    - mjs
                    - jsx
                    - ts
                    - cts
                    - mts
                    - tsx

                    Without the typescript plugin, this will be just the file
                    extensions known to Node:

                    - js
                    - cjs
                    - mjs

                    By default, tap will search for all files ending in these
                    known file type extensions in the following ways:

                    - a top-level folder named \`test\`, \`tests\`, or
                      \`__tests__\`
                    - any file ending in \`.spec.\` or \`.test.\` before a
                      supported extension, or
                    - a top-level file named \`test.(js,jsx,...)\` or
                      \`tests.(js,jsx,...)\`

                    No files excluded by the \`exclude\` option will be loaded,
                    meaning that dependencies, build artifacts in \`dist\`,
                    test fixtures, snapshots, and source control metadata will
                    be ignored.

                    The glob patterns are expanded without the \`dot\` option,
                    so any file starting with a . will be ignored.`,
    },

    exclude: {
      hint: 'pattern',
      default: ['**/@(fixture*(s)|dist)/**'],
      description: `A glob pattern indicating which filenames should NEVER
                    be run as tests. This overrides the \`include\` option.

                    Defaults to excluding any folders named dist, fixture, or
                    fixtures.

                    Note: folders named tap-snapshots, node_modules, or .git
                    are ALWAYS excluded from the default test file set. If you
                    wish to run tests in these folders, then name the test
                    files on the command line as positional arguments.`,
    },

    serial: {
      hint: 'dir',
      description: `Mark all test files anywhere within the specified
                    directory as serial tests, not to be run in parallel with
                    any other test files.`,
    },

    'test-arg': {
      hint: 'arg',
      description: `Pass an argument to test files spawned by the tap command
                    line executable. This can be specified multiple times to
                    pass multiple args to test scripts.`,
      default: [],
    },

    'test-env': {
      hint: 'key=value',
      description: `Pass a key=value (ie, --test-env=key=value) to set an
                    environment variable in the process where tests are run.

                    If a value is not provided, such as \`--test-env=key\`,
                    then the key is ensured to not be set in the environment.
                    To set a key to the empty string, use --test-env=key=`,
      default: [],
    },

    'node-arg': {
      hint: 'arg',
      default: [],
      description: `Pass an argument to Node binary in all child processes.
                    Run \`node --help\` to see a list of all relevant arguments.
                    This can be specified multiple times to pass multiple args
                    to Node.`,
    },
  })

  .heading('Other Options')
  .flag({
    debug: { description: 'Turn on debug mode (very noisy)' },

    'omit-version': {
      description: `Do not print the \`TAP version 14\` line. (This may be
                    needed for compapatibility with some older TAP parsers.)`,
    },

    'omit-whitespace': {
      description:
        'Prune empty lines out of the output from child tests',
    },
    'no-omit-whitespace': {
      description: `Preserve extra empty lines in the output.`,
    },

    versions: {
      short: 'V',
      description:
        'Show the version of tap and relevant tap libraries in use.',
    },

    version: {
      short: 'v',
      description: 'Show the version of this program.',
    },

    help: {
      short: 'h',
      type: 'boolean',
      description: 'show this help banner',
    },
  })

/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.ts > TAP > must match snapshot 1`] = `
Object {
  "tsconfig": Object {
    "description": String(
      Path to the \`tsconfig.json\` file containing project
                        settings provided to ts-node when running tests.
      
                        Similar to the \`--project\` option to ts-node. Sets the
                        \`TS_NODE_PROJECT\` environment variable.
      
                        If this is a relative directory, then it is resolved
                        against the project root directory.
    ),
    "type": "string",
  },
  "typecheck": Object {
    "default": true,
    "description": String(
      Type-check typescript test files, in addition to
                        transpiling and running them.
      
                        This defaults to being set, and type checking your tests
                        is generally a good idea. However, it is also often
                        considerably slower, adding as much as half a second to
                        each test suite file, which can be painful if you have
                        a lot of test files.
      
                        If you find that your typescript tests are taking too
                        long to run, and decide to disable type checking, it is
                        best to enable it in CI, for example by setting
                        \`TAP_TYPECHECK=1\` in the environment.
      
                        The \`"skipLibCheck": true\` option in tsconfig will also
                        speed things up a bit, at the expense of some type safety.
          
    ),
    "type": "boolean",
  },
}
`

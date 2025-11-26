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
      
                        Defaults to the first of these files that are found in
                        the project root directory:
      
                        - tsconfig.tap.json
                        - tsconfig.test.json
                        - tsconfig.spec.json
                        - tsconfig.json
    ),
    "type": "string",
  },
  "type-strip-only": Object {
    "description": String(
      Do not compile OR typecheck test files, and instead, opt into
                        Node's built-in type stripping behavior.
      
                        Note that this limits the TypeScript features that can be
                        used, but it is the fastest and most responsive approach,
                        because it does not require a build step of any kind.
      
                        This flag supercedes \`typecheck\` and \`tsconfig\`, because
                        no compilation is performed.
      
                        Only supported on Node 22 and higher.
      
                        On Node 22, adds the \`--experimental-strip-types\` flag. On
                        Node 23 and higher, this is supported by default.
      
                        Adds a \`--no-warnings\` flag on Node versions 22 and 23, to
                        avoid warnings about type stripping being an experimental
                        feature.
          
    ),
    "type": "boolean",
  },
  "typecheck": Object {
    "description": String(
      Type-check test files, in addition to transpiling and running
                        them.
      
                        This defaults to false, even though type checking your tests
                        is generally a good idea. Unfortunately, it is also often
                        considerably slower, adding as much as 500-750ms to each test
                        suite file, which can be painful if you have a lot of tests.
                        In large project folders, the effect can be even more
                        pronounced.
      
                        It is a good idea to enable this in CI environments, where
                        test speed is less of an ergonomic drawback.
      
                        The \`"skipLibCheck": true"\` option in tsconfig will also
                        speed things up a bit, at the expense of some type safety.
      
                        Note that even if you pre-compile your tests, they will still
                        be subject to type checking if \`"allowJs": true\` is set in
                        your tsconfig.
          
    ),
    "type": "boolean",
  },
}
`

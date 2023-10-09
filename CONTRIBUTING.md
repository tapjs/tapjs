# Contributing

## Code of Conduct

[Contributor Covenant Code of Conduct 2.1](./CODE_OF_CONDUCT.md)

## Reporting Bugs

The most helpful thing you can do is create a reproducible
example showing the issue you are experiencing. If you can
provide a good reproduction case, there's a good chance that your
bug will be fixed much more quickly, because often isolating the
issue is most of the work.

It's usually a good idea in many cases to run your command with
`--reporter=tap` and/or `--debug`, to show the steps that led to
a particular issue.

In order from most to least helpful:

* A pull request that adds a failing test demonstrating the
  problem. If you do this, basically you've done 90% of the work
  of solving the problem and you are my hero.
* A small public gist or repository on GitHub with a test script
  that shows the failure, with all necessary tap configs,
  tsconfig.json settings, dependencies listed, etc. This is
  wonderful, and can usually be adapted into a test very easily.
* A real world example of a public project with a list of steps
  needed to reproduce the issue. Creating a minimal reproduction
  is sometimes challenging, and a full-sized reproduction case is
  also pretty helpful, and can be informative if you're not sure
  what exactly is going on.
* A privately shared link to a real world example showing the
  issue. Almost as good as a public repo example, but without the
  benefit of being discoverable by others experiencing the
  problem.
* A clear set of steps in the issue that explains how to trigger
  the bug, with all relevant configuration listed. Often this
  is plenty, especially if the issue is simple to reproduce.
* An explanation of what happens, what you expect, and why it
  isn't good. Expect to answer some questions about your
  configuration setup, the output of various debug commands, etc.
* A comment on an existing open issue providing any of the above.
* (Not very helpful at this point) A comment on an open issue
  that says "I'm having this problem, too", but doesn't provide
  any additional context or information.
* A "me too" comment on a closed issue. If the issue is closed,
  you probably don't have that problem, and should open a new
  isssue.
* A "me too" comment on an issue that was closed years ago. I can
  virtually guarantee you don't have that problem, unless you
  have a time machine. (And if you _do_ have a time machine,
  please get in touch, because there's a lot of stuff we could do
  with that technology.)

## Documentation Issues

The docs are in `./src/docs/content`. They're markdown, and the
filenames map to the url. Just make whatever edits you would like
to propose, and send a PR.

## Development

Due to the particular way that node-tap is architected to allow
for plugins that provide full type awareness, the project's
workspaces must be built in a somewhat precise manner initially.

**1. Clone this repository**

```bash
git clone git@github.com:tapjs/tapjs
```

**2. Navigate into project and run bootstrap script**

```bash
cd tapjs
npm run bootstrap
```

**3. Play**

From there, it's most a normal npm monorepo setup.  Packages are
in `./src/<whatever>`. They all have `snap` and `test` scripts,
and are mostly pretty consistent in their layout. `nx` is used to
run scripts across workspaces.

The list of default built-in plugins is in
`./scripts/default-plugins.txt`. If a new default plugin is
added, it must be added to that list.

All workspace dependencies are listed as `devDependencies` in the
root workspace. Workspace projects do not list their
`devDependencies`, but _must_ list their production dependencies
and peerDependencies. (There are tests to ensure this is the
case.)

All packages in the monorepo have their deps pinned to the exact
versions of all the other projects in the monorepo. `npm run
pindeps` in the root of the project will update them all
appropriately.

## Commit Conventions

Node-tap does not follow strict "conventional commit" style
commit tagging. The focus of commit message style should be on
human intelligibility and `bisect` utility.

- First line of the commit message should be less than 50
  characters. Additional information should be provided in the
  commit message body (separated from the title with a blank
  line), and limited to 80 characters in width.
- The last line of the commit message should include a `fix: ...`
  or `re: ...` comment with a link to an issue in this project,
  if applicable.
- Prefix with the subproject component name if it's limited to
  one component, and not immediately obvious what it's related
  to. For example: `snapshot: fix syntax error` is much better
  than just `fix syntax error` which could be related to
  anything.
- Tests should pass at every commit. This ensures that `git
  bisect` is maximally useful.
- `package.json` versions _must not_ be modified in any commit
  other than those created by the build and deploy script.
- Commits should always be formatted using the linter. Ie, `npm
  run format` from the root of the project should not result in
  any uncommitted changes on any commit.
- Any changes to modules that check in built artifacts must
  include the changes to those built artifacts. That is, `npm run
  build && npm run prepare` from the root of the repo should
  not result in any uncommitted changes on any commit.

## Tests

If you've gotten to the point of contributing to node-tap, you
can probably guess that no patches will be accepted without tests
that:

1. Fail without the patch
2. Pass with the patch
3. Maintain 100% coverage

Sending a PR with a failing test is a great way to help get your
bug fixed!

## Dependencies

Dependencies should not be updated in pull requests unless
necessary for the change in question, and in that case, must be
updated in a separate commit.

When updating or adding a dependency, ensure that it is
consistent in all workspaces, and added to the root project
`devDependencies`.

### Adding a Dependency

```bash
# in the project root:
npm install the-new-dep --save-dev
npm install -w src/some-workspace-that-uses-it the-new-dep
```

### Updating a Dependency

```bash
# in the project root, check where it's being used:

$ npm ls the-updated-dep -ws --depth=0
@tapjs/tapjs@ /Users/isaacs/dev/tapjs/tapjs
├─┬ @tapjs/dummy-plugin@1.1.9 -> ./src/dummy-plugin
│ └── the-updated-dep@18.2.0
└─┬ @tapjs/reporter@1.3.5 -> ./src/reporter
  └── the-updated-dep@18.2.0 deduped

# update it all the places, and the workspace root
$ npm install the-updated-dep@newversion -iwr -w src/dummy-plugin -w src/reporter
```

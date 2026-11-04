# Agent guide for the tapjs monorepo

This repo is the monorepo for node-tap (the `tap` package) and its
parts. Packages live in `src/<name>`.

## Use the memory wiki

The `memory/` folder holds notes for agents. Read
[`memory/README.md`](memory/README.md) at the start of a task. It
lists each page and when to read it.

Keep the wiki current:

- When you learn something about the project that the code and docs
  do not make plain, add it to the right page in `memory/`.
- When the user makes a decision, add a dated entry to
  `memory/decisions.md`.
- When you find that a note is wrong or stale, fix or delete it.
- Keep each page on one topic. Add a new page if no page fits, and
  list it in `memory/README.md`.
- Do not copy facts that the repo already states clearly. Link to
  the source file instead.

## Quick facts

- Set up with `npm run bootstrap`. Plain `npm install` fails on a
  fresh clone. See `memory/workflow.md`.
- Run `npm run build` after any change to a plugin or to
  `@tapjs/core`. It regenerates the `Test` class.
- Tests need 100% coverage. A fix needs a test that fails without
  it.
- Run `npm run format` (prettier) before you commit.
- Do not edit `version` fields in any `package.json`. The release
  script owns them.
- Commit messages: short first line (under 50 chars), prefixed with
  the package name when the change is limited to one package (for
  example `snapshot: fix syntax error`). Not "conventional
  commits". See `memory/conventions.md`.
- User-facing docs are in `src/docs/content`. Release notes go in
  `changelog.md`.

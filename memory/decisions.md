# Decisions

A dated log of choices the user made, newest first. Give the
reason, and link to the commit or issue if there is one.

## 2026-11-05: prettier formats the docs

- `src/docs` has a `format` script, so `npm run format` covers the
  docs site. Vendored font and prism CSS in
  `src/docs/content/static` is in `.prettierignore`.

## 2026-11-04: agent memory wiki

- Agent notes live in `memory/` in the repo, indexed by
  `memory/README.md`. `AGENTS.md` tells agents to read and update
  it. `CLAUDE.md` imports `AGENTS.md`, so Claude Code loads it too.

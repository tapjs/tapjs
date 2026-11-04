# Versions and release

Sources: `scripts/version.mts` (rules in its header comment),
`scripts/bump-changed.sh`, `scripts/changed-workspaces.sh`.

- `npm run v -- <bump> <pkg> [<pkg> ...]`: bump the named packages.
  The script also bumps any package that depends on them, pins the
  new versions, and commits.
- `npm run p [level]`: bump all workspaces changed since the last
  tag. Level defaults to `prerelease`.
- `npm run pub`: publish every package whose version is not on npm
  yet. Prerelease versions go to the `pre` dist-tag. `tap`
  publishes last.
- `npm run pindeps`: pin internal deps and write manifests. No
  commit, no publish.
- `postv` deploys the docs site (`deploy:docs`, Netlify).
- `NO_ROLLBACK=1` turns off the script's rollback on error.
- The user (isaacs) runs releases. Agents should not run `v`, `p`,
  or `pub` unless asked.
- `changelog.md` at the root has one section per minor version of
  `tap` (for example `## 21.8`). It has front matter because the
  docs site uses it.

---
layout: layout
---

# Coverage

This module uses [nyc](http://npm.im/nyc) to track code coverage, even
across subprocess boundaries.  It is included by default, and there's
nothing you need to do but enable it.  Adding coverage *will* make
your tests run slightly slower, but that's to be expected.

To generate coverage information, run your tests with the `--cov`
argument.

To specify a report format, you can use `--coverage-report=<type>`.
The default type is `text`, which produces a pretty text-only table on
the terminal.  If you specify `--coverage-report=lcov`, then tap will
attempt to open a web browser to view the report after the test run.

If you use this a lot, you may want to add `coverage` and
`.nyc_output` to your `.gitignore` and/or `.npmignore` files.

### Travis-CI and Coveralls.io/CodeCov.io Integration

You can very easily take advantage of continuous test coverage reports
by using [Travis-CI](https://travis-ci.org) and
[Coveralls](https://coveralls.io).

1. Enable Travis-CI by signing up, enabling tests on your repo, and
   adding a `.travis.yml` file to your repo.  You can use [this
   module's .travis.yml file as an
   example](https://github.com/tapjs/node-tap/blob/master/.travis.yml)
2. Enable Coveralls.io or CodeCov.io by signing up, and adding the
   repo.  Note the repo API token.
3. Back at Travis-CI, add a private environment variable.  The name of
   the environment variable is `COVERALLS_REPO_TOKEN` for Coveralls,
   or `CODECOV_TOKEN` for CodeCov.io, and the value is the token you
   got from Coveralls or CodeCov.
4. When that token is set in the environment variable, `tap` will
   automatically generate coverage information and send it to the
   appropriate place.

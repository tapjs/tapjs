---
title: Coverage
section: 8
redirect_from:
  - /coverage/
  - /coverage
---

# Coverage

This module uses [nyc](http://npm.im/nyc) to track code coverage, even
across subprocess boundaries.  It is enabled by default, and there's
nothing extra you need to do to use it.

Nyc in turn uses [istanbul](http://npm.im/istanbul) to do the actual
coverage code transformation and reporting.

To disable coverage, run your tests with the `--no-coverage` argument.
To re-enable, add the `--coverage` argument.

## Maximal Coverage 💯

As of version 7, and by default starting in version 15, node-tap lets you
easily enforce 100% coverage of all lines, branches, functions, and
statements.

To do this, simply enable the `check-coverage` flag, which is on by
default.

To _not_ enforce maximum debuggability, code quality, and ease of
maintenance, you can disable it by specifying `--no-check-coverage` on the
command line, or adding the config to your package.json like so:

```json
{
  "tap": {
    "check-coverage": false
  }
}
```

## Continuous Integration and Coveralls.io Integration

You can very easily take advantage of continuous test coverage reports
by using [Coveralls](https://coveralls.io).

1. Install `coveralls` in your project as a dev dependency by running `npm
   install coveralls --save-dev`
2. Enable Coveralls.io by signing up, and adding the
   repo.  Note the repo API token.
3. In your continuous integration configuration, add a new environment
   variable.  The name of the environment variable is
   `COVERALLS_REPO_TOKEN`, and the value is the token you got from
   Coveralls.
4. When that token is set in the environment variable, `tap` will
   automatically generate coverage information and send it to the
   appropriate place.

## Uploading Coverage to Other Services

There's no requirement that you use Coveralls!  Any coverage service
that understands `lcov` can be used as well.

For example, using [CodeCov](https://codecov.io), you can do the
following:

1. Add `codecov` as a devDependency in your project with this command:

        npm install codecov --save-dev

2. Add a `test` script that generates coverage information, and a
   `posttest` that uploads it to codecov:

    ```json
    {
      "scripts": {
        "test": "tap",
        "posttest": "tap --coverage-report=text-lcov | codecov --pipe"
      }
    }
    ```

## Local Coverage Reporting

Printing out a coverage report can be done along with tests, or after
any covered test run, using the `--coverage-report=<type>` argument.

The most popular types are `text` and `html`, but any report style
supported by istanbul is available, including:

- clover
- cobertura
- html
- json
- json-summary
- teamcity
- text
- text-lcov
- text-summary

To specify a report format, you can use `--coverage-report=<type>`.
The default type is `text`, which produces a pretty text-only table on
the terminal.  If you specify `--coverage-report=html`, then tap will
attempt to launch a web browser to view the report after the test run.
You can prevent launching a browser by specifying the flag `--no-browser`.

## Coverage Maps

There are some situations where you may want to precisely specify which tests
should provide coverage for which program files, or which tests perhaps should
not be instrumented for code coverage at all.

In those cases, use a [coverage map](/coverage-map/) option.

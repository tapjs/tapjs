- save tests that failed, and re-run just those (mostly just the files
  themselves for the run.js bin, not individual test points)
- fix the markdown reporter
- make it faster (seems like mostly this is just node spawn() overhead)
- read a config file at ~/.taprc for setting default colors,
  reporters, etc
- make diff colors configurable
- tests for reporter output
- tests for cli flags and options

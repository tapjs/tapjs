---
title: "TAP Output Files"
section: 11
redirect_from:
  - /tap-files/
  - /tap-files
---

# Working with TAP Output Files

Sometimes, you may want to run tests, and view the output in a nice
human-readable way, but save the raw [TAP](/tap-protocol/) files for later replay
or analysis, or feeding into some other system in a CI build toolchain.

There are two ways to do this with tap: as a single file, or as many files.

## All One: `--output-file=<filename>`

Specify `-o<filename>` or `--output-file=<filename>` to dump the entire test
suite to a single file as raw TAP.

To parse this and spit out a [report](/docs/reporting/), you can pipe the single
file into a new tap invocation.  For example:

```
tap -o file.tap
cat file.tap | tap -
```

## Multiple Files: `--output-dir=<directory>`

To create multiple smaller files, specify `-d<dir>` or `--output-dir=<dir>`.
The resulting TAP files will be the name of the test file plus `.tap`, in
otherwise the same directory structure.

You can then later load those into tap to print a report by executing them as
if they were tests.  For example:

```
# run tests, dump raw output to dir
tap -d output-dir
# run all the tap files in the dir, print a report
tap output-dir
```

Of course, you may also find these files useful in various other TAP-consuming
tools.

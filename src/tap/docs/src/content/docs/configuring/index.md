---
title: "Configuring tap"
section: 4
redirect_from:
  - /configuring/
  - /configuring
---
# Configuring Tap

There are 3 main ways to configure tap to behave the way you want it to.

The first, and most straightforward, is to set a flag on the command line.

The next is to create a `.taprc` file in the current working directory
(typically the root of your project, where your `package.json` lives).  This file is interpreted as yaml, and can contain any options that can also be set on the command line.

To see what should be put in a yaml config file, you can run `tap
--dump-config` to have it spit out its defaults.  If `--dump-config` is
combined with other options, then this will show the resulting configuration.

You can change the location of the `.taprc` file by setting the `--rcfile`
command-line option.

Lastly, tap will look for a `tap` section in a `package.json` file in the
current working directory, and use that object as as source of configuration as
well.

Information about all of the various config options can be obtained by running
[`tap -h`](/docs/cli/).

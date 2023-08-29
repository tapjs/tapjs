---
title: tap Reporting Results
eleventyNavigation:
  key: Reporting Results
  parent: Docs
  order: 40
---

While [TAP](./tap-format.md) is intended to be both machine
parseable and human intelligible, and the raw TAP content is
often a good way to see exactly what is happening with a test, it
tends to be quite a bit too noisy for regular ergonomic human
consumption.

For this reason, tap comes with an
[ink](https://github.com/vadimdemedes/ink)-based reporter system,
and additional reporters can be added as well.

You can specify the reporter to use with the `--reporter` config
option. Custom reporters can be an Ink-based React component, a
Stream class, or a CLI program.

## Included Reporters

The `base` reporter is the one that tap uses by default. It
shows information about tests as they are running in parallel,
and aims to be verbose enough to show you what's going on,
without showing more information that is useful.

If the `base` reporter is too noisy for your liking, you can use
the `terse` reporter, which is similar, but prints much less
information.

Both reporters are designed to be as accessible as possible,
featuring diff and syntax highlighting color choices that are
amenable to any level of color sensitivity.

<pre
style="background:#111;color:#eee;line-height:1.4;padding:10px;">$ tap t.mts
<span style="color:black;background:green"> PASS </span> t.mts 2 <span style="color:green">OK</span> <span color="#999">1.052s</span>

<div style="width:min-content;background:white;color:black">                       
  🌈 TEST COMPLETE 🌈  
                       </div>
<b>Asserts:</b>  <span style="color:green">2 pass</span>  <span style="color:#900">0 fail</span>  <span style="color:#999">2 of 2 complete</span>
<b>Suites:</b>   <span style="color:green">1 pass</span>  <span style="color:#900">0 fail</span>  <span style="color:#999">1 of 1 complete</span>

<span style="color:#999"># { total: 2, pass: 2 }
# time=1091.538ms</span></pre>

Those are just the built-in reports. You can [write your own
using the `@tapjs/reporter` library](./writing-custom-reporters.md).

## Ink-Based Reporters

To use a custom reporter written in Ink, set the `--reporter`
config option to the module which default-exports a React tag
taking a [`TAP`](./api.md#class-tap) object as the `tap`
attribute, and a
[`LoadedConfig`](https://tapjs.github.io/tapjs/interfaces/_tapjs_config.index.LoadedConfig.html)
object as the `config` attribute.

## Stream-Based Reporters

Alternatively, you can set `--reporter` to a module that
default-exports a Writable Stream class. (That is, a class
with `write` and `end` methods on its prototype.)

In this case, the class will be instantiated with no arguments,
and the root `TAP` test will be piped into it.

## CLI-Based Reporters

Lastly, you can provide a name of an executable program, which
will receive the TAP content on its standard input.

In this case, the `--reporter-arg` config options may be used to
set the arguments to the reporter program.

For example,

<pre style="line-height:1.4;padding:10px;background-color:#111;color:#eee;white-space:pre">$ npm install --save-dev tap-mocha-reporter
$ tap -R tap-mocha-reporter -r nyan
 <span style="color:#0f0">94</span>  <span style="color:cyan">-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span>_,------,
 <span style="color:red">0</span>   <span style="color:cyan">-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span>_|   /\_/\ 
 <span style="color:magenta">0</span>   <span style="color:cyan">-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span>^|__( ^ .^) 
     <span style="color:cyan">-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span><span style="color:purple">_-</span><span style="color:blue">_-</span><span style="color:cyan">_-</span><span style="color:#0f0">_-</span><span style="color:yellow">_-</span><span style="color:orange">_-</span><span style="color:red">_-</span>  ""  "" 

  <span style="color:#0f0">94 passing</span> <span style="color:#666">(5s)</span></pre>

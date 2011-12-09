'use strict';

/*
  This file is a fixture for runner-display-stderr which runs bin/tap.js on this file
  and confirms the output. Logs a few lines to stderr which the runner should output.
 */

var test = require('../').test;

test('stderr logging', function (t) {
  t.ok(true);
  console.error('stderr output line1');
  console.error('stderr output line2');
  t.end();
});

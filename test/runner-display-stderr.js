'use strict';

/*
  Test invokes a child process to run the tap runner and confirms the output
 */

var test = require('../').test;
var child_process = require('child_process');

// prepare env options for our child process to run test
var env = process.env;
delete env.TAP;        //make sure these are clear for the cp exec
delete env.TAP_DIAG;   //make sure these are clear for the cp exec
delete env.TAP_NODIAG; //make sure these are clear for the cp exec
var options = { env: env, cwd: __dirname };

test('runner forwards stderr from tests to stderr', function (t) {
  t.plan(2);
  var cmd = '../bin/tap.js ./runner-display-stderr-fixture1.js';
  child_process.exec(cmd, options, function (err, stdout, stderr) {
    t.ok(stderr.match(/stderr output line1/), 'should contain stderr line1');
    t.ok(stderr.match(/stderr output line2/), 'should contain stderr line2');
    t.end();
  });
});

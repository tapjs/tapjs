#!/usr/bin/env node

var minimist = require('minimist');
var parser = require('../');
var fs = require('fs');

var argv = minimist(process.argv.slice(2), {
    alias: { v: 'verbose', o: 'outfile', i: 'infile', r: 'results' },
    default: { outfile: '-', infile: '-' },
    boolean: [ 'results' ]
});

var input = argv.infile === '-'
    ? process.stdin
    : fs.createReadStream(argv.infile)
;
var output = argv.outfile === '-'
    ? process.stdout
    : fs.createWriteStream(argv.outfile)
;

input.pipe(parser(function (results) {
    process.on('exit', function (code) {
        if (code !== 0) process.exit(results.ok ? 0 : 1);
    });
    
    if (argv.results) {
        output.end(JSON.stringify(results, null, 2) + '\n');
    }
}));

if (!argv.results) input.pipe(output);

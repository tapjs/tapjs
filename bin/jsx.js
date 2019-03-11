#!/usr/bin/env node
if (__filename !== process.argv[1] || process.argv.length < 3)
  throw new Error('this should only be used to load a jsx file')
process.argv.splice(1, 1)
require('import-jsx')(require('path').resolve(process.argv[1]))

#!/usr/bin/env node
const index = process.argv.indexOf(__filename)
if (index === -1 || index === process.argv.length - 1)
  throw new Error('this should only be used to load a jsx file')
require('import-jsx')(require('path').resolve(process.argv[index + 1]))

#!/usr/bin/env node
const fs = require('fs')
const template = fs.readFileSync(__dirname + '/index.template', 'utf8')
const {spawnSync} = require('child_process')
const bin = require.resolve('../../../../../bin/run.js')
const usage = spawnSync(process.execPath, [bin, '-h']).output.join('')
fs.writeFileSync(__dirname + '/index.md', template.replace(/\$\{USAGE\}/, usage))

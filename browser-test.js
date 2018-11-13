#!/usr/bin/env node

if (process.platform !== 'win32') {
  console.error('> karma start karma.conf.js')
  require('child_process').spawn('karma', ['start', 'karma.conf.js'], {
    stdio: 'inherit'
  }).on('close', (code, signal) => {
    if (code || signal)
      process.exit(code || 1)
  })
} else
  console.log('browser test not supported on windows')

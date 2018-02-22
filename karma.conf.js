'use strict'

const { join } = require('path')

function makeConf (config) {
  const files = [
    join(__dirname, 'test', 'browser', 'index.js')
  ]

  const preprocessors = files.reduce((preprocessors, file) =>
    Object.assign({ [file]: 'browserify' }, preprocessors), {})

  const browsers = process.env.BROWSER
    ? [process.env.BROWSER]
    : ['ChromeHeadlessNoSandbox', 'Firefox']

  config.set({
    browsers,
    concurrency: 1,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    files,
    frameworks: ['browserify', 'mocha'],
    preprocessors,
    reporters: ['spec'],
    singleRun: true
  })
}

module.exports = makeConf

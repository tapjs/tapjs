const t = require('tap')
const yaml = require('tap-yaml')
t.formatSnapshot = object => yaml.stringify(object)

// now all my snapshot files will be in yaml!
t.matchSnapshot({ foo: ['bar', 'baz'] })

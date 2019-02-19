const t = require('tap')
// not much to test here, just that it loads and is there.
t.matchSnapshot(require('../'), 'root api is a thing')

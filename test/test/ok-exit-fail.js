var t = require('../..')
t.pass('this passes but the exit code makes it not ok')
process.exit(1)

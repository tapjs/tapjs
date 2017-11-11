var t = require('../..')

t.similar([1,, 3], [1, 2, 3]) // eslint-disable-line
t.similar([1,,,], [1, 2, 3]) // eslint-disable-line

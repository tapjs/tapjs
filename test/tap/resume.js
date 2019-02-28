const MiniPass = require('minipass')
const mp = new MiniPass()
mp.pipe(process.stdout)

require('./')(
  t => {
    t.resume()
    t.pause()
    mp.write('1\n')
    t.pipe(mp)
    t.pass('2')
    t.pause()
    t.pass('4')
    mp.write('3\n')
    t.pass('5')
    t.resume()
    t.end()
  }
)

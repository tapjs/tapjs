const Parser = require('../')
const p = new Parser(results => console.dir(results))
process.stdin.pipe(p)

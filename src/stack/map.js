// some tests have to be .mjs or .cjs for reasons
module.exports = t =>
  t.replace('test', 'src').replace(/\.[^.]+$/, '') + '.*'

// some tests have to be .mjs or .cjs for reasons
export default t =>
  t.replace('test', 'src').replace(/\.[^.]+$/, '') + '.*'

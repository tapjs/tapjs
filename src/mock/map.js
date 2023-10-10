export default t =>
  t.replace('test', 'src').replace(/\.[^.]+$/, '') + '.ts'

// we need a coverage map, because this folder is called 'test'
// so tap excludes it from coverage by default.
export default t => {
  const base = t.substring('test/'.length).replace(/\.[^\.]+$/, '.*')
  return [`src/${base}`, `scripts/${base}`]
}

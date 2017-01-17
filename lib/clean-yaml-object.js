var cleanYamlObject = require('clean-yaml-object')
module.exports = cleanTapYamlObject

function cleanTapYamlObject (object) {
  return cleanYamlObject(object, yamlFilter)
}

function yamlFilter (propertyName, isRoot, source, target) {
  if (!isRoot)
    return true

  if (propertyName === 'stack') {
    if (source.stack)
      target.stack = source.stack
    return false
  }

  return !(propertyName === 'todo' ||
  /^_?tapChild/.test(propertyName) ||
  propertyName === 'cb' ||
  propertyName === 'name' ||
  propertyName === 'indent' ||
  propertyName === 'skip' ||
  propertyName === 'bail' ||
  propertyName === 'diagnostic' ||
  propertyName === 'buffered' ||
  propertyName === 'parent' ||
  (propertyName === 'at' && !source.at))
}
function yamlFilter (propertyName, isRoot, source, target) {
  if (!isRoot)
    return true

  if (propertyName === 'stack') {
    if (source.stack)
      target.stack = source.stack
    return false
  }

  return !(propertyName === 'todo' ||
  /^_?tapChild/.test(propertyName) ||
  propertyName === 'cb' ||
  propertyName === 'name' ||
  propertyName === 'indent' ||
  propertyName === 'skip' ||
  propertyName === 'bail' ||
  propertyName === 'diagnostic' ||
  propertyName === 'buffered' ||
  propertyName === 'parent' ||
  (propertyName === 'at' && !source.at))
}

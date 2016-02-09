var fs = require('fs')
var yaml = require('js-yaml')

function parseYaml (contents) {
  try {
    var parsed = yaml.safeLoad(contents)

    // js-yaml parses an empty file as undefined, and one with only comments as
    // null. We want to return an empty object in these cases.
    if (!parsed) {
      parsed = {}
    }

    return parsed
  } catch(er) {
    return null
  }
}

function parseRcFile (path) {
  var parsed = {}

  try {
    var contents = fs.readFileSync(path, 'utf8')
    parsed = parseYaml(contents)
  } catch(er) {
    // if no dotfile exists, fail gracefully
    parsed = {}
  }

  return parsed
}

module.exports = {
  parseYaml: parseYaml,
  parseRcFile: parseRcFile
}

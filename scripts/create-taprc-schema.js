const { options, reporters } = require("../bin/jack.js")

const SCHEMA_VERSION = "http://json-schema.org/draft-07/schema"

// Symbols are tricky to get out of the object
function symbolValues(object) {
  return Object.getOwnPropertySymbols(object).reduce((values, symbol) => {
    // We assume that Symbols do `toString()` as "Symbol(name)"
    // And we extract the name here.
    // If jackspeak ever decides to ditch the name in the creation of the symbols
    // this will no longer work.
    const name = symbol.toString().substring(7, symbol.toString().length - 1)
    values[name] = object[symbol]
    return values
  }, {})
}

function dumpConfigSchema(options) {
  let schemaProperties = options.reduce((properties, section) => {
    return Object.keys(section).reduce((properties, key) => {
      // Ignore the `--` option, all uppercase ENV and the dump options
      if (!/[a-z]+/.test(key) || key === "dump-config") {
        return properties
      }
      const option = section[key]
      const { env, flag, list, num } = symbolValues(option)
        
      if (typeof option === "object" && !option.hidden && !env) {
        const description = option.description.trim().replace(/^\s+(.+)\s+$/gm, '$1')
        const titleIndex = description.indexOf('.')
        const schema = {
          type: 'string',
          title:  description
        }
        if (titleIndex >= 0) {
          schema.title = description.substr(0, titleIndex + 1)
          schema.description = description.substr(titleIndex + 1)
        }
        if (num) {
          schema.type = "number"
          if ('min' in option) {
            schema.minimum = option.min
          }
          if ('max' in option) {
            schema.maxiumum = option.max
          }
        } else if (list) {
          schema.type = "array"
        } else if (flag) {
          schema.type = 'boolean'
        } 

        if (Array.isArray(option.valid)) {
          if (list) {
            schema.items = {
              'enum': option.valid
            }
          } else {
            schema.enum = option.valid
          }
        }
        if ('default' in option) {
          schema.default = option.default
        }

        if (key === "reporter") {
          schema.examples = reporters
        }
        properties[key] = schema
      }
      return properties
    }, properties)
  }, {})
  schemaProperties = 
    Object.keys(schemaProperties)
    .sort()
    .reduce((properties, key) => {
      const props = `${JSON.stringify(schemaProperties[key], null, 6)}`
      properties.push(`"${key}": ${props.substring(0, props.length - 1)}    }`)
      return properties
    },[])
  .join(',\n    ')
  return `{
  "$schema": "${SCHEMA_VERSION}",
  "$id": "https://node-tap.org/taprc.schema.json",
  "title": "JSON schema for node-tap .taprc file",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    ${schemaProperties}
  }
}\n`
}

console.log(dumpConfigSchema(options))

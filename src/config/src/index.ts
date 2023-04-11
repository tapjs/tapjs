import { ConfigSet, Jack } from 'jackspeak'
import jack from './jack.js'

// get the set of folders to check for a .taprc or a package.json
// always stop when we find a .git
// validate config files against this.jack
export class TapConfig {
  jack: Jack = jack
  constructor() {}

  addFields<F extends ConfigSet>(fields: F) {
    this.jack = jack.addFields(fields)
  }
}

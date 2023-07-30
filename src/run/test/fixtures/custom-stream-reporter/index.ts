import { Minipass } from 'minipass'
import { Parser } from 'tap-parser'

const instances_: Reporter[] = []
export const instances = () => instances_

export default class Reporter extends Minipass<string> {
  parser: Parser
  constructor() {
    super({ encoding: 'utf8' })
    instances_.push(this)
    this.parser = new Parser(results => {
      super.write(JSON.stringify(results))
      super.end()
    })
  }
  write(c: string | Buffer) {
    super.write(c)
    return this.parser.write(c)
  }
  end() {
    this.parser.end()
    return this
  }
}

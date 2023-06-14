import { TapPlugin, TestBase } from '@tapjs/core'

class DummyPlugin {
  #t: TestBase
  constructor(t: TestBase) {
    this.#t = t
  }
  get testBase() {
    return this.#t
  }
  get dummyConfig() {
    return {
      flag: process.env.TAP_DUMMY_FLAG === '1',
      flagSet: (process.env.TAP_DUMMY_FLAG_SET || '')
        .trim()
        .split('\n')
        .map(x => x === '1'),
      opt: process.env.TAP_DUMMY_OPT,
      optSet: (process.env.TAP_DUMMY_OPT_SET || '')
        .trim()
        .split('\n'),
      num: parseInt(process.env.TAP_DUMMY_NUM || '', 10),
      numSet: (process.env.TAP_DUMMY_NUM_SET || '')
        .trim()
        .split('\n')
        .map(n => parseInt(n, 10)),
    }
  }
  method() {
    return 1
  }
}

export const plugin: TapPlugin<DummyPlugin> = t => new DummyPlugin(t)

export const config = {
  'dummy-flag': {
    type: 'boolean',
  },
  'dummy-flag-set': {
    type: 'boolean',
    multiple: true,
  },
  'dummy-opt': {
    type: 'string',
  },
  'dummy-opt-set': {
    type: 'string',
    multiple: true,
  },
  'dummy-num': {
    type: 'number',
  },
  'dummy-num-set': {
    type: 'number',
    multiple: true,
  },
}

export const loader = '@tapjs/dummy-plugin/loader'

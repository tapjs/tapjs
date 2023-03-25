import StackUtils from 'stack-utils'

export default new StackUtils({
  internals: StackUtils.nodeInternals(),
  ignoredPackages: []
})

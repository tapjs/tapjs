require('./')(
() => process.env.TAP_DEBUG = '1',t => t.comment('this is fine')
)

require('./')(
() => process.env.NODE_DEBUG = 'tap',t => t.plan(0)
)

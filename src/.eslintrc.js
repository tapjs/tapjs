module.exports = {
  extends: 'eslint:recommended',

  env: {
    node: true,
    es2020: true
  },

  rules: {
    'no-prototype-builtins': 'off',
    'no-empty': 'off',
    'no-regex-spaces': 'off',
    'no-useless-escape': 'off'
  }
}

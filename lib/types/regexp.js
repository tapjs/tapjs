module.exports = {
  identify: value => value instanceof RegExp,
  tag: '!re',
  resolve(str) {
    const match = str.match(/^\/([\s\S]+)\/([gimuy]*)$/)
    if (!match) throw new Error('Invalid !re value')
    return new RegExp(match[1], match[2])
  }
}

/**
 * this isn't for performance or anything, it just confuses vim's
 * brace-matching to have these in the middle of functions, and
 * I'm too lazy to dig into vim-javascript to fix it, so hence these
 * capital snake consts.
 *
 * @module
 */
export const OPEN_BRACE_EOL = /\{\s*$/
export const SPACE_OPEN_BRACE_EOL = / \{$/

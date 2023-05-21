// this isn't for performance or anything, it just confuses vim's
// brace-matching to have these in the middle of functions, and
// i'm too lazy to dig into vim-javascript to fix it.
export const OPEN_BRACE_EOL = /\{\s*$/
export const SPACE_OPEN_BRACE_EOL = / \{$/

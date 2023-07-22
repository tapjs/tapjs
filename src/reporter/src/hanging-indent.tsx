import { Text, TextProps, Transform } from 'ink'
import React, { FC } from 'react'

// kind of a weird way to add a hanging indent for wrapped lines,
// but it seems to work.
// See: https://github.com/vadimdemedes/ink/issues/611
const sigil = '\x01\x02\x03\x03\x02\x01'
export const HangingIndent: FC<{ indent?: number } & TextProps> = ({
  indent = 4,
  children,
  ...props
}) => (
  <Transform
    transform={o =>
      o.includes(sigil)
        ? o.replace(sigil, '')
        : ' '.repeat(indent) + o
    }>
    <Text {...props}>
      {sigil}
      {children}
    </Text>
  </Transform>
)

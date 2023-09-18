import { Text, TextProps, Transform } from 'ink'
import React, { FC } from 'react'

export const HangingIndent: FC<{ indent?: number } & TextProps> = ({
  indent = 4,
  children,
  ...props
}) => (
  <Transform
    transform={(o, i) => (i === 0 ? o : ' '.repeat(indent) + o)}>
    <Text {...props}>{children}</Text>
  </Transform>
)

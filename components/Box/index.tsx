import type { FC, ReactNode } from 'react'

import { Container } from './styled'

interface IProps {
  children: ReactNode
}

export const Box: FC<IProps> = ({ children }) => (
  <Container>{children}</Container>
)

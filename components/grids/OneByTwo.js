import React from 'react'
import styled from '@emotion/styled'
import { below } from '../../utils/breakpoints'

export const OneByTwo = ({ children, reverse, background }) => {
  return <OneByTwoS reverse={reverse}>{children}</OneByTwoS>
}

const OneByTwoS = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'reverse')};

  ${below.phone`
    flex-direction: column-reverse;
  `}
`

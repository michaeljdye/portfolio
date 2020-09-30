import { css } from '@emotion/core'
import styled from '@emotion/styled'

const imageStyles = css`
  img {
    width: 80px;
    margin-right: 10px;
  }
`

export const SectionHeading = styled.p`
  text-align: right;
  font-weight: 300;
  font-size: 1.5rem;
  text-align: ${({ align = 'center' }) => align};

  ${({ isImage }) => {
    if (isImage) {
      return imageStyles
    }
  }}

  h2 {
    display: block;
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 3rem;
  }
`

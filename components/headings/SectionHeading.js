import { css } from '@emotion/core'
import styled from '@emotion/styled'

const imageStyles = css`
  img {
    width: 80px;
    margin-right: 10px;
  }
`

export const SectionHeading = styled.div`
  margin-bottom: ${({ marginBottom = 20 }) => `${marginBottom}px`};
  text-align: right;
  font-weight: 300;
  font-size: 2rem;
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
    font-size: 4rem;
    letter-spacing: 1.5px;
  }
`

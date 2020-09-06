import { css, Global } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        ${emotionNormalize}
        html,
    body {
          padding: 0;
          margin: 0;
          background: white;
          min-height: 100%;
          font-family: Helvetica, Arial, sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 2.75rem 0 1.05rem;
          font-weight: 400;
          line-height: 1.15;
        }

        h1 {
          margin-top: 0;
        }
      `}
    />
    {children}
  </>
)

export default Layout

import { css, Global } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        :root {
          --colorPrimary: #04f5ca;
          --colorSecondary: #05caa7;
          --colorDark: #111111;
          --colorGray: #262626;
          --colorWhite: #ffffff;
        }

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
          font-weight: 400;
          line-height: 1.15;
        }

        h1 {
          margin: 0;
          text-transform: uppercase;
          font-size: 3.5rem;
        }

        p {
          font-size: 1rem;
        }
      `}
    />
    {children}
  </>
)

export default Layout

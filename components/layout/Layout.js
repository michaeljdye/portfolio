import Head from 'next/head'
import { css, Global } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Joey Dye | Fullstack Developer</title>
      <meta
        name='description'
        content='I am a fullstack developer from Nashville, TN.'
      />
    </Head>
    <Global
      styles={css`
        :root {
          --colorPrimary: #04f5ca;
          --colorSecondary: #05caa7;
          --colorDark: #111111;
          --colorGray: #262626;
          --colorLightGray: #eee;
          --colorWhite: #ffffff;
        }

        ${emotionNormalize}
        html,
    body {
          padding: 0;
          margin: 0;
          background: white;
          min-height: 100%;
          font-family: Avenir, Arial, sans-serif;
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
          font-size: 4.5rem;
          font-weight: 700;
        }

        h2 {
          margin: 0;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 3rem;
        }

        h3 {
          font-size: 1.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        p {
          font-size: 1rem;
          line-height: 1.2;
        }
      `}
    />
    {children}
  </>
)

export default Layout
import Head from 'next/head'
import { css, Global } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { below } from '../../utils/breakpoints'

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
          --colorMediumGray: #eee;
          --colorLightGray: #fefefe;
          --colorWhite: #ffffff;
          --colorTextLight: #bbb;
          --defaultPadding: 80px;

          ${below.phone`
            --defaultPadding: 60px;
          `}
        }

        ${emotionNormalize}

        html {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          background: white;
          min-height: 100%;
          font-family: 'Montserrat', sans-serif;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: 'Roboto Slab', serif;
          font-weight: 400;
          line-height: 1.15;
        }

        h1 {
          margin: 0;
          text-transform: uppercase;
          font-size: max(7vw, 2rem);
          font-weight: 700;
        }

        h2 {
          margin: 0;
          text-transform: uppercase;
          font-weight: 700;
          font-size: max(4vw, 2.5rem);
        }

        h3 {
          font-size: max(2vw, 1.25rem);
          font-weight: 700;
          text-transform: uppercase;
        }

        p,
        li {
          font-size: max(1vw, 1.125rem);
          line-height: 1.4;
        }
      `}
    />
    {children}
  </>
)

export default Layout

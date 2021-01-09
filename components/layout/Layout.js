import { useRef } from 'react'
import Head from 'next/head'
import { css, Global } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { below } from '../../utils/breakpoints'
import Hero from '../sections/Hero'
import Footer from './Footer'

const Layout = ({ children, pageTitle, siteTitle, heading, subheading }) => {
  const containerRef = useRef()

  const handleThemeChange = () => {
    containerRef.current.classList.toggle('dark')
  }

  return (
    <>
      <Head>
        <title>
          {pageTitle} | {siteTitle}
        </title>
        <meta
          name='description'
          content='I am a fullstack developer from Nashville, TN.'
        />
      </Head>
      <Global
        styles={css`
          .theme {
            --colorPrimary: #04f5ca;
            --colorPrimaryDark: #1f1f1f;
            --colorSecondary: #05caa7;
            --colorDark: #111111;
            --colorGray: #262626;
            --colorMediumGray: #eee;
            --colorLightGray: #fefefe;
            --colorWhite: #ffffff;
            --colorTextLight: #bbb;
            --defaultPadding: min(10vw, 80px);
            --heroBackground: url(/images/pattern-light-triangle.jpg);
            --heroTextColor: var(--colorDark);
            --bioBackground: var(--colorLightGray);
            --bioColor: var(--colorDark);
            --appsBackground: var(----colorLightGray);
            --appsColor: var(--colorDark);
            --slideshowBackground: var(--colorMediumGray);
            --slideshowTextColor: var(--colorDark);
            --sitesBackground: var(--colorWhite);
            --sitesTextColor: var(--colorDark);
            --ctaBackground: var(--colorWhite);
            --ctaTextColor: var(--colorDark);
            --skillsBackground: var(--colorWhite);
            --skillsIconColor: var(--colorDark);
            --contactBackground: rgba(0, 0, 0, 0.1)
              url(/images/pattern-light-triangle.jpg);
            --contactTextColor: var(--colorDark);
            --buttonColorDark: var(--colorDark);
            --navTextColor: var(--colorDark);
          }

          .theme.dark {
            --heroBackground: url(/images/pattern-dark-triangle.jpg) center
              center;
            --heroTextColor: var(--colorWhite);
            --bioBackground: var(--colorPrimaryDark);
            --bioColor: var(--colorWhite);
            --appsBackground: var(--colorGray);
            --appsColor: var(--colorWhite);
            --slideshowBackground: var(--colorPrimaryDark);
            --slideshowTextColor: var(--colorWhite);
            --sitesBackground: var(--colorGray);
            --sitesTextColor: var(--colorWhite);
            --ctaBackground: var(--colorGray);
            --ctaTextColor: var(--colorWhite);
            --skillsBackground: var(--colorPrimaryDark);
            --skillsIconColor: var(--colorWhite);
            --contactBackground: url(/images/pattern-dark-triangle.jpg);
            --contactTextColor: var(--colorWhite);
            --buttonColorDark: var(--colorWhite);
            --navTextColor: var(--colorWhite);
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
      <div ref={containerRef} className='theme'>
        <Hero
          heading={heading}
          subheading={subheading}
          handleThemeChange={handleThemeChange}
        />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout

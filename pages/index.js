import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import Bio from '../components/sections/Bio'
import Apps from '../components/sections/Apps'
import Sites from '../components/sections/Sites'
import Skills from '../components/sections/Skills'
import CTA from '../components/sections/CTA'
import Footer from '../components/layout/Footer'
import Contact from '../components/forms/Contact'

const Home = () => (
  <Layout>
    <Hero />
    <Bio />
    <Apps />
    <Sites />
    <CTA />
    <Skills />
    <Contact />
    <Footer />
  </Layout>
)

export default Home

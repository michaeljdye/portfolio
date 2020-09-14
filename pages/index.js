import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import Bio from '../components/sections/Bio'
import Apps from '../components/sections/Apps'
import Sites from '../components/sections/Sites'
import Contact from '../components/forms/Contact'
import Footer from '../components/layout/Footer'

const Home = () => (
  <Layout>
    <Hero />
    <Bio />
    <Apps />
    <Sites />
    <Contact />
    <Footer />
  </Layout>
)

export default Home

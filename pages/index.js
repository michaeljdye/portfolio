import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Apps from '../components/Apps'
import Sites from '../components/Sites'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

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

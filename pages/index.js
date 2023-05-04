import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import Bio from "../components/sections/Bio";
import Apps from "../components/sections/Apps";
import Sites from "../components/sections/Sites";
import Skills from "../components/sections/Skills";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import Contact from "../components/forms/Contact";

const Home = () => (
  <Layout
    pageTitle="Michael Dye"
    siteTitle="Senior Frontend Engineer"
    heading="Build. Ship. Repeat"
    subheading="I am a growth-driven developer dedicated to building a better web."
  >
    <Bio />
    <Apps />
    <Sites />
    <CTA />
    <Skills />
    <Contact />
  </Layout>
);

export default Home;

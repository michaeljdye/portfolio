import styled from "@emotion/styled";
import Layout from "../../components/layout/Layout";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/images/emma-universities.png" },
  { url: "/images/campaign-monitor.png" },
];

const Home = () => (
  <Layout pageTitle="Michael Dye" siteTitle="Frontend Engineer">
    <SliderContainer>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </SliderContainer>
    <SummaryContainer>Hello, this is an awesome project!</SummaryContainer>
  </Layout>
);

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export default Home;

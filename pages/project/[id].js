import styled from "@emotion/styled";
import Layout from "../../components/layout/Layout";
import SimpleImageSlider from "react-simple-image-slider";
import { useRouter } from "next/router";

const projects = {
  bellhop: 7,
};

const Home = () => {
  const {
    query: { id },
  } = useRouter();

  const project = projects[id];
  const images = project
    ? [...new Array(project)].map((_, index) => ({
        url: `/images/${id}/${id}-${index + 1}.png`,
      }))
    : [];

  console.log("images", images);

  return (
    <Layout pageTitle="Michael Dye" siteTitle="Frontend Engineer">
      <SliderContainer>
        {images.length ? (
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        ) : null}
      </SliderContainer>
    </Layout>
  );
};

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

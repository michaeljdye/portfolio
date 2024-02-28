import styled from "@emotion/styled";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

  return (
    <Layout pageTitle="Michael Dye" siteTitle="Frontend Engineer">
      <SliderContainer>
        <Carousel>
          {images.map((image, index) => (
            <div key={index}>
              <img alt="" src={image.url} />
            </div>
          ))}
        </Carousel>
      </SliderContainer>
    </Layout>
  );
};

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .carousel-root {
    width: 100%;
  }
`;

export default Home;

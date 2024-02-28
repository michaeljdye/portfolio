import styled from "@emotion/styled";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
      <Container>
        <Link href="/">
          <BackButton>
            <FontAwesomeIcon size="1x" icon={faChevronLeft} />
            <p>Back</p>
          </BackButton>
        </Link>
        <SliderContainer>
          <Carousel>
            {images.map((image, index) => (
              <div key={index}>
                <img alt="" src={image.url} />
              </div>
            ))}
          </Carousel>
        </SliderContainer>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .carousel-root {
    width: 100%;
  }
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;
  p {
    font-size: 1.25rem;
    text-transform: uppercase;
    margin-left: 0.5rem;
  }
`;

export default Home;

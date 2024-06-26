import styled from "@emotion/styled";
import apps from "../../data/apps.json";
import { SectionHeading } from "../headings";
import { OneByTwo } from "../grids";
import { ButtonPrimary } from "../buttons";
import { above } from "../../utils";
import { Reveal } from "../animations/Reveal";
import { useContext } from "react";
import { ThemeContext } from "../layout/Layout";

const Apps = () => {
  const isDark = useContext(ThemeContext);

  return (
    <AppsSection id="apps">
      <Reveal width="100%">
        <SectionHeading marginBottom="80">
          engage your users <h2>Web Apps</h2>
        </SectionHeading>
      </Reveal>
      {apps.map((scene, i) => {
        const isReverse = i % 2 === 0 ? true : false;

        return (
          <Reveal width="100%">
            <OneByTwo reverse={isReverse}>
              <SlideText reverse={isReverse}>
                <h3>{scene.title}</h3>
                <p>{scene.description}</p>
                <Stack reverse={isReverse}>
                  {scene.stack.map((stackItem) => (
                    <li key={stackItem}>{stackItem}</li>
                  ))}
                </Stack>
                <ButtonContainer>
                  {scene.source && (
                    <ButtonPrimary
                      isDark={isDark}
                      as="a"
                      target={"_blank"}
                      rel="nofollow noopenner"
                      href={scene.source}
                    >
                      View Src
                    </ButtonPrimary>
                  )}
                  {scene.demo && (
                    <ButtonPrimary
                      isDark={isDark}
                      as="a"
                      target={
                        scene.demo.startsWith("https") ? "_blank" : "_self"
                      }
                      rel="nofollow noopenner"
                      href={scene.demo}
                    >
                      View App
                    </ButtonPrimary>
                  )}
                </ButtonContainer>
              </SlideText>
              <SlideImgContainer>
                <img src={scene.image} alt="" />
              </SlideImgContainer>
            </OneByTwo>
          </Reveal>
        );
      })}
      {/* <Slideshow scenes={scenes} /> */}
    </AppsSection>
  );
};

const AppsSection = styled.section`
  background: var(--appsBackground);
  padding: var(--defaultPadding) 0 0 0;
  color: var(--appsColor);

  ${above.tablet`
      margin-bottom: 0;
    `}
`;

const SlideText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--appSlideTextBackground);
  width: 100%;
  padding: 2rem 0;
  color: var(--appSlideText);

  ${above.phone`
    width: 50%;
  `}

  p {
    width: 90%;
    max-width: 500px;
    text-align: center;
  }
`;

const SlideImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;

  ${above.phone`
    width: 50%;
  `}

  img {
    max-width: 100%;
    max-height: 500px;
    margin: 0 auto;
  }
`;

const Stack = styled.div`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.125rem;
    text-align: center;
  }

  li + li {
    border-left: 1px solid var(--appStackText);
    margin-left: 0.625rem;
    padding-left: 0.625rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 50%;

  a + a {
    margin-left: 1.25rem;
  }
`;

export default Apps;

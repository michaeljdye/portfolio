import styled from "@emotion/styled";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../layout/Header";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { ToggleButton } from "../buttons";
import { Reveal } from "../animations/Reveal";
import { useContext } from "react";
import { ThemeContext } from "../layout/Layout";

const Hero = ({ heading, subheading, handleThemeChange }) => {
  const isDark = useContext(ThemeContext);

  return (
    <HeroSection bottomPadding={heading ? "var(--defaultPadding)" : null}>
      <ToggleContainer>
        <ToggleButton
          onChange={handleThemeChange}
          icons={{
            checked: (
              <FontAwesomeIcon
                icon={faSun}
                color="var(--colorWhite)"
                size="xs"
              />
            ),
            unchecked: (
              <FontAwesomeIcon
                icon={faMoon}
                color="var(--colorWhite)"
                size="xs"
              />
            ),
          }}
          defaultChecked={true}
        />
      </ToggleContainer>
      <Header isDark={isDark} />
      {heading && (
        <Reveal width="100%">
          <HeroContent>
            <h1>{heading}</h1>
            <p>{subheading}</p>
            <ButtonContainer>
              <ButtonPrimary isDark={isDark} as="a" href="/#about">
                Learn More
              </ButtonPrimary>
              <ButtonPrimary isDark={isDark} as="a" href="#contact">
                Contact Me
              </ButtonPrimary>
            </ButtonContainer>
          </HeroContent>
        </Reveal>
      )}
    </HeroSection>
  );
};

const HeroSection = styled.section`
  background: var(--heroBackground);
  background-blend-mode: overlay;
  padding: 2vw 0 ${({ bottomPadding = "2vw" }) => bottomPadding};
  border-bottom: 0.375rem solid var(--colorPrimary);
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.75rem;

  h1,
  p {
    color: var(--heroTextColor);
    text-align: center;
  }

  h1 {
    margin-bottom: 0.3125rem;
  }

  p {
    max-width: 90%;
    margin: 0 0 1.25rem;
    font-size: max(2.5vw, 1.3rem);
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  a + a {
    margin-left: 1.25rem;
  }
`;

const ToggleContainer = styled.div`
  margin: 10px 0 0 20px;
`;

export default Hero;

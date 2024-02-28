import styled from "@emotion/styled";
import { ButtonPrimary } from "../buttons";
import { Reveal } from "../animations/Reveal";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../layout/Layout";

const CTA = () => {
  const isDark = useContext(ThemeContext);

  return (
    <Reveal width="100%">
      <CTASection>
        <CTAContent>
          <h3>Check out what I've been working on.</h3>
          <p>
            Visit my GitHub page to see all of my personal projects and
            contributions.
          </p>
          <Link
            href="https://github.com/MichaelJDye"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <ButtonPrimary isDark={isDark}>View GitHub</ButtonPrimary>
          </Link>
        </CTAContent>
      </CTASection>
    </Reveal>
  );
};

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--ctaBackground);
  padding: var(--defaultPadding) 10px;
  text-align: center;
  color: var(--ctaTextColor);

  h3 {
    margin-bottom: 1.25rem;
  }

  p {
    width: 90%;
    max-width: 750px;
    margin: 0 auto 1.25rem;
  }
`;

const CTAContent = styled.div`
  width: fit-content;
`;

export default CTA;

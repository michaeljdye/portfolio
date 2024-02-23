import styled from "@emotion/styled";
import { ButtonPrimary } from "../buttons";
import { Reveal } from "../animations/Reveal";

const CTA = (props) => {
  return (
    <Reveal width="100%">
      <CTASection>
        <h3>Check out what I've been working on.</h3>
        <p>
          Visit my GitHub page to see all of my personal projects and
          contributions.
        </p>
        <ButtonPrimary
          dark
          as="a"
          href="https://github.com/MichaelJDye"
          target="_blank"
          rel="noreferrer nofollow"
        >
          View GitHub
        </ButtonPrimary>
      </CTASection>
    </Reveal>
  );
};

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  background: var(--ctaBackground);
  padding: var(--defaultPadding) 0;
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

export default CTA;

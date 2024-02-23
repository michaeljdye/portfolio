import styled from "@emotion/styled";
import { SectionHeading } from "../headings";
import { above } from "../../utils";
import { Reveal } from "../animations/Reveal";

const Bio = () => (
  <BioSection id="about">
    <Reveal width="100%">
      <BioInner>
        <BioImg src="/images/michael-dye-profile.JPG" alt="Michael Dye" />
        <BioContent>
          <SectionHeading align="right" isImage={true}>
            <img src="/images/squiggly-line.png" alt="Squiggly line" />
            hello, my name is <h2>Michael Dye</h2>
          </SectionHeading>
          <p>Hey there! 👋</p>
          <p>
            I'm a Software Engineer with more than 7 years of experience. I've
            been lucky enough to collaborate with some absolutely fantastic
            teams, creating mind-blowing products along the way. I call
            Nashville, TN my home, where I live with my lovely wife, awesome
            daughter, and the most cuddly cat you can imagine.
          </p>
          <p>
            Besides hanging out with my loved ones, you'll often find me
            strumming my guitar, diving into a good book, exploring the great
            outdoors, skateboarding, or getting my workout on at the gym. Life's
            an adventure, and I'm loving every moment of it!
          </p>
        </BioContent>
      </BioInner>
    </Reveal>
  </BioSection>
);

const BioSection = styled.section`
  background: var(--bioBackground);
  padding: var(--defaultPadding) 0 0 0;
  color: var(--bioColor);
`;

const BioInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;

  ${above.desktop`
    flex-direction: row;
    align-items: stretch;
  `}
`;

const BioImg = styled.img`
  width: 450px;
  max-width: 100%;
  object-fit: contain;
  margin-bottom: 3.75rem;

  ${above.desktop`
    margin-bottom: 0;
  `}
`;

const BioContent = styled.div`
  width: 450px;
  max-width: 100%;

  ${above.desktop`
      margin-left: auto;
  `}

  ul {
    list-style: none;
    margin: 20px 0 00;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 0;
    text-align: left;
  }

  span {
    display: block;
  }
`;

export default Bio;

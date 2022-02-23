import styled from "@emotion/styled";
import { SectionHeading } from "../headings";
import { above } from "../../utils";

const Bio = () => (
  <BioSection id="about">
    <BioInner>
      <BioImg
        src="/images/michael-dye-fullstack-developer.jpg"
        alt="Michael Dye"
      />
      <BioContent>
        <SectionHeading align="right" isImage={true}>
          <img src="/images/squiggly-line.png" alt="Squiggly line" />
          hello, my name is <h2>Michael Dye</h2>
        </SectionHeading>
        <p>
          I am a <em>Frontend Engineer</em> with{" "}
          <strong>7+ years in tech</strong> and <strong>4+ years</strong> of
          experience building engaging, performant, and accessible websites and
          applications. I have...
          <ul>
            <li>
              🔧 Built fully revamped Bellhop CX experience, including new
              booking flow, dashboard, and marketing site.
            </li>
            <li>
              👨‍💻 Developed features for enterprise marketing sites for Emma,
              Campaign Monitor, Delivra, and Nissan.
            </li>
            <li>
              👨‍💼 And led 100+ web development projects for enterprises and small
              businesses.
            </li>
          </ul>
        </p>
      </BioContent>
    </BioInner>
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

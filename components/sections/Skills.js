import styled from "@emotion/styled";
import {
  faNodeJs,
  faReact,
  faCss3,
  faHtml5,
  faAws,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { above, below } from "../../utils";
import { Reveal } from "../animations/Reveal";

const faGrapQl = {
  prefix: "fac",
  iconName: "graphql", // Any name you like
  icon: [
    400, // width
    400, // height
    [], // ligatures
    "", // unicode (if relevant)
    "M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z M39.8 272.2h320.3v16.6H39.8z M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9", // svg path data
  ],
};

const Skills = () => {
  const icons = [faNodeJs, faGrapQl, faReact, faCss3, faHtml5, faAws];

  return (
    <Reveal width="100%">
      <SkillsSection>
        <SkillsList>
          {icons.map((icon, i) => (
            <li key={i}>
              <FontAwesomeIcon icon={icon} />
            </li>
          ))}
        </SkillsList>
      </SkillsSection>
    </Reveal>
  );
};

const SkillsSection = styled.div`
  display: flex;
  justify-content: center;
  background: var(--skillsBackground);
  padding: 1.25rem 0;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1), 0px -5px 10px rgba(0, 0, 0, 0.1);
`;

const SkillsList = styled.ul`
  --gap: 1.25rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 70%;
  list-style: none;
  padding: 0;

  ${above.desktop`
    --gap: 6.25rem;
  `}

  li {
    width: 50%;
    text-align: center;

    ${above.mini`    
      width: 33.33%
    `}

    ${above.desktop`    
      width: auto;
    `}

  svg {
    font-size: 5rem;
    color: var(--skillsIconColor);

    ${above.desktop`
      font-size: 6rem;
    `}
  }
`;

export default Skills;

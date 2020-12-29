import styled from '@emotion/styled'
import {
  faJs,
  faNodeJs,
  faReact,
  faCss3,
  faHtml5,
  faPython,
  faPhp,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { above, below } from '../../utils'

const Skills = () => {
  const icons = [faNodeJs, faPython, faPhp, faReact, faCss3, faHtml5]

  return (
    <SkillsSection>
      <SkillsList>
        {icons.map((icon, i) => (
          <li key={i}>
            <FontAwesomeIcon icon={icon} />
          </li>
        ))}
      </SkillsList>
    </SkillsSection>
  )
}

const SkillsSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1), 0px -5px 10px rgba(0, 0, 0, 0.1);
`

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

    ${above.desktop`
      font-size: 6rem;
    `}
  }
`

export default Skills

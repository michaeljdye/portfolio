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
import { below } from '../../utils'

const Skills = () => {
  const icons = [faNodeJs, faPython, faPhp, faReact, faCss3, faHtml5]

  return (
    <SkillsSection>
      <SkillsList>
        {icons.map(icon => (
          <li>
            <FontAwesomeIcon icon={icon} size='6x' />
          </li>
        ))}
      </SkillsList>
    </SkillsSection>
  )
}

const SkillsSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1), 0px -5px 10px rgba(0, 0, 0, 0.1);
`

const SkillsList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 0;

  > * + * {
    margin-left: 100px;
  }

  ${below.phone`
    flex-direction: column;
    align-items: center;
  `}

  svg {
    ${below.tablet`
      font-size: 5rem;
    `}
  }
`

export default Skills

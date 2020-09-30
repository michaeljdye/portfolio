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

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsList>
        <li>
          <FontAwesomeIcon icon={faNodeJs} size='7x' />
        </li>
        <li>
          <FontAwesomeIcon icon={faPython} size='7x' />
        </li>
        <li>
          <FontAwesomeIcon icon={faPhp} size='7x' />
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} size='7x' />
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3} size='7x' />
        </li>
        <li>
          <FontAwesomeIcon icon={faHtml5} size='7x' />
        </li>
      </SkillsList>
    </SkillsSection>
  )
}

const SkillsSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0;
`

const SkillsList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
`

export default Skills

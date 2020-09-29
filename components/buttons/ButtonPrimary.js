import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ButtonPrimary = ({ children }) => (
  <Button>
    {children}
    <FontAwesomeIcon icon={faChevronRight} />
  </Button>
)

const Button = styled.button`
  background: transparent;
  border: 1px solid var(--colorPrimary);
  padding: 10px 8px;
  color: var(--colorWhite);
  font-size: 1rem;
  text-transform: uppercase;

  svg {
    margin-left: 5px;
  }
`

export default ButtonPrimary
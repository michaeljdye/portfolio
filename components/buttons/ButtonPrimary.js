import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const ButtonPrimary = ({ color = 'light', children }) => (
  <Button color={color}>
    {children}
    <FontAwesomeIcon icon={faChevronRight} />
  </Button>
)

const Button = styled.button`
  background: transparent;
  border: 1px solid var(--colorPrimary);
  padding: 10px 8px;
  color: ${({ color }) =>
    color === 'light' ? 'var(--colorWhite)' : 'var(--colorDark)'};
  font-size: 1rem;
  text-transform: uppercase;

  svg {
    margin-left: 5px;
  }
`

export default ButtonPrimary

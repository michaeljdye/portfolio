import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const ButtonPrimary = ({ color = 'light', children, ...rest }) => (
  <Button {...rest} color={color}>
    {children}
    <FontAwesomeIcon icon={faChevronRight} />
  </Button>
)

const Button = styled.button`
  display: inline-block;
  background: transparent;
  border: 1px solid var(--colorPrimary);
  padding: 10px 8px;
  color: ${({ dark }) => (dark ? 'var(--colorDark)' : 'var(--colorWhite)')};
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;

  svg {
    margin-left: 5px;
  }
`

export default ButtonPrimary

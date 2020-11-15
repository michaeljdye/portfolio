import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const ButtonPrimary = ({
  color = 'light',
  icon = faChevronRight,
  children,
  ...rest
}) => (
  <Button {...rest} color={color}>
    {children}
    <FontAwesomeIcon icon={icon} />
  </Button>
)

const Button = styled.button`
  display: inline-block;
  background: transparent;
  border: 1px solid var(--colorPrimary);
  padding: 10px;
  color: ${({ dark }) => (dark ? 'var(--colorDark)' : 'var(--colorWhite)')};
  font-size: 1.125rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--colorPrimary);
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--colorDark);
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  svg {
    margin-left: 5px;
    transition: all 0.3s ease;
  }
`

export default ButtonPrimary

import styled from "@emotion/styled";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const ButtonPrimary = ({
  color = "light",
  icon = faChevronRight,
  children,
  isDark,
  ...rest
}) => (
  <ButtonContainer isDark={isDark} {...rest}>
    <Mask isDark={isDark}>{children}</Mask>
    <Button isDark={isDark}>{children}</Button>
  </ButtonContainer>
);

const Mask = styled.span`
  position: absolute;
  color: ${({ isDark }) => (isDark ? "var(--colorWhite)" : "var(--colorDark)")};
  text-align: center;
  width: 101%;
  position: absolute;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 17px;
  padding: 0px 20px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  border: 1px solid
    ${({ isDark }) => (isDark ? "var(--colorWhite)" : "var(--colorDark)")};
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 101%;
  height: 100%;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 500;
  background: ${({ isDark }) =>
    isDark ? "var(--colorWhite)" : "var(--colorDark)"};
  padding: 0px 20px;
  -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
  mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
  -webkit-mask-size: $x1 $y1;
  mask-size: 3000% 100%;
  border: none;
  color: ${({ isDark }) => (isDark ? "var(--colorDark)" : "var(--colorWhite)")};
  cursor: pointer;
  -webkit-animation: ani2 0.7s steps(29) forwards;
  animation: ani2 0.7s steps(29) forwards;

  &:hover {
    -webkit-animation: ani 0.7s steps(29) forwards;
    animation: ani 0.7s steps(29) forwards;
  }

  @-webkit-keyframes ani {
    from {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }

    to {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
    }
  }

  @keyframes ani {
    from {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }

    to {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
    }
  }

  @-webkit-keyframes ani2 {
    from {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
    }

    to {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }
  }

  @keyframes ani2 {
    from {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
    }

    to {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }
  }
`;

export default ButtonPrimary;

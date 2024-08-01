import React from "react";
import styled from "@emotion/styled";
import { below } from "../../utils/breakpoints";

export const ThreeCol = ({ children }) => {
  return <ThreeColS>{children}</ThreeColS>;
};

const ThreeColS = styled.div`
  display: flex;
  background: var(--colorWhite);
  width: 80%;
  margin: 0 auto;

  li {
    width: 33.33%;
    list-style: none;
  }

  ${below.phone`
      flex-direction: column-reverse;
  `}
`;

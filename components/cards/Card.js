import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const Card = ({ title, subtitle, image, description }) => {
  return (
    <CardS>
      <img src={image} alt="" />
      <h4>{title}</h4>
      <small>{subtitle}</small>
      <p>{description}</p>
      <Link href="/projects/[id]" as="/projects/1">
        here
      </Link>
    </CardS>
  );
};

const CardS = styled.div`
  height: 300px;
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
`;

export default Card;

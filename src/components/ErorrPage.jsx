import React from "react";
import Bckg from "./background/Bckg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErorrPage = ({ error }) => {
  return (
    <Bckg logheight={"100vh"}>
      <S.Container>
        <p>{error ? error?.data.message : "Something went wrong !"}</p>
        <S.ErrorLink to="/">Back</S.ErrorLink>
      </S.Container>
    </Bckg>
  );
};

export default ErorrPage;

const S = {
  Container: styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-direction: column;
  `,
  ErrorLink: styled(Link)`
    text-decoration: none;
    &:hover {
      transition: 0.5s;
      color: black;
    }
  `,
};

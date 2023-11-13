import React from "react";
import Bckg from "../components/background/Bckg";
import Menu from "../components/nav/Nav";
import styled from "styled-components";
import Board from "../features/board/Board";
import useTitle from "../hooks/useTitle";

const BoardPage = () => {
  useTitle("Board");
  return (
    <S.MainWrapper>
      <Menu activeNum={0} />
      <Board />
    </S.MainWrapper>
  );
};

export default BoardPage;

const S = {
  MainWrapper: styled.div`
    width: 100%;
    height: 97vh;

    display: flex;
    align-items: center;
    @media (max-width: 970px) {
      height: 100%;
    }
  `,
};

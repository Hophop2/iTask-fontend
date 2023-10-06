import React from "react";
import Bckg from "../components/background/Bckg";
import Menu from "../components/nav/Menu";
import styled from "styled-components";
import Board from "../features/board/Board";
import useTitle from "../hooks/useTitle";

const BoardPage = () => {
  useTitle("Board");
  return (
    <Bckg>
      <MainWrapper>
        <Menu activeNum={0} />
        <Board />
      </MainWrapper>
    </Bckg>
  );
};

export default BoardPage;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

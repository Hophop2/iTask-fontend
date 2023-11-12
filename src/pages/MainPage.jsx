import React from "react";
import Bckg from "../components/background/Bckg";
import Menu from "../components/nav/Menu";
import DashBoard from "../features/dashboard/DashBoard";
import styled from "styled-components";
import useTitle from "../hooks/useTitle";
const MainPage = () => {
  useTitle("Dashboard");
  return (
    <Bckg>
      <S.MainWrapper>
        <Menu activeNum={2} />
        <DashBoard />
      </S.MainWrapper>
    </Bckg>
  );
};

export default MainPage;
const S = {
  MainWrapper: styled.div`
    width: 100%;

    min-height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

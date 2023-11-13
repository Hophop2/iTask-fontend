import React from "react";
import Bckg from "../components/background/Bckg";
import Menu from "../components/nav/Nav";
import DashBoard from "../features/dashboard/DashBoard";
import styled from "styled-components";
import useTitle from "../hooks/useTitle";
const MainPage = () => {
  useTitle("Dashboard");
  return (
    <S.MainWrapper>
      <Menu activeNum={2} />
      <DashBoard />
    </S.MainWrapper>
  );
};

export default MainPage;
const S = {
  MainWrapper: styled.div`
    width: 100%;

    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 970px) {
      height: 100%;
    }
  `,
};

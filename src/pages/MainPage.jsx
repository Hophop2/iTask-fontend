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
      <MainWrapper>
        <Menu activeNum={2} />
        <DashBoard />
      </MainWrapper>
    </Bckg>
  );
};

export default MainPage;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

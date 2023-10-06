import React from "react";
import Overall from "./userStats/Overall";
import {
  BotWrapper,
  DashContainer,
  Title,
  TopContainer,
  TopWrapper,
  UserBox,
} from "./DashBoardStyle";
import MonthGoals from "./monthgoal/MonthGoals";
import useAuth from "../../hooks/useAuth";
import Weather from "./weather/Weather";
import UrgentsTasks from "./urgentsTask/UrgentsTasks";

const DashBoard = () => {
  const { username } = useAuth();

  return (
    <DashContainer>
      <TopContainer>
        <UserBox>
          <Title>Hi, {username}!</Title>
        </UserBox>
        <TopWrapper>
          <Overall />
          <Weather />
        </TopWrapper>
        <BotWrapper>
          <MonthGoals />
          <UrgentsTasks />
        </BotWrapper>
      </TopContainer>
    </DashContainer>
  );
};

export default DashBoard;

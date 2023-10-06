import React from "react";

import {
  Square,
  Num,
  TasksStatus,
  TopWrapper,
  TopBox,
  Numberr,
  SLine,
  Line,
  BotWrapper,
  SubText,
} from "../OverallStyle";

const UserNums = ({ userData, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;
  const { taskCounts, userStats } = userData;
  return (
    <>
      <TopWrapper>
        <TopBox>
          <Numberr>{userStats.createdTask}</Numberr>
          <SubText>Tasks created</SubText>
        </TopBox>
        <SLine />
        <TopBox>
          <Numberr>{userStats.deletedTask}</Numberr>
          <SubText>Tasks deleted</SubText>
        </TopBox>
      </TopWrapper>

      <Line />
      <BotWrapper>
        {taskCounts.map((item, i) => (
          <Square key={i}>
            <Num>{item.count}</Num>
            <TasksStatus>{item.name}</TasksStatus>
          </Square>
        ))}
      </BotWrapper>
    </>
  );
};

export default UserNums;

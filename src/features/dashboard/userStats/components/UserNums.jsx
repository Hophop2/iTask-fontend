import React from "react";
import { S } from "../OverallStyle";

const UserNums = ({ userData, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;
  const { taskCounts, userStats } = userData;
  return (
    <>
      <S.TopWrapper>
        <S.TopBox>
          <S.Numberr>{userStats.createdTask}</S.Numberr>
          <S.SubText>Tasks created</S.SubText>
        </S.TopBox>
        <S.SLine />
        <S.TopBox>
          <S.Numberr>{userStats.deletedTask}</S.Numberr>
          <S.SubText>Tasks deleted</S.SubText>
        </S.TopBox>
      </S.TopWrapper>

      <S.Line />
      <S.BotWrapper>
        {taskCounts.map((item, i) => (
          <S.Square key={i}>
            <S.Num>{item.count}</S.Num>
            <S.TasksStatus>{item.name}</S.TasksStatus>
          </S.Square>
        ))}
      </S.BotWrapper>
    </>
  );
};

export default UserNums;

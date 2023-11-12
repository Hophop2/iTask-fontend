import React from "react";
import { useGetUserStatsQuery } from "./userStatsApiSlice";
import UserNums from "./components/UserNums";
import styled from "styled-components";

const Overall = () => {
  const { data: userData, isLoading } = useGetUserStatsQuery("userStats", {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  return (
    <S.Box>
      <S.Title>Overall information</S.Title>

      <UserNums userData={userData} isLoading={isLoading} />
    </S.Box>
  );
};

export default Overall;

const S = {
  Box: styled.div`
    width: 17rem;
    height: 17rem;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;

    background: ${(props) => props.theme.colors.linearDark};
    border-radius: 40px;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  Title: styled.h3`
    letter-spacing: 1px;
    margin: 0;
  `,
};

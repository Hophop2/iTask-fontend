import React from "react";
import { Box, Title } from "./OverallStyle";
import { useGetUserStatsQuery } from "./userStatsApiSlice";
import UserNums from "./components/UserNums";

const Overall = () => {
  const { data: userData, isLoading } = useGetUserStatsQuery("userStats", {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  return (
    <Box>
      <Title>Overall information</Title>

      <UserNums userData={userData} isLoading={isLoading} />
    </Box>
  );
};

export default Overall;

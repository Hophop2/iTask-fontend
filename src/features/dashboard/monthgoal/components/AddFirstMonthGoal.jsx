import React from "react";
import { Box, IconWrapper, Title, TopWrapper } from "../MonthGoalsStyle";
import AddMonthGoals from "../AddMonthGoals";
const AddFirstMonthGoal = ({ handleOptionSelect, refetch, error }) => {
  return (
    <Box>
      <TopWrapper>
        <Title>MonthGoals</Title>
        <IconWrapper></IconWrapper>
      </TopWrapper>
      <p>{error ? error.data.message : null}</p>
      <p>Dodaj pierwszy swój cel</p>

      <AddMonthGoals
        refetch={refetch}
        handleOptionSelect={handleOptionSelect}
        disableBack={true}
      />
    </Box>
  );
};

export default AddFirstMonthGoal;

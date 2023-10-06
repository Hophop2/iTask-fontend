import React, { useState } from "react";
import { Box, IconWrapper, Title, TopWrapper } from "./MonthGoalsStyle";
import CircleProBar from "../../../components/circlebar/CircleProBar";

import { useGetMonthGoalsQuery } from "./monthGoalApiSlice";
import ListMonthGoals from "./ListMonthGoals";
import EditMonthGoals from "./EditMonthGoal";
import EditChoiceList from "./components/EditChoiceList";
import AddMonthGoals from "./AddMonthGoals";
import AddFirstMonthGoal from "./components/AddFirstMonthGoal";

const MonthGoals = () => {
  let content;
  const [selectedOption, setSelectedOption] = useState("list");
  const {
    data: monthGoals,
    isLoading,
    isSuccess,
    refetch,
    isError,
    error,
  } = useGetMonthGoalsQuery("MonthGoal", {
    refetchOnMountOrArgChange: true,
  });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  if (isLoading)
    content = (
      <Box>
        <TopWrapper>
          <Title>MonthGoals</Title>
        </TopWrapper>
      </Box>
    );

  if (
    !monthGoals ||
    !monthGoals.ids ||
    monthGoals.ids.length === 0 ||
    isError ||
    error
  ) {
    content = (
      <AddFirstMonthGoal
        handleOptionSelect={handleOptionSelect}
        refetch={refetch}
        error={error}
      />
    );
  }
  if (isSuccess) {
    const { entities } = monthGoals;

    const initialGoals = monthGoals.ids.map((id) => {
      const entity = entities[id];
      return {
        _id: entity._id,
        title: entity.title,
        completed: entity.completed,
      };
    });

    const numOfDoneGoals = () => {
      let numOfDone = 0;
      monthGoals.ids.map((id) => {
        const entity = entities[id];

        if (entity.completed) {
          numOfDone += 1;
        }
      });
      return numOfDone;
    };
    content = (
      <Box>
        <TopWrapper>
          <Title>MonthGoals</Title>

          <IconWrapper>
            <EditChoiceList handleOptionSelect={handleOptionSelect} />

            <CircleProBar
              numOfDone={numOfDoneGoals()}
              allNum={monthGoals.ids.length}
            />
          </IconWrapper>
        </TopWrapper>

        {selectedOption === "edit" && (
          <EditMonthGoals
            refetch={refetch}
            monthGoals={initialGoals}
            handleOptionSelect={handleOptionSelect}
          />
        )}
        {selectedOption === "add" && (
          <AddMonthGoals
            handleOptionSelect={handleOptionSelect}
            refetch={refetch}
          />
        )}
        {selectedOption === "list" && (
          <ListMonthGoals refetch={refetch} monthGoals={initialGoals} />
        )}
      </Box>
    );
  }

  return content;
};

export default MonthGoals;

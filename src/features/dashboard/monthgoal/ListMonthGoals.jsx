import React, { useEffect, useState } from "react";
import { MonthTask, MonthTaskWrapper, TaskText } from "./MonthGoalsStyle";
import { useUpdateMonthGoalMutation } from "./monthGoalApiSlice";

const ListMonthGoals = ({ monthGoals, refetch }) => {
  const [goalList, setGoalList] = useState([
    {
      _id: "",
      title: "",
      completed: false,
    },
  ]);

  useEffect(() => {
    setGoalList(monthGoals);
  }, []);

  const [UpdateMonthGoal] = useUpdateMonthGoalMutation();

  const handleGoalChange = (e, i) => {
    const { name, checked } = e.target;
    const updatedList = goalList.map((item, index) =>
      index === i ? { ...item, [name]: checked } : item
    );
    setGoalList(updatedList);
    handleUpdateMonthGoals(updatedList);
  };

  const handleUpdateMonthGoals = async (updatedList) => {
    const goalsToUpdate = updatedList.map((item) => ({
      _id: item._id,
      title: item.title,
      completed: item.completed,
    }));

    await UpdateMonthGoal(goalsToUpdate);
    refetch();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <MonthTaskWrapper>
        {goalList.map((goal, i) => (
          <MonthTask key={i}>
            <input
              type="checkbox"
              name="completed"
              checked={goal.completed}
              onChange={(e) => handleGoalChange(e, i)}
            />
            <TaskText check={goal.completed}>{goal.title}</TaskText>
          </MonthTask>
        ))}
      </MonthTaskWrapper>
    </form>
  );
};

export default ListMonthGoals;

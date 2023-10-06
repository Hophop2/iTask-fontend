import React, { useEffect, useState } from "react";
import {
  AddMonthBtn,
  BackToMonthList,
  MonthEditInput,
  MonthTask,
  MonthTaskWrapper,
} from "./MonthGoalsStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  useDeleteMonthGoalMutation,
  useUpdateMonthGoalMutation,
} from "./monthGoalApiSlice";

const EditMonthGoals = ({ monthGoals, handleOptionSelect, refetch }) => {
  const [UpdateMonthGoal, { isLoading }] = useUpdateMonthGoalMutation();

  const [DeleteMonthGoal] = useDeleteMonthGoalMutation();

  const [goalList, setGoalList] = useState([
    {
      _id: "",
      title: "",
      completed: false,
    },
  ]);

  useEffect(() => {
    setGoalList(monthGoals);
  }, [monthGoals]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const handleGoalChange = (e, i) => {
    const { name, value } = e.target;
    const updatedList = goalList.map((item, index) =>
      index === i ? { ...item, [name]: value } : item
    );
    setGoalList(updatedList);
  };

  const handleDeleteMonthGoal = async (i, goalId) => {
    const newForm = [...goalList];
    newForm.splice(i, 1);
    setGoalList(newForm);

    await DeleteMonthGoal({ id: goalId });
  };

  const handleUpdateMonthGoals = async (e) => {
    e.preventDefault();

    const goalsToUpdate = goalList.map((item) => ({
      _id: item._id,
      title: item.title,
      completed: item.completed,
    }));

    refetch();
    if (goalsToUpdate.length === 0) {
      handleOptionSelect("");
    } else {
      await UpdateMonthGoal(goalsToUpdate);
      handleOptionSelect("list");
    }
  };
  console.log(goalList);
  return (
    <MonthTaskWrapper>
      <form onSubmit={handleUpdateMonthGoals}>
        {goalList.map((goal, i) => {
          console.log(i);

          return (
            <>
              <MonthTask key={goal._id}>
                <FontAwesomeIcon
                  onClick={() => handleDeleteMonthGoal(i, goal._id)}
                  icon={faXmark}
                />
                <MonthEditInput
                  name="title"
                  type="text"
                  value={goal.title}
                  placeholder={goal.title}
                  onChange={(e) => handleGoalChange(e, i)}
                />
              </MonthTask>
              <br />
            </>
          );
        })}
        <div className="row">
          <AddMonthBtn type="submit">Change</AddMonthBtn>
          <BackToMonthList onClick={() => handleOptionSelect("list")}>
            Back
          </BackToMonthList>
        </div>
      </form>
    </MonthTaskWrapper>
  );
};

export default EditMonthGoals;

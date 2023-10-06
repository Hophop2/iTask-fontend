import React, { useEffect, useState } from "react";
import {
  AddMonthBtn,
  BackToMonthList,
  MonthEditInput,
  MonthTask,
  MonthTaskWrapper,
} from "./MonthGoalsStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAddNewMonthGoalMutation } from "./monthGoalApiSlice";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const AddMonthGoals = ({ handleOptionSelect, refetch, disableBack }) => {
  const [goalList, setGoalList] = useState([
    {
      title: "",
      completed: false,
    },
  ]);

  const { userId } = useAuth();

  const [addNewMonthGoal, { isSuccess, isError, error }] =
    useAddNewMonthGoalMutation();

  useEffect(() => {
    if (isError) {
      toast.error(error.data.message);
      setGoalList([
        {
          title: "",
          completed: false,
        },
      ]);
    }
  }, [isError, error]);

  if (isSuccess) {
    handleOptionSelect("list");
    refetch();
  }

  const onGoalListChanged = (e, i) => {
    const { name, value } = e.target;
    const updatedList = goalList.map((item, index) =>
      index === i ? { ...item, [name]: value } : item
    );
    setGoalList(updatedList);
  };

  const addRow = () => {
    setGoalList([...goalList, { title: "", completed: false }]);
  };
  const onRemove = (i) => {
    const newForm = [...goalList];
    newForm.splice(i, 1);
    setGoalList(newForm);
  };

  const handleSendMonthGoals = async (e) => {
    e.preventDefault();

    const goalsToSend = goalList.map((item) => ({
      user: userId,
      title: item.title,
      completed: item.completed,
    }));

    await addNewMonthGoal({ goals: goalsToSend });
  };

  return (
    <MonthTaskWrapper>
      <form onSubmit={handleSendMonthGoals}>
        {goalList.map((item, i) => {
          return (
            <>
              <MonthTask>
                {goalList.length !== 1 && (
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => onRemove(i)}
                    icon={faXmark}
                  />
                )}
                {goalList.length - 1 === i && (
                  <FontAwesomeIcon
                    onClick={addRow}
                    style={{ cursor: "pointer" }}
                    icon={faPlus}
                  />
                )}
                <MonthEditInput
                  type="text"
                  name="title"
                  value={item.title}
                  onChange={(e) => onGoalListChanged(e, i)}
                />
              </MonthTask>
              <br />
            </>
          );
        })}
        <div className="row">
          <AddMonthBtn>Send</AddMonthBtn>
          {disableBack ? null : (
            <BackToMonthList onClick={() => handleOptionSelect("list")}>
              Back
            </BackToMonthList>
          )}
        </div>
      </form>
    </MonthTaskWrapper>
  );
};

export default AddMonthGoals;

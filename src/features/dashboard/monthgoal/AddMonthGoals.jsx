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

  const [addNewMonthGoal, { isLoading, isError, error }] =
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
  }, [isError, error, handleOptionSelect, refetch]);

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

    const isTitleTooLong = goalList.some((item) => item.title.length > 16);

    if (isTitleTooLong) {
      toast.error("One or more titles are too long (more than 16 characters).");
    } else {
      const goalsToSend = goalList.map((item) => ({
        user: userId,
        title: item.title,
        completed: item.completed,
      }));

      await addNewMonthGoal({ goals: goalsToSend });
      refetch();
      handleOptionSelect("list");
    }
  };
  if (isLoading) return <p>Loading...</p>;

  return (
    <MonthTaskWrapper>
      <form onSubmit={handleSendMonthGoals}>
        {goalList.map((item, i) => {
          return (
            <React.Fragment key={i}>
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
            </React.Fragment>
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

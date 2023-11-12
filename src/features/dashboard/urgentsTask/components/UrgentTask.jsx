import React from "react";

import { S } from "../urgentsTasksStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import CircleProBar from "../../../../components/circlebar/CircleProBar";
const UrgentTask = ({ task }) => {
  const navigate = useNavigate();
  const { title, date, boardName, priority, board, _id, subtasks } = task;

  const numOfDoneSubTasks = () => {
    let numOfDone = 0;
    subtasks.map((item) => {
      if (item.completed) {
        numOfDone += 1;
      }
    });
    return numOfDone;
  };

  const handleClick = () => {
    if (
      !document
        .querySelector(".inner-carousel")
        .classList.contains("is-dragging")
    ) {
      navigate(`/board/${board}/tasks/${_id}`);
    }
  };
  return (
    <S.Container onClick={handleClick}>
      <S.TopBox>
        <FontAwesomeIcon
          icon={faFlag}
          style={{
            color:
              priority === "High"
                ? "red"
                : priority === "Normal"
                ? "orange"
                : "white",
          }}
        />

        <CircleProBar
          allNum={subtasks.length}
          numOfDone={numOfDoneSubTasks()}
        />
      </S.TopBox>
      <S.TitleTask>{title}</S.TitleTask>
      <S.BotBox>
        <S.DateP>{date}</S.DateP>
        <S.BoardName>{boardName}</S.BoardName>
      </S.BotBox>
    </S.Container>
  );
};

export default UrgentTask;

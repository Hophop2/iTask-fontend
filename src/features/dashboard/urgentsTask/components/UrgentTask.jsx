import React from "react";
import styled from "styled-components";
import {
  BoardName,
  BotBox,
  DateP,
  TitleTask,
  TopBox,
} from "../urgentsTasksStyle";
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
    <Container onClick={handleClick}>
      <TopBox>
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
      </TopBox>
      <TitleTask>{title}</TitleTask>
      <BotBox>
        <DateP>{date}</DateP>
        <BoardName>{boardName}</BoardName>
      </BotBox>
    </Container>
  );
};

export default UrgentTask;

const Container = styled.div`
  min-width: 13rem;
  height: 13rem;
  padding: 1rem;
  background-color: black;
  border-radius: 3rem;
  background-color: rgba(71, 71, 71, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  margin-right: 1rem;
`;

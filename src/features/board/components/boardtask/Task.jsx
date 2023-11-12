import React from "react";
import { S } from "../TaskStyle";
import CircleProBar from "../../../../components/circlebar/CircleProBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router";

import ChoiceList from "./ChoiceList";

const Task = ({ tasks, refetch }) => {
  const flattenedTasks = tasks.flatMap((nestedArray) => nestedArray);

  const navigate = useNavigate();

  const { boardId } = useParams();

  return flattenedTasks.map((task, id) => {
    const numOfDoneSubTasks = () => {
      let numOfDone = 0;
      task.subtasks.map((item) => {
        if (item.completed) {
          numOfDone += 1;
        }
      });
      return numOfDone;
    };
    return (
      <S.TaskContainer
        key={task._id}
        onClick={() => navigate(`/board/${boardId}/tasks/${task._id}`)}
      >
        <S.TopContainer>
          <S.TaskTitle>{task.title}</S.TaskTitle>
          <S.IconWrapper>
            <FontAwesomeIcon
              icon={faFlag}
              style={{
                color:
                  task.priority === "High"
                    ? "red"
                    : task.priority === "Normal"
                    ? "orange"
                    : "white",
              }}
            />
            <ChoiceList taskId={task._id} refetch={refetch} />
          </S.IconWrapper>
        </S.TopContainer>
        <div>
          <S.DateBox>{task.date}</S.DateBox>
        </div>
        <S.CircleBox>
          <CircleProBar
            allNum={task.subtasks.length}
            numOfDone={numOfDoneSubTasks()}
          />
        </S.CircleBox>
      </S.TaskContainer>
    );
  });
};

export default Task;

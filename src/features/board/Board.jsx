import React from "react";

import {
  BoardContainer,
  ColumnContainer,
  CreateTaskLink,
  TopBtnBox,
} from "./BoardStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router";

import TaskFilter from "./components/TaskFilter";
import { useGetAllUserTasksQuery } from "../task/taskApiSlice";
import ErorrPage from "../../components/ErorrPage";

const Board = () => {
  const { boardId } = useParams();

  const {
    data: tasks,
    isLoading,
    isSuccess,
    refetch,
    isError,
    error,
  } = useGetAllUserTasksQuery(boardId, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnSuccess: true,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError || error) return <ErorrPage error={error} />;

  const taskList = tasks.ids.map((id) => {
    const entity = tasks.entities[id];
    return entity;
  });

  return (
    <>
      <BoardContainer>
        <TopBtnBox>
          <CreateTaskLink to="add">
            <FontAwesomeIcon icon={faPlus} />
            Create
          </CreateTaskLink>
        </TopBtnBox>
        <ColumnContainer>
          <TaskFilter tasks={taskList} refetch={refetch} status="To Do" />
          <TaskFilter tasks={taskList} refetch={refetch} status="In Progress" />
          <TaskFilter tasks={taskList} refetch={refetch} status="Done" />
        </ColumnContainer>
      </BoardContainer>
    </>
  );
};

export default Board;

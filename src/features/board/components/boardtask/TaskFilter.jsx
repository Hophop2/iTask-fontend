import React from "react";

import Task from "./Task";
import styled from "styled-components";
const TaskFilter = ({ status, tasks, refetch }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <S.Container>
      <S.TitleColTask>{status}</S.TitleColTask>

      <Task tasks={filteredTasks} refetch={refetch} />
    </S.Container>
  );
};

export default TaskFilter;
const S = {
  Container: styled.div`
    width: 320px;
    height: 80vh;
    border-radius: 0.625rem;
    background: rgba(255, 255, 255, 0.6);
    padding-top: 10px;
    padding-bottom: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  `,

  TitleColTask: styled.h2`
    align-self: flex-start;
    margin-left: 1.1rem;
  `,
};

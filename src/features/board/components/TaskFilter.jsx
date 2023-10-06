import React from "react";
import { Container, TitleColTask } from "./TaskColumnStyle";
import Task from "./Task";
const TaskFilter = ({ status, tasks, refetch }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <Container>
      <TitleColTask>{status}</TitleColTask>

      <Task tasks={filteredTasks} refetch={refetch} />
    </Container>
  );
};

export default TaskFilter;

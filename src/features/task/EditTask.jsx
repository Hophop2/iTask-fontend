import React, { useEffect, useState } from "react";
import {
  Completed,
  CompletedBox,
  Container,
  Date,
  InfoWrapper,
  LeftSideBox,
  Line,
  RightSideBox,
} from "./TaskInfoStyle";
import EditSubtasksList from "./components/EditSubtasksList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faXmark } from "@fortawesome/free-solid-svg-icons";
import Bckg from "../../components/background/Bckg";
import { useNavigate, useParams } from "react-router";
import { useGetTaskByIdQuery, useUpdateTaskMutation } from "./taskApiSlice";
import Loading from "../../components/Loading";
import Input from "../../components/inputs/Input";
import styled from "styled-components";
import ErorrPage from "../../components/ErorrPage";
import useTitle from "../../hooks/useTitle";

const EditTask = () => {
  const statusArray = ["To Do", "In Progress", "Done"];
  const priorityArray = ["Low", "Normal", "High"];
  useTitle("Edit Task");

  const [updateTask] = useUpdateTaskMutation();
  const { taskId } = useParams();

  const [taskData, setTaskData] = useState({
    status: "",
    priority: "",
    title: "",
    date: "",
    context: "",
    subtasks: [],
  });

  const navigate = useNavigate();
  const {
    data: singleTaskData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTaskByIdQuery(taskId);

  useEffect(() => {
    if (isSuccess && singleTaskData.ids.length > 0) {
      const taskEntity = singleTaskData.entities[singleTaskData.ids[0]];

      const updatedTaskData = {
        id: taskEntity.id,
        status: taskEntity.status,
        priority: taskEntity.priority,
        title: taskEntity.title,
        date: taskEntity.date,
        context: taskEntity.context,
        subtasks: taskEntity.subtasks,
      };

      setTaskData(updatedTaskData);
    }
  }, [isSuccess, singleTaskData]);

  const toggleProperty = (arrayToUpdate) => {
    const currentIndex = arrayToUpdate.indexOf(
      taskData[arrayToUpdate === statusArray ? "status" : "priority"]
    );
    const nextIndex = (currentIndex + 1) % arrayToUpdate.length;
    setTaskData({
      ...taskData,
      [arrayToUpdate === statusArray ? "status" : "priority"]:
        arrayToUpdate[nextIndex],
    });
  };

  const onChangeText = (e) => {
    const { value, name } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const sendUpdateTask = async (e) => {
    e.preventDefault();
    const { status, priority, context, title, subtasks, date } = taskData;

    await updateTask({
      updatedTask: {
        taskId: taskId,
        subtasks: subtasks,
        title: title,
        context: context,
        status: status,
        priority: priority,
        date: date,
      },
    });
    navigate(-1);
  };

  if (isLoading) return <Loading wrapHeight={"100vh"} wrapWidth={"100%"} />;
  if (isError) return <ErorrPage error={error} />;

  return (
    <Bckg>
      <Container>
        <FormBox onSubmit={sendUpdateTask}>
          <LeftSideBox>
            <CompletedBox>
              <FontAwesomeIcon
                style={{
                  color: "white",
                  fontSize: "1.7rem",
                  cursor: "pointer",
                }}
                icon={faXmark}
                onClick={() => navigate(-1)}
              />
              <Completed
                style={{
                  cursor: "pointer",
                }}
                onClick={() => toggleProperty(statusArray)}
              >
                {taskData.status}
              </Completed>

              <FontAwesomeIcon
                onClick={() => toggleProperty(priorityArray)}
                icon={faFlag}
                style={{
                  color:
                    taskData.priority === "High"
                      ? "red"
                      : taskData.priority === "Normal"
                      ? "orange"
                      : "white",
                  cursor: "pointer",
                }}
              />
            </CompletedBox>
            <InfoWrapper>
              <Input
                placeholder={taskData.title}
                name={"title"}
                onChange={(e) => onChangeText(e)}
                value={taskData.title}
              />
              <EditTextarea
                value={taskData.context}
                onChange={(e) => onChangeText(e)}
                name="context"
              />
            </InfoWrapper>
            <Date>{taskData.date}</Date>
          </LeftSideBox>

          <Line />

          <RightSideBox>
            <EditSubtasksList setTaskData={setTaskData} taskData={taskData} />
            <EditBtn>Edit Task</EditBtn>
          </RightSideBox>
        </FormBox>
      </Container>
    </Bckg>
  );
};

export default EditTask;

const EditTextarea = styled.textarea`
  resize: vertical;
  max-height: 400px;
  height: 140px;
  padding: 10px 10px 10px 10px;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;

  text-transform: capitalize;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  @media (max-width: 850px) {
    border: 2px solid black;
  }
`;

const FormBox = styled.form`
  width: 80%;
  height: 85vh;
  border-radius: 2.5rem;
  background: linear-gradient(
    134deg,
    rgba(0, 0, 0, 0.69) 0%,
    rgba(0, 0, 0, 0.26) 100%
  );
  display: flex;

  position: relative;
  padding: 2rem;
  @media (max-width: 850px) {
    flex-direction: column;
    height: 90%;
  }
`;

const EditBtn = styled.button`
  all: unset;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  color: white;
  width: 8rem;
  padding: 0.6rem;
  letter-spacing: 2px;
  border-radius: 1rem;
  font-size: 1.2rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transition: 0.5s;
    color: black;
    transform: scale(1.05);
  }
`;

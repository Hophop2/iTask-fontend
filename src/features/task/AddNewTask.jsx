import React, { useEffect, useState } from "react";
import Bckg from "../../components/background/Bckg";

import Header from "../../components/sign in/Header";
import Input from "../../components/inputs/Input";
import styled from "styled-components";
import Select from "../../components/inputs/Select";
import PriorityBtns from "./components/PriorityBtns";

import Textarea from "../../components/inputs/Textarea";
import AddSubtasks from "./components/AddSubtasks";
import { useAddNewTaskMutation } from "./taskApiSlice";
import { useNavigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import toast from "react-hot-toast";
const AddNewTask = () => {
  const statusOptions = ["To Do", "In Progress", "Done"];
  const { boardId } = useParams();

  const navigate = useNavigate();

  const [addNewTask, { isLoading, isSuccess, isError, error }] =
    useAddNewTaskMutation();

  const [subtasksList, setSubtasksList] = useState([
    {
      title: "",
      completed: false,
    },
  ]);

  const [taskData, setTaskData] = useState({
    title: "",
    context: "",
    priority: "",
    status: statusOptions[0],
  });

  useEffect(() => {
    if (isSuccess) {
      setTaskData({
        title: "",
        context: "",
        priority: "",
        status: statusOptions[0],
      });
      setSubtasksList([
        {
          title: "",
          completed: false,
        },
      ]);
      navigate(`/board/${boardId}`);
    }
  }, [isSuccess, navigate]);

  const onTaskDataChanged = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const onSubtasksChanged = (e, i) => {
    const { name, value } = e.target;
    const updatedList = subtasksList.map((item, index) =>
      index === i ? { ...item, [name]: value } : item
    );
    setSubtasksList(updatedList);
    console.log(subtasksList);
  };

  const sendNewTask = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getFullYear()}`;

    const { title, context, status, priority } = taskData;

    const subTitleLength = subtasksList.some(
      (subtask) => subtask.title.length > 40
    );

    if (subTitleLength) {
      toast.error("Maximum 40 characters allowed to subtask!");
      return;
    }
    if (title.length > 25) {
      toast.error("Maximum 25 characters allowed to title!");
      return;
    }
    await addNewTask({
      title,
      context,
      date: formattedDate,
      boardId: boardId,
      status,
      priority,
      subtasks: subtasksList,
    });
  };

  return (
    <SignWrapper>
      <LogForm onSubmit={sendNewTask}>
        <Container>
          <Header text={"Create your task"} />
          <Input
            name={`title`}
            type={"text"}
            placeholder={"Title"}
            onChange={(e) => onTaskDataChanged(e)}
          />
          <Textarea
            name={`context`}
            type={"text"}
            placeholder={"Context"}
            onChange={(e) => onTaskDataChanged(e)}
          />
          <AddSubtasks
            onSubtasksChanged={onSubtasksChanged}
            setSubtasksList={setSubtasksList}
            subtasksList={subtasksList}
          />

          <Select
            options={statusOptions}
            setTaskData={setTaskData}
            taskData={taskData}
          />
          <PriorityBtns setTaskData={setTaskData} taskData={taskData} />
        </Container>
        <AddButton>Create</AddButton>
        <BackLink onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </BackLink>
      </LogForm>
    </SignWrapper>
  );
};

export default AddNewTask;

const Container = styled.section`
  width: 18rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  gap: 30px;
  label {
    text-align: center;
  }
`;

const BackLink = styled.div`
  position: absolute;
  top: 3%;
  left: 3%;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: white;
    transition: 0.5s;
  }
`;
const LogForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 65%;
  min-height: 60%;
  margin: 1rem;
  padding-bottom: 2.5rem;
  border-radius: 2.5rem;
  background: ${(props) => props.theme.colors.linearDark};
  position: relative;
  @media (max-width: 850px) {
    background: none;
  }
`;
const AddButton = styled.button`
  width: 6rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 2px solid #fff;
  background: rgba(0, 0, 0, 0.39);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 850px) {
    border: 2px solid black;
  }
`;
const SignWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUpdateTaskMutation } from "../taskApiSlice";
import { useNavigate, useParams } from "react-router";

const SubtasksList = ({ subtasks }) => {
  const [updateTask, { isLoading, isSuccess, isError, error }] =
    useUpdateTaskMutation();
  const { taskId } = useParams();

  const [subtasksList, setSubtasksList] = useState([
    {
      title: "",
      completed: false,
    },
  ]);

  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const initialSubtasks = subtasks.map((item) => ({
      title: item.title,
      completed: item.completed,
    }));
    setSubtasksList(initialSubtasks);
  }, [subtasks]);

  useEffect(() => {
    clearTimeout(timeoutId);

    if (Object.values(subtasksList).some((value) => value)) {
      const newTimeoutId = setTimeout(() => {
        handleUpdateMonthGoals();
      }, 2000);
      setTimeoutId(newTimeoutId);
    }
  }, [subtasksList]);

  const handleCheckChange = (e, i) => {
    const { checked } = e.target;

    setSubtasksList((prevList) =>
      prevList.map((item, index) =>
        index === i ? { ...item, completed: checked } : item
      )
    );
    console.log(subtasksList);
  };

  const handleUpdateMonthGoals = async () => {
    const subtasksToUpdate = subtasksList.map((item) => ({
      title: item.title,
      completed: item.completed,
    }));

    await updateTask({
      updatedTask: {
        taskId: taskId,
        subtasks: subtasksToUpdate,
      },
    });
  };

  const numOfDone = () => {
    let num = 0;
    subtasksList.map((item) => {
      if (item.completed) {
        num += 1;
      }
    });
    return num;
  };

  return (
    <Container>
      <TopBox>
        <Title>Subtasks</Title>
        <NumOfSubtasks>
          {numOfDone()}/{subtasks.length}
        </NumOfSubtasks>
      </TopBox>
      <ListContainer>
        <SubList>
          {subtasksList &&
            subtasksList.map((item, i) => (
              <LiItem key={i}>
                <Checkbox
                  type="checkbox"
                  name="completed"
                  checked={item.completed}
                  onChange={(e) => handleCheckChange(e, i)}
                />
                <SubtaskText check={item.completed}>{item.title}</SubtaskText>
              </LiItem>
            ))}
        </SubList>
      </ListContainer>
    </Container>
  );
};

export default SubtasksList;

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const TopBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

const Title = styled.h3`
  letter-spacing: 1px;
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
  color: white;
`;

const NumOfSubtasks = styled.span`
  color: ${(props) => props.theme.colors.subText};
  font-size: 1.5rem;
`;

const ListContainer = styled.div`
  width: 80%;
  height: 400px;
  overflow-y: auto;
`;

const SubList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
`;

const LiItem = styled.li`
  width: 100%;
  height: 3.5rem;
  background: linear-gradient(190deg, #d9d9d9 40%, rgba(217, 217, 217, 0) 100%);
  border-radius: 0.7rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-left: 1rem;
`;

const SubtaskText = styled.p`
  text-decoration: ${(props) => (props.check ? "line-through" : null)};
`;

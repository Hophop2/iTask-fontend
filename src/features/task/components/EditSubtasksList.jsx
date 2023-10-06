import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const EditSubtasksList = ({ taskData, setTaskData }) => {
  const handleSubtaskTitleChange = (e, i) => {
    const { value } = e.target;
    const updatedSubtasks = taskData.subtasks.map((item, index) =>
      index === i ? { ...item, title: value } : item
    );
    setTaskData({ ...taskData, subtasks: updatedSubtasks });
  };

  const handleSubtaskStatusChange = (e, i) => {
    const { checked } = e.target;
    const updatedSubtasks = taskData.subtasks.map((item, index) =>
      index === i ? { ...item, completed: checked } : item
    );
    setTaskData({ ...taskData, subtasks: updatedSubtasks });
  };

  const numOfDone = () => {
    let num = 0;
    taskData.subtasks.map((item) => {
      if (item.completed) {
        num += 1;
      }
    });
    return num;
  };

  const onRemove = (i) => {
    const updatedSubtasks = [...taskData.subtasks];
    updatedSubtasks.splice(i, 1);
    setTaskData({ ...taskData, subtasks: updatedSubtasks });
  };

  const addRow = () => {
    const newSubtask = { title: "", completed: false };
    const updatedSubtasks = [...taskData.subtasks, newSubtask];
    setTaskData({ ...taskData, subtasks: updatedSubtasks });
  };

  return (
    <Container>
      <TopBox>
        <Title>Subtasks</Title>
        <NumOfSubtasks>
          {numOfDone()}/{taskData.subtasks.length}
        </NumOfSubtasks>
      </TopBox>
      <ListContainer>
        <SubList>
          {taskData.subtasks &&
            taskData.subtasks.map((item, i) => (
              <LiItem key={i}>
                <Checkbox
                  type="checkbox"
                  name="completed"
                  checked={item.completed}
                  onChange={(e) => handleSubtaskStatusChange(e, i)}
                />
                <EditInput
                  type="text"
                  name="title"
                  value={item.title}
                  onChange={(e) => handleSubtaskTitleChange(e, i)}
                  placeholder={item.title}
                />

                <IconWrapper>
                  {taskData.subtasks.length !== 1 && (
                    <FontAwesomeIcon
                      onClick={() => onRemove(i)}
                      icon={faXmark}
                    />
                  )}
                  {taskData.subtasks.length - 1 === i && (
                    <FontAwesomeIcon onClick={addRow} icon={faPlus} />
                  )}
                </IconWrapper>
              </LiItem>
            ))}
        </SubList>
      </ListContainer>
    </Container>
  );
};

export default EditSubtasksList;

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
  margin: 1rem;
`;

const LiItem = styled.li`
  width: 100%;
  height: 3.5rem;
  background: linear-gradient(190deg, #d9d9d9 40%, rgba(217, 217, 217, 0) 100%);
  border-radius: 0.7rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-left: 1rem;
`;

const SubtaskText = styled.p``;

const EditInput = styled.input`
  all: unset;
  width: 82%;
  height: 2rem;

  border: none;
  border-bottom: 1px solid black;
  padding: 5px;

  &:focus {
    all: unset;
    border-bottom: 1px solid black;
    width: 82%;
    transition: 0.5s;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 0.5rem;
`;

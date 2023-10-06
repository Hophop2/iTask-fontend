import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Input from "../../../components/inputs/Input";
const AddSubtasks = ({ setSubtasksList, subtasksList, onSubtasksChanged }) => {
  const addRow = () => {
    setSubtasksList([...subtasksList, { title: "", completed: false }]);
  };
  const onRemove = (i) => {
    const newForm = [...subtasksList];
    newForm.splice(i, 1);
    setSubtasksList(newForm);
  };
  return (
    <Container>
      {subtasksList.map((item, i) => {
        return (
          <Box>
            <Input
              name={`title`}
              type={"text"}
              placeholder={"Subtask"}
              onChange={(e) => onSubtasksChanged(e, i)}
              value={item.value}
            />
            <Wrapper>
              {subtasksList.length !== 1 && (
                <IconBtn onClick={() => onRemove(i)}>
                  <FontAwesomeIcon icon={faXmark} />
                </IconBtn>
              )}
              {subtasksList.length - 1 === i && (
                <IconBtn onClick={addRow}>
                  <FontAwesomeIcon icon={faPlus} />
                </IconBtn>
              )}
            </Wrapper>
          </Box>
        );
      })}
    </Container>
  );
};

export default AddSubtasks;

const Container = styled.div`
  width: 142%;
  max-height: 8rem;
  overflow-y: auto;
  @media (max-width: 850px) {
    width: 125%;
    overflow-x: hidden;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: 5%;

  left: 105%;
`;
const Box = styled.div`
  position: relative;
  width: 71%;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

const IconBtn = styled.button`
  width: 2.5rem;
  padding: 10px 10px 10px 10px;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  @media (max-width: 850px) {
    border: 2px solid black;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
const PriorityBtns = ({ taskData, setTaskData }) => {
  const [isActive, setIsActive] = useState();
  const priorityOptions = ["Low", "Normal", "High"];
  const handleIsActive = (priority, i) => {
    if (isActive !== i) {
      setIsActive(i);
    }
    setTaskData({ ...taskData, priority: priority });
  };
  console.log(taskData);
  return (
    <Container>
      <TitleP>Priority:</TitleP>
      <Wrapper>
        {priorityOptions.map((item, i) => (
          <>
            <Priority
              key={i}
              active={isActive === i}
              value={item}
              onClick={(e) => handleIsActive(item, i)}
            >
              {item}
            </Priority>
          </>
        ))}
      </Wrapper>
    </Container>
  );
};

export default PriorityBtns;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const Priority = styled.div`
  width: 5rem;
  height: 2rem;
  text-align: center;
  line-height: 1.9rem;
  cursor: pointer;
  border-radius: 1rem;
  background-color: ${(props) => (props.active ? "rgba(0, 0, 0, 0.65)" : null)};
  color: ${(props) => (props.active ? "white" : "black")};
  &:hover {
    background-color: rgba(0, 0, 0, 0.65);
    color: white;
  }
`;

const TitleP = styled.p`
  color: rgba(255, 255, 255, 0.7);
  @media (max-width: 850px) {
    color: black;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

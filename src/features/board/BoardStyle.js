import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoardContainer = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  @media (max-width: 970px) {
    align-items: center;
    height: 100%;
    padding: 2rem;
  }
`;

export const TopBtnBox = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  justify-content: space-around;
  @media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;
export const CreateTaskLink = styled(Link)`
  margin-right: 3rem;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  align-items: center;
  border-radius: 20px;
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.1);
  color: black;
  font-size: 1.1rem;
  cursor: pointer;
  @media (max-width: 970px) {
    display: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

import styled from "styled-components";

export const Box = styled.div`
  width: 310px;
  height: 310px;
  padding: 20px 20px 20px 20px;
  background: ${(props) => props.theme.colors.linearLight};
  border-radius: 40px;
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 1rem 1rem 1rem 1rem;
`;

export const Title = styled.h3`
  letter-spacing: 1px;
  margin: 0;
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MonthTaskWrapper = styled.div`
  height: 250px;
  overflow-y: auto;

  form {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    justify-content: center;
    margin-right: 3rem;
    gap: 1rem;
  }
`;

export const MonthTask = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TaskText = styled.p`
  text-decoration: ${(props) => (props.check ? "line-through" : null)};
`;

export const MonthEditInput = styled.input`
  width: 180px;
  height: 22px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid #c2c2c2;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: aliceblue;
    transition: 0.5s;
  }
`;

export const AddMonthBtn = styled.button`
  background-color: gainsboro;
  align-self: center;
  width: 60px;
  height: 28px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 14px;
  cursor: pointer;
  font-family: "MyFont", sans-serif;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    color: wheat;
    border: none;
  }
`;

export const BackToMonthList = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 60px;
  height: 28px;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: black;
    transition: 0.5s;
    border: 1px solid black;
  }
`;

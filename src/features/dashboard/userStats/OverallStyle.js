import styled from "styled-components";

export const Box = styled.div`
  width: 17rem;
  height: 17rem;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;

  background: ${(props) => props.theme.colors.linearDark};
  border-radius: 40px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3`
  letter-spacing: 1px;
  margin: 0;
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
  flex-wrap: wrap;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #d9d9d9;
`;

export const SLine = styled.div`
  width: 2px;
  height: 40%;
  background: #d9d9d9;
`;

export const BotWrapper = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Numberr = styled.div`
  font-size: 2.6rem;
  font-family: "MyFontBold", sans-serif;
`;

export const SubText = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.subText};
`;

export const TopBox = styled.div`
  width: 45%;
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Square = styled.div`
  width: 70px;
  height: 90px;
  border-radius: 20px;
  font-family: "MyFontBold", sans-serif;
  background: linear-gradient(
    153deg,
    rgba(255, 255, 255, 0.78) 30%,
    rgba(255, 255, 255, 0) 100%
  );
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Num = styled.div`
  font-size: 1.5rem;
`;

export const TasksStatus = styled.div`
  font-size: 0.6rem;
`;

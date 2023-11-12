import styled from "styled-components";

export const S = {
  TopWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 80px;
    flex-wrap: wrap;
  `,

  Line: styled.div`
    width: 100%;
    height: 2px;
    background: #d9d9d9;
  `,

  SLine: styled.div`
    width: 2px;
    height: 40%;
    background: #d9d9d9;
  `,

  BotWrapper: styled.div`
    width: 100%;
    height: 60%;

    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  Numberr: styled.div`
    font-size: 2.6rem;
    font-family: "MyFontBold", sans-serif;
  `,

  SubText: styled.span`
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.subText};
  `,

  TopBox: styled.div`
    width: 45%;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `,

  Square: styled.div`
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
  `,

  Num: styled.div`
    font-size: 1.5rem;
  `,

  TasksStatus: styled.div`
    font-size: 0.6rem;
  `,
};

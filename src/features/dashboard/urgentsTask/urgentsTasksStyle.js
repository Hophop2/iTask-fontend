import styled from "styled-components";

export const S = {
  Container: styled.div`
    min-width: 13rem;
    height: 13rem;
    padding: 1rem;
    background-color: black;
    border-radius: 3rem;
    background-color: rgba(71, 71, 71, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    margin-right: 1rem;
  `,
  SliderContainer: styled.div`
    width: 100%;
    height: 80%;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  `,

  TopBox: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    color: white;
    align-items: center;
  `,

  TitleTask: styled.h3``,
  BotBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  DateP: styled.p`
    color: ${(props) => props.theme.colors.subText};
  `,
  BoardName: styled.div`
    width: 4rem;
    color: ${(props) => props.theme.colors.subText};
  `,
};

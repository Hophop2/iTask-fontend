import styled from "styled-components";

export const S = {
  DeleteBox: styled.div`
    display: flex;
    margin-top: 0.3rem;
    gap: 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover {
      color: rgba(255, 0, 0, 1);
      transition: 0.5s;
    }
  `,

  BottomContainer: styled.div`
    width: 100%;
    height: 12%;
    border-radius: 2.5rem;
    background-color: white;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
  `,

  BotWrapper: styled.div`
    width: 80%;
    height: 90%;
  `,

  Line: styled.div`
    width: 100%;
    background: #d9d9d9;
    height: 2px;
  `,

  LogoutBox: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  NameBox: styled.div``,

  Name: styled.h4`
    font-size: 1.4rem;
    margin: 0;
  `,

  Email: styled.p`
    margin: 0;
    color: ${(props) => props.theme.colors.subText};
  `,
};

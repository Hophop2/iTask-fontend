import React from "react";
import styled from "styled-components";
import ListMenu from "./ListMenu";
import Logout from "./Logout";

const Menu = ({ activeNum }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>iTask</S.Logo>
        <ListMenu activeNum={activeNum} />
        <Logout />
      </S.Wrapper>
    </S.Container>
  );
};

export default Menu;

const S = {
  Container: styled.div`
    width: 18rem;
    height: 100%;

    border-radius: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1350px) {
      display: none;
    }
  `,

  Wrapper: styled.div`
    width: 13rem;
    height: 95%;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `,
  Logo: styled.h1`
    font-size: 3rem;
    letter-spacing: 2px;
  `,
};

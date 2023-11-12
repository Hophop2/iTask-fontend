import React from "react";
import styled from "styled-components";
const Header = ({ text }) => {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.Title>iTask</S.Title>
      </S.TitleBox>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default Header;

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    flex-direction: column;
    align-items: center;
    color: white;
    @media (max-width: 850px) {
      color: black;
    }
  `,

  Title: styled.h1`
    font-size: 4rem;

    font-weight: 400;
    margin-bottom: -5px;
  `,
  Text: styled.p`
    font-size: 1.125rem;
    text-align: center;
    font-weight: 400;
  `,
  TitleBox: styled.div`
    height: 50%;
  `,
};

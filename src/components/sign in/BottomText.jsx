import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const BottomText = ({ question, firstText, send }) => {
  return (
    <S.Que>
      {question}
      <S.FirstLink to={send === "reg" ? "/reg" : "/"}>{firstText}</S.FirstLink>
    </S.Que>
  );
};

export default BottomText;

const S = {
  Que: styled.p`
    color: black;
    text-align: center;
  `,
  FirstLink: styled(Link)`
    color: white;
    text-decoration: none;
    @media (max-width: 768px) {
      color: gray;
    }
  `,
};

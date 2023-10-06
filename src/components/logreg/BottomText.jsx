import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const BottomText = ({ question, firstText, send }) => {
  return (
    <Wrapper>
      <Que>
        {question}
        <FirstLink to={send === "reg" ? "/reg" : "/"}>{firstText}</FirstLink>
      </Que>
    </Wrapper>
  );
};

export default BottomText;

const Wrapper = styled.div``;

const Que = styled.p`
  color: black;
  text-align: center;
  margin-bottom: 1rem;
`;
const FirstLink = styled(Link)`
  color: white;
  text-decoration: none;
  @media (max-width: 768px) {
    color: gray;
  }
`;

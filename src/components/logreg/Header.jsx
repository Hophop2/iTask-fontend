import React from "react";
import styled from "styled-components";
const Header = ({ text }) => {
  return (
    <Wrapper>
      <TitleBox>
        <Title>iTask</Title>
      </TitleBox>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
  color: white;
  @media (max-width: 850px) {
    color: black;
  }
`;

const Title = styled.h1`
  font-size: 4rem;

  font-weight: 400;
  margin-bottom: -5px;
`;

const Text = styled.p`
  font-size: 1.125rem;
  text-align: center;
  font-weight: 400;
`;

const TitleBox = styled.div`
  height: 50%;
`;

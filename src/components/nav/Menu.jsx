import React from "react";
import { Container, Logo, Wrapper } from "./MenuStyle";
import ListMenu from "./ListMenu";
import Logout from "./Logout";

const Menu = ({ activeNum }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>iTask</Logo>
        <ListMenu activeNum={activeNum} />
        <Logout />
      </Wrapper>
    </Container>
  );
};

export default Menu;

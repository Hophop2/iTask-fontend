import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 18rem;
  min-height: 100%;

  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1350px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 13rem;
  height: 95%;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const Logo = styled.h1`
  font-size: 3rem;
  letter-spacing: 2px;
`;
export const ListContainer = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LinkToDash = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const List = styled.ul`
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  gap: 20px;
`;
export const Delete = styled.span``;

export const DeleteBox = styled.div`
  display: flex;
  margin-top: 0.3rem;
  gap: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    color: rgba(255, 0, 0, 1);
    transition: 0.5s;
  }
`;
export const LiMenu = styled.li`
  width: 100%;
  height: 30px;
  padding: 2px 2px 2px 2px;
  border-radius: 18px;
  justify-content: space-around;
  align-items: center;
  display: flex;
  background: ${(props) =>
    props.active
      ? "linear-gradient(141deg, #333230 0%, rgba(51, 48, 48, 0.77) 100%)"
      : "transparent"};
  color: ${(props) => (props.active ? "white" : "black")};
  font-family: "MyFontBold", sans-serif;
`;

export const LiText = styled.div`
  font-size: 0.8rem;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 12%;
  border-radius: 2.5rem;

  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

export const BotWrapper = styled.div`
  width: 80%;
  height: 90%;
`;

export const Line = styled.div`
  width: 100%;
  background: #d9d9d9;
  height: 2px;
`;

export const LogoutBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NameBox = styled.div``;

export const Name = styled.h4`
  font-size: 1.4rem;
  margin: 0;
`;

export const Email = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.subText};
`;

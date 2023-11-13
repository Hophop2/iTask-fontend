import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import AddNewBoard from "../../features/board/components/AddNewBoard";
import BoardsList from "../../features/board/components/BoardsList";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListNav = ({ activeNum }) => {
  const [isActive, setIsActive] = useState(activeNum);
  const [activeAddBoard, setActiveAddBoard] = useState(false);
  const navigate = useNavigate();
  const handleLiActive = (i, toNavigate) => {
    if (isActive !== i) {
      setIsActive(i);
      navigate(toNavigate);
    } else {
      setIsActive(i);
    }
  };

  const handleActiveAddBoard = (i) => {
    setActiveAddBoard((prev) => !prev);
    handleLiActive(i);
  };

  return (
    <>
      <S.ListContainer>
        <S.List>
          <S.LiMenu
            active={isActive === 2}
            onClick={() => handleLiActive(2, "/dash")}
          >
            <FontAwesomeIcon icon={faClipboard} />

            <S.LiText>DASHBOARD</S.LiText>
          </S.LiMenu>
          <S.LiMenu
            active={isActive === 1}
            onClick={() => {
              handleActiveAddBoard();
              handleLiActive(1);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />

            <S.LiText>ADD BOARD</S.LiText>
          </S.LiMenu>
          <S.LiMenu active={isActive === 0} onClick={() => handleLiActive(0)}>
            <FontAwesomeIcon icon={faChevronDown} />

            <S.LiText>ALL BOARDS</S.LiText>
          </S.LiMenu>
          {isActive === 0 ? <BoardsList /> : null}
        </S.List>
      </S.ListContainer>

      {activeAddBoard ? (
        <AddNewBoard
          handleActiveAddBoard={handleActiveAddBoard}
          activeNum={activeNum}
        />
      ) : null}
    </>
  );
};

export default ListNav;

const S = {
  ListContainer: styled.div`
    width: 100%;
    height: 65vh;
    overflow-y: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
  `,
  LiMenu: styled.li`
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
  `,
  LiText: styled.div`
    font-size: 0.8rem;
  `,

  LinkToDash: styled(Link)`
    text-decoration: none;
    color: black;
  `,
  List: styled.ul`
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    gap: 20px;
  `,
};

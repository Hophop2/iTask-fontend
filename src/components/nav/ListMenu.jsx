import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { LiMenu, LiText, LinkToDash, List, ListContainer } from "./MenuStyle";
import AddNewBoard from "../../features/board/components/AddNewBoard";
import BoardsList from "../../features/board/components/BoardsList";

const ListMenu = ({ activeNum }) => {
  const [isActive, setIsActive] = useState(activeNum);
  const [activeAddBoard, setActiveAddBoard] = useState(false);

  const handleLiActive = (i) => {
    if (isActive !== i) {
      setIsActive(i);
    }
  };

  const handleActiveAddBoard = () => {
    setActiveAddBoard((prev) => !prev);
    console.log(activeAddBoard);
  };
  return (
    <>
      <ListContainer>
        <List>
          <LiMenu active={isActive === 2}>
            <FontAwesomeIcon icon={faClipboard} />

            <LiText>
              <LinkToDash onClick={() => handleLiActive(2)} to="/dash">
                DASHBOARD
              </LinkToDash>
            </LiText>
          </LiMenu>
          <LiMenu active={isActive === 1}>
            <FontAwesomeIcon icon={faPlus} />

            <LiText
              onClick={() => {
                handleActiveAddBoard();
                handleLiActive(1);
              }}
            >
              ADD BOARD
            </LiText>
          </LiMenu>
          <LiMenu active={isActive === 0} onClick={() => handleLiActive(0)}>
            <FontAwesomeIcon icon={faChevronDown} />

            <LiText>ALL BOARDS</LiText>
          </LiMenu>
          {isActive === 0 ? <BoardsList /> : null}
        </List>
      </ListContainer>
      {/* // <FontAwesomeIcon icon={faListCheck} /> */}
      {activeAddBoard ? (
        <AddNewBoard handleActiveAddBoard={handleActiveAddBoard} />
      ) : null}
    </>
  );
};

export default ListMenu;

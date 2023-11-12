import React from "react";
import styled from "styled-components";
import { useGetAllUserBoardsQuery } from "../boardApiSlice";
import { Link } from "react-router-dom";

const BoardsList = () => {
  const {
    data: boards,
    isLoading,
    isError,
    error,
  } = useGetAllUserBoardsQuery("BoardsList", {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnSuccess: true,
  });
  if (isError) return <p>Something went wrong!</p>;
  if (isLoading) return <p>Loading</p>;

  return (
    <>
      {boards &&
        boards.ids.map((boardId) => {
          const board = boards.entities[boardId];

          return (
            <S.BoardsListContainer key={boardId}>
              <S.BoardLink to={`/board/${board.id}`}>{board.title}</S.BoardLink>
            </S.BoardsListContainer>
          );
        })}
    </>
  );
};

export default BoardsList;
const S = {
  BoardsListContainer: styled.ul`
    list-style: none;
    padding: 0;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  `,

  BoardLink: styled(Link)`
    width: 100%;
    padding: 5px 5px 5px 5px;

    text-decoration: none;

    border-radius: 30px;
    border: 1px solid black;
    text-align: center;

    color: black;
    font-size: 0.85rem;

    &:hover {
      background-color: #ececec;
    }
  `,
};

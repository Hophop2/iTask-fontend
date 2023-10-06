import React from "react";
import styled from "styled-components";
import { useGetAllUserBoardsQuery } from "../boardApiSlice";
import { Link } from "react-router-dom";
import ErorrPage from "../../../components/ErorrPage";
import Loading from "../../../components/Loading";
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
  if (isError) return <ErorrPage error={error} />;
  if (isLoading) return <Loading />;

  return (
    <>
      {boards &&
        boards.ids.map((boardId) => {
          const board = boards.entities[boardId];
          return (
            <BoardsListContainer key={boardId}>
              <BoardLink to={`/board/${board.id}`}>{board.title}</BoardLink>
            </BoardsListContainer>
          );
        })}
    </>
  );
};

export default BoardsList;

const BoardsListContainer = styled.ul`
  list-style: none;
  padding: 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const BoardLink = styled(Link)`
  width: 100%;
  padding: 5px 5px 5px 5px;

  text-decoration: none;

  border-radius: 30px;
  border: 1px solid black;
  text-align: center;

  color: black;
  font-size: 1rem;

  &:hover {
    background-color: #ececec;
  }
`;

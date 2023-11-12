import {
  faEllipsisVertical,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { useDeleteTaskMutation } from "../../../task/taskApiSlice";
import toast from "react-hot-toast";

const ChoiceList = ({ taskId, refetch }) => {
  const [deleteTask, { isSuccess, isError, error }] = useDeleteTaskMutation();

  const navigate = useNavigate();

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate(`edit/${taskId}`);
  };

  const handleDeleteTask = async (e) => {
    e.stopPropagation();
    await deleteTask({ id: taskId });
    refetch();
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Task deleted successfully!");
    } else if (isError || error) {
      toast.error("Error deleting task. Please try again.");
    }
  }, [isSuccess, isError]);

  return (
    <S.ListWrapper>
      <ListContainer>
        <S.ListBox>
          <S.EditBox onClick={(e) => handleEditClick(e)}>
            <p>Edit</p>
            <FontAwesomeIcon icon={faPenToSquare} />
          </S.EditBox>
          <S.AddBox onClick={(e) => handleDeleteTask(e)}>
            <p>Delete</p>
            <FontAwesomeIcon icon={faTrash} style={{ marginRight: "5px" }} />
          </S.AddBox>
        </S.ListBox>
        <S.Triangle />
      </ListContainer>

      <FontAwesomeIcon icon={faEllipsisVertical} />
    </S.ListWrapper>
  );
};

export default ChoiceList;

const ListContainer = styled.div`
  display: none;
`;
const S = {
  ListBox: styled.div`
    width: 85px;
    height: 65px;
    z-index: 100;

    background-color: #282929;
    border-radius: 12px;
    position: absolute;
    top: -320%;
    right: -800%;
    color: white;
    font-size: 14px;
  `,

  ListWrapper: styled.div`
    position: relative;
    &:hover ${ListContainer} {
      display: block;
    }
  `,
  Triangle: styled.div`
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    top: -40%;
    right: -170%;

    border-top: 10px solid #282929;
  `,
  EditBox: styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
    border-radius: 12px 12px 0 0;
    border-bottom: 1px solid #d9d9d9;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      color: black;
      cursor: pointer;
    }
  `,
  AddBox: styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    gap: 15px;
    align-items: center;
    border-radius: 0 0 12px 12px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      color: black;
      cursor: pointer;
    }
  `,
};

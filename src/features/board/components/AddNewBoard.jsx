import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../../components/inputs/Input";
import { useAddNewBoardMutation } from "../boardApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
const AddNewBoard = ({ handleActiveAddBoard }) => {
  const { userId } = useAuth();
  const [boardName, setBoardName] = useState("");

  const [createBoard, { isLoading, isSuccess, isError, error }] =
    useAddNewBoardMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Board added Successfully!");
      handleActiveAddBoard();
    }
  }, [isSuccess]);

  const handleChangeBoardName = (e) => {
    setBoardName(e.target.value);
  };

  const handleSendNewBoard = async (e) => {
    e.preventDefault();

    await createBoard({ userId, title: boardName });
  };

  return (
    <Shadow>
      <Container>
        <FontAwesomeIcon
          icon={faXmark}
          style={iconStyle}
          onClick={() => handleActiveAddBoard()}
        />
        <Title>Add a new board!</Title>

        <Form onSubmit={handleSendNewBoard}>
          <Input
            name={"Board name"}
            onChange={(e) => handleChangeBoardName(e)}
          />
          <CreateBoardBtn>Create</CreateBoardBtn>
        </Form>
      </Container>
    </Shadow>
  );
};

export default AddNewBoard;

const Shadow = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 320px;
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 2.5rem;
  background: linear-gradient(
    120deg,
    #d9d9d9 30%,
    rgba(217, 217, 217, 0.9) 100%
  );
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`;
const Title = styled.h4`
  letter-spacing: 1px;
  font-size: 1.3rem;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  justify-content: center;
`;
const CreateBoardBtn = styled.button`
  width: 5rem;
  height: 2.2rem;
  border-radius: 0.8rem;
  background-color: #d9d9d9;
  border: 2px solid #7e7e7e;
  cursor: pointer;
  &:hover {
    background-color: #7e7e7e;
    transition: 0.5s;
  }
`;

const iconStyle = {
  position: "absolute",
  top: "5%",
  right: "7%",
  fontSize: "20px",
  cursor: "pointer",
};

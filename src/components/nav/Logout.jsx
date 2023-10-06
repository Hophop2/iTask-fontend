import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  BotWrapper,
  BottomContainer,
  Delete,
  DeleteBox,
  Email,
  Line,
  LogoutBox,
  Name,
  NameBox,
} from "./MenuStyle";

import { useNavigate, Link, useLocation } from "react-router-dom";

import { useSendLogoutMutation } from "../../features/auth/authApiSlice";
import { useDeleteUserMutation } from "../../features/users/usersApiSlice";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Logout = () => {
  const navigate = useNavigate();
  const { userId } = useAuth();
  const { username, email } = useAuth();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  const [deleteUser, { isSuccess: deleteUserSuccess }] =
    useDeleteUserMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const onLogoutClicked = () => sendLogout();

  const deleteUserAndData = async () => {
    navigate("/");
    await deleteUser({ id: userId });
  };

  if (isLoading) return <p>Logging Out...</p>;

  if (isError) return <p>Error: {error.data?.message}</p>;

  const content = (
    <BottomContainer>
      <BotWrapper>
        <Line />
        <LogoutBox>
          <NameBox>
            <Name>{username}</Name>
            <Email>{email}</Email>
            <DeleteBox onClick={deleteUserAndData}>
              <FontAwesomeIcon icon={faUser} />
              <Delete>Delete account</Delete>
            </DeleteBox>
          </NameBox>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faRightFromBracket}
            onClick={onLogoutClicked}
            size="lg"
          />
        </LogoutBox>
      </BotWrapper>
    </BottomContainer>
  );
  return content;
};

export default Logout;

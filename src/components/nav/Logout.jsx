import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { S } from "./MenuStyle";

import { useNavigate } from "react-router-dom";

import { useSendLogoutMutation } from "../../features/auth/authApiSlice";
import { useDeleteUserMutation } from "../../features/users/usersApiSlice";
import useAuth from "../../hooks/useAuth";

const Logout = () => {
  const navigate = useNavigate();
  const { userId } = useAuth();
  const { username, email } = useAuth();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  const [deleteUser] = useDeleteUserMutation();

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
    <S.BottomContainer>
      <S.BotWrapper>
        <S.Line />
        <S.LogoutBox>
          <S.NameBox>
            <S.Name>{username}</S.Name>
            <S.Email>{email}</S.Email>
            <S.DeleteBox onClick={deleteUserAndData}>
              <FontAwesomeIcon icon={faUser} />
              <span>Delete account</span>
            </S.DeleteBox>
          </S.NameBox>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faRightFromBracket}
            onClick={onLogoutClicked}
            size="lg"
          />
        </S.LogoutBox>
      </S.BotWrapper>
    </S.BottomContainer>
  );
  return content;
};

export default Logout;

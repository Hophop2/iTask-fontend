import React, { useEffect, useState } from "react";
import Bckg from "../components/background/Bckg";

import Input from "../components/inputs/Input";
import Header from "../components/sign in/Header";
import BottomText from "../components/sign in/BottomText";
import styled from "styled-components";
import { useAddNewUserMutation } from "../features/users/usersApiSlice";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
const RegisterPage = () => {
  const [addNewUser, { isSuccess, isError, error }] = useAddNewUserMutation();

  const navigate = useNavigate();

  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (isSuccess) {
      setRegData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/");
      toast.success("Account created successfully!");
    }
    if (isError) {
      toast.error("Try again");
    }
  }, [isSuccess, navigate, error, isError]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value.includes(" ")) {
      toast.error("Spaces are not allowed in this field");
      return;
    }

    setRegData({ ...regData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = regData;

    if (regData.password !== regData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{6,}$/;
    if (!password.match(passwordRegex)) {
      toast.error(
        "Password must contain at least 6 characters, including a number and a special character."
      );
      return;
    }

    try {
      await addNewUser({ username, email, password });
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <Bckg logheight={"100vh"}>
      <S.SignWrapper>
        <S.Box>
          <S.Container onSubmit={handleSubmit}>
            <Header text={"Create your account"} />
            <Input
              name={`username`}
              type={"text"}
              placeholder={"Username"}
              onChange={handleChange}
              value={regData.username}
            />

            <Input
              name={`email`}
              type={"email"}
              placeholder={"Email"}
              onChange={handleChange}
              value={regData.email}
            />
            <Input
              name={`password`}
              type={"password"}
              placeholder={"Password"}
              onChange={handleChange}
              value={regData.password}
              helpText={
                "must contain at least 6 characters, including a number and a special character."
              }
            />
            <Input
              name={`confirmPassword`}
              type={"password"}
              placeholder={"Confirm Password"}
              onChange={handleChange}
              value={regData.confirmPassword}
            />
            <S.RegButton>Create account</S.RegButton>
            <BottomText question={"Have an account? "} firstText={"Login"} />
          </S.Container>
        </S.Box>
      </S.SignWrapper>
    </Bckg>
  );
};

export default RegisterPage;

const S = {
  Container: styled.form`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 30px;
  `,
  RegButton: styled.button`
    width: 8rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 2px solid #fff;
    background: rgba(0, 0, 0, 0.39);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    @media (max-width: 768px) {
      border: 2px solid black;
    }
  `,
  SignWrapper: styled.div`
    width: 100%;
    min-height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Box: styled.div`
    min-width: 50%;
    min-height: 55%;
    border-radius: 2.5rem;
    background: ${(props) => props.theme.colors.linearDark};
    display: flex;
    gap: 2.5rem;
    align-items: center;
    flex-direction: column;
    @media (max-width: 768px) {
      background: none;
    }
  `,
};

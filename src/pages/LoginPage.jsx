import React, { useEffect, useRef, useState } from "react";

import Bckg from "../components/background/Bckg";
import { SignWrapper } from "../components/background/bckgStyle";
import Input from "../components/inputs/Input";
import Header from "../components/logreg/Header";

import BottomText from "../components/logreg/BottomText";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { useNavigate } from "react-router";

import usePersist from "../hooks/usePersist";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import useTitle from "../hooks/useTitle";

const LoginPage = () => {
  const userRef = useRef();
  useTitle("iTask");

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [persist, setPersist] = usePersist();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading, isError, error }] = useLoginMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handlePersist = () => setPersist((prev) => !prev);

  const handleSubmit = async (e) => {
    const { username, password } = loginData;
    e.preventDefault();
    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setLoginData({
        username: "",
        password: "",
      });
      navigate("/dash");
    } catch (err) {
      console.log(err);
      if (!err.status) {
        toast.error("No server Response");
      } else {
        toast.error(err.data?.message);
      }
    }
  };
  let content;

  if (isLoading) content = <Loading />;

  content = (
    <Bckg logheight={"100vh"}>
      <SignWrapper>
        <LogForm onSubmit={handleSubmit}>
          <Container>
            <Header text={"Login to manage your account"} />
            <Input
              name={`username`}
              ref={userRef}
              type={"text"}
              placeholder={"Username"}
              onChange={handleChange}
              value={loginData.username}
            />
            <Input
              name={`password`}
              type={"password"}
              placeholder={"Password"}
              onChange={handleChange}
              value={loginData.password}
            />
            <TrustDeviceBox>
              <input
                type="checkbox"
                id="persist"
                name="persist"
                onChange={handlePersist}
                checked={persist}
              />
              Trust this device
            </TrustDeviceBox>
          </Container>

          <br />
          <LogButton>Sign in</LogButton>

          <BottomText
            question={"Already do not have an account? "}
            send={"reg"}
            firstText={"Register"}
          />
        </LogForm>
      </SignWrapper>
    </Bckg>
  );

  return content;
};

export default LoginPage;

const Container = styled.div`
  width: 18rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
  label {
    text-align: center;
  }
`;

const TrustDeviceBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const LogForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  min-height: 60%;

  border-radius: 2.5rem;
  background: ${(props) => props.theme.colors.linearDark};
  @media (max-width: 768px) {
    background: none;
  }
`;
const LogButton = styled.button`
  width: 6rem;
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
`;

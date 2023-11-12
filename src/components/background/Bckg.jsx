import React from "react";
import { styled } from "styled-components";

const Bckg = ({ children, logheight }) => {
  return (
    <S.ImgBckg logheight={logheight}>
      <S.Border>
        <S.NoiseBckg>{children}</S.NoiseBckg>
      </S.Border>
    </S.ImgBckg>
  );
};

export default Bckg;

const S = {
  ImgBckg: styled.div`
    width: 100%;
    min-height: 100vh;
    /* height: ${(props) => props.logheight || null}; */
    background: url("/bckg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Border: styled.div`
    width: 98%;
    min-height: 96vh;
    border-radius: 2.5rem;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background: linear-gradient(
      135deg,
      rgba(217, 217, 217, 0) 0%,
      rgba(255, 253, 253, 0) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0 0.5rem 0;
  `,
  NoiseBckg: styled.div`
    border-radius: 2.5rem;
    width: 99%;
    min-height: 95vh;
    background: url("/noiseBckg.jpg");
    background: rgba(210, 215, 211, 0.6);
  `,
  SignWrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Box: styled.div`
    min-width: 50%;
    min-height: 60%;
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
  H1log: styled.h1``,
};

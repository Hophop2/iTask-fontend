import { styled } from "styled-components";

export const ImgBckg = styled.div`
  width: 100%;
  min-height: 100vh;
  height: ${(props) => props.logheight || null};
  background: url("/bckg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Border = styled.div`
  width: 98%;
  height: 96%;
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
`;
export const NoiseBckg = styled.div`
  border-radius: 2.5rem;
  width: 99%;
  height: 99%;
  background: url("/noiseBckg.jpg");
  background: rgba(210, 215, 211, 0.6);
`;
export const SignWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Box = styled.div`
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
`;
export const H1log = styled.h1``;

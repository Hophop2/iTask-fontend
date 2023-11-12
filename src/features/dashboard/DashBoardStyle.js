import styled from "styled-components";

export const DashContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 2rem 0 2rem;
`;
export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
`;
export const TopContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const TopWrapper = styled.div`
  height: 70%;
  display: flex;

  justify-content: space-around;
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;
export const BotWrapper = styled.div`
  height: 50%;

  display: flex;
  align-items: center;
  @media (max-width: 1150px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;

  padding: 0;
  @media (max-width: 1150px) {
    text-align: center;
  }
`;

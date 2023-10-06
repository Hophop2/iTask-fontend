import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    margin: 0;
  }
  margin: 1rem;
`;

export const ShadowBox = styled.form`
  width: 80%;
  height: 85vh;
  border-radius: 2.5rem;
  background: linear-gradient(
    134deg,
    rgba(0, 0, 0, 0.69) 0%,
    rgba(0, 0, 0, 0.26) 100%
  );
  display: flex;

  position: relative;
  padding: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: 85%;
  }
`;

export const CompletedBox = styled.div`
  width: 100%;
  height: 60px;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
`;

export const Completed = styled.span`
  color: ${(props) => props.theme.colors.subText};
`;

export const LeftSideBox = styled.div`
  width: calc(50% - 4rem);
  height: calc(100% - 4rem);

  padding-right: 2rem;
  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: wheat;
`;
export const RightSideBox = styled.div`
  width: calc(50%);
  height: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  padding-left: 2rem;
  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const TaskTitle = styled.h2`
  font-size: 2rem;
  color: white;
  letter-spacing: 1px;
`;

export const ContentBox = styled.div`
  width: 70%;
  height: 28vh;
  border-radius: 2rem;
  padding: 1rem;
  align-self: center;

  background: linear-gradient(190deg, #d9d9d9 0%, rgba(217, 217, 217, 0) 100%);
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
`;

export const Date = styled.span`
  position: absolute;
  bottom: 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.subText};
`;

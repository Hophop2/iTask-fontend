import styled from "styled-components";

export const Container = styled.div`
  width: 50rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  @media (max-width: 1150px) {
    width: 30rem;
    height: 20rem;
  }
`;
export const WeatherBox = styled.div`
  width: 32rem;
  height: 17rem;
  padding: 1.5rem;
  background: rgba(255, 253, 253, 0.7);
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 40px;
  @media (max-width: 700px) {
    width: 14rem;
    height: 17rem;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftBox = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WeatherWrapper = styled.div`
  width: 16rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Temp = styled.p`
  margin: 0;
  text-align: center;
  font-size: 3.2rem;
`;
export const Loc = styled.span`
  text-align: center;
`;
export const WeatherImg = styled.img`
  width: 8rem;
`;

export const LocationInput = styled.input`
  width: 80%;
  height: 1.1rem;
  padding: 0.4rem;
  border-radius: 1rem;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const RightBox = styled.div`
  width: 20%;
  height: 85%;

  position: absolute;
  right: 0;
  @media (max-width: 700px) {
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: flex-end;
  }
`;

export const DetailsWrapper = styled.div`
  width: 5rem;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: row;
    width: 100%;
    height: 5rem;
    align-items: flex-end;
    background-color: rgba(0, 0, 0, 0);
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
  }
`;

export const DetailBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const DetailP = styled.p`
  margin: 0;
  text-align: center;
`;

export const DetailSpan = styled.span`
  text-align: center;
`;

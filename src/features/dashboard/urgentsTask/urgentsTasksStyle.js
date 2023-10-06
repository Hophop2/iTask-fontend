import styled from "styled-components";

export const Container = styled.div`
  width: 66%;
  height: 22rem;

  .carousel {
    cursor: grab;
    overflow: hidden;
    margin-top: 2rem;
  }

  .inner-carousel {
    display: flex;
  }

  .a {
    min-width: 25%;
    height: 8rem;
    background-color: aqua;
    margin-left: 1rem;
  }
`;

export const UrgentTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;
export const SliderContainer = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  color: white;
  align-items: center;
`;

export const TitleTask = styled.h3``;
export const BotBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DateP = styled.p`
  color: ${(props) => props.theme.colors.subText};
`;
export const BoardName = styled.div`
  width: 4rem;
  color: ${(props) => props.theme.colors.subText};
`;

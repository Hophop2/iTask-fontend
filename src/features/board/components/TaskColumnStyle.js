import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 95%;
  border-radius: 0.625rem;
  background: rgba(255, 255, 255, 0.6);
  padding-top: 10px;
  padding-bottom: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: visible;
`;

export const TitleColTask = styled.h2`
  align-self: flex-start;
  margin-left: 1.1rem;
`;

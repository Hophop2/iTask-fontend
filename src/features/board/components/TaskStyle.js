import styled from "styled-components";

export const S = {
  TaskContainer: styled.div`
    width: 240px;
    min-height: 80px;
    padding: 16px 16px 16px 16px;
    background-color: ${(props) => props.theme.colors.taskCardBckg};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.25);
  `,
  TopContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  TaskTitle: styled.h3`
    margin: 0 10px 0 0;
    color: white;
    letter-spacing: 1.5px;

    text-overflow: ellipsis;
    text-align: center;
    overflow: hidden;
  `,
  IconWrapper: styled.div`
    display: flex;
    gap: 15px;
    font-size: 18px;
  `,
  DateBox: styled.div`
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.subText};
  `,
  CircleBox: styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 12px 0 11px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

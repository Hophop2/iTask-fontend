import React from "react";
import {
  Completed,
  CompletedBox,
  ContentBox,
  Date,
  InfoWrapper,
  LeftSideBox,
  Line,
  RightSideBox,
  ShadowBox,
  TaskTitle,
} from "./TaskInfoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faXmark } from "@fortawesome/free-solid-svg-icons";
import SubtasksList from "./components/SubtasksList";
import { useNavigate } from "react-router";

const CurrentTaskInfo = ({ entity, refetch }) => {
  const { status, priority, title, date, context, subtasks } = entity;
  const navigate = useNavigate();
  return (
    <ShadowBox>
      <LeftSideBox>
        <CompletedBox>
          <FontAwesomeIcon
            style={{
              color: "white",
              fontSize: "1.7rem",
              cursor: "pointer",
            }}
            icon={faXmark}
            onClick={() => navigate(-1)}
          />
          <Completed>{status}</Completed>

          <FontAwesomeIcon
            icon={faFlag}
            style={{
              color:
                priority === "High"
                  ? "red"
                  : priority === "Normal"
                  ? "orange"
                  : "white",
            }}
          />
        </CompletedBox>
        <InfoWrapper>
          <TaskTitle>{title}</TaskTitle>
          <ContentBox>
            <p>{context}</p>
          </ContentBox>
        </InfoWrapper>
        <Date>{date}</Date>
      </LeftSideBox>

      <Line />

      <RightSideBox>
        <SubtasksList subtasks={subtasks} refetch={refetch} />
      </RightSideBox>
    </ShadowBox>
  );
};

export default CurrentTaskInfo;

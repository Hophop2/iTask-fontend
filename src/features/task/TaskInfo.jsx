import React from "react";
import {
  Completed,
  CompletedBox,
  Container,
  ContentBox,
  Date,
  InfoWrapper,
  LeftSideBox,
  Line,
  RightSideBox,
  ShadowBox,
  TaskTitle,
} from "./TaskInfoStyle";
import SubtasksList from "./components/SubtasksList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Bckg from "../../components/background/Bckg";
import { useNavigate, useParams } from "react-router";
import { useGetTaskByIdQuery } from "./taskApiSlice";
import Loading from "../../components/Loading";
import ErorrPage from "../../components/ErorrPage";
import useTitle from "../../hooks/useTitle";

const TaskInfo = () => {
  useTitle("Task");
  const { taskId } = useParams();

  const navigate = useNavigate();
  const {
    data: singleTaskData,
    isLoading,
    isSuccess,
    refetch,
    isError,
    error,
  } = useGetTaskByIdQuery(taskId, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnSuccess: true,
  });

  if (isLoading) return <Loading wrapHeight={"100vh"} />;
  if (isError || error) return <ErorrPage error={error} />;

  return (
    <Bckg>
      <Container>
        {singleTaskData &&
          singleTaskData.ids.map((id) => {
            const entity = singleTaskData.entities[id];
            const { status, priority, title, date, context, subtasks } = entity;

            return (
              <ShadowBox key={id}>
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
                    <ContentBox>{context}</ContentBox>
                  </InfoWrapper>
                  <Date>{date}</Date>
                </LeftSideBox>

                <Line />

                <RightSideBox>
                  <SubtasksList subtasks={subtasks} refetch={refetch} />
                </RightSideBox>
              </ShadowBox>
            );
          })}
      </Container>
    </Bckg>
  );
};

export default TaskInfo;

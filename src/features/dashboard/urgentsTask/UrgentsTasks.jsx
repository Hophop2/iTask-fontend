import React, { useEffect, useRef, useState } from "react";
import UrgentTask from "./components/UrgentTask";
import { motion } from "framer-motion";
import { useGetUrgentTasksQuery } from "./urgentTaksksApiSlice";
import styled from "styled-components";

const UrgentsTasks = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [isDragging, setIsDragging] = useState(false);

  const { data: taskData } = useGetUrgentTasksQuery("Tasks", {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

  useEffect(() => {
    if (taskData) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [taskData, innerWidth, innerHeight]);

  return (
    <S.Container>
      <S.UrgentTitle>Urgent's Task to do</S.UrgentTitle>

      <motion.div className="carousel" ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={`inner-carousel ${isDragging ? "is-dragging" : ""}`}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          whileTap={{ cursor: "grabbing" }}
        >
          {taskData?.map((task, i) => (
            <UrgentTask task={task} key={i} isDragging={isDragging} />
          ))}
        </motion.div>
      </motion.div>
    </S.Container>
  );
};

export default UrgentsTasks;

const S = {
  Container: styled.div`
    width: 66%;
    height: 24rem;

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
  `,
  UrgentTitle: styled.h2`
    font-size: 2rem;
    margin: 0;
  `,
};

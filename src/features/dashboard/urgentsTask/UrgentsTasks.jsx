import React, { useEffect, useRef, useState } from "react";
import { Container, UrgentTitle } from "./urgentsTasksStyle";
import UrgentTask from "./components/UrgentTask";
import { motion } from "framer-motion";
import { useGetUrgentTasksQuery } from "./urgentTaksksApiSlice";

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
    <Container>
      <UrgentTitle>Urgent's Task to do</UrgentTitle>

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
    </Container>
  );
};

export default UrgentsTasks;

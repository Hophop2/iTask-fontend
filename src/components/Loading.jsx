import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import Bckg from "./background/Bckg";

const Loading = ({ wrapWidth, wrapHeight }) => {
  return (
    <Bckg logheight={"100vh"}>
      <ThreeCircles
        height="150"
        width="150"
        color="#171817"
        wrapperStyle={{
          width: wrapWidth,
          height: wrapHeight,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </Bckg>
  );
};

export default Loading;

import React from "react";
import styled from "styled-components";
const CircleProBar = ({ allNum, numOfDone }) => {
  const percentage = (numOfDone / allNum) * 100;
  const r = 60;
  const cir = 200;
  const dashArray = r * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <Circle>
      <svg width="50" height="50" viewBox={`0 0 ${cir} ${cir}`}>
        <circle
          cx={cir / 2}
          cy={cir / 2}
          strokeWidth="15px"
          r={r}
          className="circle-bckg"
        />
        <circle
          cx={cir / 2}
          cy={cir / 2}
          strokeWidth="15px"
          r={r}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${cir / 2} ${cir / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dy="0.8rem"
          textAnchor="middle"
          className="circle-text"
        >
          {numOfDone}/{allNum}
        </text>
      </svg>
    </Circle>
  );
};

export default CircleProBar;

const Circle = styled.div`
  .circle-bckg {
    fill: none;
    stroke: #c2c2c2;
  }

  .circle-progress {
    fill: none;
    stroke: black;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .circle-text {
    font-size: 2.5rem;
    font-family: "MyFontBold", sans-serif;
  }
`;

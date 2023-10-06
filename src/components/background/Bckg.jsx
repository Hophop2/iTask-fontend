import React from "react";
import { Border, ImgBckg, NoiseBckg } from "./bckgStyle";

const Bckg = ({ children, logheight }) => {
  return (
    <ImgBckg logheight={logheight}>
      <Border>
        <NoiseBckg>{children}</NoiseBckg>
      </Border>
    </ImgBckg>
  );
};

export default Bckg;

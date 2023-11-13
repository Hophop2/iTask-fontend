import React from "react";
import { Outlet } from "react-router-dom";
import Bckg from "../components/background/Bckg";

const AppLayout = () => {
  return (
    <Bckg>
      <Outlet />
    </Bckg>
  );
};

export default AppLayout;

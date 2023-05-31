import React from "react";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Menu />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

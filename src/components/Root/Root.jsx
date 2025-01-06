import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "../shared/header/Nav";

export default function Root() {
  return (
    <div className="bg-white">
      <Nav />
      <Outlet />
    </div>
  );
}

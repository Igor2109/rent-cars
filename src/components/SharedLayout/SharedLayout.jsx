import React from "react";
import { StyledAppContainer } from "./SharedLayout.styled";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;

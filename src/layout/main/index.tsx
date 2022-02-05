import React from "react";
import Navbar from "./Navbar";

type Props = { children: React.ReactNode };

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="main-body-container">{children}</div>
    </div>
  );
};

export default MainLayout;

import { Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../layout/main";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Typography>حساب کاربری</Typography>
      <div className="social-contianer"></div>
    </MainLayout>
  );
};

export default Home;

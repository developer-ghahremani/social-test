import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./router";

const SocialTest: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default SocialTest;

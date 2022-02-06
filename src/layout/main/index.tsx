import { Home, Person, Settings } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import IBreadCrumbs from "../../components/general/IBreadCrumbs";
import Navbar from "./Navbar";

type Props = { children: React.ReactNode; title?: string };

const MainLayout = ({ children, title }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="main-body-container">
        <Typography>{title}</Typography>
        <IBreadCrumbs
          breadcrumbs={{ color: "gray", className: "my-2" }}
          links={[
            {
              title: "خانه",
              link: {
                href: "/",
                children: <Home className="text-size-3" />,
                fontSize: "small",
              },
            },
            {
              title: "کاربر",
              link: {
                href: "/",
                children: <Person className="text-size-3" />,
                fontSize: "small",
              },
            },
            {
              title: "تنظیمات حساب کاربری",

              link: {
                href: "/",
                color: "gray",
                children: <Settings htmlColor="gray" className="text-size-3" />,
                fontSize: "small",
              },
            },
          ]}
        />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

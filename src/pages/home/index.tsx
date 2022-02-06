import { PlusOne, Add } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Collapse,
} from "@mui/material";
import React, { useReducer } from "react";
import { IBox } from "../../components/general";
import MainLayout from "../../layout/main";
import { homeActions, homeInitialState, homeReducer } from "./context";

const Home: React.FC = () => {
  const [state, dispatch] = useReducer(homeReducer, homeInitialState);

  const toggleExpandabel = () => {
    dispatch({ type: homeActions.toggleExpand });
  };

  return (
    <MainLayout title="حساب کاربری">
      <div className="social-contianer">
        <p className="color-primary text-size-2">مسیر های ارتباطی</p>
        <IBox
          display="flex"
          alignItems="center"
          className="my-1"
          sx={{ cursor: "pointer" }}
          onClick={toggleExpandabel}>
          <Add className="color-brown" fontSize="small" />
          <p className="text-size-2 color-brown">افزودن مسیر ارتباطی</p>
        </IBox>
        <Collapse in={state.exanded}>
          <p>residm</p>
        </Collapse>
      </div>
    </MainLayout>
  );
};

export default Home;

import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import SocialTest from "./SocialTest";

const App: React.FC = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <SocialTest />
    </ThemeProvider>
  );
};

export default App;

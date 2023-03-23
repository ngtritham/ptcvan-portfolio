import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  </React.StrictMode>
);

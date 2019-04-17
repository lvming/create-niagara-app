import React, { FC } from "react";
import { HashRouter } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";
import theme from "./theme";

const Root: FC = function() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  );
};

export default Root;

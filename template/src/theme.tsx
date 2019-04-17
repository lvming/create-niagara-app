import { createMuiTheme, Theme } from "@material-ui/core";
import { blue, green, red } from "@material-ui/core/colors";

const theme: Theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blue,
    secondary: green,
    error: red,
  },
  typography: {
    fontFamily: '"Microsoft YaHei", Roboto, Arial, sans-serif;',
  },
  overrides: {
    MuiToolbar: {
      root: {
        minHeight: "auto",
      },
    },
  },
});

export default theme;

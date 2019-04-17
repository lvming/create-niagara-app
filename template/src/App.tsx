import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router";

import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import NavLinkButton from "./common/NavLinkButton";
import About from "./pages/About";
import Welcome from "./pages/Welcome";

const useStyles = makeStyles(
  {
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    nav: {
      marginLeft: "10em",
    },
    navLink: {
      "&.active": {
        background: "rgba(0, 0, 0, 0.4)",
      },
    },
    main: {
      "flex": 1,
      "position": "relative",
      "& > *": {
        width: "100%",
        height: "100%",
      },
    },
  },
  {
    name: "App",
  },
);

const App: FC = function(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6">Niagara App</Typography>
          <nav className={classes.nav}>
            <NavLinkButton to="/welcome" className={classes.navLink}>
              Welcome
            </NavLinkButton>
            <NavLinkButton to="/about" className={classes.navLink}>
              About
            </NavLinkButton>
          </nav>
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </div>
  );
};

export default hot(module)(App);

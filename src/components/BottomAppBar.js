import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import ScrollDialog from "./DialogBox";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));
export default function BottomAppBar() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          ></IconButton>

          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <ScrollDialog />
          </Fab>

          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </>
  );
}

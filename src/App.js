import React from "react";
import Mappy from "./components/Mappy";
import NavBar from "./components/styles/NavBar.js";
import BottomAppBar from "./components/styles/BottomAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Search from "./components/styles/SearchBar";

export default class App extends React.Component {
  render() {
    return (
      <>
        <CssBaseline />
        <NavBar />
        <div className="App">
          <Mappy />
        </div>
        <BottomAppBar />
      </>
    );
  }
}

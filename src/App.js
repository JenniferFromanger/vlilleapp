import React from "react";
import Navbar from "./components/NavBar";
import GpsIcon from "./components/icons/GpsIcon";
import ListIcon from "./components/icons/ListIcon";
import HeartIconClicked from "./components/icons/HeartIconClicked";
import HeartIcon from "./components/icons/HeartIcon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GpsIcon />
      <ListIcon />
      <HeartIconClicked />
      <HeartIcon />
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./components/NavBar";
import GpsIcon from "./components/icons/GpsIcon";
import ListIcon from "./components/icons/ListIcon";
import HeartIconClicked from "./components/icons/HeartIconClicked";
import HeartIcon from "./components/icons/HeartIcon";
import ParkingIcon from "./components/icons/ParkingIcon";
import BottomAppBar from "./components/BottomAppBar";
import MetroIcon from "./components/icons/MetroIcon";
import BusIcon from "./components/icons/BusIcon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GpsIcon />
      <ListIcon />
      <HeartIconClicked />
      <HeartIcon />
      <MetroIcon />
      <ParkingIcon />
      <BusIcon />
      <BottomAppBar />
    </div>
  );
}

export default App;

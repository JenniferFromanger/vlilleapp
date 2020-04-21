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
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./components/Theme";
import BikecycleIcon from "./components/icons/BikecycleIcon";
import CreditCard from "./components/icons/CreditCard";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <GpsIcon />
        <ListIcon />
        <HeartIconClicked />
        <HeartIcon />
        <MetroIcon />
        <ParkingIcon />
        <BusIcon />
        <BikecycleIcon />
        <CreditCard />
        <BottomAppBar />
      </ThemeProvider>
    </div>
  );
}

export default App;

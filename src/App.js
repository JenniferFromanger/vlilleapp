import React from "react";
import Mappy from "./components/Mappy";
import axios from "axios";
import BottomAppBar from "./components/BottomAppBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./components/List";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

export default function App() {
  const [stations, setStations] = useState([]);
  const [transports, setTransports] = useState([]);

  useEffect(() => {
    getVlilleLocalisation();
  }, []);

  const getVlilleLocalisation = () => {
    axios
      .get(
        "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&rows=244&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion"
      )
      .then((response) => response.data)
      .then((data) => {
        data.records.map((station) => {
          return distance(station);
        });
        setStations(data.records);
      });
    setTimeout(() => {
      getVlilleLocalisation();
    }, 2 * 1000 * 60);
  };

  useEffect(() => {
    getStationTramBus();
  }, []);

  const getStationTramBus = () => {
    axios
      .get(
        "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=ilevia-physicalstop&q=&rows=3667&facet=cityname&facet=transportmoderef&facet=publiclinecode"
      )
      .then((res) => {
        setTransports(res.data.records);
      });
  };

  const stationState = (station) => {
    const unavailable = "Indisponible";
    if (
      station.fields.etat === "OUT_OF_SERVICE" ||
      station.fields.etat === "EN MAINTENANCE" ||
      station.fields.etatconnexion === "DISCONNECTED" ||
      (station.fields.nbvelosdispo === 0 && station.fields.nbplacesdispo === 0)
    ) {
      return unavailable;
    }
  };

  const distance = (station) => {
    const departLat = 50.630943;
    const departLong = 3.060299;
    const result = Math.sqrt(
      (station.fields.localisation[0] - departLat) *
        111 *
        ((station.fields.localisation[0] - departLat) * 111) +
        (station.fields.localisation[1] - departLong) *
          70 *
          ((station.fields.localisation[1] - departLong) * 70)
    );
    station.distance = result.toFixed(3);
    return station;
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Mappy stations={stations} stationState={stationState} />
        </Route>
        <Route path="/list">
          <List
            transports={transports}
            stations={stations}
            stationState={stationState}
          />
        </Route>
      </Switch>

      <BottomAppBar />
    </Router>
  );
}

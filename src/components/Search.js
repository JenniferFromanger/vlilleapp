import React, { useState, useEffect } from "react";
import StationDetail from "./StationDetail";
import InputBase from "@material-ui/core/InputBase";
import useStyles from "./UseStyles";
//import MenuIcon from "@material-ui/icons/Menu";
//import SearchIcon from "@material-ui/icons/Search";

export default function Search(props) {
  const [stations, setStation] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredStations, setFilteredStations] = useState([]);
  const classes = useStyles();
  console.log(stations);
  useEffect(() => {
    setFilteredStations(
      stations.filter((station) =>
        station.fields.nom.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, stations]);

  return (
    <>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        type="text"
        placeholder="Search Stations"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredStations.map((station, id) => (
        <StationDetail key={id} {...station} />
      ))}
    </>
  );
}

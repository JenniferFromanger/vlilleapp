import { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { withLeaflet } from "react-leaflet";
import { geosearch } from "esri-leaflet-geocoder";

function Search(map) {
  const control = geosearch();
  control.addto(map);
}

export default withLeaflet(Search);

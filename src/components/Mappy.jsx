import React from "react";
import "./Mappy.scss";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import LocateControl from "./geo-local";
import Cb from "../icons/Cb";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import SettingsInputCompositeIcon from "@material-ui/icons/SettingsInputComposite";
import {
  iconeEmpty,
  iconeGrey,
  iconeFull,
  iconeHalf,
  iconeQuarter,
  iconeTroisQuart,
} from "./styles/Icon";

export default function Mappy({ stations, stationState }) {
  const changeIcon = (station) => {
    const percentage =
      station.fields.nbvelosdispo /
      (station.fields.nbvelosdispo + station.fields.nbplacesdispo);
    if (
      (station.fields.nbvelosdispo === 0 &&
        station.fields.nbplacesdispo === 0) ||
      station.fields.etatconnexion === "DISCONNECTED" ||
      station.fields.etat === "OUT_OF_SERVICE" ||
      station.fields.etat === "EN MAINTENANCE"
    ) {
      return iconeGrey;
    }

    if (percentage === 0) {
      return iconeEmpty;
    }
    if (percentage > 0 && percentage <= 0.25) {
      return iconeQuarter;
    }
    if (percentage > 0.25 && percentage <= 0.5) {
      return iconeHalf;
    }
    if (percentage > 0.5 && percentage <= 0.75) {
      return iconeTroisQuart;
    } else {
      return iconeFull;
    }
  };

  const locateOptions = {
    // for geo-locater//
    position: "topleft", // for geo-locater//
    strings: {
      title: "your location", // for geo-locater//
    },

    onActivate: () => {}, // for geo-locater//
  };

  return (
    <Map center={[50.62925, 3.057256]} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {stations.map((station) => {
        return (
          <Marker
            className="marker"
            key={station.fields.libelle}
            position={[
              station.fields.localisation[0],
              station.fields.localisation[1],
            ]}
            icon={changeIcon(station)}
          >
            {!stationState(station) && (
              <Popup
                key={station.fields.libelle}
                position={[
                  station.fields.localisation[0],
                  station.fields.localisation[1],
                ]}
              >
                <div class="wrapper">
                  <h2>{station.fields.nom}</h2>
                  <div class="cb">
                    <p>{station.fields.type === "AVEC TPE" && <Cb />}</p>
                  </div>
                  <div class="wrap2">
                    <p class="info">
                      {station.fields.nbvelosdispo}
                      <span>
                        <DirectionsBikeIcon class="icon" />
                      </span>
                    </p>
                  </div>
                  <p class="legend">Nombre de vélos</p>
                  <div class="wrap2">
                    <p class="info">
                      {station.fields.nbplacesdispo}
                      <span>
                        <SettingsInputCompositeIcon class="icon" />
                      </span>
                    </p>
                  </div>
                  <p class="legend">Nombre de places</p>
                </div>
              </Popup>
            )}
          </Marker>
        );
      })}
      <LocateControl options={locateOptions} />
    </Map>
  );
}

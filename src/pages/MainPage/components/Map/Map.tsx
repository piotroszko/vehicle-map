import React, { useCallback, useState, useContext } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerClusterer,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import useVehicleData from "./../../../../hooks/useVehicles";
import CarOn from "./carOn.png";
import CarOff from "./carOff.png";
import Popup from "../Popup/Popup";
import { filterContext } from "./../../../../contexts/FilterContextProvider";

const containerStyle = {
  width: "70vw",
  height: "95vh",
};

const Map = () => {
  let filters = useContext(filterContext);
  const { vehicles } = useVehicleData();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAs69i9DYgh2m5lQnAEdNZLY8taTr32JoY",
  });

  const [clickedMarker, setClickedMarker] = useState("");
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: 52.22977,
        lng: 21.01178,
      }}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      <MarkerClusterer maxZoom={15}>
        {(clusterer) =>
          vehicles
            .filter((v) => {
              if (filters.available !== "")
                return filters.available.toUpperCase() === v.status;
              else return true;
            })
            .filter((v) => filters.batteryLevelPct <= v.batteryLevelPct)
            .map((vehicle) => (
              <Marker
                key={vehicle.id}
                clusterer={clusterer}
                icon={vehicle.status === "AVAILABLE" ? CarOn : CarOff}
                onClick={() => {
                  setClickedMarker(vehicle.id);
                }}
                position={{
                  lat: vehicle.location.latitude,
                  lng: vehicle.location.longitude,
                }}>
                {clickedMarker === vehicle.id ? (
                  <InfoWindow
                    onCloseClick={() => {
                      setClickedMarker("");
                    }}>
                    <Popup marker={vehicle}></Popup>
                  </InfoWindow>
                ) : (
                  ""
                )}
              </Marker>
            ))
        }
      </MarkerClusterer>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;

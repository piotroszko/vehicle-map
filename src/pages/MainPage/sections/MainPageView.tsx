import React from "react";
import Filter from "../components/Filter/Filter";
import Map from "../components/Map/Map";

const MainPageView = () => {
  return (
    <div className="view">
      <Map></Map>
      <Filter></Filter>
    </div>
  );
};

export default MainPageView;

import React from "react";
import useVehicleInfo from "./../../../../hooks/useVehicleInfo";
import "./Popup.css";

type Props = {
  marker: any;
};
const Popup = ({ marker }: Props) => {
  const { info } = useVehicleInfo(marker.id);
  return info && info["picture"] && info["tariff"] ? (
    <div className="popup">
      <div className="info">
        <div className="battery">
          <p className="percent">{marker.batteryLevelPct.toString() + "%"}</p>
          <p className="km">{marker.rangeKm.toString() + "km"}</p>
          <div
            className="fill"
            style={{ width: marker.batteryLevelPct.toString() + "%" }}></div>
        </div>
        <div className="tariff">
          <p>{info && info["tariff"] ? info["tariff"]["name"] : ""}</p>
          <p>{info && info["tariff"] ? info["tariff"]["description"] : ""}</p>
        </div>
      </div>
      <div className="car">
        <div className="carInfo">
          <div className="plate">
            {" "}
            <div></div>
            <p>{marker.platesNumber}</p>
          </div>
          <div className="brandModel">
            <p>{info ? info["year"] : ""}</p>
            <p>|</p>
            <p>{info ? info["brand"] : ""}</p>
            <p>|</p>
            <p>{info ? info["model"] : ""}</p>
          </div>
        </div>
        <img
          alt=""
          src={
            "https://android.jrotor.com/api/attachments/" +
            (info && info["picture"] ? info["picture"]["id"] : "")
          }></img>
      </div>
    </div>
  ) : (
    <div> Dane nie zostały poprawnie wczytane dla wybrnaego pojazdu. </div>
  );
};

export default Popup;

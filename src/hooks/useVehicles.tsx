import { useState, useEffect } from "react";
import axios from "axios";

export default function useVehicles() {
  const [loading, setLoaded] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    if (loading) fetchVehicles();
  }, [loading]);
  const fetchVehicles = () => {
    try {
      axios
        .get("api/map?objectType=VEHICLE")
        .then((result: any): any => {
          setLoaded(false);
          setVehicles(result.data.objects);
        })
        .catch((err) => {
          console.log(` Error on GET VEHICLES REQUEST: ${err.message} `);
        });
    } catch (err) {
      console.log(` Error on GET VEHICLES REQUEST: ${err} `);
    }
  };
  return { vehicles };
}

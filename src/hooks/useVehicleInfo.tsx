import { useEffect, useState } from "react";
import axios from "axios";
export default function useVehicleInfo(id: string) {
  const [loading, setLoaded] = useState(true);
  const [info, setInfo] = useState();
  useEffect(() => {
    if (loading) fetchVehicle();
  }, [loading]);
  const fetchVehicle = () => {
    console.log(id);
    axios
      .get("api/vehicles/" + id)
      .then((result) => {
        setLoaded(false);
        setInfo(result.data);
      })
      .catch((err) => {
        console.log(` Error on GET VEHICL ID: ${id} REQUEST: ${err.message}`);
      });
  };
  return { info };
}

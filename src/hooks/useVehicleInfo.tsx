import React, { useEffect, useState } from "react";
import axios from "axios";
const infos = [
  {
    discriminator: "vehicle_details",
    year: 2021,
    brand: "Enigma",
    model: "Python Van",
    driverLicenceCategory: "B",
    mapColor: {
      rgb: "ffffff",
      alpha: 0.5,
    },
    promotions: [],
    tariff: {
      id: "00000000-0000-0000-0005-000000000003",
      name: "Taryfa Van STD",
      description: "Taryfa Panek - Van STD",
    },
    distance: "",
    id: "00000000-0000-0000-0005-000000000003",
    name: "Enigma Python Van",
    description: null,
    location: {
      latitude: 52.1935161702226,
      longitude: 20.9304286193486,
    },
    metadata: null,
    platesNumber: "WZPV001",
    sideNumber: "Z3-PVAN-01",
    color: "White",
    type: "TRUCK",
    picture: {
      id: "e7ace1de-ab7f-4120-922d-23441a041bd9",
      name: "e7ace1de-ab7f-4120-922d-23441a041bd9",
      extension: null,
      contentType: null,
    },
    rangeKm: 193,
    batteryLevelPct: 98,
    reservationEnd: null,
    reservation: null,
    status: "AVAILABLE",
    locationDescription: null,
    address: null,
    promotion: null,
  },
  {
    discriminator: "vehicle_details",
    year: 2021,
    brand: "Nissan",
    model: "Leaf White",
    driverLicenceCategory: "B",
    mapColor: {
      rgb: "ffffff",
      alpha: 0.5,
    },
    promotions: [],
    tariff: {
      id: "00000000-0000-0000-0005-000000000001",
      name: "Taryfa Leaf STD",
      description: "Taryfa Panek - Leaf STD",
    },
    distance: "",
    id: "00000000-0000-0000-0005-000000000001",
    name: "Nissan Leaf White",
    description: null,
    location: {
      latitude: 52.193275,
      longitude: 20.930372,
    },
    metadata: null,
    platesNumber: "WZ8748W",
    sideNumber: "Z1-WH-01",
    color: "White",
    type: "CAR",
    picture: {
      id: "9818875c-9e8b-4dc5-98ae-5909a8d632e2",
      name: "9818875c-9e8b-4dc5-98ae-5909a8d632e2",
      extension: null,
      contentType: null,
    },
    rangeKm: 134,
    batteryLevelPct: 86,
    reservationEnd: null,
    reservation: null,
    status: "AVAILABLE",
    locationDescription: null,
    address: null,
    promotion: null,
  },
  {
    discriminator: "vehicle_details",
    year: 2021,
    brand: "Enigma",
    model: "Python Car",
    driverLicenceCategory: "B",
    mapColor: { rgb: "ffffff", alpha: 0.5 },
    promotions: [],
    tariff: {
      id: "00000000-0000-0000-0005-000000000004",
      name: "Taryfa Car STD",
      description: "Taryfa Panek - Car STD",
    },
    distance: "",
    id: "00000000-0000-0000-0005-000000000004",
    name: "Enigma Python Car",
    description: null,
    location: { latitude: 52.193891367697, longitude: 20.930564789789 },
    metadata: null,
    platesNumber: "WZPC001",
    sideNumber: "Z4-PCAR-01",
    color: "White",
    type: "CAR",
    picture: {
      id: "61133b4c-2e9b-4da9-b22c-009baad8eadd",
      name: "61133b4c-2e9b-4da9-b22c-009baad8eadd",
      extension: null,
      contentType: null,
    },
    rangeKm: 193,
    batteryLevelPct: 98,
    reservationEnd: null,
    reservation: null,
    status: "AVAILABLE",
    locationDescription: null,
    address: null,
    promotion: null,
  },
];
export default function useVehicleInfo(id: string) {
  const [info, setInfo] = useState(infos.find((x) => x.id === id));
  useEffect(() => {
    fetchVehicle();
  });
  const fetchVehicle = () => {
    // axios.get("https://android.jrotor.com/api/vehicles/" + id)
    //   .then((result) => {
    //     setInfo(result.data);
    //   })
    //   .catch((err) => {
    //     console.log(` Error on GET VEHICL ID: ${ id } REQUEST: ${ err.message }`);
    //   });
  };
  return { info };
}

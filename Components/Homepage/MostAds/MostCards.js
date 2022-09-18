import { async } from "@firebase/util";
import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { Netherlands } from "../../../netherlands";
import MostCard from "./MostCard";

const MostCards = () => {
  const [houses, setHouses] = useState([]);
  const [Vehicles, setVehicles] = useState([]);

  const firstCategory = "For Sale";
  const secondCategory = "For Rent";
  const thirdCategory = "Automobile";
  const forthCategory = "SUV";
  var cities = {};
  var brands = {};

  useEffect(() => {
    onSnapshot(query(collection(db, "houses")), (snapshot) => {
      setHouses(snapshot.docs);
    });
    onSnapshot(query(collection(db, "Vehicles")), (snapshot) => {
      setVehicles(snapshot.docs);
    });
  }, [db]);

  houses
    .map((house) => house.data().Municipality)
    .forEach((x) => {
      cities[x] = (cities[x] || 0) + 1;
    });
  let sortedCities = [];
  sortedCities = Object.entries(cities).sort((a, b) => b[1] - a[1]);

  Vehicles.map((vehicle) => vehicle.data().Brand).forEach((x) => {
    brands[x] = (brands[x] || 0) + 1;
  });

  let sortedBrands = [];
  sortedBrands = Object.entries(brands).sort((a, b) => b[1] - a[1]);
  return (
    <div className="px-2 mb-8 min-w-screen overflow-hidden">
      <div className="mb-10 w-[100vw] pr-10 flex items-center space-x-4 overflow-hidden overflow-x-scroll scrollbar-hide">
        {sortedCities.slice(0, 10).map((i) => (
          <MostCard
            Title={i[0]}
            Secondary={Netherlands.find((city) => city.city == i[0])?.Province}
            totalNumber={i[1]}
            firstCategory={firstCategory}
            firstNumber={
              houses
                .filter((house) => house.data().Municipality == i[0])
                .filter((house) => house.data().RentOrSale == firstCategory)
                .length
            }
            secondCategory={secondCategory}
            secondNumber={
              houses
                .filter((house) => house.data().Municipality == i[0])
                .filter((house) => house.data().RentOrSale == secondCategory)
                .length
            }
            imageUrl={Netherlands.find((city) => city.city == i[0])?.image_url}
          />
        ))}
      </div>
      <div className="pr-10 w-[100vw] flex items-center space-x-4 overflow-hidden overflow-x-scroll scrollbar-hide">
        {sortedBrands.slice(0, 10).map((i) => (
          <MostCard
            Title={i[0]}
            Secondary={Netherlands.find((city) => city.city == i[0])?.Province}
            totalNumber={i[1]}
            firstCategory={thirdCategory}
            firstNumber={
              Vehicles.filter((vehicle) => vehicle.data().Brand == i[0]).filter(
                (vehicle) => vehicle.data().GeneralCategory == thirdCategory
              ).length
            }
            secondCategory={forthCategory}
            secondNumber={
              Vehicles.filter((vehicle) => vehicle.data().Brand == i[0]).filter(
                (vehicle) => vehicle.data().GeneralCategory == forthCategory
              ).length
            }
            imageUrl={
              Vehicles.find((auto) => auto.data().Brand == i[0]).data()
                .ImageArray[0]
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MostCards;

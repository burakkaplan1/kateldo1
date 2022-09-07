import { collection, onSnapshot, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import RealEstateCard from "./RealEstateCard";
import VehicleCard from "./VehicleCard";

function AllCards() {
  const [houses, setHouses] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [currentShow, setCurrentShow] = useState(3);

  useEffect(() => {
    return onSnapshot(query(collection(db, "houses")), (snapshot) => {
      setHouses(snapshot.docs);
    });
  }, [db]);

  useEffect(
    () =>
      onSnapshot(query(collection(db, "Vehicles")), (snapshot) => {
        setVehicles(snapshot.docs);
      }),
    [db]
  );

  console.log(houses);
  console.log(vehicles);
  return (
    <div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 items-center justify-items-center md:px-1 lg:px-4">
        {houses.slice(0, currentShow).map((house) => (
          <RealEstateCard
            key={house.id}
            image={
              house.data().ImageURL
                ? house.data().ImageURL
                : house.data().ImageArray[4]
            }
            Price={house.data().Price}
            RentOrSale={house.data().RentOrSale}
            Province={house.data().Province}
            Municipality={house.data().Municipality}
            housealCode={house.data().housealCode}
            Street={house.data().Street}
            PlotSize={house.data().PlotArea}
            RoomNumber={house.data().NumberOfRoom}
            BedroomNumber={house.data().NumberOfBedroom}
            HouseType={house.data().HouseType}
          />
        ))}
        {vehicles.slice(0, currentShow).map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            image={
              vehicle.data().ImageURL
                ? vehicle.data().ImageURL
                : vehicle.data().ImageArray[0]
            }
            Price={vehicle.data().Price}
            VehicleType={vehicle.data().VehicleType}
            Brand={vehicle.data().Brand}
            Model={vehicle.data().Model}
            Kilometers={vehicle.data().Kilometer}
            GearType={vehicle.data().GearType}
            FuelType={vehicle.data().FuelType}
            Horsepower={vehicle.data().HorsePower}
            EngineSize={vehicle.data().EngineSize}
            Color={vehicle.data().Color}
            ModelYear={vehicle.data().ModelYear}
            Torque={vehicle.data().Torque}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-items-center justify-center space-x-6">
        {currentShow > 3 && (
          <button
            className="px-3 py-2 border-2 dark:text-white text-blue-800 border-blue-300 hover:bg-blue-500 hover:text-white"
            onClick={() => setCurrentShow(currentShow - 3)}
          >
            Show less
          </button>
        )}
        {currentShow <= 12 && (
          <button
            className="px-3 py-2 border-2 dark:text-white text-blue-800 border-blue-300 hover:bg-blue-500 hover:text-white"
            onClick={() => setCurrentShow(currentShow + 3)}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
}

export default AllCards;

import { collection, onSnapshot, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import HomepageCard from "./HomepageCard";

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

  function omit(key, obj) {
    const { [key]: omitted, ...rest } = obj;
    return Array(rest);
  }

  return (
    <div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 items-center justify-items-center md:px-1 lg:px-4">
        {houses.slice(0, currentShow).map((house) => (
          <HomepageCard
            key={house.id}
            cardType="RealEstate"
            image={
              house.data().ImageURL
                ? house.data().ImageURL
                : house.data().ImageArray[4]
            }
            Price={house.data().Price}
            RentOrSale={house.data().RentOrSale}
            firstItem={house.data().Province}
            secondItem={house.data().Municipality}
            thirdItem={house.data().Street}
            fourthItem={house.data().PostalCode}
            PlotSize={house.data().PlotArea}
            FloorSize={house.data().FloorArea}
            numberOfFloor={house.data().NumberOfFloor}
            RoomNumber={house.data().NumberOfRoom}
            BedroomNumber={house.data().NumberOfBedroom}
            LivingroomNumber={house.data().NumberOfLivingRoom}
          />
        ))}
        {vehicles.slice(0, currentShow).map((vehicle) => (
          <HomepageCard
            key={vehicle.id}
            cardType="Vehicle"
            image={
              vehicle.data().ImageURL
                ? vehicle.data().ImageURL
                : vehicle.data().ImageArray[0]
            }
            Price={vehicle.data().Price}
            VehicleType={vehicle.data().BodyType}
            firstItem={vehicle.data().Brand}
            secondItem={vehicle.data().Model}
            thirdItem={
              Intl.NumberFormat("nl-NL", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(vehicle.data().Kilometers) + " Km"
            }
            fourthItem={vehicle.data().GearType}
            GearType={vehicle.data().GearType}
            FuelType={vehicle.data().FuelType}
            EngineSize={vehicle.data().EngineDisplacement}
            Color={vehicle.data().ExteriorColor}
            ModelYear={vehicle.data().ModelYear}
            MaximumSpeed={vehicle.data().MaximumSpeed}
            EVRange={vehicle.data().ElectricRange}
            Horsepower={
              vehicle.data().EngineIncluded?.System &&
              vehicle.data().Power?.System?.HorsePower !== undefined
                ? vehicle.data().Power?.System?.HorsePower
                : Object.values(omit("System", vehicle.data().Power)[0])
                    .map((engine) => engine.HorsePower)
                    .filter((engine) => engine)
                    .reduce((accumulator, curr) => accumulator + curr)
            }
            Torque={
              vehicle.EngineIncluded?.System &&
              vehicle.data().Torque?.System?.Value !== undefined
                ? vehicle.data().Torque?.System?.Value
                : Object.values(omit("System", vehicle.data().Torque)[0])
                    .map((engine) => engine.Value)
                    .filter((engine) => engine !== undefined)
                    .reduce((accumulator, curr) => accumulator + curr)
            }
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

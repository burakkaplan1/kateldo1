import { onSnapshot, query, collection } from "firebase/firestore";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { db } from "../../../firebase";
import HomepageCard from "./HomepageCard";

function Highlighted(props) {
  const { t } = useTranslation();
  const [tab, setTab] = useState("All");
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
    <div className="px-2">
      <Tabs>
        <TabList>
          <Tab onClick={() => setTab("All")}>{t("All", { ns: "Common" })}</Tab>
          <Tab onClick={() => setTab("RealEstate")}>
            {t("RealEstate", { ns: "Common" })}
          </Tab>
          <Tab onClick={() => setTab("Vehicle")}>
            {t("Vehicles", { ns: "Common" })}
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 items-center justify-items-center md:px-1 lg:px-4">
            {houses.slice(0, currentShow).map((house) => (
              <HomepageCard
                key={house.id}
                id={house.id}
                cardType="realestate"
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
                BathroomNumber={house.data().NumberOfBathroom}
                EnergyLevel={house.data().EnergyLevel}
                LivingroomNumber={house.data().NumberOfLivingRoom}
              />
            ))}
            <>
              {vehicles.slice(0, currentShow).map((vehicle) => (
                <HomepageCard
                  key={vehicle.id}
                  id={vehicle.id}
                  cardType="vehicle"
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
                  fourthItem={vehicle.data().ModelYear}
                  GearType={vehicle.data().GearType}
                  FuelType={vehicle.data().FuelType}
                  EngineSize={vehicle.data().EngineDisplacement}
                  Color={vehicle.data().ExteriorColor}
                  InteriorColor={vehicle.data().InteriorColor}
                  MaximumSpeed={vehicle.data().MaximumSpeed}
                  EVRange={vehicle.data().ElectricRange}
                  Torque={
                    vehicle.EngineIncluded?.System &&
                    vehicle.data().Torque?.System?.Value !== undefined
                      ? vehicle.data().Torque?.System?.Value
                      : Object.values(omit("System", vehicle.data().Torque)[0])
                          .map((engine) => engine.Value)
                          .filter((engine) => engine !== undefined)
                          .reduce((accumulator, curr) => accumulator + curr)
                  }
                  Horsepower={
                    vehicle.data().EngineIncluded?.System &&
                    vehicle.data().Power?.System?.HorsePower !== undefined
                      ? vehicle.data().Power?.System?.HorsePower
                      : Object.values(omit("System", vehicle.data().Power)[0])
                          .map((engine) => engine.HorsePower)
                          .filter((engine) => engine)
                          .reduce((accumulator, curr) => accumulator + curr)
                  }
                />
              ))}
            </>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 items-center justify-items-center md:px-1 lg:px-4">
            {houses.slice(0, currentShow).map((house) => (
              <HomepageCard
                key={house.id}
                id={house.id}
                cardType="realestate"
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
                BathroomNumber={house.data().NumberOfBathroom}
                EnergyLevel={house.data().EnergyLevel}
                LivingroomNumber={house.data().NumberOfLivingRoom}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 items-center justify-items-center md:px-1 lg:px-4">
            {vehicles.slice(0, currentShow).map((vehicle) => (
              <HomepageCard
                key={vehicle.id}
                id={vehicle.id}
                cardType="vehicle"
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
                fourthItem={vehicle.data().ModelYear}
                GearType={vehicle.data().GearType}
                FuelType={vehicle.data().FuelType}
                EngineSize={vehicle.data().EngineDisplacement}
                Color={vehicle.data().ExteriorColor}
                InteriorColor={vehicle.data().InteriorColor}
                MaximumSpeed={vehicle.data().MaximumSpeed}
                EVRange={vehicle.data().ElectricRange}
                Torque={
                  vehicle.EngineIncluded?.System &&
                  vehicle.data().Torque?.System?.Value !== undefined
                    ? vehicle.data().Torque?.System?.Value
                    : Object.values(omit("System", vehicle.data().Torque)[0])
                        .map((engine) => engine.Value)
                        .filter((engine) => engine !== undefined)
                        .reduce((accumulator, curr) => accumulator + curr)
                }
                Horsepower={
                  vehicle.data().EngineIncluded?.System &&
                  vehicle.data().Power?.System?.HorsePower !== undefined
                    ? vehicle.data().Power?.System?.HorsePower
                    : Object.values(omit("System", vehicle.data().Power)[0])
                        .map((engine) => engine.HorsePower)
                        .filter((engine) => engine)
                        .reduce((accumulator, curr) => accumulator + curr)
                }
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>

      <div className="mt-2 flex items-center justify-items-center justify-center space-x-6">
        {currentShow > 3 && (
          <button
            className="px-3 py-2 border-2 dark:text-white text-blue-800 border-blue-300 hover:bg-blue-500 hover:text-white"
            onClick={() => setCurrentShow(currentShow - 3)}
          >
            {t("ShowLess", { ns: "Common" })}
          </button>
        )}
        {currentShow <= 12 && (
          <button
            className="px-3 py-2 border-2 dark:text-white text-blue-800 border-blue-300 hover:bg-blue-500 hover:text-white"
            onClick={() => setCurrentShow(currentShow + 3)}
          >
            {t("ShowMore", { ns: "Common" })}
          </button>
        )}
      </div>
    </div>
  );
}

export default Highlighted;

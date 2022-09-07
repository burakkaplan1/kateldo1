import AllVehicleCards from "./AllVehicleCards";
import VehicleSidebar from "./VehicleSidebar";
import { VehicleStates } from "./VehicleStates";
import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Vehicles = () => {
  return (
    <div>
      <VehicleStates>
        <div className="dark:bg-gray-900 flex justify-between gap-x-1 pb-10">
          <VehicleSidebar />
          <AllVehicleCards />
        </div>
      </VehicleStates>
    </div>
  );
};

export default Vehicles;
